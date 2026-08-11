/* ============================================================
   TRANSLATIONS — this is where ALL the site text lives.
   ------------------------------------------------------------
   To change wording, edit the strings below. Every string has an
   English (en) and French (fr) version. Keep the key on the left
   (e.g. "hero.title") exactly as it is — only edit the text in quotes.

   A few keys end in ".html": those may contain simple tags like
   <em>…</em> (italic + violet underline). Keep the tags balanced.

   The logic that switches languages is at the BOTTOM of this file.
   You don't need to touch it.
   ============================================================ */

const I18N = {
  en: {
    /* ---- Document titles (browser tab) ---- */
    "__index_title": "Maëli Fernandez — Event Project Coordinator",
    "__pfc_title": "Pour Faire Court — Maëli Fernandez",
    "__leon_title": "Léon Event — Maëli Fernandez",
    "__astra_title": "Astraez — Maëli Fernandez",

    /* ---- Navigation ---- */
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.cv": "Download CV",
    "lang.aria": "Language",

    /* ---- Hero ---- */
    "hero.title.html": "Great events look effortless. Mine are <em>planned</em> that way.",
    "hero.sub": "Event project coordinator — venues, suppliers, budgets, run of show. Based in the French Alps, relocating to Asia in 2027.",
    "hero.cta1": "See my projects",
    "hero.cta2": "Download CV",
    "hero.badge": "French Alps → Asia · 2027",

    /* ---- Marquee keywords ---- */
    "mq.1": "Venue sourcing",
    "mq.2": "Budgets",
    "mq.3": "Suppliers",
    "mq.4": "Run of show",
    "mq.5": "Team briefing",
    "mq.6": "Proposals",

    /* ---- Projects section ---- */
    "projects.eyebrow": "Selected work",
    "projects.title": "Three projects, one throughline: making the plan hold on the day.",
    "projects.lead": "From a student film festival to a corporate agency internship to a product I built from scratch.",

    "p1.tag": "Festival · Logistics lead",
    "p1.title": "Pour Faire Court",
    "p1.desc": "End-to-end logistics for a one-night short-film festival: venue, suppliers, a €5,000 budget and a 10-person crew on the day.",
    "p2.tag": "Agency · Event assistant",
    "p2.title": "Léon Event",
    "p2.desc": "Supporting corporate events end to end — client brief, sourcing, cost comparisons and proposal decks.",
    "p3.tag": "Side project · In development",
    "p3.title": "Astraez",
    "p3.desc": "A web platform to teach English in French schools — designed and built from zero, managed solo.",
    "projects.more": "View project",

    /* ---- Volunteering ---- */
    "vol.eyebrow": "On the ground",
    "vol.title": "Event volunteering",
    "vol.lead": "Live-event experience where things move fast and coordination is everything.",
    "vol.1.title": "Annecy International Animation Film Festival",
    "vol.1.desc": "Festival crew — the world's largest animation festival.",
    "vol.1.year": "2024",
    "vol.2.title": "Annecy Marathon",
    "vol.2.desc": "Course marshalling in 2025; podium & prize-giving in 2026.",
    "vol.2.year": "2025 · 2026",

    /* ---- About ---- */
    "about.eyebrow": "About",
    "about.title": "Maëli Fernandez",
    "about.bio1": "I hold a Master's in Communication, Marketing, Events & PR from INSEEC Lyon. After graduating, I chose to add a six-month agency internship to sharpen my hands-on, on-the-ground experience.",
    "about.bio2": "Eight months living in the United States showed me how much I learn from working inside another culture — I'm now looking to do it again in Asia. I work in professional English (EF B2).",
    "about.bio3": "I'm most at home in the planning phase — the sourcing, the budgets, the run of show — where good preparation quietly decides how the day goes.",
    "about.relocate": "Moving to Asia in 2027. Japan, South Korea, Taiwan and Hong Kong each grant French nationals a 12-month working holiday visa, so I can join the right team wherever it is — self-sponsored, no employer sponsorship required.",
    "about.fact1": "Master — INSEEC Lyon",
    "about.fact2": "6-month agency internship",
    "about.fact3": "8 months in the USA",
    "about.fact4": "Professional English (EF B2)",

    /* ---- Contact ---- */
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your next event.",
    "contact.lead": "Available for junior event project management roles from spring 2027. I'd be glad to hear from you.",
    "contact.email": "Email me",
    "contact.cv": "Download CV (PDF)",
    "contact.label.email": "Email",
    "contact.label.linkedin": "LinkedIn",
    "contact.label.location": "Location",
    "contact.location": "French Alps → Asia · 2027",
    "contact.linkedin.text": "View profile",

    /* ---- Footer ---- */
    "footer.rights": "Event Project Coordinator",
    "footer.copy": "© 2026 Maëli Fernandez. All rights reserved.",
    "footer.built": "Built with care in the French Alps.",

    /* ============ PROJECT 1 — Pour Faire Court ============ */
    "pfc.back": "Back to home",
    "pfc.role": "Logistics lead",
    "pfc.title": "Pour Faire Court — short-film festival, 9th edition",
    "pfc.meta.when": "Oct 2025 – Apr 2026",
    "pfc.meta.where": "Lyon, France",
    "pfc.meta.type": "Student festival · INSEEC master's production",
    "pfc.h.context": "Context",
    "pfc.context": "Pour Faire Court is a short-film festival in its 9th edition, produced by students as part of the INSEEC master's programme. I led logistics for a one-night event welcoming an audience, guests and speakers on site.",
    "pfc.h.role": "My role",
    "pfc.role.body": "As logistics lead, I owned everything that had to be ready before the doors opened — and everything that had to run smoothly once they did.",
    "pfc.h.did": "What I did",
    "pfc.did.1": "Booked the venue and coordinated the technical setup and equipment.",
    "pfc.did.2": "Sourced and briefed suppliers, and built the full run of show for the evening.",
    "pfc.did.3": "Managed a €5,000 budget from planning through to close.",
    "pfc.did.4": "Led a 10-person volunteer crew on the day: briefing, role allocation and real-time problem-solving.",
    "pfc.did.5": "Welcomed 100 attendees, guests and speakers on site.",
    "pfc.h.stats": "Key numbers",
    "pfc.stat1.n": "€5,000", "pfc.stat1.l": "budget managed",
    "pfc.stat2.n": "10", "pfc.stat2.l": "volunteers led",
    "pfc.stat3.n": "100", "pfc.stat3.l": "attendees on site",
    "pfc.stat4.n": "1", "pfc.stat4.l": "night, zero slip-ups",
    "pfc.h.visuals": "Visuals",
    "pfc.shot1": "Festival evening — photos coming",
    "pfc.shot2": "Back-planning schedule",
    "pfc.shot3": "Budget (anonymised)",
    "pfc.h.takeaway": "What I took away",
    "pfc.takeaway": "A one-night event gives you no second chance — the whole result rides on the preparation. I learned to build a run of show detailed enough that ten people could act on it without me having to hover.",

    /* ============ PROJECT 2 — Léon Event ============ */
    "leon.back": "Back to home",
    "leon.role": "Event project assistant",
    "leon.title": "Léon Event — corporate event agency",
    "leon.meta.when": "Jul – Dec 2026",
    "leon.meta.where": "Annecy, France",
    "leon.meta.type": "Internship · Corporate events",
    "leon.h.context": "Context",
    "leon.context": "Léon Event is a corporate event agency in Annecy. As event project assistant, I supported the project manager across the full cycle — from client brief to signed proposal — on seminars, corporate parties and incentives.",
    "leon.h.role": "My role",
    "leon.role.body": "I worked alongside the project manager, turning client briefs into structured, comparable, decision-ready proposals.",
    "leon.h.did": "What I did",
    "leon.did.1": "Took client briefs and translated them into sourcing requirements.",
    "leon.did.2": "Sourced venues, hotels, activities and suppliers to match each brief.",
    "leon.did.3": "Built cost / capacity / logistics comparisons to guide the choice.",
    "leon.did.4": "Assembled proposal decks and integrated client feedback through to signature.",
    "leon.h.stats": "Key numbers",
    "leon.stat1.n": "Full", "leon.stat1.l": "brief-to-signature cycle",
    "leon.stat2.n": "3", "leon.stat2.l": "event types handled",
    "leon.stat3.n": "Multi", "leon.stat3.l": "supplier sourcing",
    "leon.stat4.n": "6 mo", "leon.stat4.l": "agency internship",
    "leon.note.conf": "Confidentiality: client names are never shown. Figures and examples will be added once verified for public sharing — described only by type and range.",
    "leon.h.visuals": "Visuals",
    "leon.shot1": "Proposal deck extract (anonymised)",
    "leon.shot2": "Venue comparison table (anonymised)",
    "leon.shot3": "On site at Léon Event",
    "leon.h.takeaway": "What I took away",
    "leon.takeaway": "Sourcing is a decision-support job: the value isn't just finding options, it's laying them out so a client can choose with confidence. I got faster at spotting what really separates two venues on cost, capacity and logistics.",

    /* ============ PROJECT 3 — Astraez ============ */
    "astra.back": "Back to home",
    "astra.role": "Founder · Solo build",
    "astra.title": "Astraez — English learning for French schools",
    "astra.meta.when": "In development",
    "astra.meta.where": "Side project",
    "astra.meta.type": "Web platform · Built from zero",
    "astra.h.context": "Context",
    "astra.context": "Astraez is a web platform I created from scratch to help teach English in French schools. It's openly in development — a project I run end to end, from product vision to build.",
    "astra.h.vision": "The vision",
    "astra.vision": "Give French schools a clear, engaging way to teach English online — structured for the classroom, simple for teachers, and consistent from one lesson to the next.",
    "astra.h.did": "What it shows",
    "astra.did.1": "Initiative — I identified a need and started building rather than waiting.",
    "astra.did.2": "Digital skills — designing and building a web product hands-on.",
    "astra.did.3": "Solo project management — scoping, prioritising and shipping on my own.",
    "astra.h.stats": "At a glance",
    "astra.stat1.n": "0→1", "astra.stat1.l": "built from scratch",
    "astra.stat2.n": "Solo", "astra.stat2.l": "end-to-end ownership",
    "astra.stat3.n": "WIP", "astra.stat3.l": "in active development",
    "astra.stat4.n": "✦", "astra.stat4.l": "shares the constellation world",
    "astra.h.visuals": "Visuals",
    "astra.shot1": "Astraez — screens coming",
    "astra.shot2": "Product in progress",
    "astra.h.takeaway": "What I took away",
    "astra.takeaway": "Building Astraez taught me to manage a project when there's no one to hand it to — deciding what matters, cutting what doesn't, and keeping it moving. The same constellation world runs through this portfolio.",
    "astra.status": "In development",
  },

  fr: {
    /* ---- Document titles (browser tab) ---- */
    "__index_title": "Maëli Fernandez — Coordinatrice de projets événementiels",
    "__pfc_title": "Pour Faire Court — Maëli Fernandez",
    "__leon_title": "Léon Event — Maëli Fernandez",
    "__astra_title": "Astraez — Maëli Fernandez",

    /* ---- Navigation ---- */
    "nav.projects": "Projets",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.cv": "Télécharger le CV",
    "lang.aria": "Langue",

    /* ---- Hero ---- */
    "hero.title.html": "Un événement réussi paraît simple. Les miens sont <em>préparés</em> pour ça.",
    "hero.sub": "Coordinatrice de projets événementiels — lieux, prestataires, budgets, conducteur. Basée dans les Alpes françaises, départ pour l'Asie en 2027.",
    "hero.cta1": "Voir mes projets",
    "hero.cta2": "Télécharger le CV",
    "hero.badge": "Alpes françaises → Asie · 2027",

    /* ---- Marquee keywords ---- */
    "mq.1": "Recherche de lieux",
    "mq.2": "Budgets",
    "mq.3": "Prestataires",
    "mq.4": "Run of show",
    "mq.5": "Briefing d'équipe",
    "mq.6": "Propositions",

    /* ---- Projects section ---- */
    "projects.eyebrow": "Travaux sélectionnés",
    "projects.title": "Trois projets, un fil rouge : faire tenir le plan le jour J.",
    "projects.lead": "D'un festival étudiant à un stage en agence corporate, jusqu'à un produit conçu de zéro.",

    "p1.tag": "Festival · Responsable logistique",
    "p1.title": "Pour Faire Court",
    "p1.desc": "Logistique de bout en bout d'un festival de courts-métrages d'un soir : lieu, prestataires, budget de 5 000 € et équipe de 10 bénévoles le jour J.",
    "p2.tag": "Agence · Assistante de projet",
    "p2.title": "Léon Event",
    "p2.desc": "Support d'événements corporate de bout en bout — brief client, sourcing, comparatifs de coûts et decks de proposition.",
    "p3.tag": "Side project · En développement",
    "p3.title": "Astraez",
    "p3.desc": "Une plateforme web pour apprendre l'anglais dans les écoles françaises — conçue et développée de zéro, gérée en autonomie.",
    "projects.more": "Voir le projet",

    /* ---- Volunteering ---- */
    "vol.eyebrow": "Sur le terrain",
    "vol.title": "Bénévolat événementiel",
    "vol.lead": "De l'expérience en événementiel live, là où tout va vite et où la coordination fait tout.",
    "vol.1.title": "Festival International du Film d'Animation d'Annecy",
    "vol.1.desc": "Équipe du festival — le plus grand festival d'animation au monde.",
    "vol.1.year": "2024",
    "vol.2.title": "Marathon d'Annecy",
    "vol.2.desc": "Signaleuse sur le parcours en 2025 ; podium & remise des prix en 2026.",
    "vol.2.year": "2025 · 2026",

    /* ---- About ---- */
    "about.eyebrow": "À propos",
    "about.title": "Maëli Fernandez",
    "about.bio1": "Je suis titulaire d'un Master Communication, Marketing, Événementiel & RP de l'INSEEC Lyon. Après mon diplôme, j'ai fait le choix d'ajouter un stage de six mois en agence pour renforcer mon expérience de terrain.",
    "about.bio2": "Huit mois passés aux États-Unis m'ont montré à quel point je progresse en travaillant dans une autre culture. Je souhaite renouveler l'expérience en Asie. Je travaille en anglais professionnel (EF B2).",
    "about.bio3": "C'est dans la phase de préparation que je suis la plus utile — le sourcing, les budgets, le conducteur — là où l'anticipation décide discrètement du déroulé du jour J.",
    "about.relocate": "Départ pour l'Asie en 2027. Le Japon, la Corée du Sud, Taïwan et Hong Kong délivrent aux ressortissants français un visa vacances-travail de 12 mois : je peux donc rejoindre la bonne équipe, où qu'elle soit — autofinancé, aucun sponsoring employeur nécessaire.",
    "about.fact1": "Master — INSEEC Lyon",
    "about.fact2": "Stage de 6 mois en agence",
    "about.fact3": "8 mois aux États-Unis",
    "about.fact4": "Anglais professionnel (EF B2)",

    /* ---- Contact ---- */
    "contact.eyebrow": "Contact",
    "contact.title": "Parlons de votre prochain événement.",
    "contact.lead": "Disponible pour des postes juniors en gestion de projet événementiel à partir du printemps 2027. Au plaisir d'échanger.",
    "contact.email": "M'écrire",
    "contact.cv": "Télécharger le CV (PDF)",
    "contact.label.email": "Email",
    "contact.label.linkedin": "LinkedIn",
    "contact.label.location": "Localisation",
    "contact.location": "Alpes françaises → Asie · 2027",
    "contact.linkedin.text": "Voir le profil",

    /* ---- Footer ---- */
    "footer.rights": "Coordinatrice de projets événementiels",
    "footer.copy": "© 2026 Maëli Fernandez. Tous droits réservés.",
    "footer.built": "Conçu avec soin dans les Alpes françaises.",

    /* ============ PROJET 1 — Pour Faire Court ============ */
    "pfc.back": "Retour à l'accueil",
    "pfc.role": "Responsable logistique",
    "pfc.title": "Pour Faire Court — festival de courts-métrages, 9e édition",
    "pfc.meta.when": "Oct. 2025 – Avr. 2026",
    "pfc.meta.where": "Lyon, France",
    "pfc.meta.type": "Festival étudiant · Production master INSEEC",
    "pfc.h.context": "Contexte",
    "pfc.context": "Pour Faire Court est un festival de courts-métrages, à sa 9e édition, produit par des étudiants dans le cadre du master INSEEC. J'ai dirigé la logistique d'un événement d'un soir accueillant public, invités et intervenants sur site.",
    "pfc.h.role": "Mon rôle",
    "pfc.role.body": "En tant que responsable logistique, j'étais garante de tout ce qui devait être prêt avant l'ouverture des portes — et de tout ce qui devait bien se dérouler une fois ouvertes.",
    "pfc.h.did": "Ce que j'ai fait",
    "pfc.did.1": "Réservé le lieu et coordonné l'installation technique et le matériel.",
    "pfc.did.2": "Sourcé et briefé les prestataires, et construit le run of show complet de la soirée.",
    "pfc.did.3": "Géré un budget de 5 000 € de la planification à la clôture.",
    "pfc.did.4": "Dirigé une équipe de 10 bénévoles le jour J : briefing, répartition des rôles et résolution de problèmes en temps réel.",
    "pfc.did.5": "Accueilli 100 participants, invités et intervenants sur site.",
    "pfc.h.stats": "Chiffres clés",
    "pfc.stat1.n": "5 000 €", "pfc.stat1.l": "budget géré",
    "pfc.stat2.n": "10", "pfc.stat2.l": "bénévoles dirigés",
    "pfc.stat3.n": "100", "pfc.stat3.l": "participants sur site",
    "pfc.stat4.n": "1", "pfc.stat4.l": "soirée, aucun accroc",
    "pfc.h.visuals": "Visuels",
    "pfc.shot1": "Soirée du festival — photos à venir",
    "pfc.shot2": "Rétroplanning",
    "pfc.shot3": "Budget (anonymisé)",
    "pfc.h.takeaway": "Ce que j'en retire",
    "pfc.takeaway": "Un événement d'un soir ne laisse aucune seconde chance — tout le résultat repose sur la préparation. J'ai appris à construire un run of show assez détaillé pour que dix personnes puissent l'exécuter sans que j'aie à être partout.",

    /* ============ PROJET 2 — Léon Event ============ */
    "leon.back": "Retour à l'accueil",
    "leon.role": "Assistante de projet événementiel",
    "leon.title": "Léon Event — agence événementielle corporate",
    "leon.meta.when": "Juil. – Déc. 2026",
    "leon.meta.where": "Annecy, France",
    "leon.meta.type": "Stage · Événementiel corporate",
    "leon.h.context": "Contexte",
    "leon.context": "Léon Event est une agence événementielle corporate à Annecy. En tant qu'assistante de projet événementiel, j'ai accompagné le chef de projet sur l'ensemble du cycle — du brief client à la proposition signée — sur des séminaires, soirées d'entreprise et incentives.",
    "leon.h.role": "Mon rôle",
    "leon.role.body": "J'ai travaillé aux côtés du chef de projet, transformant les briefs clients en propositions structurées, comparables et prêtes à la décision.",
    "leon.h.did": "Ce que j'ai fait",
    "leon.did.1": "Pris les briefs clients et traduits en besoins de sourcing.",
    "leon.did.2": "Sourcé lieux, hôtels, activités et prestataires en fonction de chaque brief.",
    "leon.did.3": "Construit des comparatifs coût / capacité / logistique pour guider le choix.",
    "leon.did.4": "Monté les decks de proposition et intégré les retours client jusqu'à la signature.",
    "leon.h.stats": "Chiffres clés",
    "leon.stat1.n": "Complet", "leon.stat1.l": "cycle brief → signature",
    "leon.stat2.n": "3", "leon.stat2.l": "typologies d'événements",
    "leon.stat3.n": "Multi", "leon.stat3.l": "sourcing de prestataires",
    "leon.stat4.n": "6 mois", "leon.stat4.l": "stage en agence",
    "leon.note.conf": "Confidentialité : aucun nom de client n'est affiché. Les chiffres et exemples seront ajoutés après vérification pour une diffusion publique — décrits uniquement par type et par ordre de grandeur.",
    "leon.h.visuals": "Visuels",
    "leon.shot1": "Extrait de deck de proposition (anonymisé)",
    "leon.shot2": "Tableau comparatif de lieux (anonymisé)",
    "leon.shot3": "Sur site chez Léon Event",
    "leon.h.takeaway": "Ce que j'en retire",
    "leon.takeaway": "Le sourcing est un métier d'aide à la décision : la valeur n'est pas seulement de trouver des options, mais de les présenter pour qu'un client choisisse en confiance. J'ai gagné en rapidité pour repérer ce qui distingue vraiment deux lieux sur le coût, la capacité et la logistique.",

    /* ============ PROJET 3 — Astraez ============ */
    "astra.back": "Retour à l'accueil",
    "astra.role": "Fondatrice · Développé en solo",
    "astra.title": "Astraez — apprentissage de l'anglais pour les écoles françaises",
    "astra.meta.when": "En développement",
    "astra.meta.where": "Side project",
    "astra.meta.type": "Plateforme web · Créée de zéro",
    "astra.h.context": "Contexte",
    "astra.context": "Astraez est une plateforme web que j'ai créée de zéro pour aider à enseigner l'anglais dans les écoles françaises. Le projet est ouvertement en développement — un projet que je mène de bout en bout, de la vision produit à la réalisation.",
    "astra.h.vision": "La vision",
    "astra.vision": "Offrir aux écoles françaises une manière claire et engageante d'enseigner l'anglais en ligne — structurée pour la classe, simple pour les enseignants, et cohérente d'un cours à l'autre.",
    "astra.h.did": "Ce que ça démontre",
    "astra.did.1": "Initiative — j'ai identifié un besoin et commencé à construire plutôt que d'attendre.",
    "astra.did.2": "Compétences digitales — concevoir et développer un produit web de façon concrète.",
    "astra.did.3": "Gestion de projet en solo — cadrer, prioriser et livrer par moi-même.",
    "astra.h.stats": "En bref",
    "astra.stat1.n": "0→1", "astra.stat1.l": "créé de zéro",
    "astra.stat2.n": "Solo", "astra.stat2.l": "prise en charge de bout en bout",
    "astra.stat3.n": "WIP", "astra.stat3.l": "en développement actif",
    "astra.stat4.n": "✦", "astra.stat4.l": "partage l'univers des constellations",
    "astra.h.visuals": "Visuels",
    "astra.shot1": "Astraez — écrans à venir",
    "astra.shot2": "Produit en cours",
    "astra.h.takeaway": "Ce que j'en retire",
    "astra.takeaway": "Construire Astraez m'a appris à gérer un projet quand il n'y a personne à qui le déléguer — décider ce qui compte, couper le reste et le faire avancer. Le même univers de constellations traverse ce portfolio.",
    "astra.status": "En développement",
  },
};

/* ============================================================
   LANGUAGE ENGINE — no need to edit below this line.
   ============================================================ */
(function () {
  const DEFAULT_LANG = "en";
  const STORE_KEY = "maeli-lang";

  function getLang() {
    const saved = localStorage.getItem(STORE_KEY);
    return I18N[saved] ? saved : DEFAULT_LANG;
  }

  function apply(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];
    document.documentElement.setAttribute("lang", lang);

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    // Rich HTML nodes (may contain <em> etc.)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    // Attributes: data-i18n-attr="aria-label:key; title:key2"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });
    // Document <title> and meta description via data-i18n-title / data-i18n-desc on <html>? use dedicated hooks
    const titleKey = document.documentElement.getAttribute("data-title-key");
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];

    // Toggle button state
    document.querySelectorAll(".lang button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    localStorage.setItem(STORE_KEY, lang);
    apply(lang);
  }

  // Expose + init
  window.setLang = setLang;
  document.addEventListener("DOMContentLoaded", () => {
    apply(getLang());
    document.querySelectorAll(".lang button").forEach((b) => {
      b.addEventListener("click", () => setLang(b.dataset.lang));
    });
  });
})();
