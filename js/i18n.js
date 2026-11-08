/* ============================================================
   TRANSLATIONS - this is where ALL the site text lives.
   ------------------------------------------------------------
   To change wording, edit the strings below. Every string has an
   English (en) and French (fr) version. Keep the key on the left
   (e.g. "hero.title") exactly as it is - only edit the text in quotes.

   A few keys end in ".html": those may contain simple tags like
   <em>…</em> (italic + violet underline). Keep the tags balanced.

   The logic that switches languages is at the BOTTOM of this file.
   You don't need to touch it.
   ============================================================ */

const I18N = {
  en: {
    /* ---- Document titles (browser tab) ---- */
    "__index_title": "Maëli Fernandez | Event Project Coordinator",
    "__pfc_title": "Pour Faire Court | Maëli Fernandez",
    "__leon_title": "Léon Event | Maëli Fernandez",
    "__astra_title": "Astraez | Maëli Fernandez",

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
    "hero.title.html": "Event project coordination, from brief to run of show.",
    "hero.sub": "Venues, suppliers, budgets, run of show. Based in the French Alps, open to international roles from February 2027.",
    "hero.cta1": "See my projects",
    "hero.cta2": "Download CV",
    "hero.badge": "French Alps → International · Feb 2027",

    /* ---- Marquee keywords ---- */
    "mq.1": "Venue sourcing",
    "mq.2": "Budgets",
    "mq.3": "Suppliers",
    "mq.4": "Run of show",
    "mq.5": "Team briefing",
    "mq.6": "Proposals",

    /* ---- Projects section ---- */
    "projects.eyebrow": "Selected work",
    "projects.title": "Three projects, from planning to delivery.",
    "projects.lead": "From a corporate agency internship to a product built from scratch and a student film festival.",

    "p1.tag": "Festival · Logistics co-lead",
    "p1.title": "Pour Faire Court",
    "p1.desc": "Co-leading end-to-end logistics for a one-night short-film festival: venue, suppliers, a €3,500 logistics budget and a 10-person crew on the day.",
    "p2.tag": "Agency · Assistant project manager",
    "p2.title": "Léon Event",
    "p2.desc": "Bid responses for corporate events, some led on my own from brief to final proposal, plus two on-site team-building days for up to 440 people.",
    "p3.tag": "Side project · In development",
    "p3.title": "Astraez",
    "p3.desc": "A web platform to learn English through games, designed and built from scratch on my own.",
    "projects.more": "View project",

    /* ---- Volunteering ---- */
    "vol.eyebrow": "Volunteering",
    "vol.title": "Alongside my studies and professional life",
    "vol.lead": "From festivals and a marathon welcoming thousands of people, where I worked as general event staff, to an association where I led communications.",
    "vol.1.title": "Annecy International Animation Film Festival",
    "vol.1.role": "General event staff",
    "vol.1.desc": "The world's largest animation festival.",
    "vol.1.year": "2024",
    "vol.2.title": "High Five Festival",
    "vol.2.role": "General event staff",
    "vol.2.desc": "Festival crew on two editions.",
    "vol.2.year": "2024 · 2025",
    "vol.3.title": "Annecy Marathon",
    "vol.3.role": "General event staff",
    "vol.3.desc": "Course marshalling in 2025, podium and prize-giving in 2026.",
    "vol.3.year": "2025 · 2026",
    "vol.4.title": "Initea",
    "vol.4.role": "Communications lead · Association",
    "vol.4.desc": "Rebuilt the association's brand guidelines and visual identity.",
    "vol.4.year": "2024",

    /* ---- About ---- */
    "about.eyebrow": "About",
    "about.title": "Maëli Fernandez",
    "about.bio1": "I hold a Master's in Communication, Marketing, Events & Public Relations from INSEEC Lyon, and chose to complete it with six months in an event agency, where I handle bid responses, sourcing and event coordination.",
    "about.bio2": "I love learning and I'm always looking to improve what already exists, whether it's a way of working, a proposal or the flow of an event. That's what I enjoy about events: every project is different, calls for quick adaptation and teaches me something new.",
    "about.bio3": "Eight months in the United States gave me a taste for working internationally, and that's the direction I'm building my career in.",
    "about.relocate": "Relocating abroad from February 2027, open worldwide, with a particular interest in Asia.",

    /* ---- Tools ---- */
    "tools.eyebrow": "Tools",
    "tools.title": "The tools I work with",
    "tools.g1": "Office & communication",
    "tools.g2": "Project management & collaboration",
    "tools.g3": "Design & web",
    "tools.g4": "AI & automation",
    "about.fact1": "Master, INSEEC Lyon",
    "about.fact2": "6-month agency internship",
    "about.fact3": "8 months in the USA",
    "about.fact4": "Professional English (EF B2)",

    /* ---- Contact ---- */
    "contact.eyebrow": "Contact",
    "contact.title": "Hiring for your event team? Let's talk.",
    "contact.lead": "Available from February 2027 for a junior event project role, wherever the right team is. I'd be glad to hear from you.",
    "contact.email": "Email me",
    "contact.cv": "Download CV (PDF)",
    "contact.label.email": "Email",
    "contact.label.linkedin": "LinkedIn",
    "contact.label.location": "Location",
    "contact.location": "French Alps → International · Feb 2027",
    "contact.linkedin.text": "View profile",

    /* ---- Footer ---- */
    "footer.rights": "Event Project Coordinator",
    "footer.copy": "© 2026 Maëli Fernandez. All rights reserved.",
    "footer.legal": "Legal notice & privacy",

    /* ============ PROJECT 1 - Pour Faire Court ============ */
    "pfc.back": "Back to home",
    "pfc.role": "Logistics co-lead",
    "pfc.title": "Pour Faire Court",
    "pfc.subtitle": "Short-film festival, 9th edition",
    "pfc.meta.when": "Oct 2025 – Apr 2026",
    "pfc.meta.where": "Lyon, France",
    "pfc.aside.budget": "€5,000 total · €3,500 logistics",
    "pfc.aside.team": "10 volunteers",
    "pfc.meta.type": "Student festival · INSEEC master's production",
    "pfc.meta.event": "30 March 2026, Salle Barbara, MJC Montchat, Lyon",
    "pfc.h.context": "Context",
    "pfc.context": "Pour Faire Court is a short-film festival in its 9th edition, produced by students as part of the INSEEC master's programme. I co-led logistics for a one-night event welcoming an audience, guests and speakers on site.",
    "pfc.h.role": "My role",
    "pfc.role.body": "As logistics co-lead, I managed the venue, technical setup, suppliers and run of show together with my colleague. Of the festival's €5,000 budget, €3,500 went to logistics, which we managed as a pair: we approved every expense together as we went, so we always knew exactly what was left.",
    "pfc.h.did": "What I did",
    "pfc.did.1": "I wrote the event's logistics brief.",
    "pfc.did.2": "Using that brief, I identified suitable venues, contacted each one and handled the discussions, then presented a shortlist that the association voted on.",
    "pfc.did.3": "I followed the same process for suppliers, from decoration to the other services.",
    "pfc.did.4": "I co-managed the €3,500 logistics budget with my colleague.",
    "pfc.did.5": "I built the full run of show for the evening.",
    "pfc.did.6": "On the day, I co-led a team of 10 volunteers: briefing, role allocation and real-time problem solving.",
    "pfc.did.7": "We welcomed around 100 attendees, guests and speakers on site.",
    "pfc.h.hard": "The hard parts",
    "pfc.hard.1.a": "Part of the funding was withdrawn mid-project",
    "pfc.hard.1.b": "The forecast budget was €10,000. Mid-project, with sourcing already under way, half of that amount was not allocated to us after all, leaving €5,000 for the whole festival. The team found new funding through four channels: an institutional negotiation I took part in, a donation drive, private contributions and a raffle, for which I approached local shops for prizes. I then adapted the choice of venue and suppliers to the real budget.",
    "pfc.hard.2.a": "A private hire that wasn't private",
    "pfc.hard.2.b": "The contract covered the auditorium, the cocktail room and the adjoining corridor, but the public kept circulating through our space on the night. I negotiated access restrictions with the venue on the spot. I now plan for door staff even when the brief says they aren't required.",
    "pfc.hard.3.a": "The run of show had to be reworked live",
    "pfc.hard.3.b": "A delay earlier in the evening pushed back the cocktail service. We reorganised the running order on the spot and finished on time. Since then, I always keep one team member without a fixed post, free to handle the unexpected.",
    "pfc.h.stats": "Key numbers",
    "pfc.stat1.n": "€3,500", "pfc.stat1.l": "logistics budget",
    "pfc.stat2.n": "10", "pfc.stat2.l": "volunteers led",
    "pfc.stat3.n": "100", "pfc.stat3.l": "attendees on site",
    "pfc.stat4.n": "1", "pfc.stat4.l": "night, finished on time",
    "pfc.h.visuals": "Visuals",
    "pfc.visual.regie": "The control booth during the screenings: projection, sound and lighting, run against the show schedule.",
    "pfc.visual.equipe": "With Jeffnie Verderi, co-lead of the artistic team, on site the night of the festival, 30 March 2026.",
    "pfc.video.credit": "Video: Pour Faire Court communications team, INSEEC Lyon",
    "pfc.video.play": "Play the video",
    "pfc.video.label": "Pour Faire Court, official video (9th edition)",
    "pfc.h.takeaway": "Outcome",
    "pfc.takeaway": "Pour Faire Court was my first experience of running logistics from start to finish, from the brief to the night itself. A one-night event leaves no second chance: everything depends on the preparation, and the run of show has to be precise enough for a whole team to follow.",
    "pfc.takeaway2": "The project also made me more versatile. Between finding funding, choosing suppliers, coordinating volunteers and handling surprises on site, I learned to switch roles quickly while keeping the shared goal in sight.",

    /* ============ PROJECT 2 - Léon Event ============ */
    "leon.back": "Back to home",
    "leon.role": "Assistant project manager",
    "leon.title": "Léon Event",
    "leon.subtitle": "Corporate event agency",
    "leon.meta.when": "Jul 2026 – present",
    "leon.meta.where": "Annecy, France",
    "leon.aside.budget": "CHF 40k – €200k (anonymised)",
    "leon.meta.type": "Internship · Corporate events",
    "leon.h.context": "Context",
    "leon.context": "Léon Event is part of the Nanocristo group, which brings together several companies specialised in events and activities across Haute-Savoie, Switzerland and the Netherlands. With offices in Annecy, Geneva and Amsterdam, Léon designs tailor-made corporate events: seminars, parties and incentives, in France and abroad.",
    "leon.h.role": "My role",
    "leon.role.body": "I support the agency's project managers in two ways, depending on the file. On some, I work in close coordination with the project manager, from building the concept to the final proposal. On others, I run the file almost independently, from the bid response to sending it to the client, with a light review before it goes out.",
    "leon.h.did": "What I did",
    "leon.did.1": "Translating client briefs into sourcing requirements.",
    "leon.did.2": "Sourcing venues, hotels, activities and suppliers for each brief.",
    "leon.did.3": "Building cost, capacity and logistics comparisons to guide the client's choice.",
    "leon.did.4": "Producing proposal decks and integrating client feedback through to signature.",
    "leon.did.5": "Negotiating rates with suppliers.",
    "leon.did.6": "Organising site visits with suppliers to align teams and needs before the event.",
    "leon.did.7": "Placing the orders needed to deliver the event.",
    "leon.did.8": "Handling transport bookings, for individuals and groups.",
    "leon.did.9": "Coordinating the event on the day.",
    "leon.h.field": "On the ground",
    "leon.field.body": "During my six-month internship, I coordinated one of the agency's events on site and took part in two team-building days for Mousqueton, another company in the group.",
    "leon.field.0.a": "Geneva · 220 guests",
    "leon.field.0.b": "A 90s-themed corporate evening, which I coordinated on site with my project manager.",
    "leon.field.1.a": "Courchevel · around 150 participants",
    "leon.field.1.b": "Team challenge built around skill-based activities. I set up the activity stations, then ran one station on my own (obstacle course, word puzzle, precision throwing) and managed the team rotations.",
    "leon.field.2.a": "Les Arcs · 440 participants",
    "leon.field.2.b": "Large-scale challenge with teams of 10 to 11 arriving in waves. Set-up with the activity team, then running a fire-lighting challenge while keeping each team on schedule.",
    "leon.h.internal": "Internal projects",
    "leon.internal.body": "Alongside client files, I also contribute to how the agency and its group work.",
    "leon.internal.1.a": "Ways of working",
    "leon.internal.1.b": "I helped make the agency more efficient by taking part in setting up new shared working methods.",
    "leon.internal.2.a": "Success story session for the group",
    "leon.internal.2.b": "A success story session is a presentation of concrete, successful examples, designed to share good practice between teams. With two colleagues, I organised one for all the companies in the group, on using digital and AI tools well: saving time, getting better organised and developing ideas.",
    "leon.h.figures": "By the numbers",
    "leon.fig.1.n": "9",
    "leon.fig.1.l": "proposals built",
    "leon.fig.2.n": "8",
    "leon.fig.2.l": "countries studied",
    "leon.fig.3.n": "€200k",
    "leon.fig.3.l": "largest budget scoped",
    "leon.fig.4.n": "400+",
    "leon.fig.4.l": "suppliers contacted",
    "leon.fig.5.n": "32–600",
    "leon.fig.5.l": "guests per event",
    "leon.figures.note": "These proposals covered dozens of cities, including Barcelona, Marrakech, Valencia, Edinburgh and Paris. One of them has been signed and I'm now working on its delivery.",
    "leon.note.conf": "Client names and budgets are not published, out of respect for the agency's confidentiality.",
    "leon.h.learn": "Professional skills",
    "leon.learn.1.a": "Building a proposal deck",
    "leon.learn.1.b": "I learned to build a clear, convincing deck that the project manager can approve and send quickly: comparable options, explicit assumptions and nothing left to complete.",
    "leon.learn.2.a": "Managing large volumes of information",
    "leon.learn.2.b": "On large files, hundreds of hotels and suppliers are contacted. I strengthened my method for tracking every contact, quote and follow-up without letting anything slip.",
    "leon.learn.3.a": "Following up and negotiating",
    "leon.learn.3.b": "Replies rarely come at the first request. I plan follow-ups from the start, adapt to each country's working hours and habits, and negotiate rates to stay within the client's budget.",
    "leon.learn.4.a": "Preparing costed alternatives",
    "leon.learn.4.b": "For each key service, I prepare a costed and sourced alternative that can replace the first choice without delay.",
    "leon.learn.5.a": "Organising group travel",
    "leon.learn.5.b": "Departures from several cities, baggage rules, tight schedules: I learned to organise a group's travel so that everyone arrives in the right place at the right time.",
    "leon.h.visuals": "Visuals",
    "leon.shot1": "Proposal deck extract (anonymised)",
    "leon.shot2": "Venue comparison table (anonymised)",
    "leon.shot3": "On site at Léon Event",
    "leon.h.takeaway": "Outcome",
    "leon.takeaway": "This internship confirmed my career choice. I ran complete files, sometimes almost independently: bid response, sourcing, negotiation, orders, then coordination on site.",
    "leon.takeaway2": "I take three lessons from it. A good proposal always starts from the client's constraints. Organisation makes the difference as soon as a file involves hundreds of suppliers. And the event itself reflects the quality of the preparation. I want to keep growing in this direction and take on more responsibility.",

    /* ============ PROJECT 3 - Astraez ============ */
    "astra.back": "Back to home",
    "astra.role": "Founder · Solo build",
    "astra.title": "Astraez",
    "astra.subtitle": "English learning platform for French learners",
    "astra.meta.when": "In development",
    "astra.meta.where": "Side project",
    "astra.aside.team": "Solo",
    "astra.meta.type": "Web platform · Built from zero",
    "astra.h.context": "Context",
    "astra.context": "Astraez is a web platform I created to help French people learn English. The project is in development, and I run it end to end, from product vision to build.",
    "astra.h.why": "Why Astraez",
    "astra.why": "I wanted a platform that makes people want to learn. Astraez is built on play and progression: learners move through a constellation-shaped path, guided by Nova, a small mascot, and learn English through games and challenges, without feeling like they're sitting through a lesson.",
    "astra.h.vision": "The vision",
    "astra.vision": "First, to give French schools a clear, engaging way to teach English online: structured for the classroom, simple for teachers and consistent from one lesson to the next. Later, the platform is meant to open up to companies, in a format still to be defined.",
    "astra.h.did": "What I've designed",
    "astra.did.1": "A learning path shaped like a constellation, where each step unlocks the next.",
    "astra.did.2": "Short, practical lessons: greetings, saying thank you, the alphabet and numbers.",
    "astra.did.3": "A games area to review in a playful way.",
    "astra.did.4": "A motivation system: daily streaks, stars to earn and levels to reach.",
    "astra.did.5": "Nova, a mascot who guides learners throughout their path.",
    "astra.did.6": "A community area and a personal profile to follow progress.",
    "astra.did.7": "The full visual identity: name, logo and graphic universe.",
    "astra.h.stats": "At a glance",
    "astra.stat1.n": "0→1", "astra.stat1.l": "built from scratch",
    "astra.stat2.n": "Solo", "astra.stat2.l": "end-to-end ownership",
    "astra.stat3.n": "WIP", "astra.stat3.l": "in active development",
    "astra.stat4.n": "Schools", "astra.stat4.l": "first target audience",
    "astra.h.visuals": "Visuals",
    "astra.shot.caption": "The learning path: each star is a lesson to unlock.",
    "astra.shot1": "Astraez screens coming soon",
    "astra.shot2": "Product in progress",
    "astra.h.takeaway": "Outcome",
    "astra.takeaway": "Astraez is my most personal project. Running it alone is teaching me to manage a product end to end: defining what matters to the user, prioritising, designing, testing, then adjusting.",
    "astra.takeaway2": "It's also direct training for events: thinking about the audience's experience first, organising a long project without an imposed framework, and staying on course over time.",
    "astra.status": "In development",

    /* ============ LEGAL PAGE (mentions-legales.html) ============ */
    "__legal_title": "Legal notice & privacy | Maëli Fernandez",
    "legal.back": "Back to home",
    "legal.title": "Legal notice & privacy",
    "legal.updated": "Last updated: October 2026",
    "legal.h.publisher": "Site publisher",
    "legal.publisher.html": "This site is published by Maëli Fernandez, as a private individual, to present her professional background. Contact: <a href=\"mailto:maelifernandez@free.fr\">maelifernandez@free.fr</a>",
    "legal.h.host": "Hosting",
    "legal.host": "GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States.",
    "legal.h.data": "Personal data",
    "legal.data": "This site has no contact form, no account and no newsletter. The only personal data I receive is what you choose to send me by email. I use it only to reply to you and never share it.",
    "legal.h.stats": "Visitor statistics",
    "legal.stats": "I use Umami to count visits: pages viewed, approximate country, type of device and the site the visit comes from. Umami sets no cookies and does not identify visitors: the statistics are anonymous, aggregated, and kept for six months at most. If your browser sends a “Do Not Track” signal, your visit is not counted.",
    "legal.h.cookies": "Cookies and browser storage",
    "legal.cookies": "This site sets no cookies. Your language choice (EN/FR) is saved in your own browser only, so the site stays in your language. It is never sent to me.",
    "legal.h.third": "Fonts and video",
    "legal.third": "The fonts are hosted on this site, so no request is sent to Google Fonts. The Pour Faire Court video is loaded from YouTube (youtube-nocookie.com) only when you press play; YouTube's privacy policy then applies.",
    "legal.h.rights": "Your rights",
    "legal.rights.html": "Under the GDPR, you can ask to access, correct or delete any data concerning you by writing to <a href=\"mailto:maelifernandez@free.fr\">maelifernandez@free.fr</a>. If you feel your request has not been handled properly, you can contact the CNIL, the French data protection authority (<a href=\"https://www.cnil.fr\" target=\"_blank\" rel=\"noopener\">cnil.fr</a>).",
    "legal.h.ip": "Intellectual property and photos",
    "legal.ip": "Texts and photos belong to Maëli Fernandez unless stated otherwise. Logos belong to their respective owners and are shown only to identify the projects. If you appear in a photo and would like it removed, write to me and it will be taken down.",
    "legal.credits": "Fonts: Sora and Inter, SIL Open Font License.",
  },

  fr: {
    /* ---- Document titles (browser tab) ---- */
    "__index_title": "Maëli Fernandez | Coordinatrice de projets événementiels",
    "__pfc_title": "Pour Faire Court | Maëli Fernandez",
    "__leon_title": "Léon Event | Maëli Fernandez",
    "__astra_title": "Astraez | Maëli Fernandez",

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
    "hero.title.html": "Coordination de projets événementiels, du brief au run of show.",
    "hero.sub": "Lieux, prestataires, budgets, conduite. Basée dans les Alpes françaises, ouverte aux postes à l'international dès février 2027.",
    "hero.cta1": "Voir mes projets",
    "hero.cta2": "Télécharger le CV",
    "hero.badge": "Alpes françaises → International · fév. 2027",

    /* ---- Marquee keywords ---- */
    "mq.1": "Recherche de lieux",
    "mq.2": "Budgets",
    "mq.3": "Prestataires",
    "mq.4": "Conduite",
    "mq.5": "Briefing d'équipe",
    "mq.6": "Propositions",

    /* ---- Projects section ---- */
    "projects.eyebrow": "Travaux sélectionnés",
    "projects.title": "Trois projets, de la préparation à la réalisation.",
    "projects.lead": "D'un stage en agence corporate à un produit conçu de zéro, en passant par un festival étudiant.",

    "p1.tag": "Festival · Co-responsable logistique",
    "p1.title": "Pour Faire Court",
    "p1.desc": "Co-pilotage de la logistique de bout en bout d'un festival de courts-métrages d'un soir : lieu, prestataires, budget logistique de 3 500 € et équipe de 10 bénévoles le jour J.",
    "p2.tag": "Agence · Assistante chef de projet",
    "p2.title": "Léon Event",
    "p2.desc": "Des réponses à appels d'offres pour des événements corporate, dont certaines menées seule de A à Z, et deux journées de team building sur site jusqu'à 440 personnes.",
    "p3.tag": "Side project · En développement",
    "p3.title": "Astraez",
    "p3.desc": "Une plateforme web pour apprendre l'anglais par le jeu, conçue et développée de zéro, en autonomie.",
    "projects.more": "Voir le projet",

    /* ---- Volunteering ---- */
    "vol.eyebrow": "Bénévolat",
    "vol.title": "En parallèle de mes études et de ma vie professionnelle",
    "vol.lead": "Des festivals et un marathon qui accueillent des milliers de personnes, où j'étais agente polyvalente, à une association dont j'ai pris en charge la communication.",
    "vol.1.title": "Festival international du film d'animation d'Annecy",
    "vol.1.role": "Agente polyvalente",
    "vol.1.desc": "Le plus grand festival d'animation au monde.",
    "vol.1.year": "2024",
    "vol.2.title": "High Five Festival",
    "vol.2.role": "Agente polyvalente",
    "vol.2.desc": "Équipe du festival sur deux éditions.",
    "vol.2.year": "2024 · 2025",
    "vol.3.title": "Marathon d'Annecy",
    "vol.3.role": "Agente polyvalente",
    "vol.3.desc": "Signaleuse sur le parcours en 2025, podium et remise des prix en 2026.",
    "vol.3.year": "2025 · 2026",
    "vol.4.title": "Initea",
    "vol.4.role": "Responsable communication · Association",
    "vol.4.desc": "Refonte de la charte graphique et de l'identité visuelle de l'association.",
    "vol.4.year": "2024",

    /* ---- About ---- */
    "about.eyebrow": "À propos",
    "about.title": "Maëli Fernandez",
    "about.bio1": "Diplômée d'un Master Communication, Marketing, Événementiel & Relations Publiques de l'INSEEC Lyon, j'ai choisi de compléter mon parcours par six mois en agence événementielle, où je gère appels d'offres, sourcing et coordination d'événements.",
    "about.bio2": "J'aime apprendre et je cherche toujours à améliorer ce qui existe, qu'il s'agisse d'une méthode de travail, d'une proposition ou du déroulé d'un événement. C'est ce qui me plaît dans l'événementiel : chaque projet est différent, demande de s'adapter vite et m'apprend quelque chose de nouveau.",
    "about.bio3": "Huit mois aux États-Unis m'ont donné le goût de travailler à l'international, et c'est dans cette direction que je construis la suite de ma carrière.",
    "about.relocate": "Départ à l'international dès février 2027, ouverte au monde entier, avec un intérêt particulier pour l'Asie.",

    /* ---- Outils ---- */
    "tools.eyebrow": "Outils",
    "tools.title": "Les outils que j'utilise",
    "tools.g1": "Bureautique & communication",
    "tools.g2": "Gestion de projet & collaboration",
    "tools.g3": "Création & web",
    "tools.g4": "IA & automatisation",
    "about.fact1": "Master, INSEEC Lyon",
    "about.fact2": "Stage de 6 mois en agence",
    "about.fact3": "8 mois aux États-Unis",
    "about.fact4": "Anglais professionnel (EF B2)",

    /* ---- Contact ---- */
    "contact.eyebrow": "Contact",
    "contact.title": "Vous recrutez pour votre équipe événementielle ? Parlons-en.",
    "contact.lead": "Disponible dès février 2027 pour un poste junior en gestion de projet événementiel, là où se trouve la bonne équipe. Au plaisir d'échanger.",
    "contact.email": "M'écrire",
    "contact.cv": "Télécharger le CV (PDF)",
    "contact.label.email": "Email",
    "contact.label.linkedin": "LinkedIn",
    "contact.label.location": "Localisation",
    "contact.location": "Alpes françaises → International · fév. 2027",
    "contact.linkedin.text": "Voir le profil",

    /* ---- Footer ---- */
    "footer.rights": "Coordinatrice de projets événementiels",
    "footer.copy": "© 2026 Maëli Fernandez. Tous droits réservés.",
    "footer.legal": "Mentions légales & confidentialité",

    /* ============ PROJET 1 - Pour Faire Court ============ */
    "pfc.back": "Retour à l'accueil",
    "pfc.role": "Co-responsable logistique",
    "pfc.title": "Pour Faire Court",
    "pfc.subtitle": "Festival de courts-métrages, 9e édition",
    "pfc.meta.when": "Oct. 2025 – Avr. 2026",
    "pfc.meta.where": "Lyon, France",
    "pfc.aside.budget": "5 000 € au total · 3 500 € logistique",
    "pfc.aside.team": "10 bénévoles",
    "pfc.meta.type": "Festival étudiant · Production master INSEEC",
    "pfc.meta.event": "30 mars 2026, Salle Barbara, MJC Montchat, Lyon",
    "pfc.h.context": "Contexte",
    "pfc.context": "Pour Faire Court est un festival de courts-métrages, à sa 9e édition, organisé par les étudiants du master INSEEC. J'ai co-dirigé la logistique de cette soirée, qui accueillait public, invités et intervenants sur site.",
    "pfc.h.role": "Mon rôle",
    "pfc.role.body": "En tant que co-responsable logistique, je gérais avec ma collègue le lieu, l'installation technique, les prestataires et la conduite de la soirée. Sur les 5 000 € de budget du festival, 3 500 € étaient consacrés à la logistique, que nous gérions à deux : chaque dépense était validée ensemble, au fur et à mesure, pour garder une vision claire du budget restant.",
    "pfc.h.did": "Ce que j'ai fait",
    "pfc.did.1": "J'ai rédigé le brief logistique de l'événement.",
    "pfc.did.2": "À partir de ce brief, j'ai identifié les lieux adaptés, pris contact avec chacun et mené les échanges, puis présenté une sélection soumise au vote de l'association.",
    "pfc.did.3": "J'ai suivi la même démarche pour les prestataires : décoration et autres prestations.",
    "pfc.did.4": "J'ai co-géré avec ma collègue le budget logistique de 3 500 €.",
    "pfc.did.5": "J'ai élaboré la conduite complète de la soirée.",
    "pfc.did.6": "J'ai copiloté une équipe de 10 bénévoles le jour J : briefing, répartition des rôles et gestion des imprévus en temps réel.",
    "pfc.did.7": "Nous avons accueilli une centaine de participants, invités et intervenants sur site.",
    "pfc.h.hard": "Ce qui a été difficile",
    "pfc.hard.1.a": "Une partie du financement retirée en cours de projet",
    "pfc.hard.1.b": "Le budget prévisionnel était de 10 000 €. En cours de projet, alors que le sourcing était déjà lancé, la moitié de cette somme ne nous a finalement pas été attribuée : il restait 5 000 € pour tout le festival. L'équipe a trouvé de nouveaux financements par quatre moyens : une négociation institutionnelle à laquelle j'ai participé, un appel aux dons, des contributions privées et une tombola, pour laquelle j'ai démarché des commerçants afin d'obtenir des lots. J'ai ensuite adapté le choix du lieu et des prestataires au budget réel.",
    "pfc.hard.2.a": "Une privatisation qui n'en était pas une",
    "pfc.hard.2.b": "Le contrat couvrait l'auditorium, la salle de cocktail et le couloir attenant, mais le public a circulé dans notre espace toute la soirée. J'ai négocié sur place une restriction d'accès avec le lieu. Depuis, je prévois du personnel de porte même quand le cahier des charges ne l'exige pas.",
    "pfc.hard.3.a": "La conduite a dû être revue en direct",
    "pfc.hard.3.b": "Un retard en début de soirée a décalé le service du cocktail. Nous avons réorganisé le déroulé sur place et terminé à l'heure. Depuis, je garde toujours une personne sans poste fixe dans l'équipe, disponible pour gérer les imprévus.",
    "pfc.h.stats": "Chiffres clés",
    "pfc.stat1.n": "3 500 €", "pfc.stat1.l": "budget logistique",
    "pfc.stat2.n": "10", "pfc.stat2.l": "bénévoles encadrés",
    "pfc.stat3.n": "100", "pfc.stat3.l": "participants accueillis",
    "pfc.stat4.n": "1", "pfc.stat4.l": "soirée, terminée à l'heure",
    "pfc.h.visuals": "Visuels",
    "pfc.visual.regie": "La régie pendant les projections : image, son et lumière, calés sur la conduite.",
    "pfc.visual.equipe": "Avec Jeffnie Verderi, co-responsable du pôle artistique, sur site le soir du festival, 30 mars 2026.",
    "pfc.video.credit": "Vidéo : équipe communication Pour Faire Court, INSEEC Lyon",
    "pfc.video.play": "Lancer la vidéo",
    "pfc.video.label": "Pour Faire Court, vidéo officielle (9e édition)",
    "pfc.h.takeaway": "Bilan",
    "pfc.takeaway": "Pour Faire Court a été ma première expérience de logistique complète, du brief jusqu'au soir de l'événement. Un événement d'un soir ne laisse pas de seconde chance : tout se joue dans la préparation, et la conduite doit être assez précise pour qu'une équipe entière puisse la suivre.",
    "pfc.takeaway2": "Ce projet m'a aussi rendue plus polyvalente. Entre la recherche de financements, le choix des prestataires, la coordination des bénévoles et la gestion des imprévus sur place, j'ai appris à passer rapidement d'un rôle à l'autre sans perdre de vue l'objectif commun.",

    /* ============ PROJET 2 - Léon Event ============ */
    "leon.back": "Retour à l'accueil",
    "leon.role": "Assistante chef de projet",
    "leon.title": "Léon Event",
    "leon.subtitle": "Agence événementielle corporate",
    "leon.meta.when": "Juil. 2026 – en cours",
    "leon.meta.where": "Annecy, France",
    "leon.aside.budget": "40 000 CHF – 200 000 € (anonymisé)",
    "leon.meta.type": "Stage · Événementiel corporate",
    "leon.h.context": "Contexte",
    "leon.context": "Léon Event fait partie du groupe Nanocristo, qui réunit plusieurs sociétés spécialisées dans l'événementiel et les activités, entre la Haute-Savoie, la Suisse et les Pays-Bas. Implantée à Annecy, Genève et Amsterdam, Léon conçoit des événements d'entreprise sur mesure : séminaires, soirées et incentives, en France comme à l'étranger.",
    "leon.h.role": "Mon rôle",
    "leon.role.body": "J'épaule les chefs de projet de l'agence, selon deux modes de travail. Sur certains dossiers, je travaille en étroite coordination avec le chef de projet, de la construction du concept jusqu'à la proposition finale. Sur d'autres, je gère le dossier en quasi-autonomie, de la réponse à l'appel d'offres jusqu'à l'envoi au client, avec une simple relecture avant l'envoi.",
    "leon.h.did": "Ce que j'ai fait",
    "leon.did.1": "Traduire les briefs clients en besoins de sourcing.",
    "leon.did.2": "Sourcer lieux, hôtels, activités et prestataires pour chaque brief.",
    "leon.did.3": "Construire des comparatifs coût, capacité et logistique pour orienter le choix du client.",
    "leon.did.4": "Réaliser les decks de proposition et intégrer les retours client jusqu'à la signature.",
    "leon.did.5": "Négocier les tarifs avec les prestataires.",
    "leon.did.6": "Organiser les repérages sur site avec les prestataires pour coordonner les équipes et les besoins avant le jour J.",
    "leon.did.7": "Passer les commandes nécessaires à la réalisation de l'événement.",
    "leon.did.8": "Gérer les réservations de transport, en individuel et en groupe.",
    "leon.did.9": "Coordonner l'événement le jour J.",
    "leon.h.field": "Sur le terrain",
    "leon.field.body": "Pendant mes six mois de stage, j'ai coordonné sur place un événement de l'agence et participé à deux journées de team building pour Mousqueton, une autre société du groupe.",
    "leon.field.0.a": "Genève · 220 invités",
    "leon.field.0.b": "Une soirée d'entreprise sur le thème des années 90, que j'ai coordonnée sur place avec ma cheffe de projet.",
    "leon.field.1.a": "Courchevel · environ 150 participants",
    "leon.field.1.b": "Challenge d'équipe autour d'épreuves d'adresse. Installation des ateliers, puis gestion en autonomie d'un atelier (parcours d'obstacles, énigme de lettres, lancer de précision) et des rotations d'équipes.",
    "leon.field.2.a": "Les Arcs · 440 participants",
    "leon.field.2.b": "Challenge grand format avec des équipes de 10 à 11 personnes arrivant par vagues. Montage avec l'équipe d'animation, puis gestion d'une épreuve d'allumage de feu en tenant le timing de chaque équipe.",
    "leon.h.internal": "Projets internes",
    "leon.internal.body": "En parallèle des dossiers clients, je contribue aussi au fonctionnement de l'agence et de son groupe.",
    "leon.internal.1.a": "Organisation du travail",
    "leon.internal.1.b": "J'ai contribué à rendre l'agence plus efficace en participant à la mise en place de nouvelles méthodes de travail communes.",
    "leon.internal.2.a": "Session « success story » pour le groupe",
    "leon.internal.2.b": "Une success story est une présentation d'exemples concrets et réussis, pour partager les bonnes pratiques entre équipes. Avec deux collègues, j'en ai organisé une pour toutes les entreprises du groupe, consacrée à la bonne utilisation des outils numériques et de l'IA : gagner du temps, mieux s'organiser et développer ses idées.",
    "leon.h.figures": "En chiffres",
    "leon.fig.1.n": "9",
    "leon.fig.1.l": "propositions montées",
    "leon.fig.2.n": "8",
    "leon.fig.2.l": "pays étudiés",
    "leon.fig.3.n": "200 000 €",
    "leon.fig.3.l": "budget max chiffré",
    "leon.fig.4.n": "400+",
    "leon.fig.4.l": "prestataires démarchés",
    "leon.fig.5.n": "32–600",
    "leon.fig.5.l": "personnes par événement",
    "leon.figures.note": "Ces propositions ont couvert des dizaines de villes, dont Barcelone, Marrakech, Valence, Édimbourg et Paris. L'une d'elles a été signée et je travaille aujourd'hui à sa mise en œuvre.",
    "leon.note.conf": "Les noms des clients et leurs budgets ne sont pas publiés, par respect de la confidentialité de l'agence.",
    "leon.h.learn": "Compétences acquises",
    "leon.learn.1.a": "Construire un deck de proposition",
    "leon.learn.1.b": "J'ai appris à construire un deck clair et convaincant, que le chef de projet peut valider et envoyer rapidement : options comparables, hypothèses explicites, rien à compléter.",
    "leon.learn.2.a": "Gérer de gros volumes d'informations",
    "leon.learn.2.b": "Sur les dossiers d'envergure, des centaines d'hôtels et de prestataires sont démarchés. J'ai renforcé ma méthode pour suivre chaque contact, chaque devis et chaque relance sans rien laisser passer.",
    "leon.learn.3.a": "Relancer et négocier",
    "leon.learn.3.b": "Les réponses arrivent rarement à la première demande. Je planifie les relances dès le départ, je m'adapte aux horaires et aux usages de chaque pays, et je négocie les tarifs pour respecter le budget du client.",
    "leon.learn.4.a": "Prévoir des alternatives chiffrées",
    "leon.learn.4.b": "Pour chaque prestation clé, je prépare une alternative chiffrée et sourcée, prête à remplacer le premier choix sans délai.",
    "leon.learn.5.a": "Organiser des transports de groupe",
    "leon.learn.5.b": "Départs de plusieurs villes, règles de bagages, horaires serrés : j'ai appris à organiser le transport d'un groupe pour que chacun arrive au bon endroit, au bon moment.",
    "leon.h.visuals": "Visuels",
    "leon.shot1": "Extrait de deck de proposition (anonymisé)",
    "leon.shot2": "Tableau comparatif de lieux (anonymisé)",
    "leon.shot3": "Sur site chez Léon Event",
    "leon.h.takeaway": "Bilan",
    "leon.takeaway": "Ce stage confirme mon choix de métier. J'y ai mené des dossiers complets, parfois en quasi-autonomie : réponse à l'appel d'offres, sourcing, négociation, commandes, puis coordination sur place.",
    "leon.takeaway2": "J'en retiens trois enseignements. Une bonne proposition part toujours des contraintes du client. L'organisation fait la différence dès qu'un dossier mobilise des centaines de prestataires. Et le jour J reflète directement la qualité de la préparation. Je souhaite continuer dans cette voie en prenant davantage de responsabilités.",

    /* ============ PROJET 3 - Astraez ============ */
    "astra.back": "Retour à l'accueil",
    "astra.role": "Fondatrice · Développé en solo",
    "astra.title": "Astraez",
    "astra.subtitle": "Plateforme d'apprentissage de l'anglais pour les Français",
    "astra.meta.when": "En développement",
    "astra.meta.where": "Side project",
    "astra.aside.team": "En solo",
    "astra.meta.type": "Plateforme web · Créée de zéro",
    "astra.h.context": "Contexte",
    "astra.context": "Astraez est une plateforme web que j'ai créée pour aider les Français à apprendre l'anglais. Le projet est en développement et je le mène de bout en bout, de la vision produit à la réalisation.",
    "astra.h.why": "Pourquoi Astraez",
    "astra.why": "Je voulais une plateforme qui donne envie d'apprendre. Astraez mise sur le jeu et la progression : l'apprenant avance dans un parcours en forme de constellation, accompagné de Nova, une petite mascotte, et apprend l'anglais à travers des jeux et des défis, sans avoir l'impression de suivre une leçon.",
    "astra.h.vision": "La vision",
    "astra.vision": "Dans un premier temps, offrir aux écoles françaises une manière claire et engageante d'enseigner l'anglais en ligne : structurée pour la classe, simple pour les enseignants et cohérente d'un cours à l'autre. Dans un second temps, la plateforme a vocation à s'ouvrir aux entreprises, sous une forme qui reste à définir.",
    "astra.h.did": "Ce que j'ai conçu",
    "astra.did.1": "Un parcours de progression en forme de constellation, où chaque étape débloque la suivante.",
    "astra.did.2": "Des leçons courtes et concrètes : saluer, remercier, l'alphabet et les nombres.",
    "astra.did.3": "Un espace de jeux pour réviser de façon ludique.",
    "astra.did.4": "Un système de motivation : séries de jours consécutifs, étoiles à gagner et niveaux à atteindre.",
    "astra.did.5": "Nova, une mascotte qui accompagne l'apprenant tout au long du parcours.",
    "astra.did.6": "Un espace communauté et un profil personnel pour suivre ses progrès.",
    "astra.did.7": "L'identité visuelle complète : nom, logo et univers graphique.",
    "astra.h.stats": "En bref",
    "astra.stat1.n": "0→1", "astra.stat1.l": "créé de zéro",
    "astra.stat2.n": "Solo", "astra.stat2.l": "prise en charge de bout en bout",
    "astra.stat3.n": "WIP", "astra.stat3.l": "en développement actif",
    "astra.stat4.n": "Écoles", "astra.stat4.l": "premier public visé",
    "astra.h.visuals": "Visuels",
    "astra.shot.caption": "Le parcours d'apprentissage : chaque étoile est une leçon à débloquer.",
    "astra.shot1": "Écrans d'Astraez à venir",
    "astra.shot2": "Produit en cours",
    "astra.h.takeaway": "Bilan",
    "astra.takeaway": "Astraez est mon projet le plus personnel. Le porter seule m'apprend à gérer un produit de bout en bout : définir ce qui compte pour l'utilisateur, prioriser, concevoir, tester, puis ajuster.",
    "astra.takeaway2": "C'est aussi un entraînement direct pour l'événementiel : penser d'abord à l'expérience du public, organiser un projet long sans cadre imposé et garder le cap dans la durée.",
    "astra.status": "En développement",

    /* ============ PAGE MENTIONS LÉGALES ============ */
    "__legal_title": "Mentions légales & confidentialité | Maëli Fernandez",
    "legal.back": "Retour à l'accueil",
    "legal.title": "Mentions légales & confidentialité",
    "legal.updated": "Dernière mise à jour : octobre 2026",
    "legal.h.publisher": "Éditrice du site",
    "legal.publisher.html": "Ce site est édité par Maëli Fernandez, à titre personnel, pour présenter son parcours professionnel. Contact : <a href=\"mailto:maelifernandez@free.fr\">maelifernandez@free.fr</a>",
    "legal.h.host": "Hébergement",
    "legal.host": "GitHub, Inc. (GitHub Pages), 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.",
    "legal.h.data": "Données personnelles",
    "legal.data": "Ce site n'a ni formulaire de contact, ni compte, ni newsletter. Les seules données personnelles que je reçois sont celles que vous choisissez de m'envoyer par email. Je les utilise uniquement pour vous répondre et ne les transmets à personne.",
    "legal.h.stats": "Mesure d'audience",
    "legal.stats": "J'utilise Umami pour compter les visites : pages vues, pays approximatif, type d'appareil et site d'origine de la visite. Umami ne dépose aucun cookie et n'identifie pas les visiteurs : les statistiques sont anonymes, agrégées et conservées six mois maximum. Si votre navigateur envoie un signal « Do Not Track », votre visite n'est pas comptée.",
    "legal.h.cookies": "Cookies et stockage dans le navigateur",
    "legal.cookies": "Ce site ne dépose aucun cookie. Votre choix de langue (EN/FR) est enregistré uniquement dans votre navigateur, pour que le site reste dans votre langue. Il ne m'est jamais transmis.",
    "legal.h.third": "Polices et vidéo",
    "legal.third": "Les polices sont hébergées sur ce site : aucune requête n'est envoyée à Google Fonts. La vidéo Pour Faire Court n'est chargée depuis YouTube (youtube-nocookie.com) que lorsque vous cliquez sur lecture ; la politique de confidentialité de YouTube s'applique alors.",
    "legal.h.rights": "Vos droits",
    "legal.rights.html": "Conformément au RGPD, vous pouvez demander l'accès, la rectification ou la suppression des données vous concernant en écrivant à <a href=\"mailto:maelifernandez@free.fr\">maelifernandez@free.fr</a>. Si votre demande n'a pas été traitée correctement, vous pouvez vous adresser à la CNIL (<a href=\"https://www.cnil.fr\" target=\"_blank\" rel=\"noopener\">cnil.fr</a>).",
    "legal.h.ip": "Propriété intellectuelle et photos",
    "legal.ip": "Les textes et photos appartiennent à Maëli Fernandez, sauf mention contraire. Les logos appartiennent à leurs propriétaires respectifs et ne servent qu'à identifier les projets. Si vous apparaissez sur une photo et souhaitez son retrait, écrivez-moi : elle sera retirée.",
    "legal.credits": "Polices : Sora et Inter, licence SIL Open Font License.",
  },
};

/* ============================================================
   LANGUAGE ENGINE - no need to edit below this line.
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
