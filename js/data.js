/* ============================================================
   KENJI'S BIZARRE PORTFOLIO — données
   Tout le contenu du site est ici : modifier ce fichier suffit
   pour mettre à jour le portfolio.
   ============================================================ */

const IMG = "assets/img/";
const DOC = "assets/docs/";

const PROFILE = {
  firstName: "Kenji",
  lastName: "Chapuis--Voisain",
  title: "Étudiant BTS SIO — option SLAM (2e année)",
  email: "k.voisain@gmail.com",
  phone: "06 23 02 75 18",
  cv: DOC + "cv-kenji-chapuis-voisain.pdf",
  photo: IMG + "kenji.webp",
  hero: IMG + "manga-hero.webp",
  face: IMG + "manga-face.webp",
  tall: IMG + "manga-tall.webp",
  stand: "Virtual Insanity",
};

/* ---------- MENU PRINCIPAL ---------- */
const MENU = [
  { route: "about",     label: "À PROPOS",     jp: "スタンド使い", size: 1.00, skew: -6, skewY: 8,  dx: 0 },
  { route: "cv",        label: "CV",           jp: "ステータス",   size: 1.10, skew: -11, skewY: -8, dx: 40 },
  { route: "projets",   label: "PROJETS",      jp: "ミッション",   size: 0.96, skew: 0,  skewY: -4, dx: 14 },
  { route: "experiences", label: "EXPÉRIENCES", jp: "パート",      size: 0.80, skew: -3, skewY: 5,  dx: 26 },
  { route: "certifs",   label: "CERTIFS",      jp: "トロフィー",   size: 0.92, skew: -7, skewY: -6, dx: 6 },
  { route: "veille",    label: "VEILLE TECH",  jp: "スピードワゴン財団", size: 0.78, skew: -4, skewY: 7, dx: 30 },
  { route: "passions",  label: "PASSIONS",     jp: "奇妙な趣味",   size: 0.94, skew: -9, skewY: -5, dx: 4 },
  { route: "contact",   label: "CONTACT",      jp: "連絡",        size: 0.90, skew: -2, skewY: 6,  dx: 22 },
];

/* ---------- À PROPOS (style « About me » + révélation) ---------- */
const ABOUT = [
  {
    label: "STAND USER",
    tag: "PROFIL",
    img: IMG + "manga-tall.webp",
    pos: "50% 30%",
    upper: [
      "Nom : Kenji Chapuis--Voisain",
      "Âge : 20 ans (né le 22 mai 2006)",
      "Base : Grand Besançon · Télétravail",
    ],
    lower: "étudiant bts sio — option slam (2e année)",
  },
  {
    label: "FORMATION",
    tag: "ÉCOLE",
    img: IMG + "stand-virtual-insanity.webp", imgPos: "50% 0%",
    pos: "50% 55%",
    upper: [
      "Lycée Louis Pergaud — Besançon",
      "BTS SIO option SLAM (2025 → 2027)",
      "Bac Général spécialité NSI (2024)",
    ],
    lower: "python | php 8 | javascript | sql | html / css",
  },
  {
    label: "OBJECTIF",
    tag: "QUÊTE",
    img: IMG + "manga-face.webp",
    pos: "50% 75%",
    upper: [
      "Passionné par le développement web & logiciel,",
      "la sécurité des systèmes et la modélisation 3D.",
    ],
    lower: "stage sio2 recherché : 1er mars → 10 avril 2027",
  },
];

/* ---------- CV (style « Resume » : cartes + panneau détail) ---------- */
const STAND_STATS = [
  { k: "PUISSANCE", v: "A", n: 5 },   // dev back-end
  { k: "VITESSE", v: "A", n: 5 },     // autoformation
  { k: "PORTÉE", v: "B", n: 4},      // web / 3D / sécu
  { k: "PERSISTANCE", v: "A", n: 5 }, // 5 ans de budo
  { k: "PRÉCISION", v: "B", n: 4 },   // rigueur 3D
  { k: "POTENTIEL", v: "A", n: 5 },
];

const CV = [
  {
    badge: "I", title: "STAND", subtitle: "「VIRTUAL INSANITY — Kenji Chapuis--Voisain", rank: "A",
    head: "FICHE DE STAND", progress: "6/6",
    radar: true,
    rows: STAND_STATS.map((s, i) => ({ index: "0" + (i + 1), title: s.k, status: s.v })),
    bulletsTitle: "CAPACITÉ",
    bullets: [
      "Transforme un cahier des charges en application web propre, sécurisée et documentée.",
      "Puissance B : PHP 8 / MySQL · Vitesse A : capacité d'autoformation.",
      "Persistance A : 5 ans de Yoseikan Budo — discipline et sang-froid.",
    ],
  },
  {
    badge: "II", title: "FORMATION", subtitle: "Lycée Louis Pergaud / Besançon", rank: "B",
    head: "PARCOURS SCOLAIRE", progress: "3/4",
    rows: [
      { index: "01", title: "BTS SIO option SLAM", status: "2025-2027" },
      { index: "02", title: "Bac Général — spécialité NSI", status: "2024" },
      { index: "03", title: "Brevet — Collège Notre Dame", status: "2021" },
    ],
    bulletsTitle: "DÉTAILS",
    bullets: [
      "SLAM : Solutions Logicielles et Applications Métiers.",
      "Lycée Louis Pergaud, Besançon — 2e année en cours.",
    ],
  },
  {
    badge: "III", title: "LANGAGES", subtitle: "PHP 8 / JavaScript / Python / SQL", rank: "B",
    head: "LANGAGES & WEB", progress: "5/5",
    rows: [
      { index: "01", title: "PHP 8 / MySQL", status: "Back" },
      { index: "02", title: "JavaScript (Vanilla ES6+)", status: "Front" },
      { index: "03", title: "Python (POO, Pygame)", status: "Logique" },
      { index: "04", title: "HTML5 / CSS3 (Grid, Flexbox)", status: "UI" },
      { index: "05", title: "SQL (requêtes, jointures, BDD)", status: "Data" },
    ],
    bulletsTitle: "DÉTAILS",
    bullets: [
      "Glassmorphism, animations CSS, sélecteur :has().",
      "Conception de bases de données relationnelles.",
    ],
  },
  {
    badge: "IV", title: "OUTILS", subtitle: "WordPress / Git / SketchUp Pro", rank: "A",
    head: "CMS, OUTILS & VERSIONS", progress: "6/6",
    rows: [
      { index: "01", title: "WordPress, Elementor, MotoPress", status: "CMS" },
      { index: "02", title: "Git / GitHub", status: "Versions" },
      { index: "03", title: "Visual Studio Code", status: "IDE" },
      { index: "04", title: "phpMyAdmin, SFTP (FileZilla)", status: "Serveur" },
      { index: "05", title: "SketchUp Pro (modélisation 3D)", status: "3D" },
      { index: "06", title: "Microsoft Office / LibreOffice", status: "Bureau" },
    ],
    bulletsTitle: "DÉTAILS",
    bullets: ["Déploiement SFTP sur hébergement mutualisé OVH.", "Plus de 15 structures métalliques modélisées en 3D."],
  },
  {
    badge: "V", title: "SÉCURITÉ", subtitle: "Luhn / Regex / RGPD / ANSSI", rank: "C",
    head: "SÉCURITÉ & BONNES PRATIQUES", progress: "4/4",
    rows: [
      { index: "01", title: "Algorithme de Luhn (contrôle CB)", status: "JS + PHP" },
      { index: "02", title: "Assainissement des données (Regex)", status: "Input" },
      { index: "03", title: "Conformité RGPD (CNIL)", status: "6 modules" },
      { index: "04", title: "Sensibilisation cybersécurité", status: "ANSSI" },
    ],
    bulletsTitle: "DÉTAILS",
    bullets: ["Protection CSRF / Nonces, requêtes préparées.", "Privacy by Design dès la conception."],
  },
  {
    badge: "VI", title: "LANGUES", subtitle: "Français / Anglais B1 / Espagnol / Russe", rank: "B",
    head: "LANGUES & ATOUTS", progress: "4/4",
    rows: [
      { index: "01", title: "Français", status: "Natif" },
      { index: "02", title: "Anglais (documentation technique)", status: "B1" },
      { index: "03", title: "Espagnol", status: "Notions" },
      { index: "04", title: "Russe", status: "Notions" },
    ],
    bulletsTitle: "QUALITÉS",
    bullets: [
      "Rigueur logique et esprit d'analyse.",
      "Autoformation et adaptabilité.",
      "Curiosité technique et veille active.",
      "Esprit d'équipe et sens du service client.",
    ],
  },
];

/* ---------- EXPÉRIENCES (cartes « PART ») ---------- */
const EXPERIENCES = [
  {
    badge: "1", title: "MODELEUR 3D", subtitle: "Sous-traitance métallerie — Besançon", rank: "PRO",
    head: "PART 1 · JUIL. 2024 → MARS 2025", progress: "✔",
    rows: [
      { index: "01", title: "Escaliers métalliques sur mesure", status: "3D" },
      { index: "02", title: "Garde-corps, rampes PMR", status: "3D" },
      { index: "03", title: "Barrières & portails", status: "3D" },
      { index: "04", title: "Plans pour validation client", status: "Livré" },
    ],
    bulletsTitle: "COMPÉTENCES",
    bullets: [
      "Maîtrise avancée de SketchUp Pro et visualisation spatiale.",
      "Rigueur géométrique, précision technique, sens du détail.",
      "Communication client et respect des délais.",
    ],
    link: { href: "#/projets/sketchup", label: "VOIR LA GALERIE 3D" },
  },
  {
    badge: "2", title: "STAGE SIO1", subtitle: "Hôtel Siatel — Développeur Web", rank: "OK",
    head: "PART 2 · MAI → JUIN 2026 (5 SEM.)", progress: "✔",
    rows: [
      { index: "01", title: "Refonte UI/UX One-Page Glassmorphism", status: "UI" },
      { index: "02", title: "Moteur multilingue FR / EN / ZH", status: "JS" },
      { index: "03", title: "Tunnel de réservation + Luhn", status: "Sécu" },
      { index: "04", title: "Templates PHP + parade CSS :has", status: "PHP" },
      { index: "05", title: "Guide technique pour l'exploitant", status: "Doc" },
    ],
    bulletsTitle: "CONTEXTE",
    bullets: [
      "SIATEL SARL, Châteauroux — tuteur : M. Ali Morshedian.",
      "PHP 8, JavaScript ES6+, WordPress, Elementor, MotoPress, SFTP, phpMyAdmin.",
      "Stage effectué et validé.",
    ],
    link: { href: "#/projets/siatel", label: "VOIR LE PROJET SIATEL" },
  },
  {
    badge: "3", title: "STAGE SIO2", subtitle: "Développement SLAM — en recherche", rank: "???",
    head: "PART 3 · 1 MARS → 10 AVRIL 2027", progress: "…",
    rows: [
      { index: "01", title: "Application métier (Web / logiciel / mobile)", status: "Cible" },
      { index: "02", title: "Frameworks : React, Vue, Symfony, Laravel", status: "Cible" },
      { index: "03", title: "Tests, sécurité, CI/CD", status: "Cible" },
    ],
    bulletsTitle: "TO BE CONTINUED",
    bullets: [
      "Recherche active : secteur de Besançon ou télétravail.",
      "Disponible pour échanger sur toute opportunité de stage SLAM.",
    ],
    link: { href: "#/contact", label: "ME CONTACTER" },
  },
];

/* ---------- PROJETS (style « Project log ») ---------- */
const PROJECTS = [
  {
    id: "siatel",
    title: "HÔTEL SIATEL",
    stack: "PHP 8 · JS ES6+ · WordPress",
    tag: "STAGE SIO1 · PRO",
    summary:
      "Refonte intégrale UI/UX, One-Page responsive, système multilingue FR/EN/ZH et tunnel de réservation direct sécurisé (Luhn).",
    body: [
      ["Contexte", "Hôtel-restaurant à Châteauroux (SIATEL SARL). Objectif : moderniser l'image de marque et réduire la dépendance aux commissions des plateformes (OTA) avec un tunnel de réservation direct."],
      ["Défi 1 — parade CSS :has()", "Le thème imposait un header/footer opaques. Une règle body:has(#siatel-modern-layout) masque l'ancien en-tête UNIQUEMENT quand le nouveau conteneur est présent, sans toucher aux fichiers maîtres."],
      ["Défi 2 — algorithme de Luhn", "Contrôle des numéros de carte (modulo 10) en JavaScript côté client et revalidé en PHP côté serveur, avec assainissement Regex et Nonces CSRF."],
      ["Défi 3 — i18n trilingue", "Dictionnaire JSON + remplacement instantané du DOM, choix mémorisé dans le localStorage."],
    ],
    code:
`function validateLuhn(cardNumber) {
  let sum = 0, shouldDouble = false;
  const digits = cardNumber.replace(/\\D/g, '');
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = parseInt(digits.charAt(i), 10);
    if (shouldDouble) { d *= 2; if (d > 9) d -= 9; }
    sum += d;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0 && digits.length >= 13;
}`,
    chips: ["B1.1 Patrimoine", "B1.2 Incidents", "B1.3 Présence en ligne", "B1.4 Mode projet", "B1.5 Mise à dispo"],
    gallery: [
      { src: IMG + "siatel-avant.webp", cap: "Existant — en-tête rigide, pas de responsive" },
      { src: IMG + "siatel-v1.webp", cap: "Maquette V1 — header glassmorphism, FR/EN/ZH" },
      { src: IMG + "siatel-v2.webp", cap: "Version finale V2 — consolidée pour la prod" },
    ],
    links: [{ href: "https://hotelsiatel.com", label: "HOTELSIATEL.COM" }],
    more: {
      subtitle: "Stage SIO1 — Spécifications, méthodologie et résultats",
      sections: [
        {
          title: "Fiche d'identité du stage",
          paragraphs: [
            "Entreprise : Hôtel Siatel (SIATEL SARL) · Lieu : Châteauroux (Télétravail & suivi) · Tuteur : M. Ali MORSHEDIAN (Directeur) · Période : Mai - Juin 2026 (5 semaines) · Rôle : Développeur Web & Intégrateur SLAM."
          ]
        },
        {
          title: "Objectifs & Spécifications du cahier des charges",
          paragraphs: [
            "Modernisation UI/UX : Création d'un design contemporain épuré respectant les couleurs historiques de l'hôtel (rouge carmin #a81c2c et anthracite #1a1a1a), intégrant un effet d'en-tête Glassmorphism transparent et des animations fluides.",
            "Architecture One-Page responsive : Navigation fluide par ancres interactives avec adaptation totale sur smartphone, tablette et grand écran.",
            "Système multilingue dynamique (FR / EN / ZH) : Bascule instantanée en trois langues sans rechargement lourd, avec mémorisation dans le localStorage.",
            "Tunnel de réservation direct en 3 étapes : Vérification des disponibilités, saisie des coordonnées clients et validation sécurisée avec algorithme de Luhn (modulo 10) et assainissement Regex."
          ]
        }
      ]
    },
  },
  {
    id: "tower-defense",
    title: "TOWER DEFENSE",
    stack: "Python 3 · Pygame · POO",
    tag: "PROJET NSI · TERMINALE",
    summary:
      "Un jeu de stratégie temps réel en Python/Pygame : la consigne demandait un jeu console, j'ai livré un vrai moteur graphique 60 FPS en architecture modulaire.",
    body: [
      ["Fonctionnalités", "Placement et amélioration de tours · vagues d'ennemis progressives · économie temps réel · collisions et portée circulaire · HUD (vie, or, vague) · états du jeu (menu, partie, victoire, défaite)."],
      ["Architecture", "main.py (boucle principale) · towers.py · enemies.py · game.py (règles, vagues, état global) · utils.py (distances, constantes)."],
      ["Compétences", "POO (classes, héritage, encapsulation), boucles d'événements, optimisation des calculs géométriques, code propre et modulaire."],
    ],
    chips: ["main.py", "towers.py", "enemies.py", "game.py", "utils.py"],
    more: {
      subtitle: "Projet scolaire NSI — POO, Pygame et moteur temps réel 60 FPS",
      sections: [
        {
          title: "Contexte et ambition",
          paragraphs: [
            "Projet développé dans le cadre des cours de NSI (Numérique et Sciences Informatiques) en classe de Terminale. L'objectif initial était de concevoir un jeu basique en console, mais j'ai choisi de repousser les limites de la consigne en développant une interface graphique riche, un moteur de jeu temps réel et une architecture modulaire professionnelle en Python."
          ]
        },
        {
          title: "Structure modulaire du code",
          paragraphs: [
            "Organisation stricte selon les principes de séparation des responsabilités :"
          ],
          list: [
            "main.py : Point d'entrée de l'application et boucle principale 60 FPS.",
            "towers.py : Classes et comportements des tours défensives (portées, cadences, améliorations).",
            "enemies.py : Logique de déplacement sur grille et santé des ennemis.",
            "game.py : Gestion des règles du jeu, des vagues et de l'état global (menus, jeu, game over).",
            "utils.py : Fonctions utilitaires, calculs trigonométriques et constantes globales."
          ]
        }
      ]
    },
  },
  {
    id: "sketchup",
    title: "MODÈLES 3D",
    stack: "SketchUp Pro · SKP / DWG / PDF",
    tag: "PRO · MÉTALLERIE",
    summary:
      "Conception 3D d'escaliers, garde-corps, rampes et portails sur mesure pour des entreprises de métallerie-serrurerie. Modèles manipulables à 360° ci-dessous.",
    body: [
      ["Réalisations", "Escaliers droits, hélicoïdaux, quart tournant · garde-corps barreaudage, verre, découpe laser · rampes PMR · portails coulissants et battants motorisés."],
      ["Compétences", "Normes du bâtiment et tolérances de fabrication, contraintes structurelles, communication avec l'atelier et les clients."],
    ],
    models: [
      { t: "Balcon", d: "Balcon moderne avec garde-corps en acier, conçu sur mesure. Design épuré et robuste.", u: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXBzLWJpbS12aWV3ZXItYnVja2V0LWdxdm5mZ21jYnJqd3V6YXoybDRldnd4ZTZ5eW5pemZtOXJodmRydWVpbnVhMzNwYi9CYWxjb24rcmVmKzYuc2tw" },
      { t: "Portail — Pouilley", d: "Portail sur mesure pour résidence à Pouilley. Esthétique et sécurité.", u: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXBzLWJpbS12aWV3ZXItYnVja2V0LWdxdm5mZ21jYnJqd3V6YXoybDRldnd4ZTZ5eW5pemZtOXJodmRydWVpbnVhMzNwYi9Qb3J0YWlsK1BvdWlsbGV5LnNrcA" },
      { t: "Escalier intérieur", d: "Escalier métallique avec marches sur mesure, normes de sécurité et d'ergonomie.", u: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXBzLWJpbS12aWV3ZXItYnVja2V0LWdxdm5mZ21jYnJqd3V6YXoybDRldnd4ZTZ5eW5pemZtOXJodmRydWVpbnVhMzNwYi9LZW5qaStFc2NhbGllcisyKzIwMjQuc2tw" },
      { t: "Garde-corps A", d: "Référence 3 — design classique à barreaux verticaux.", u: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXBzLWJpbS12aWV3ZXItYnVja2V0LWdxdm5mZ21jYnJqd3V6YXoybDRldnd4ZTZ5eW5pemZtOXJodmRydWVpbnVhMzNwYi9nYXJkZStjb3JwcytyZWYrMy5za3A" },
      { t: "Garde-corps B", d: "Référence 3 (variante) — élégant et sécurisé.", u: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXBzLWJpbS12aWV3ZXItYnVja2V0LWdxdm5mZ21jYnJqd3V6YXoybDRldnd4ZTZ5eW5pemZtOXJodmRydWVpbnVhMzNwYi9nYXJkZStjb3JwcytyZWYzLnNrcA" },
      { t: "Garde-corps C", d: "Référence 8 — lignes épurées pour balcons et terrasses.", u: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXBzLWJpbS12aWV3ZXItYnVja2V0LWdxdm5mZ21jYnJqd3V6YXoybDRldnd4ZTZ5eW5pemZtOXJodmRydWVpbnVhMzNwYi9nYXJkZStjb3JwcytyZWYrOC5za3A" },
      { t: "Garde-corps D", d: "Référence 8 (variante) — robustesse et minimalisme.", u: "dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6YXBzLWJpbS12aWV3ZXItYnVja2V0LWdxdm5mZ21jYnJqd3V6YXoybDRldnd4ZTZ5eW5pemZtOXJodmRydWVpbnVhMzNwYi9nYXJkZStjb3JwcytyZWY4LnNrcA" },
    ],
  },
  {
    id: "portfolio",
    title: "CE PORTFOLIO",
    stack: "HTML5 · CSS3 · JavaScript vanilla",
    tag: "ACADÉMIQUE · E5",
    summary:
      "Support officiel de l'épreuve E5. 100 % HTML / CSS / JS, sans framework : routeur maison, transitions animées, sons synthétisés en Web Audio et navigation clavier.",
    body: [
      ["Rubriques", "Profil, CV, projets détaillés, viewer 3D, certifications (PIX, CNIL, ANSSI), veille technologique, passions."],
      ["Apprentissages", "Design system homogène, animations CSS avancées (clip-path, keyframes), interactivité JS sans dépendance, responsive mobile."],
    ],
    chips: ["Vanilla JS", "CSS clip-path", "Web Audio API", "Canvas 2D", "Responsive"],
  },
  {
    id: "sio2",
    title: "SIO2 & SUITE",
    stack: "2026-2027 · en cours",
    tag: "TO BE CONTINUED",
    summary:
      "Préparation des missions d'atelier E6, développement d'applications métiers avancées et recherche du stage SIO2.",
    body: [
      ["Objectifs de l'année", "Missions candidates E6 (SLAM / bases de données) · stage SIO2 de 6 semaines (1er mars → 10 avril 2027) · frameworks modernes (React, Symfony, Laravel)."],
    ],
    links: [{ href: "#/contact", label: "PROPOSER UN STAGE" }],
  },
];

/* ---------- VEILLE TECHNOLOGIQUE ---------- */
const VEILLE = [
  {
    id: "demarche", title: "LA DÉMARCHE", stack: "Méthode & outils", tag: "SPEEDWAGON FOUNDATION",
    summary: "S'informer de manière systématique et continue sur les évolutions techniques, les frameworks, les outils et les menaces de cybersécurité.",
    body: [
      ["Agrégateurs RSS", "Feedly : Dev.to, Medium Tech, Hacker News."],
      ["Newsletters", "JavaScript Weekly, PHP Weekly, GitHub Trending, bulletins CERT-FR (ANSSI)."],
      ["Communautés", "GitHub Releases, Reddit (r/programming, r/webdev), chaînes YouTube et podcasts techniques."],
      ["Expérimentation", "Test concret des nouveaux outils sur des prototypes (ex. IA générative pendant le stage Siatel)."],
    ],
  },
  {
    id: "ia", title: "AXE 1 · IA", stack: "IA générative & cycle de dev", tag: "AXE 1",
    summary: "Comment les assistants de code (LLM) et les agents autonomes transforment-ils le développement, les tests et la sécurité logicielle ?",
    body: [
      ["Accélération", "Gain de temps sur le boilerplate, les regex, les requêtes SQL complexes et la documentation."],
      ["Rôle du développeur", "Du rédacteur de syntaxe au relecteur critique, architecte et garant de la logique métier."],
      ["Vigilance", "Vulnérabilités (OWASP Top 10), dépendances obsolètes, hallucinations : relecture humaine obligatoire."],
      ["Confidentialité", "Données sensibles dans les prompts, respect des licences open source."],
    ],
  },
  {
    id: "agents", title: "FICHE · AGENTS IA", stack: "GitHub Blog / TechCrunch", tag: "FICHE DE LECTURE",
    summary: "Des simples compléteurs de code aux agents capables de cloner un dépôt, lire les logs, corriger un bug, lancer les tests et ouvrir une pull request.",
    body: [["Application BTS SIO", "Automatiser la maintenance corrective tout en gardant un contrôle humain strict sur la validation finale."]],
  },
  {
    id: "secu-ia", title: "FICHE · CODE IA", stack: "ANSSI / Snyk", tag: "FICHE DE LECTURE",
    summary: "Près de 40 % du code généré sans consigne de sécurité contient des failles classiques (injections SQL, XSS, secrets exposés).",
    body: [["Application BTS SIO", "Analyse statique (SAST) et sanitisation systématique : requêtes préparées PDO en PHP."]],
  },
  {
    id: "web", title: "AXE 2 · WEB LÉGER", stack: "Modern CSS & sécurité", tag: "AXE 2",
    summary: "Concevoir des applications web performantes, sobres et sécurisées avec CSS3 et JavaScript natifs, sans surcharge de frameworks.",
    body: [
      ["Vanilla JS & Modern CSS", ":has(), subgrid, variables CSS, container queries : moins de bibliothèques, plus de natif."],
      ["Sobriété & performance", "Core Web Vitals, bande passante réduite, meilleur SEO."],
      ["Flux transactionnels", "Validation client (Luhn) + contrôle serveur strict (CSRF, Nonces, requêtes préparées)."],
    ],
  },
  {
    id: "has", title: "FICHE · :HAS()", stack: "MDN / Smashing Magazine", tag: "FICHE DE LECTURE",
    summary: "Le sélecteur parent :has() conditionne le style d'un élément selon ses enfants, sans JavaScript.",
    body: [["Application BTS SIO", "Utilisé au stage Siatel pour masquer l'en-tête Elementor par défaut sans toucher au code maître."]],
  },
  {
    id: "rgpd", title: "FICHE · RGPD", stack: "CNIL / OWASP", tag: "FICHE DE LECTURE",
    summary: "Bonnes pratiques de collecte des données bancaires et personnelles : non-persistance, validation en temps réel, droits d'accès et de rectification.",
    body: [["Application BTS SIO", "Tunnel de réservation PHP/JS avec validation Luhn pour l'Hôtel Siatel."]],
  },
  {
    id: "bilan", title: "BILAN", stack: "Ma pratique pro", tag: "CONCLUSION",
    summary: "Une vision moderne et critique de mes projets.",
    body: [
      ["IA avec discernement", "Valider systématiquement la robustesse et la sécurité du code généré."],
      ["Solutions pérennes", "Vanilla JS, CSS natif, PHP structuré : moins de dette technique et de modules payants."],
      ["Privacy by Design", "Conformité RGPD et cybersécurité ANSSI dès la conception."],
    ],
  },
];

/* ---------- PASSIONS (direction éditoriale) ---------- */
const PASSIONS = [
  {
    id: "jojo", group: "ANIME · TOP", title: "JOJO'S BIZARRE ADVENTURE", stack: "TOP 1 · Anime préféré", tag: "01 · ARAKI 1987",
    intro: "Mon anime préféré",
    summary: "Une œuvre qui m'a appris que la force ne vient pas seulement de la puissance, mais de la manière de comprendre le monde et soi-même.",
    body: [
      ["Une révolution culturelle déguisée en manga", ["En 1987, quand Hirohiko Araki lance JoJo's Bizarre Adventure, il propose une vision qui s'éloigne des conventions dominantes du manga de l'époque. Jonathan Joestar, premier protagoniste de la saga, est britannique, aristocrate et évolue dans une Angleterre victorienne. Ce choix donne à la série une identité internationale et singulière.", "Mais JoJo dépasse progressivement le cadre du manga. Son rapport à la mode, à la sculpture et aux beaux-arts lui permet de dialoguer directement avec d'autres univers artistiques. En 2009, Araki participe au projet artistique du Louvre avec une histoire originale, Rohan au Louvre. Les collaborations avec des maisons comme Gucci ou des marques comme Uniqlo témoignent de cette rencontre entre manga et mode."]],
      ["Le système des Stands : réinventer le combat shōnen", ["Introduits dans la troisième partie en 1989, les Stands transforment profondément la manière dont les affrontements sont construits. Plutôt que de reposer uniquement sur une escalade de puissance, les combats deviennent des confrontations d'ingéniosité, de stratégie et d'interprétation des capacités de chacun.", "Cette approche repose sur une idée particulièrement intéressante : la puissance ne garantit pas la victoire. La manière de comprendre une situation et d'exploiter ses possibilités devient tout aussi importante que les capacités elles-mêmes."]],
      ["Un langage visuel qui redéfinit le manga", ["L'esthétique d'Araki puise dans la mode, la sculpture classique et l'art occidental. Ses compositions, ses poses théâtrales et ses silhouettes transforment les personnages en véritables figures artistiques.", "JoJo démontre qu'un manga peut développer un langage visuel immédiatement reconnaissable et dépasser son médium d'origine."]],
      ["Ce que JoJo m'apporte", ["JoJo me rappelle que la créativité naît souvent de l'audace de s'éloigner des conventions. Il nourrit ma sensibilité à la direction artistique, à l'identité visuelle et à l'expérimentation. C'est une approche que je cherche à retrouver dans mes projets numériques : créer quelque chose qui possède une véritable personnalité plutôt que de reproduire des modèles existants."]],
    ],
    gallery: [{ src: IMG + "jojo-banner.webp", cap: "JoJo's Bizarre Adventure : les héros de la saga", wide: true }],
    stands: [
      { img: IMG + "c-moon.webp", name: "C-MOON", user: "Enrico Pucci (Part 6)" },
      { img: IMG + "awaking-iii-leaves.webp", name: "AWAKING III LEAVES", user: "Mitsuba Higashikata (Part 8)" },
    ],
  },
  {
    id: "berserk", group: "ANIME · TOP", title: "BERSERK", stack: "TOP 2 · Dark fantasy", tag: "02 · MIURA 1989",
    intro: "Le chef-d'œuvre de Kentaro Miura",
    summary: "Une œuvre qui refuse les réponses faciles et qui m'a appris que continuer d'avancer, même dans la douleur, reste une forme de dignité.",
    body: [
      ["La dark fantasy dans ce qu'elle a de plus humain", ["Publié pour la première fois en 1989 par Kentaro Miura, Berserk dépasse largement les frontières de la fantasy traditionnelle. Son univers médiéval sombre ne sert pas uniquement de décor à une succession de batailles : il devient le terrain d'une réflexion sur la condition humaine, la violence, l'ambition et la liberté.", "À travers Guts, son protagoniste, l'œuvre interroge la capacité d'un individu à continuer d'avancer dans un monde qui semble constamment chercher à le briser."]],
      ["Une œuvre qui refuse les réponses faciles", ["Berserk aborde des sujets difficiles : la guerre, les rapports de pouvoir, la manipulation, la religion, les traumatismes et les conséquences de l'ambition humaine.", "L'œuvre ne présente pas ses personnages comme de simples héros ou antagonistes. Elle explore leurs contradictions, leurs choix et les conséquences parfois irréversibles de leurs actes. C'est cette complexité morale qui donne à son récit une profondeur particulière. Son monde n'est pas seulement cruel parce qu'il est fantastique : il reflète aussi certaines réalités de notre propre histoire."]],
      ["Une influence majeure sur la fantasy moderne", ["Le travail graphique de Kentaro Miura, son sens de la composition et la densité de ses illustrations ont profondément marqué l'imaginaire de la dark fantasy. Son influence est perceptible dans le jeu vidéo, notamment dans des univers comme Dark Souls et Elden Ring, dont les créateurs ont cité plusieurs références à la fantasy sombre et au travail de Miura.", "L'œuvre a contribué à installer une représentation de la fantasy où la grandeur côtoie constamment la fragilité humaine."]],
      ["Ce que Berserk m'apporte", ["Berserk m'a amené à m'intéresser davantage aux œuvres qui ne cherchent pas à simplifier leur propos. Il m'a sensibilisé à la profondeur narrative, à la construction des personnages et à l'importance de la cohérence d'un univers.", "Il me rappelle aussi que la création peut avoir une dimension critique : raconter une histoire, c'est aussi pouvoir questionner le monde et les comportements humains."]],
    ],
    gallery: [{ src: IMG + "berserk.webp", cap: "Berserk : Kentaro Miura" }],
  },
  {
    id: "haikyu", group: "ANIME · TOP", title: "HAIKYUU!!", stack: "TOP 3 · Volleyball & esprit d'équipe", tag: "03 · FURUDATE",
    intro: "Le volleyball et l'esprit d'équipe",
    summary: "Une série qui montre qu'aucun talent ne gagne seul : la progression vient de l'écoute, de l'observation et de la confiance entre coéquipiers.",
    body: [
      ["Le sport raconté à hauteur d'humain", ["Avec Haikyuu!!, Haruichi Furudate transforme le volleyball en véritable terrain d'exploration humaine. Là où certaines œuvres sportives privilégient l'individualité et les performances extraordinaires, Haikyuu!! accorde une place centrale à la complémentarité des joueurs.", "Chaque personnage possède ses propres limites, ses ambitions et sa manière de comprendre le sport. La progression ne repose pas uniquement sur le talent, mais sur l'apprentissage, l'observation et la capacité à évoluer avec les autres."]],
      ["La beauté du collectif", ["L'une des grandes forces de Haikyuu!! réside dans sa représentation du travail d'équipe. Un joueur peut être exceptionnel, mais il ne peut pas construire seul une victoire.", "L'œuvre accorde autant d'importance aux joueurs principaux qu'à leurs adversaires. Elle montre que chaque équipe possède une histoire, une identité et des individus qui méritent d'être compris. La rivalité devient alors un moteur de progression plutôt qu'une simple opposition."]],
      ["Ce que Haikyuu!! m'apporte", ["Haikyuu!! fait particulièrement écho à ma pratique du volleyball. Il m'a sensibilisé à l'importance de la communication, de la confiance et de la complémentarité dans un collectif.", "Ces notions dépassent largement le cadre sportif. Elles se retrouvent dans le développement informatique, où un projet réussi dépend souvent de la capacité à collaborer, à partager ses connaissances et à comprendre le travail des autres."]],
    ],
    gallery: [{ src: IMG + "haikyuu.webp", cap: "Haikyuu!!" }],
  },
  {
    id: "edgerunners", group: "ANIME · TOP", title: "EDGERUNNERS 1 & 2", stack: "TOP 4 · Studio Trigger · Deux histoires", tag: "04 · CYBERPUNK",
    intro: "Cyberpunk: Edgerunners, saisons 1 et 2 · un même univers",
    summary: "Une série à présenter dans son ensemble : deux histoires, deux groupes de personnages, et une même vision de Night City qui façonne ceux qui la traversent.",
    body: [
      ["Night City, deux histoires et une même réalité", ["La première saison suit David Martinez, un jeune homme qui tente de trouver sa place dans une Night City dominée par les corporations, les inégalités et la violence. Sa rencontre avec Lucy, netrunneuse, transforme son parcours en une histoire sur l'amour, le deuil et le désir de liberté. La tragédie qui en découle est dévastatrice, et elle ne cherche pas la fin heureuse à tout prix.", "La seconde saison, Edgerunners 2, suit d'autres personnages, notamment Roman, Talia, Kingsley et D, dans une histoire indépendante qui élargit notre compréhension de cet univers. Diffusée sur Netflix à partir du 20 octobre 2026, elle ne refait pas le récit de David et Lucy : elle prouve que Night City est plus vaste qu'un seul destin.", "Ces récits diffèrent par leurs personnages, leurs trajectoires et leurs enjeux, mais ils partagent une même vision : une ville qui façonne les individus, consume leurs ambitions et confronte chacun à ses propres limites."]],
      ["Une identité artistique forte", ["Le Studio Trigger impose une animation expressive, une direction artistique saturée, des compositions dynamiques et une utilisation particulièrement marquante de la musique. Chaque combat est pensé pour le choc : mouvements nerveux, couleurs qui claquent, transitions brutales qui rendent la violence à la fois spectaculaire et douloureuse.", "Cette identité visuelle donne vie à l'univers cyberpunk : les néons, les implants, les publicités omniprésentes et les quartiers abandonnés pèsent sur chaque décision des personnages. Quand David choisit une voie, on comprend que la société l'a déjà poussé dans cette direction."]],
      ["Un univers qui dépasse le jeu vidéo", ["Edgerunners s'inscrit dans l'univers de Cyberpunk 2077 tout en possédant sa propre voix. La série croise animation japonaise, science-fiction, musique et esthétique cyberpunk, et montre qu'un univers vidéoludique peut trouver une seconde vie dans un autre médium, sans perdre sa cohérence.", "La bande-son, portée par Rosa Walton, accompagne les moments les plus forts. Elle transforme la violence en quelque chose de presque poétique et reste en tête bien après le dernier épisode."]],
      ["Ce qu'Edgerunners m'apporte", ["Cette œuvre nourrit mon intérêt pour la direction artistique, la création d'univers cohérents et la narration visuelle. Elle me rappelle qu'une identité forte ne repose pas uniquement sur l'apparence d'un projet, mais sur la cohérence entre son esthétique, son ambiance, son histoire et les émotions qu'il transmet."]],
    ],
    gallery: [{ src: IMG + "edgerunners-1.webp", cap: "Cyberpunk: Edgerunners, saison 1" }, { src: IMG + "edgerunners-2.webp", cap: "Cyberpunk: Edgerunners 2" }],
  },

  {
    id: "nana", group: "ANIME · NOUVELLE ENTRÉE", title: "NANA", stack: "Relations humaines & musique", tag: "05 · AI YAZAWA",
    intro: "Deux amies, deux destins, une même envie de vivre",
    summary: "NANA m'a appris que les liens humains sont rarement simples : ils blessent, ils déçoivent, et pourtant ils sont ce qui donne du sens à tout le reste.",
    body: [
      ["Deux Nana, un même train", ["Le manga suit Nana Osaki et Nana Komatsu, surnommée Hachi. Elles se rencontrent dans un train vers Tokyo, et tout part de là : une amitié qui naît presque par hasard, puis une colocation et des vies qui se croisent sans jamais vraiment se ressembler.", "Ce qui m'a touché, c'est la justesse de leur relation. L'amitié, l'amour, la dépendance affective, la jalousie et les désillusions y sont montrés sans jugement. Aucune des deux n'est une héroïne parfaite, et c'est ce qui les rend crédibles."]],
      ["La musique comme langage des sentiments", ["La musique est l'autre pilier de NANA. Le récit suit la scène rock, les ambitions artistiques et les sacrifices qu'elles demandent : les groupes, les répétitions, les concerts, mais aussi les tensions entre amis quand les rêves ne vont pas dans la même direction.", "Pour moi, la musique y sert souvent à dire ce que les personnages n'arrivent pas à formuler. Une chanson, une scène sur scène ou un silence après un concert peuvent en dire plus qu'une longue discussion."]],
      ["Des personnages qui ne se laissent pas idéaliser", ["Les personnages de NANA ne sont jamais présentés comme des modèles. Ils se trompent, se blessent, font des choix qu'ils regrettent et ne comprennent pas toujours leurs propres sentiments.", "C'est cette imperfection qui donne à l'œuvre sa force : elle montre à quel point les relations humaines peuvent être belles, complexes et douloureuses, sans jamais tomber dans la caricature."]],
      ["Ce que NANA m'apporte", ["NANA m'a appris à écouter les autres sans chercher à les réparer, et à accepter que certains liens ne soient pas faits pour durer tout en restant précieux.", "Cette sensibilité me sert aussi dans le travail en équipe. Un projet informatique, comme une amitié, repose sur la communication, la confiance et la capacité à traverser les désaccords."]],
    ],
    gallery: [{ src: IMG + "nana.webp", cap: "NANA : Ai Yazawa" }],
  },
  {
    id: "autres-anime", group: "ANIME · HORS TOP", title: "AUTRES ŒUVRES", stack: "Shōnen & Studio Ghibli", tag: "06 · CURIOSITÉ",
    intro: "Des univers qui nourrissent l'imaginaire",
    summary: "Mon intérêt pour l'animation japonaise ne se limite pas à quelques favoris : c'est une curiosité pour la diversité des émotions et des imaginaires qu'elle peut construire.",
    body: [
      ["Des univers qui nourrissent l'imaginaire", ["Mon intérêt pour le manga et l'animation japonaise ne se résume pas à quelques favoris. Ce qui me passionne, c'est la diversité des univers et la façon dont ils savent transmettre des émotions très différentes : l'enthousiasme d'un shōnen, la mélancolie d'une fable, la tension d'un récit sombre."]],
      ["Le Studio Ghibli et le lien à la nature", ["Le Studio Ghibli traite de la nature, de l'enfance, de l'humanité et de la relation entre l'individu et son environnement avec une douceur qui n'exclut jamais la gravité. Princesse Mononoké, par exemple, pose la question de l'équilibre fragile entre la nature et l'expansion humaine sans offrir de camp idéal."]],
      ["Des shōnen qui parlent de dépassement", ["Des séries comme Gurren Lagann ou Bleach, avec leur énergie, leur character design et leurs affrontements tactiques, m'ont appris que le spectacle peut porter un vrai message sur la détermination et la progression."]],
    ],
  },
  {
    id: "cyberpunk", group: "JEUX VIDÉO · TOP", title: "CYBERPUNK 2077", stack: "Action-RPG en monde ouvert", tag: "07 · CD PROJEKT RED",
    intro: "Genre : Action-RPG / Monde ouvert futuriste — PC",
    summary: "Une ville qui semble exister sans le joueur, et qui m'a fait réfléchir bien au-delà de l'écran sur le pouvoir, l'argent et ce qu'on accepte de perdre pour exister.",
    body: [
      ["Construire un monde qui semble exister sans le joueur", ["Avec Cyberpunk 2077, CD Projekt Red propose une vision de Night City qui dépasse le simple décor de jeu vidéo. La ville possède ses tensions sociales, ses cultures, ses histoires et ses contradictions. Sa richesse repose sur la densité de son univers : les quartiers, les personnages, les publicités, les architectures et même les conversations secondaires participent à créer une impression de monde vivant."]],
      ["Le worldbuilding comme expérience", ["Cyberpunk 2077 illustre parfaitement la puissance du worldbuilding et de la narration environnementale. Le joueur ne découvre pas l'histoire seulement à travers les dialogues et les missions : il la lit aussi dans l'environnement qui l'entoure. Chaque quartier possède une identité visuelle et culturelle qui rend Night City crédible."]],
      ["Le corps comme marchandise", ["Le jeu pose une question qui m'accompagne encore : jusqu'où peut-on modifier son corps avant de ne plus être soi ? Les implants, le chrome et la dépendance aux améliorations sont présentés comme une promesse de puissance, mais avec un prix que l'on paie lentement.", "Cette réflexion dépasse la science-fiction. Elle touche à la façon dont notre monde transforme l'identité en produit, à travers les réseaux, les données et les tendances. Night City est une caricature, mais une caricature qui fait réfléchir."]],
      ["La liberté, et ses limites", ["La liberté d'approche (netrunning, combat, infiltration) et les dilemmes moraux font de chaque partie une histoire personnelle. Deux joueurs ne vivent jamais exactement la même ville, et chaque choix laisse une trace.", "Le jeu montre aussi que cette liberté est souvent illusoire : on choisit une voie, mais le système a déjà fixé les règles. Cette tension entre choix individuel et structure collective est, pour moi, le cœur du propos."]],
      ["Ce que Cyberpunk 2077 m'apporte", ["Ce jeu nourrit mon intérêt pour la conception d'univers et la cohérence visuelle des projets numériques. Il m'a appris à regarder une interface comme un langage : un HUD bien pensé transmet une information sans submerger, un retour visuel rassure, un son signale une menace.", "Dans le développement web, je retrouve cette même logique : chaque élément d'une interface participe à construire une expérience globale. C'est une façon de jouer qui continue bien après la dernière mission."]],
    ],
    gallery: [{ src: IMG + "cyberpunk-2077.jpg", cap: "Cyberpunk 2077 : Night City" }],
  },
  {
    id: "lol", group: "JEUX VIDÉO · TOP", title: "LEAGUE OF LEGENDS", stack: "MOBA compétitif", tag: "08 · RIOT GAMES",
    intro: "Genre : MOBA (Multiplayer Online Battle Arena) — PC",
    summary: "Un jeu où la maîtrise individuelle ne suffit jamais : chaque partie est une situation nouvelle qui se joue à plusieurs.",
    body: [
      ["La stratégie comme langage collectif", ["League of Legends est devenu l'un des représentants majeurs du jeu compétitif en ligne. Son succès repose sur un système où la maîtrise individuelle ne suffit jamais totalement. Chaque partie constitue une situation nouvelle, dans laquelle les décisions, l'adaptation et la coordination déterminent l'issue de la confrontation."]],
      ["Un système en constante évolution", ["L'une des particularités du jeu réside dans son évolution permanente. Les modifications d'équilibrage, les nouvelles mécaniques et les changements de stratégie renouvellent régulièrement la manière d'aborder le jeu. Cette complexité en fait un environnement d'apprentissage continu."]],
      ["Ce que League of Legends m'apporte", ["Le jeu m'a familiarisé avec l'analyse de situations complexes, l'anticipation et la prise de décision. Il m'a aussi sensibilisé à l'équilibrage d'un système : modifier une mécanique peut avoir des conséquences sur l'ensemble de l'expérience. C'est une réflexion que je retrouve en programmation, où chaque modification doit être pensée en fonction de ses interactions avec le reste d'un projet."]],
    ],
    gallery: [{ src: IMG + "league-of-legends.webp", cap: "League of Legends" }],
  },
  {
    id: "undertale", group: "JEUX VIDÉO · TOP", title: "UNDERTALE", stack: "RPG indépendant", tag: "09 · TOBY FOX 2015",
    intro: "Genre : RPG indépendant — PC",
    summary: "Un RPG qui remet ses propres règles en question et transforme chaque choix du joueur en question morale.",
    body: [
      ["Quand le jeu vidéo remet ses propres règles en question", ["Sorti en 2015 et développé principalement par Toby Fox, Undertale propose une approche singulière du RPG. Le jeu reprend certains codes classiques du genre pour mieux les détourner. Les combats, les dialogues et les décisions du joueur deviennent autant d'occasions de questionner ses propres habitudes."]],
      ["Le joueur au centre du récit", ["Undertale joue constamment avec les attentes du joueur. Les choix ne sont pas de simples options de dialogue : ils participent directement à la manière dont l'histoire se construit. Le jeu démontre qu'une expérience interactive peut transmettre des idées et des émotions que d'autres médias ne reproduisent pas aussi directement."]],
      ["Ce que Undertale m'apporte", ["Undertale m'a sensibilisé à la créativité dans la conception des systèmes interactifs. Il montre qu'une contrainte technique ou une mécanique familière peut devenir un véritable outil narratif lorsqu'elle est utilisée intelligemment. C'est une philosophie qui m'intéresse dans le développement : ne pas seulement faire fonctionner une fonctionnalité, mais réfléchir à ce qu'elle apporte à l'expérience globale."]],
    ],
    gallery: [{ src: IMG + "undertale.webp", cap: "Undertale" }],
  },
  {
    id: "omori", group: "JEUX VIDÉO · TOP", title: "OMORI", stack: "RPG psychologique", tag: "10 · RPG PSY",
    intro: "Genre : RPG psychologique — PC",
    summary: "Un jeu qui utilise les codes de l'enfance pour raconter des émotions beaucoup plus lourdes qu'elles n'en ont l'air.",
    body: [
      ["Un contraste entre innocence et complexité", ["OMORI est un RPG indépendant qui utilise les codes visuels du jeu d'aventure et du dessin enfantin pour construire une expérience narrative bien plus complexe qu'elle ne le laisse paraître. Son univers joue constamment sur les contrastes entre imagination, souvenirs et réalité."]],
      ["Une direction artistique au service du récit", ["Le jeu développe une identité visuelle forte grâce à ses illustrations, ses compositions, ses couleurs et ses changements d'atmosphère. Il démontre comment la direction artistique peut devenir un véritable outil narratif : l'apparence d'un environnement participe directement à la compréhension de l'histoire."]],
      ["Ce que OMORI m'apporte", ["OMORI renforce mon intérêt pour la narration visuelle et pour la manière dont une expérience peut être construite autour d'émotions plutôt que de simples fonctionnalités. Il me pousse à réfléchir à la relation entre esthétique, ambiance et expérience utilisateur, notamment dans la conception d'interfaces."]],
    ],
    gallery: [{ src: IMG + "omori.webp", cap: "OMORI" }],
  },
  {
    id: "kenshi", group: "JEUX VIDÉO · HORS TOP", title: "KENSHI", stack: "RPG sandbox", tag: "11 · SYSTÈMES",
    intro: "Genre : RPG / Stratégie sandbox — PC",
    summary: "Un monde qui ne tourne pas autour du joueur, où la richesse vient des systèmes qui interagissent entre eux.",
    body: [
      ["Un monde qui ne tourne pas autour du joueur", ["Kenshi propose une conception radicalement différente du RPG traditionnel. Le joueur n'est ni un héros attendu ni un personnage destiné à sauver le monde. Il doit apprendre à survivre dans un environnement hostile, comprendre ses systèmes et construire progressivement sa propre histoire."]],
      ["La liberté par les systèmes", ["La particularité de Kenshi réside dans la manière dont ses mécaniques interagissent. Les personnages, les factions, les ressources et les événements produisent des situations émergentes, sans narration entièrement scénarisée. Le jeu montre qu'un monde peut devenir intéressant grâce à la seule richesse de ses systèmes."]],
      ["Ce que Kenshi m'apporte", ["Kenshi nourrit ma curiosité pour la conception de systèmes complexes et les interactions entre mécaniques. C'est une approche qui fait écho à l'informatique : un ensemble de composants indépendants peut produire un système global riche et cohérent."]],
    ],
  },
  {
    id: "apports-dev", group: "JEUX VIDÉO · APPORTS", title: "APPORTS DU JEU VIDÉO", stack: "Ce que les jeux m'apprennent", tag: "12 · LABORATOIRE",
    intro: "Ce que le jeu vidéo m'apprend pour le développement",
    summary: "Le jeu vidéo est un laboratoire permanent : il montre comment les mécaniques, les interfaces et les systèmes fonctionnent ensemble.",
    body: [
      ["Au-delà du divertissement : comprendre la création interactive", ["Ma passion pour le jeu vidéo m'a progressivement amené à regarder ce qui se trouve derrière l'expérience : les mécaniques, les interfaces, les systèmes et les choix de conception. Un jeu est le résultat d'un dialogue permanent entre programmation, direction artistique, game design, narration et expérience utilisateur."]],
      ["Une source d'inspiration pour le développement", ["Les jeux auxquels je joue me permettent d'observer différentes manières de résoudre des problèmes de conception. Cyberpunk 2077 m'intéresse pour son worldbuilding et sa cohérence visuelle, Undertale pour son utilisation intelligente des mécaniques, Kenshi pour ses systèmes émergents, OMORI pour sa narration visuelle. Ces expériences nourrissent ma manière d'aborder le développement web."]],
      ["Ce que cela change dans ma manière de créer", ["Je ne souhaite pas seulement développer des applications fonctionnelles. Je veux concevoir des expériences cohérentes, agréables à utiliser et porteuses d'une véritable identité. Le jeu vidéo représente pour moi une source permanente d'observation et d'inspiration."]],
    ],
  },
  {
    id: "volley", group: "SPORT · PASSIONS", title: "VOLLEYBALL", stack: "Club de Besançon · pratique loisir", tag: "13 · BVB",
    intro: "Un sport d'équipe, d'agilité et de communication",
    summary: "Un sport où personne ne joue seul : chaque action dépend de la précédente et prépare la suivante.",
    body: [
      ["Un sport où personne ne joue seul", ["Le volleyball repose sur une idée simple : aucun joueur ne peut contrôler seul le déroulement d'un match. Chaque action dépend de la précédente et prépare la suivante. La communication, la coordination et la confiance deviennent alors aussi importantes que les capacités individuelles."]],
      ["Apprendre à évoluer avec les autres", ["Ma pratique au club de Besançon m'a permis de découvrir l'importance du collectif et de la complémentarité. Il faut apprendre à comprendre les autres, à communiquer efficacement et à accepter que la réussite dépende parfois d'un effort collectif plutôt que d'une performance individuelle."]],
      ["Ce que le volleyball m'apporte", ["Cette pratique nourrit ma manière d'aborder le travail en équipe. Dans un projet informatique, comme sur un terrain, chacun possède ses compétences et ses responsabilités. La réussite repose sur la capacité à collaborer, à communiquer et à construire quelque chose ensemble."]],
    ],
  },
  {
    id: "budo", group: "SPORT · PASSIONS", title: "YOSEIKAN BUDO", stack: "5 ans de pratique", tag: "14 · MOCHIZUKI",
    intro: "Cinq années d'apprentissage au-delà du combat",
    summary: "Une discipline qui m'a appris la régularité, la patience et la capacité à accepter ses limites pour progresser.",
    body: [
      ["Cinq années d'apprentissage au-delà du combat", ["Le Yoseikan Budo est un art martial qui repose sur une approche polyvalente des pratiques de combat, avec une recherche de coordination et de maîtrise du mouvement. Au-delà de sa dimension physique, ces cinq années de pratique représentent une expérience d'apprentissage personnel."]],
      ["La discipline comme progression", ["La pratique martiale demande de la régularité, de la patience et la capacité à accepter ses propres limites. La progression ne se construit pas en un jour : elle repose sur la répétition, la correction des erreurs et la volonté de continuer à apprendre."]],
      ["Ce que le Yoseikan Budo m'apporte", ["Ces cinq années m'ont permis de développer une certaine rigueur et une meilleure compréhension de ma propre progression. Je retrouve ces principes dans mon parcours informatique : apprendre de nouvelles technologies, résoudre des problèmes et progresser dans un domaine demande du temps, de la patience et de la persévérance."]],
    ],
  },
];

/* ---------- CERTIFICATIONS (style « Socials ») ---------- */
const CERTIFS = [
  {
    id: "anssi", label: "ANSSI", role: "SÉCU", icon: IMG + "anssi.webp", href: DOC + "attestation-anssi.pdf",
    desc: "SecNumacadémie — sécurité des réseaux, attaques, authentification, hygiène informatique.",
    stats: [{ tag: "MOOC", value: "2025", color: "var(--gold)" }, { tag: "CYBER", value: "OK", color: "var(--green)" }],
    links: [{ text: "Attestation SecNumacadémie", href: DOC + "attestation-anssi.pdf", count: "PDF" }],
  },
  {
    id: "cnil", label: "CNIL RGPD", role: "DATA", icon: IMG + "cnil.webp", href: DOC + "attestation-cnil-module-1.pdf",
    desc: "Atelier RGPD de la Commission Nationale de l'Informatique et des Libertés — 6 modules validés.",
    stats: [{ tag: "MODULES", value: "6/6", color: "var(--gold)" }, { tag: "RGPD", value: "OK", color: "var(--pink)" }],
    links: [
      { text: "M1 · Le RGPD et ses notions clés", href: DOC + "attestation-cnil-module-1.pdf", count: "01" },
      { text: "M2 · Principes de la protection", href: DOC + "attestation-cnil-module-2.pdf", count: "02" },
      { text: "M3 · Responsabilités des acteurs", href: DOC + "attestation-cnil-module-3.pdf", count: "03" },
      { text: "M4 · Le DPO et la conformité", href: DOC + "attestation-cnil-module-4.pdf", count: "04" },
      { text: "M5 · Les droits des personnes", href: DOC + "attestation-cnil-module-5.pdf", count: "05" },
      { text: "M6 · Sanctions et recours", href: DOC + "attestation-cnil-module-6.pdf", count: "06" },
    ],
  },
  {
    id: "pix", label: "PIX", role: "ÉTAT", icon: IMG + "pix.webp", href: DOC + "certification-pix-20250321.pdf",
    desc: "Certification officielle reconnue par l'État — compétences numériques.",
    stats: [{ tag: "CERTIF", value: "×2", color: "var(--gold)" }, { tag: "LAST", value: "2025", color: "var(--green)" }],
    links: [
      { text: "Certification PIX 2025 (BTS SIO)", href: DOC + "certification-pix-20250321.pdf", count: "2025" },
      { text: "Certification PIX 2021 (collège/lycée)", href: DOC + "certification-pix-20210625.pdf", count: "2021" },
    ],
  },
];

/* ---------- CONTACT (style « Socials ») ---------- */
const CONTACT = [
  {
    id: "email", label: "EMAIL", role: "DIRECT", glyph: "✉", href: "mailto:" + PROFILE.email,
    desc: PROFILE.email,
    stats: [{ tag: "RÉPONSE", value: "RAPIDE", color: "var(--gold)" }, { tag: "STAGE", value: "2027", color: "var(--pink)" }],
    links: [{ text: PROFILE.email, href: "mailto:" + PROFILE.email, count: "MAIL" }],
  },
  {
    id: "phone", label: "TÉLÉPHONE", role: "APPEL", glyph: "☎", href: "tel:+33623027518",
    desc: PROFILE.phone,
    stats: [{ tag: "ZONE", value: "BESANÇON", color: "var(--gold)" }, { tag: "REMOTE", value: "OK", color: "var(--green)" }],
    links: [{ text: PROFILE.phone, href: "tel:+33623027518", count: "TEL" }],
  },
  {
    id: "cv", label: "CV PDF", role: "DOSSIER", glyph: "★", href: PROFILE.cv,
    desc: "Télécharger le CV complet au format PDF.",
    stats: [{ tag: "FORMAT", value: "PDF", color: "var(--gold)" }, { tag: "MAJ", value: "2026", color: "var(--pink)" }],
    links: [
      { text: "CV — Kenji Chapuis--Voisain", href: PROFILE.cv, count: "PDF" },
      { text: "Site du stage : hotelsiatel.com", href: "https://hotelsiatel.com", count: "WEB" },
    ],
  },
];
