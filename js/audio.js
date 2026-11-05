/* ============================================================
   KENJI'S BIZARRE PORTFOLIO — AUDIO ENGINE
   Système audio complet JoJo's Bizarre Adventure / All-Star Battle R
   - Musique de fond aléatoire avec enchaînement automatique & bouton Next
   - Contrôles indépendants BGM / SFX (Volume + On/Off)
   - Prise en charge des fichiers WAV SFX et répliques cultes
   - Sans interruption lors de la navigation
   ============================================================ */

const Sound = (() => {
  // Stockage local persistant
  const store = {
    get(k, d) {
      try { const v = localStorage.getItem(k); return v === null ? d : v; } catch { return d; }
    },
    set(k, v) {
      try { localStorage.setItem(k, v); } catch { /* ignore */ }
    },
  };

  // État BGM et SFX indépendants (Défaut : Musique à 19%, SFX à 35%)
  let bgmOn = store.get("kbp-bgm", "1") === "1";
  let sfxOn = store.get("kbp-sfx", "1") === "1";
  let bgmVolume = Math.min(1, Math.max(0, Number(store.get("kbp-bgm-vol", 0.19)) || 0.19));
  let sfxVolume = Math.min(1, Math.max(0, Number(store.get("kbp-sfx-vol", 0.35)) || 0.35));

  /* ------------------------------------------------------------
     PLAYLIST MUSICALE (All-Star Battle R & Thèmes JoJo)
     ------------------------------------------------------------ */
  const TRACKS = [
    { id: "opening", title: "Opening (Menu Theme)", file: "assets/audio/music/opening.mp3" },
    { id: "ode", title: "Ode to Humanity", file: "assets/audio/music/ode-to-humanity.mp3" },
    { id: "room", title: "Come into my room...", file: "assets/audio/music/come-into-my-room.mp3" },
    { id: "cinderella", title: "Cinderella's Impeccable Taste", file: "assets/audio/music/cinderellas-impeccable-taste.mp3" },
    { id: "luck", title: "LUCK & PLUCK (Jonathan Joestar)", file: "assets/audio/music/luck-and-pluck.mp3" },
    { id: "risotto", title: "I Have My Own Way (Risotto Nero)", file: "assets/audio/music/risotto-nero-theme.mp3" },
    { id: "jolyne", title: "I Want to Watch the Starlight (Jolyne Cujoh)", file: "assets/audio/music/jolyne-cujoh-theme.mp3" },
    { id: "weather", title: "Torrential Downpour Warning (Weather Report)", file: "assets/audio/music/weather-report-theme.mp3" },
    { id: "diego", title: "Hungry! (Diego Brando)", file: "assets/audio/music/diego-brando-theme.mp3" },
  ];

  let currentTrackIndex = -1;
  let bgmAudio = null;
  let trackListeners = [];

  /* ------------------------------------------------------------
     EFFETS SONORES & RÉPLIQUES JOJO (WAV)
     ------------------------------------------------------------ */
  const SFX_MAP = {
    // Menu officiel All-Star Battle R
    cursol: "assets/audio/sfx/0-S_menu_cursol.wav",
    cursol2: "assets/audio/sfx/23-S_menu_cursol2.wav",
    fix: "assets/audio/sfx/1-S_menu_fix.wav",
    cancel: "assets/audio/sfx/2-S_menu_cancel.wav",
    window1: "assets/audio/sfx/3-S_menu_window1.wav",
    window2: "assets/audio/sfx/4-S_menu_window2.wav",
    error: "assets/audio/sfx/5-S_menu_error.wav",

    // Voix et répliques JoJo
    nyoho: "assets/audio/sfx/ahah nyoho.wav",
    crazydio: "assets/audio/sfx/Crazy DIO.wav",
    diavolo: "assets/audio/sfx/Diavolo.wav",
    dojyan: "assets/audio/sfx/DOJYAN.wav",
    kars: "assets/audio/sfx/Guitard Kars.wav",
    metallica: "assets/audio/sfx/METALLICAAA.wav",
    muda: "assets/audio/sfx/MUDA MUDA MUDA.wav",
    ora: "assets/audio/ORA ORA ORA jotaro.wav",
    mukatte: "assets/audio/sfx/mukatte kuru no ka.wav",
    nigurendayo: "assets/audio/sfx/NIGURENDAYOOO.wav",
    toki: "assets/audio/sfx/Toki wa ugoki dasu.wav",
    yareyare: "assets/audio/sfx/Yare Yare Daze.wav",
    zahando: "assets/audio/sfx/Za hando Za warudo.wav",
  };

  // Préchargement et cache des instances audio SFX pour zéro latence
  const sfxCache = {};
  let lastSfxTimes = {};

  function preloadSfx() {
    Object.keys(SFX_MAP).forEach((key) => {
      try {
        const a = new Audio();
        a.preload = "auto";
        a.src = SFX_MAP[key];
        sfxCache[key] = a;
      } catch (e) {
        // En cas d'environnement restreint
      }
    });
  }

  // Initialisation paresseuse de l'AudioContext pour les micro-bips Web Audio de survol
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  /* ------------------------------------------------------------
     GESTION DU LECTEUR BGM
     ------------------------------------------------------------ */
  function initBgmAudio() {
    if (bgmAudio) return bgmAudio;
    bgmAudio = new Audio();
    bgmAudio.preload = "auto";
    bgmAudio.volume = bgmVolume;

    // Enchaînement automatique : quand un morceau se termine, sélectionner aléatoirement un autre
    bgmAudio.addEventListener("ended", () => {
      playNextRandomTrack();
    });

    // Gestion propre des erreurs de chargement
    bgmAudio.addEventListener("error", (e) => {
      console.warn("Erreur lecture BGM:", e);
    });

    return bgmAudio;
  }

  function pickRandomIndex(avoidIndex = -1) {
    if (TRACKS.length <= 1) return 0;
    let next;
    do {
      next = Math.floor(Math.random() * TRACKS.length);
    } while (next === avoidIndex);
    return next;
  }

  function playTrack(index) {
    initBgmAudio();
    currentTrackIndex = (index + TRACKS.length) % TRACKS.length;
    const track = TRACKS[currentTrackIndex];

    bgmAudio.src = track.file;
    bgmAudio.volume = bgmVolume;

    notifyTrackChange();

    if (bgmOn) {
      bgmAudio.play().catch((err) => {
        // Politique d'autoplay du navigateur : nécessite une interaction utilisateur
        console.log("Lecture en attente d'interaction utilisateur");
      });
    }
  }

  function playNextRandomTrack() {
    const nextIndex = pickRandomIndex(currentTrackIndex);
    playTrack(nextIndex);
  }

  function startBgm() {
    bgmOn = true;
    store.set("kbp-bgm", "1");
    initBgmAudio();

    if (currentTrackIndex === -1) {
      // La première musique au chargement est TOUJOURS "01. All-Star Battle R / Opening (menu theme)"
      currentTrackIndex = 0;
      playTrack(currentTrackIndex);
    } else {
      bgmAudio.volume = bgmVolume;
      bgmAudio.play().catch(() => {});
    }
    notifyTrackChange();
    return true;
  }

  function stopBgm() {
    bgmOn = false;
    store.set("kbp-bgm", "0");
    if (bgmAudio) {
      bgmAudio.pause();
    }
    notifyTrackChange();
  }

  function setBgmVolume(v) {
    bgmVolume = Math.min(1, Math.max(0, Number(v) || 0));
    store.set("kbp-bgm-vol", String(bgmVolume));
    if (bgmAudio) {
      bgmAudio.volume = bgmVolume;
    }
  }

  function setSfxVolume(v) {
    sfxVolume = Math.min(1, Math.max(0, Number(v) || 0));
    store.set("kbp-sfx-vol", String(sfxVolume));
  }

  function setSfx(on) {
    sfxOn = !!on;
    store.set("kbp-sfx", sfxOn ? "1" : "0");
  }

  function notifyTrackChange() {
    const info = currentTrackInfo();
    trackListeners.forEach((fn) => {
      try { fn(info); } catch (e) { /* ignore */ }
    });
  }

  function currentTrackInfo() {
    if (currentTrackIndex < 0 || currentTrackIndex >= TRACKS.length) {
      return { id: "none", title: "En attente...", isPlaying: false };
    }
    const t = TRACKS[currentTrackIndex];
    const isPlaying = bgmAudio ? !bgmAudio.paused : false;
    return { ...t, isPlaying: bgmOn && isPlaying };
  }

  function onTrackChange(fn) {
    trackListeners.push(fn);
  }

  /* ------------------------------------------------------------
     LECTURE DES SFX
     ------------------------------------------------------------ */
  function playSfx(key, volMultiplier = 1.0, minIntervalMs = 50) {
    if (!sfxOn) return;
    const now = Date.now();
    if (lastSfxTimes[key] && now - lastSfxTimes[key] < minIntervalMs) {
      return; // Anti-saturation / debounce
    }
    lastSfxTimes[key] = now;

    const file = SFX_MAP[key];
    if (!file) return;

    try {
      const audio = new Audio(file);
      audio.volume = Math.min(1, Math.max(0, sfxVolume * volMultiplier));
      audio.play().catch(() => {});
    } catch (e) {
      // Ignorer
    }
  }

  // Déplacement du curseur dans les menus (All-Star Battle R)
  function select() {
    playSfx("cursol", 0.9, 40);
  }

  // Déplacement secondaire / sous-sélection (All-Star Battle R)
  function selectSub() {
    playSfx("cursol2", 0.9, 40);
  }

  // Validation / Fixation du choix dans le menu (All-Star Battle R)
  function confirm() {
    playSfx("fix", 1.0, 60);
  }

  function window1() {
    playSfx("window1", 1.0, 70);
  }

  function window2() {
    playSfx("window2", 1.0, 70);
  }

  function back() {
    playSfx("cancel", 1.0, 70);
  }

  function cancel() {
    playSfx("cancel", 1.0, 70);
  }

  function error() {
    playSfx("error", 1.1, 100);
  }

  function voice(name) {
    if (SFX_MAP[name]) {
      playSfx(name, 1.0, 300);
    }
  }

  // Grondement / Menace (utilisé lors de certaines transitions de menus)
  function menace() {
    if (!sfxOn) return;
    playSfx("window2", 0.8, 150);
  }

  // Barrage (ORA / MUDA)
  function barrage() {
    if (!sfxOn) return;
    playSfx("muda", 1.0, 300);
  }

  // Initialisation générale
  preloadSfx();

  return {
    ensure: getAudioContext,
    startBgm,
    stopBgm,
    nextTrack: playNextRandomTrack,
    playTrack,
    setBgmVolume,
    setSfxVolume,
    setSfx,
    onTrackChange,
    getCurrentTrack: currentTrackInfo,

    // Effets sonores
    select,
    selectSub,
    confirm,
    window1,
    window2,
    back,
    cancel,
    error,
    voice,
    menace,
    barrage,

    // Getters d'état
    get bgmOn() { return bgmOn; },
    get sfxOn() { return sfxOn; },
    get bgmVolume() { return bgmVolume; },
    get sfxVolume() { return sfxVolume; },
    get currentTrackTitle() {
      return (TRACKS[currentTrackIndex] && TRACKS[currentTrackIndex].title) || "JoJo Theme";
    },
    wantsBgm() { return bgmOn; }
  };
})();
