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

    /* ---- Recap rail (project pages) ---- */
    "aside.heading": "Summary",
    "aside.role": "Role",
    "aside.dates": "Dates",
    "aside.location": "Location",
    "aside.budget": "Budget",
    "aside.team": "Team",
    "aside.status": "Status",

    /* ---- CV file (English version) ----
       "cv.href" is written WITHOUT any leading "../": the language engine
       adds it automatically on pages inside projects/. Only edit the
       file name if you rename the PDF in assets/cv/. */
    "cv.href": "assets/cv/Maeli_Fernandez_CV_EN.pdf",
    "cv.filename": "Maeli_Fernandez_CV_EN.pdf",
    "cv.hreflang": "en",

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

    "p1.tag": "Festival · Logistics co-lead",
    "p1.title": "Pour Faire Court",
    "p1.desc": "Co-leading end-to-end logistics for a one-night short-film festival: venue, suppliers, a €3,500 logistics budget and a 10-person crew on the day.",
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
    "vol.1.credit": "Annecy International Animation Film Festival, 2024 — festival crew.",
    "vol.2.title": "Annecy Marathon",
    "vol.2.desc": "Course marshalling in 2025; podium & prize-giving in 2026.",
    "vol.2.year": "2025 · 2026",
    "vol.beyond.title": "Volunteering beyond events",
    "vol.3.name": "Initea",
    "vol.3.role": "Head of communications, independent association, 2024 (5 months)",
    "vol.4.role": "Communications advice for an Annecy-based association (occasional volunteering)",

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
    "pfc.role": "Logistics co-lead",
    "pfc.title": "Pour Faire Court — short-film festival, 9th edition",
    "pfc.meta.when": "Oct 2025 – Apr 2026",
    "pfc.meta.where": "Lyon, France",
    "pfc.aside.budget": "€5,000 total · €3,500 logistics",
    "pfc.aside.team": "10 volunteers",
    "pfc.meta.type": "Student festival · INSEEC master's production",
    "pfc.meta.event": "30 March 2026 — Salle Barbara, MJC Montchat, Lyon",
    "pfc.h.context": "Context",
    "pfc.context": "Pour Faire Court is a short-film festival in its 9th edition, produced by students as part of the INSEEC master's programme. I co-led logistics for a one-night event welcoming an audience, guests and speakers on site.",
    "pfc.h.role": "My role",
    "pfc.role.body": "As logistics co-lead, I owned the venue, the technical setup, the suppliers and the run of show. Of the festival's €5,000 total budget, €3,500 was allocated to logistics and split across both leads: we validated each other's spending decisions as we went, rather than discovering a conflict the week before the event.",
    "pfc.h.did": "What I did",
    "pfc.did.1": "Booked the venue and coordinated the technical setup and equipment.",
    "pfc.did.2": "Sourced and briefed suppliers, and built the full run of show for the evening.",
    "pfc.did.3": "Co-managed the €3,500 logistics budget across two leads, with joint sign-off on spending decisions.",
    "pfc.did.4": "Co-led a 10-person volunteer crew on the day: briefing, role allocation and real-time problem-solving.",
    "pfc.did.5": "Welcomed 100 attendees, guests and speakers on site.",
    "pfc.h.hard": "The hard parts",
    "pfc.hard.1.a": "Half the planned budget was frozen mid-project",
    "pfc.hard.1.b": "We planned against €10,000; half was frozen while sourcing was already under way, leaving €5,000 for the whole festival. The team rebuilt the funding through four channels — an institutional negotiation I took part in, a donation drive, private contributions and a prize raffle, for which I sourced prizes from local retailers. I then re-scoped venue and suppliers against what was actually left.",
    "pfc.hard.2.a": "A private hire that wasn't private",
    "pfc.hard.2.b": "The contract covered the auditorium, the cocktail room and the adjoining corridor, but the public kept circulating through our space on the night. I negotiated access restrictions with the venue on the spot. I now plan for door staff even when the brief says they aren't required.",
    "pfc.hard.3.a": "The run of show broke during the event",
    "pfc.hard.3.b": "A schedule change upstream pushed the cocktail service out of sequence. We rewrote the running order live and closed on time. Since then I keep one crew member unassigned — a floater whose only job is to absorb what the plan didn't predict.",
    "pfc.h.stats": "Key numbers",
    "pfc.stat1.n": "€3,500", "pfc.stat1.l": "logistics budget",
    "pfc.stat2.n": "10", "pfc.stat2.l": "volunteers led",
    "pfc.stat3.n": "100", "pfc.stat3.l": "attendees on site",
    "pfc.stat4.n": "1", "pfc.stat4.l": "night, zero slip-ups",
    "pfc.h.visuals": "Visuals",
    "pfc.visual.regie": "The control booth during the screenings: projection, sound and lighting, run against the show schedule.",
    "pfc.visual.equipe": "With Jeffnie Verderi, co-lead of the artistic team, on site the night of the festival — 30 March 2026.",
    "pfc.video.credit": "Video: Pour Faire Court communications team, INSEEC Lyon",
    "pfc.video.play": "Play the video",
    "pfc.video.label": "Pour Faire Court — official video, 9th edition",
    "pfc.h.takeaway": "What I took away",
    "pfc.takeaway": "A one-night event gives you no second chance — the whole result rides on the preparation. I learned to build a run of show detailed enough that ten people could act on it without us having to hover.",

    /* ============ PROJECT 2 — Léon Event ============ */
    "leon.back": "Back to home",
    "leon.role": "Event project assistant",
    "leon.title": "Léon Event — corporate event agency",
    "leon.meta.when": "Jul – Dec 2026",
    "leon.meta.where": "Annecy, France",
    "leon.aside.budget": "Confidential",
    "leon.meta.type": "Internship · Corporate events",
    "leon.h.context": "Context",
    "leon.context": "Léon Event is a corporate event agency in Annecy. As event project assistant, I supported the project manager across the full cycle — from client brief to signed proposal — on seminars, corporate parties and incentives.",
    "leon.h.role": "My role",
    "leon.role.body": "I worked alongside the project manager, turning client briefs into structured, comparable, decision-ready proposals — and learning the mechanics of how an agency actually operates.",
    "leon.h.did": "What I did",
    "leon.did.1": "Took client briefs and translated them into sourcing requirements.",
    "leon.did.2": "Sourced venues, hotels, activities and suppliers to match each brief.",
    "leon.did.3": "Built cost / capacity / logistics comparisons to guide the choice.",
    "leon.did.4": "Assembled proposal decks and integrated client feedback through to signature.",
    "leon.note.conf": "Client names and figures are withheld out of respect for agency confidentiality. I'm happy to walk through specifics in an interview.",
    "leon.h.learn": "What the job taught me",
    "leon.learn.1.a": "An agency sells expertise, not just suppliers",
    "leon.learn.1.b": "I hadn't understood that agencies apply a margin on the services they resell. It reframed how I read a proposal: every line has to justify itself to the client, because the client is paying for the selection and the coordination, not only for the venue.",
    "leon.learn.2.a": "Nothing goes out without sign-off",
    "leon.learn.2.b": "Every proposal is validated by the project manager and the director before it reaches the client. I learned to build a deck that can be reviewed quickly — comparable options, explicit assumptions, no gaps for someone else to fill in.",
    "leon.learn.3.a": "Sourcing runs on follow-up",
    "leon.learn.3.b": "Suppliers don't answer first time, even when there's money on the table. Chasing is not a failure of the process, it is the process. I also learned to work around local habits — you don't call Spain in the early afternoon and expect an answer.",
    "leon.learn.4.a": "A plan B is a document, not an intention",
    "leon.learn.4.b": "I knew the principle; I learned the practice. A fallback only counts if it is costed, sourced and ready to be swapped in — otherwise it is just a sentence in a meeting.",
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
    "astra.aside.team": "Solo",
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

    /* ---- Encadré récapitulatif (pages projet) ---- */
    "aside.heading": "En résumé",
    "aside.role": "Rôle",
    "aside.dates": "Dates",
    "aside.location": "Lieu",
    "aside.budget": "Budget",
    "aside.team": "Équipe",
    "aside.status": "Statut",

    /* ---- Fichier CV (version française) ----
       "cv.href" s'écrit SANS "../" au début : le moteur de langue l'ajoute
       automatiquement sur les pages du dossier projects/. Ne modifier que
       le nom du fichier si le PDF est renommé dans assets/cv/. */
    "cv.href": "assets/cv/Maeli_Fernandez_CV_FR.pdf",
    "cv.filename": "Maeli_Fernandez_CV_FR.pdf",
    "cv.hreflang": "fr",

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

    "p1.tag": "Festival · Co-responsable logistique",
    "p1.title": "Pour Faire Court",
    "p1.desc": "Co-pilotage de la logistique de bout en bout d'un festival de courts-métrages d'un soir : lieu, prestataires, budget logistique de 3 500 € et équipe de 10 bénévoles le jour J.",
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
    "vol.1.credit": "Festival international du film d'animation d'Annecy, 2024 — équipe bénévole.",
    "vol.2.title": "Marathon d'Annecy",
    "vol.2.desc": "Signaleuse sur le parcours en 2025 ; podium & remise des prix en 2026.",
    "vol.2.year": "2025 · 2026",
    "vol.beyond.title": "Engagement associatif",
    "vol.3.name": "Initea",
    "vol.3.role": "Directrice de la communication, association indépendante, 2024 (5 mois)",
    "vol.4.role": "Conseil en communication auprès d'une association annécienne (bénévolat ponctuel)",

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
    "pfc.role": "Co-responsable logistique",
    "pfc.title": "Pour Faire Court — festival de courts-métrages, 9e édition",
    "pfc.meta.when": "Oct. 2025 – Avr. 2026",
    "pfc.meta.where": "Lyon, France",
    "pfc.aside.budget": "5 000 € au total · 3 500 € logistique",
    "pfc.aside.team": "10 bénévoles",
    "pfc.meta.type": "Festival étudiant · Production master INSEEC",
    "pfc.meta.event": "30 mars 2026 — Salle Barbara, MJC Montchat, Lyon",
    "pfc.h.context": "Contexte",
    "pfc.context": "Pour Faire Court est un festival de courts-métrages, à sa 9e édition, organisé par les étudiants du master INSEEC. J'ai co-dirigé la logistique de cette soirée, qui accueillait public, invités et intervenants sur site.",
    "pfc.h.role": "Mon rôle",
    "pfc.role.body": "Co-responsable logistique, j'étais garante du lieu, de l'installation technique, des prestataires et du conducteur. Sur les 5 000 € de budget total du festival, 3 500 € étaient alloués à la logistique et répartis entre les deux pôles : chaque décision de dépense était validée par l'autre responsable au fil de l'eau, plutôt que découverte la semaine précédant l'événement.",
    "pfc.h.did": "Ce que j'ai fait",
    "pfc.did.1": "Réservé le lieu et coordonné l'installation technique et le matériel.",
    "pfc.did.2": "Sélectionné et briefé les prestataires, et établi le conducteur complet de la soirée.",
    "pfc.did.3": "Co-géré le budget logistique de 3 500 € réparti entre deux pôles, avec validation croisée des décisions de dépense.",
    "pfc.did.4": "Co-piloté une équipe de 10 bénévoles le jour J : briefing, répartition des rôles et résolution de problèmes en temps réel.",
    "pfc.did.5": "Accueilli 100 participants, invités et intervenants sur site.",
    "pfc.h.hard": "Ce qui a été difficile",
    "pfc.hard.1.a": "La moitié du budget prévisionnel a été gelée en cours de projet",
    "pfc.hard.1.b": "Le prévisionnel était de 10 000 € ; la moitié a été gelée alors que le sourcing était déjà lancé, ne laissant que 5 000 € pour l'ensemble du festival. L'équipe a reconstruit le financement par quatre canaux — une négociation institutionnelle à laquelle j'ai participé, un appel aux dons, des contributions privées et une tombola, dont je suis allée chercher les lots auprès de commerçants. J'ai ensuite revu lieu et prestataires en fonction de ce qui restait réellement.",
    "pfc.hard.2.a": "Une privatisation qui n'en était pas une",
    "pfc.hard.2.b": "Le contrat couvrait l'auditorium, la salle de cocktail et le couloir attenant, mais le public a circulé dans notre espace toute la soirée. J'ai négocié sur place une restriction d'accès avec le lieu. Depuis, je prévois du personnel de porte même quand le cahier des charges ne l'exige pas.",
    "pfc.hard.3.a": "Le conducteur a cassé pendant l'événement",
    "pfc.hard.3.b": "Un décalage d'horaire en amont a désynchronisé le service du cocktail. Nous avons réécrit le déroulé en direct et terminé à l'heure. Depuis, je garde une personne non affectée dans l'équipe — un joker dont le seul rôle est d'absorber ce que le plan n'avait pas prévu.",
    "pfc.h.stats": "Chiffres clés",
    "pfc.stat1.n": "3 500 €", "pfc.stat1.l": "budget logistique",
    "pfc.stat2.n": "10", "pfc.stat2.l": "bénévoles encadrés",
    "pfc.stat3.n": "100", "pfc.stat3.l": "participants accueillis",
    "pfc.stat4.n": "1", "pfc.stat4.l": "soirée, sans accroc",
    "pfc.h.visuals": "Visuels",
    "pfc.visual.regie": "La régie pendant les projections : image, son et lumière, calés sur le conducteur.",
    "pfc.visual.equipe": "Avec Jeffnie Verderi, co-responsable du pôle artistique, sur site le soir du festival — 30 mars 2026.",
    "pfc.video.credit": "Vidéo : équipe communication Pour Faire Court, INSEEC Lyon",
    "pfc.video.play": "Lancer la vidéo",
    "pfc.video.label": "Pour Faire Court — vidéo officielle, 9e édition",
    "pfc.h.takeaway": "Ce que j'en retire",
    "pfc.takeaway": "Un événement d'un soir ne laisse aucune seconde chance — tout le résultat repose sur la préparation. J'ai appris à construire un conducteur assez détaillé pour que dix personnes puissent l'exécuter sans que nous ayons à être partout.",

    /* ============ PROJET 2 — Léon Event ============ */
    "leon.back": "Retour à l'accueil",
    "leon.role": "Assistante de projet événementiel",
    "leon.title": "Léon Event — agence événementielle corporate",
    "leon.meta.when": "Juil. – Déc. 2026",
    "leon.meta.where": "Annecy, France",
    "leon.aside.budget": "Confidentiel",
    "leon.meta.type": "Stage · Événementiel corporate",
    "leon.h.context": "Contexte",
    "leon.context": "Léon Event est une agence événementielle corporate à Annecy. En tant qu'assistante de projet événementiel, j'ai accompagné le chef de projet sur l'ensemble du cycle — du brief client à la proposition signée — sur des séminaires, soirées d'entreprise et incentives.",
    "leon.h.role": "Mon rôle",
    "leon.role.body": "J'ai travaillé aux côtés du chef de projet, en transformant les briefs clients en propositions structurées, comparables et prêtes à la décision — tout en apprenant les mécanismes réels du fonctionnement d'une agence.",
    "leon.h.did": "Ce que j'ai fait",
    "leon.did.1": "Pris les briefs clients et traduits en besoins de sourcing.",
    "leon.did.2": "Sourcé lieux, hôtels, activités et prestataires en fonction de chaque brief.",
    "leon.did.3": "Construit des comparatifs coût / capacité / logistique pour guider le choix.",
    "leon.did.4": "Monté les decks de proposition et intégré les retours client jusqu'à la signature.",
    "leon.note.conf": "Les noms de clients et les chiffres ne sont pas publiés, par respect de la confidentialité de l'agence. J'en parle volontiers en entretien.",
    "leon.h.learn": "Ce que j'ai appris du métier",
    "leon.learn.1.a": "Une agence vend une expertise, pas seulement des prestataires",
    "leon.learn.1.b": "Je n'avais pas saisi que les agences appliquent une marge sur les prestations revendues. Cela a changé ma lecture d'une proposition : chaque ligne doit se justifier auprès du client, car il paie la sélection et la coordination, pas uniquement le lieu.",
    "leon.learn.2.a": "Rien ne sort sans validation",
    "leon.learn.2.b": "Chaque proposition est validée par le chef de projet puis par la direction avant d'arriver chez le client. J'ai appris à construire un deck relisible rapidement : des options comparables, des hypothèses explicites, aucun trou à combler par quelqu'un d'autre.",
    "leon.learn.3.a": "Le sourcing repose sur la relance",
    "leon.learn.3.b": "Les prestataires ne répondent pas du premier coup, même quand il y a un budget à la clé. Relancer n'est pas un raté du processus, c'est le processus. J'ai aussi appris à composer avec les usages locaux : on n'appelle pas l'Espagne en début d'après-midi en espérant une réponse.",
    "leon.learn.4.a": "Un plan B est un document, pas une intention",
    "leon.learn.4.b": "J'en connaissais le principe ; j'en ai appris la pratique. Une solution de repli ne compte que si elle est chiffrée, sourcée et prête à être substituée — sinon ce n'est qu'une phrase prononcée en réunion.",
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
    "astra.aside.team": "En solo",
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

  /* Pages inside projects/ are one folder deeper, so links built from a
     translation key need "../" in front. Pages declare this themselves with
     data-path-prefix on <html>; if it's missing we fall back to detecting
     the projects/ folder from the URL. */
  const PATH_PREFIX = (function () {
    const declared = document.documentElement.getAttribute("data-path-prefix");
    if (declared != null) return declared;
    return /\/projects\/[^/]*$/.test(location.pathname) ? "../" : "";
  })();

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
    // Values for href/src are treated as page-relative paths and get the
    // page's prefix (see PATH_PREFIX below) so the same translation key
    // works from the root and from inside projects/.
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (!attr || !key || dict[key] == null) return;
        const isPath = attr === "href" || attr === "src";
        el.setAttribute(attr, isPath ? PATH_PREFIX + dict[key] : dict[key]);
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
