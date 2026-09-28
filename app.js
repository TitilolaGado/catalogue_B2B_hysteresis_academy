let profiles = [];
const PROFILES_DATA = [
  {
    "id": 1,
    "name": "Amélie SATA",
    "slug": "amelie-sata",
    "region": "Centre",
    "commune": "Bohicon",
    "domain": "Numérique, communication & création de contenu",
    "role": "Responsable Entreprise Numérique Service Stores (Abomey) — Membre U-Report",
    "paths": "CI",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Services numériques, appui à la gestion d’une activité digitale, animation communautaire et accompagnement de projets locaux.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 2,
    "name": "Zaïdath ZATO",
    "slug": "zaidath-zato",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Éducation, recherche & apprentissage / Artisanat",
    "role": "Étudiante en Sociologie-Anthropologie / Artisane — Fondatrice Zaï's Crochet",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Artisanat, animation d’ateliers créatifs, production crochet, projets jeunes et activités socio-éducatives.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 3,
    "name": "Stella M.B. Fifamè SOKPON",
    "slug": "stella-sokpon",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Agriculture, environnement & développement durable",
    "role": "Chargée de Programme — Double Master + Doctorat en Agronomie (Foresterie & Conservation)",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Gestion de projets environnementaux, conservation, foresterie, écotourisme, suivi de programmes et appui technique.",
    "linkedin": "https://bj.linkedin.com/in/stella-sokpon-gestion-des-projets-%C3%A9cotourisme",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 4,
    "name": "Téna N’KOUEI",
    "slug": "tena-nkouei",
    "region": "Nord-Ouest / Sud",
    "commune": "Natitingou / Abomey-Calavi",
    "domain": "Éducation, recherche & apprentissage",
    "role": "Gestionnaire de Projet / Secrétaire Générale OJCS — Licence Linguistique & Didactique du Français",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Coordination de projets, appui pédagogique, rédaction, organisation d’activités et assistance virtuelle.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 5,
    "name": "Mahougbé Nathalie HOUNGNIHIN",
    "slug": "nathalie-houngnihin",
    "region": "Sud",
    "commune": "Abomey-Calavi",
    "domain": "Santé, nutrition & protection",
    "role": "Doctorante en Socio-anthropologie de la Santé / Militante santé sexuelle et reproductive",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Recherche qualitative, santé communautaire, sensibilisation, protection et accompagnement de programmes SSR.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 6,
    "name": "Nadiatou MOUMOUNI ADAM",
    "slug": "nadiatou-moumouni-adam",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Droit, gouvernance & administration",
    "role": "Administratrice — Licence Administration Territoriale / Diplôme Entrepreneuriat",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Administration, appui aux collectivités, assistance administrative, gestion documentaire et organisation de missions.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 7,
    "name": "Blanche Inès BALOGOUN",
    "slug": "blanche-ines-balogoun",
    "region": "Sud",
    "commune": "Abomey-Calavi",
    "domain": "Gestion de projets, suivi-évaluation & programmes",
    "role": "Responsable Suivi-Évaluation & Gestionnaire de Données — PNUSS",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Suivi-évaluation, collecte et analyse de données, tableaux de bord, reporting et appui à la décision.",
    "linkedin": "https://bj.linkedin.com/in/blanche-in%C3%A8s-balogoun-805017234",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 8,
    "name": "Haléla YOLOU",
    "slug": "halela-yolou",
    "region": "Nord-Ouest",
    "commune": "Ouaké",
    "domain": "Action communautaire, social & leadership",
    "role": "Facilitatrice communautaire — Spécialiste Développement Communautaire & Collecte de données",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Collecte de données, mobilisation communautaire, facilitation terrain et animation de groupes locaux.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 9,
    "name": "Latifatou TCHAOURA",
    "slug": "latifatou-tchaoura",
    "region": "Nord-Ouest",
    "commune": "Boukoumbé",
    "domain": "Action communautaire, social & leadership",
    "role": "Facilitatrice communautaire — Licence Sociologie-Anthropologie / DEAT Nutrition",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Facilitation communautaire, nutrition, animation terrain, collecte d’informations et accompagnement social.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 10,
    "name": "Gafarou ABDOULAYE",
    "slug": "gafarou-abdoulaye",
    "region": "Nord-Ouest",
    "commune": "Djougou",
    "domain": "Numérique, communication & création de contenu",
    "role": "Diplômé Administration Générale et Territoriale — Passionné IA et Numérique",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Assistance virtuelle, administration digitale, outils IA, organisation et appui à la gestion administrative.",
    "linkedin": "https://bj.linkedin.com/in/abdoul-gafar09-administration-gestion/en",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 11,
    "name": "Ouchamad DAHOUDOU",
    "slug": "ouchamad-dahoudou",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Numérique, communication & création de contenu",
    "role": "Étudiante — Développement web & mobile / Passionnée du numérique",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Assistance virtuelle, développement web/mobile, support numérique, tâches administratives à distance et appui technique.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 12,
    "name": "Abdoul-Aziz ZANNOU",
    "slug": "abdoul-aziz-zannou",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Éducation, recherche & apprentissage",
    "role": "Étudiant",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Appui éducatif, recherche documentaire, organisation personnelle, outils numériques et soutien aux activités d’apprentissage.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 13,
    "name": "Bilal YAROU",
    "slug": "bilal-yarou",
    "region": "Ouémé-Plateau",
    "commune": "Porto-Novo",
    "domain": "Numérique, communication & création de contenu",
    "role": "Étudiant — Montage vidéo / Création de contenu / Vente",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Montage vidéo, création de contenu, assistance virtuelle, vente digitale et communication visuelle.",
    "linkedin": "",
    "linkedinStatus": "Lien direct à confirmer"
  },
  {
    "id": 14,
    "name": "Soumaïla IBRAHIM",
    "slug": "soumaila-ibrahim",
    "region": "Nord-Est",
    "commune": "Nikki",
    "domain": "Action communautaire, social & leadership",
    "role": "Technicien Supérieur BTP / Activiste communautaire",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "BTP, suivi terrain, mobilisation communautaire, gestion de petites missions et appui logistique.",
    "linkedin": "https://bj.linkedin.com/in/ibrahim-soumaila-evaluation-impact-environnemental-btp",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 15,
    "name": "Jean-Ester SEWA",
    "slug": "jean-ester-sewa",
    "region": "Sud",
    "commune": "Ouidah",
    "domain": "Droit, gouvernance & administration",
    "role": "Juriste / Auditrice en Master — Créatrice de sacs personnalisés",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Appui juridique, rédaction administrative, assistance virtuelle, entrepreneuriat créatif et gestion de dossiers.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 16,
    "name": "Fatouma SERO",
    "slug": "fatouma-sero",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Action communautaire, social & leadership",
    "role": "Étudiante en Sociologie / Animatrice communautaire — Membre ONG Emergency Africa",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Animation communautaire, sociologie, sensibilisation, mobilisation de jeunes et appui aux ONG.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 17,
    "name": "Chérif Dine HOUZEROU",
    "slug": "cherif-dine-houzerou",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Santé, nutrition & protection",
    "role": "Technicien Sanitaire — Activiste santé jeunes / Président Fondateur AJSP",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Prévention santé, sensibilisation jeunes, animation sanitaire, coordination associative et santé communautaire.",
    "linkedin": "https://bj.linkedin.com/in/cherif-dine-houzerou-sante-prevention",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 18,
    "name": "Bignon Judicaël KPEHOUN",
    "slug": "bignon-judicael-kpehoun",
    "region": "Sud",
    "commune": "Cotonou",
    "domain": "Numérique, communication & création de contenu",
    "role": "Journaliste / Fact-checker — Groupe Banouto",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Journalisme, fact-checking, rédaction web, veille informationnelle, assistance éditoriale et communication.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 19,
    "name": "Djéroile DEMBA DIALLO",
    "slug": "djeroile-demba-diallo",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Action communautaire, social & leadership",
    "role": "Sociologue — Facilitateur communautaire / Coach entrepreneurial",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Facilitation, coaching entrepreneurial, animation d’ateliers, mobilisation terrain et accompagnement communautaire.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 20,
    "name": "Emile Jesugnon CLOTOE",
    "slug": "emile-jesugnon-clotoe",
    "region": "Ouémé-Plateau",
    "commune": "Porto-Novo",
    "domain": "Action communautaire, social & leadership",
    "role": "Étudiant — Sociologue rural & Vulgarisation agricole / Agréos Tech",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Vulgarisation agricole, entrepreneuriat social, mobilisation communautaire, projets agroalimentaires et innovation locale.",
    "linkedin": "https://bj.linkedin.com/in/emile-jesugnon-clotoe-70a147337",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 21,
    "name": "Vital Ezéchiel GBAGUIDI",
    "slug": "vital-ezechiel-gbaguidi",
    "region": "Sud-Ouest",
    "commune": "Bopa",
    "domain": "Éducation, recherche & apprentissage",
    "role": "Doctorant en Sociologie de l’Éducation — UAC",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Recherche, enquête terrain, sociologie de l’éducation, analyse qualitative et appui méthodologique.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 22,
    "name": "Séra Gloria HOUNDJO",
    "slug": "sera-gloria-houndjo",
    "region": "Ouémé-Plateau",
    "commune": "Porto-Novo",
    "domain": "Agriculture, environnement & développement durable",
    "role": "Agronome / Agribusiness — Entrepreneure",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Agribusiness, appui agricole, entrepreneuriat, transformation agroalimentaire et développement de projets verts.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 23,
    "name": "Lismène Pépita Dossi DJIKINHEDO",
    "slug": "lismene-pepita-dossy-djikinhedo",
    "region": "Sud",
    "commune": "Abomey-Calavi",
    "domain": "Gestion de projets, suivi-évaluation & programmes",
    "role": "Gestionnaire de Projets / Agente communautaire",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Gestion de projets, appui communautaire, organisation d’activités, suivi terrain et planification.",
    "linkedin": "",
    "linkedinStatus": "Lien direct à confirmer"
  },
  {
    "id": 24,
    "name": "Carmelle Merveille DJIKINHEDO",
    "slug": "carmelle-merveille-djikinhedo",
    "region": "Sud",
    "commune": "Cotonou",
    "domain": "Gestion de projets, suivi-évaluation & programmes",
    "role": "Assistante en Rédaction de Projets / Gestionnaire de projets",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Rédaction de projets, assistance projet, planification, reporting et appui aux ONG ou entreprises sociales.",
    "linkedin": "https://bj.linkedin.com/in/carmelle-merveille-djikinhedo-gestionnairedeprojets",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 25,
    "name": "Abiola Mohaïminou MACAULEY",
    "slug": "abiola-mohaininou-macauley",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Numérique, communication & création de contenu",
    "role": "Licence Économie & Finance / Compétences informatique et maintenance électronique",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Maintenance informatique, support technique, assistance virtuelle, appui bureautique et services numériques de proximité.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 26,
    "name": "Kora Hanif SERO",
    "slug": "kora-hanif-sero",
    "region": "Nord-Est",
    "commune": "Sinendé",
    "domain": "Gestion de projets, suivi-évaluation & programmes",
    "role": "Spécialiste Planification & Suivi-Évaluation — Entrepreneur agropastoral / Chargé Projet Mairie Jeunes Sinendé",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Planification, suivi-évaluation, entrepreneuriat agropastoral, appui aux projets jeunes et assistance virtuelle.",
    "linkedin": "https://bj.linkedin.com/in/kora-hanif-sero",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 27,
    "name": "Catherine ADITI",
    "slug": "catherine-aditi",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Éducation, artisanat, paix & protection",
    "role": "Étudiante — Licence Anglais / Artisane savons naturels & Tricotage / Activiste paix & VBG",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Anglais, artisanat naturel, sensibilisation paix/VBG, animation sociale et production créative.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 28,
    "name": "Aubin Charles HOUZANME",
    "slug": "aubin-charles-houzanme",
    "region": "Centre",
    "commune": "Bohicon",
    "domain": "Numérique, communication & création de contenu",
    "role": "Graphiste / Photographe Professionnel / Activiste Digital",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Graphisme, photographie, communication digitale, identité visuelle, création de contenus et assistance virtuelle.",
    "linkedin": "https://bj.linkedin.com/in/aubin-charles-houzanme-graphiste-designer-communication-digitale-assistant-virtuel",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 29,
    "name": "M’po Thomas NATTE",
    "slug": "mpo-thomas-natte",
    "region": "Sud",
    "commune": "Cotonou",
    "domain": "Finance, entrepreneuriat & économie",
    "role": "Comptable-Financier — Financial Operations Agent PayDunya / Master Contrôle de Gestion ENEAM",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Comptabilité, finance, opérations financières, contrôle de gestion, reporting et appui administratif.",
    "linkedin": "https://bj.linkedin.com/in/mpo-thomas-natte/en",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 30,
    "name": "Habib INOUSSA",
    "slug": "habib-inoussa",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Gestion de projets, suivi-évaluation & programmes",
    "role": "Politiste — Chargé de Programme ONG PAULY AFRIQUE BIO / Auteur",
    "paths": "CI + ON",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Coordination de programmes, action ONG, rédaction, gouvernance associative et accompagnement de projets sociaux.",
    "linkedin": "https://fr.linkedin.com/posts/habib-inoussa-1289522b4_copclimat-cop31-climateaction-activity-7502753938455318528-XJFf",
    "linkedinStatus": "Publication à confirmer"
  },
  {
    "id": 31,
    "name": "Fabiola BANKOLE",
    "slug": "fabiola-bankole",
    "region": "Sud",
    "commune": "Cotonou",
    "domain": "Numérique, communication & création de contenu",
    "role": "Juriste — Droit des Affaires & Droit du Numérique / Cybersécurité & Protection des Données",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Droit du numérique, cybersécurité, protection des données, conformité, assistance virtuelle et conseil juridique.",
    "linkedin": "https://bj.linkedin.com/in/fabiola-bankole",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 32,
    "name": "Innocent GBENONCHI",
    "slug": "innocent-gbenonchi",
    "region": "Sud",
    "commune": "Abomey-Calavi",
    "domain": "Droit, gouvernance & administration",
    "role": "Juriste en formation — Collaborateur CICR / Entrepreneur IG Source Divine",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Appui juridique, entrepreneuriat, conseil, assistance administrative, accompagnement et services de proximité.",
    "linkedin": "https://bj.linkedin.com/in/gbenonchi-innocent",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 33,
    "name": "Sèdjro Irmine Florida TONAKPA",
    "slug": "sedjro-irmine-florida-tonakpa",
    "region": "Sud",
    "commune": "Abomey-Calavi",
    "domain": "Numérique, communication & création de contenu",
    "role": "Spécialiste en Communication Digitale pour le Changement Social",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Communication digitale, contenus sociaux, stratégie de changement social, community management et assistance virtuelle.",
    "linkedin": "https://fr.linkedin.com/posts/sedjro-florida-tonakpa-communication-digitale_4-types-de-contenus-linkedin-pour-les-jeunes-activity-7484139925647372288-y232",
    "linkedinStatus": "Publication à confirmer"
  },
  {
    "id": 34,
    "name": "Lucresse ADIKPONSI",
    "slug": "lucresse-adikponsi",
    "region": "Sud",
    "commune": "Abomey-Calavi / Ouidah",
    "domain": "Finance, entrepreneuriat & économie",
    "role": "Finance & Comptabilité — Spécialiste éducation financière / Entrepreneure impact social",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Éducation financière, comptabilité, conseil financier, entrepreneuriat social et assistance administrative.",
    "linkedin": "https://bj.linkedin.com/in/lucresse-adikponsi-financi%C3%A8re/en",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 35,
    "name": "Sênan Candide HOUNGBEDJI",
    "slug": "senan-candide-houngbedji",
    "region": "Sud",
    "commune": "Cotonou",
    "domain": "Numérique, communication & création de contenu",
    "role": "Manager RH / Photographe artistique / Cinéaste / Défenseure Droits Humains",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Photographie, cinéma, RH, communication visuelle, droits humains et création de contenus.",
    "linkedin": "https://fr.linkedin.com/posts/s%C3%AAnan-candide-houngbedji-5616a8162_envie-de-refaire-les-pr%C3%A9sentations-moi-activity-7499450521431212032-H5t7",
    "linkedinStatus": "Publication à confirmer"
  },
  {
    "id": 36,
    "name": "Ryan TOSSOU",
    "slug": "ryan-tossou",
    "region": "Sud",
    "commune": "Akassato / Abomey-Calavi",
    "domain": "Numérique, communication & création de contenu",
    "role": "Ingénieur — Tourisme solidaire & Multimédia / Promoteur VISAGE CACHÉ DU BÉNIN",
    "paths": "CI + AV",
    "score": "100 %",
    "status": "Parcours totalement finalisé",
    "b2b": "Tourisme solidaire, multimédia, création de contenu, valorisation culturelle, communication et assistance virtuelle.",
    "linkedin": "",
    "linkedinStatus": "Lien direct à confirmer"
  },
  {
    "id": 37,
    "name": "Diane Lydia MADOKOUN",
    "slug": "diane-lydia-madokoun",
    "region": "Sud",
    "commune": "Zinvié",
    "domain": "Gestion de projets, suivi-évaluation & programmes",
    "role": "Agronome-Écologue — Chargée de suivi CREDI-ONG",
    "paths": "CI + ON",
    "score": "97 %",
    "status": "Parcours validé",
    "b2b": "Suivi de projets, écologie, conservation, accompagnement ONG, reporting et appui terrain.",
    "linkedin": "https://fr.linkedin.com/posts/diane-lydia-madokoun-460388252_d%C3%A9j%C3%A0-5-jours-dans-la-r%C3%A9serve-de-faune-du-activity-7281046578465845249-qwCe",
    "linkedinStatus": "Publication à confirmer"
  },
  {
    "id": 38,
    "name": "Jérémie CAKPO",
    "slug": "jeremie-cakpo",
    "region": "Sud",
    "commune": "Abomey-Calavi",
    "domain": "Numérique, communication & création de contenu",
    "role": "Journaliste-Documentaliste / Administrateur de Projet — Master Gestion Projet (ENA)",
    "paths": "CI + AV",
    "score": "89 %",
    "status": "Parcours validé",
    "b2b": "Journalisme, documentation, communication, administration de projet, rédaction et assistance virtuelle.",
    "linkedin": "https://bj.linkedin.com/in/j%C3%A9r%C3%A9mie-cakpo-583ba4414",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 39,
    "name": "Hararou BONI",
    "slug": "hararou-boni",
    "region": "Nord-Ouest",
    "commune": "Kérou",
    "domain": "Action communautaire, social & leadership",
    "role": "Leader Communautaire — Parlement des Jeunes Bénin / Formation CIAAF",
    "paths": "CI + AV",
    "score": "87 %",
    "status": "Parcours validé",
    "b2b": "Leadership communautaire, engagement citoyen, mobilisation de jeunes, plaidoyer et animation d’initiatives locales.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 40,
    "name": "Loukoumane SAKA",
    "slug": "loukoumane-saka",
    "region": "Nord-Ouest",
    "commune": "Kouandé",
    "domain": "Numérique, communication & création de contenu",
    "role": "Expert ODD — Journaliste Sociologue, Spécialiste Engagement Citoyen",
    "paths": "CI + AV",
    "score": "85 %",
    "status": "Parcours validé",
    "b2b": "ODD, journalisme, engagement citoyen, production de contenus, sensibilisation et communication sociale.",
    "linkedin": "https://fr.linkedin.com/posts/loukoumane-saka-072612278_jeune-relais-odd-activity-7245141382145748993-w3J7",
    "linkedinStatus": "Publication à confirmer"
  },
  {
    "id": 41,
    "name": "Ulrich YOROU",
    "slug": "ulrich-yorou",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Agriculture, environnement & développement durable",
    "role": "Étudiant Master Aménagement & Gestion Ressources Naturelles / Promoteur MycoGreen Solutions",
    "paths": "CI + AV",
    "score": "85 %",
    "status": "Parcours validé",
    "b2b": "Ressources naturelles, environnement, myciculture, entrepreneuriat vert et développement de projets durables.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 42,
    "name": "José FAKAMBI",
    "slug": "jose-fakambi",
    "region": "Ouémé-Plateau",
    "commune": "Pobè",
    "domain": "Agriculture, environnement & développement durable",
    "role": "Technologue Agroalimentaire — Entrepreneur / Orateur public",
    "paths": "CI + ON",
    "score": "79 %",
    "status": "Parcours validé",
    "b2b": "Agroalimentaire, transformation, entrepreneuriat, prise de parole et développement de produits locaux.",
    "linkedin": "",
    "linkedinStatus": "À rechercher/valider"
  },
  {
    "id": 43,
    "name": "Achnelle Cécilia EZIN",
    "slug": "achnelle-cecilia-ezin",
    "region": "Sud-Ouest",
    "commune": "Lokossa",
    "domain": "Numérique, communication & création de contenu",
    "role": "Technicienne en Informatique et Télécommunication — Étudiante",
    "paths": "CI + AV",
    "score": "76 %",
    "status": "Parcours validé",
    "b2b": "Informatique, télécommunications, support technique, assistance virtuelle et services numériques.",
    "linkedin": "https://fr.linkedin.com/posts/achnelle-ezin_jai-eu-lhonneur-de-participer-au-hackathon-activity-7379043839149260800-aFvc",
    "linkedinStatus": "Publication à confirmer"
  },
  {
    "id": 44,
    "name": "Faoziath ABOUDOU ALI",
    "slug": "faoziath-aboudou-ali",
    "region": "Nord-Est",
    "commune": "Parakou",
    "domain": "Finance, entrepreneuriat & économie",
    "role": "Entrepreneur — TIC, Changement climatique, Innovation sociale",
    "paths": "CI + AV",
    "score": "CI 100 % / AV 21 %",
    "status": "Parcours principal validé",
    "b2b": "Entrepreneuriat, innovation sociale, TIC, changement climatique, projets d’impact et appui à l’insertion économique.",
    "linkedin": "https://bj.linkedin.com/in/faoziath-aboudou-ali",
    "linkedinStatus": "À confirmer"
  },
  {
    "id": 45,
    "name": "Hermann HADJAGOUN",
    "slug": "hermann-hadjagoun",
    "region": "Sud",
    "commune": "Sô-Ava",
    "domain": "Agriculture, environnement & développement durable",
    "role": "Entrepreneur / Environnementaliste — Coordonnateur MJPEA, Promoteur Ganvié Tour",
    "paths": "CI + AV",
    "score": "CI 100 % / AV 0 %",
    "status": "Parcours principal validé",
    "b2b": "Tourisme durable, environnement, éducation écologique, mobilisation de jeunes et valorisation de Ganvié.",
    "linkedin": "https://fr.linkedin.com/posts/hermann-hadjagoun-9a007b373_retour-sur-la-journ%C3%A9e-des-%C3%A9cosyst%C3%A8mes-aquatiques-activity-7443020075189706752-eJVe",
    "linkedinStatus": "Publication à confirmer"
  }
];
const grid = document.getElementById('cardsGrid');
const searchInput = document.getElementById('searchInput');
const domainFilter = document.getElementById('domainFilter');
const regionFilter = document.getElementById('regionFilter');
const statusFilter = document.getElementById('statusFilter');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const modal = document.getElementById('profileModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const printBtn = document.getElementById('printBtn');
const toggleView = document.getElementById('toggleView');

const photoExtensions = ['jpg', 'jpeg', 'png', 'webp'];

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

function photoSources(slug) {
  return photoExtensions.map(ext => `assets/photos/${slug}.${ext}`);
}

function avatarHTML(profile, large = false) {
  const src = photoSources(profile.slug)[0];
  return `
    <div class="avatar" data-slug="${profile.slug}">
      <span class="initials">${initials(profile.name)}</span>
      <img src="${src}" alt="Photo de ${profile.name}" loading="lazy" onerror="handleImageError(this)" />
    </div>
  `;
}

function handleImageError(img) {
  const avatar = img.closest('.avatar');
  const current = img.getAttribute('src');
  const slug = avatar?.dataset.slug;
  if (!slug) return avatar?.classList.add('fallback');
  const sources = photoSources(slug);
  const index = sources.indexOf(current);
  if (index >= 0 && index < sources.length - 1) {
    img.src = sources[index + 1];
  } else {
    avatar.classList.add('fallback');
  }
}
window.handleImageError = handleImageError;

function uniqueValues(key) {
  return [...new Set(profiles.map(profile => profile[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b, 'fr'));
}

function fillSelect(select, values, defaultLabel) {
  select.innerHTML = `<option value="">${defaultLabel}</option>` + values.map(value => `<option value="${value}">${value}</option>`).join('');
}

function profileMatches(profile) {
  const q = searchInput.value.trim().toLowerCase();
  const domain = domainFilter.value;
  const region = regionFilter.value;
  const status = statusFilter.value;
  const text = [profile.name, profile.region, profile.commune, profile.domain, profile.role, profile.paths, profile.score, profile.status, profile.b2b].join(' ').toLowerCase();
  return (!q || text.includes(q)) && (!domain || profile.domain === domain) && (!region || profile.region === region) && (!status || profile.status === status);
}

function renderCards() {
  const filtered = profiles.filter(profileMatches);
  resultsCount.textContent = filtered.length;
  emptyState.hidden = filtered.length !== 0;
  grid.innerHTML = filtered.map(profile => `
    <article class="profile-card" data-id="${profile.id}">
      <div class="card-top">
        ${avatarHTML(profile)}
        <div>
          <h3 class="name">${profile.name}</h3>
          <div class="meta">${profile.commune} · ${profile.region}</div>
        </div>
      </div>
      <div class="card-body">
        <p class="role">${profile.role}</p>
        <div class="tags">
          <span class="tag green">${profile.score}</span>
          <span class="tag dark">${profile.paths}</span>
          <span class="tag">${profile.domain.split(',')[0]}</span>
        </div>
        <p class="b2b">${profile.b2b}</p>
        <div class="card-actions">
          <button type="button" onclick="openProfile(${profile.id})">Voir la fiche</button>
          ${profile.linkedin ? `<a class="linkedin" href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>` : `<button type="button" disabled title="Lien LinkedIn à confirmer">LinkedIn à confirmer</button>`}
        </div>
      </div>
    </article>
  `).join('');
}

function openProfile(id) {
  const profile = profiles.find(item => item.id === id);
  if (!profile) return;
  modalBody.innerHTML = `
    <section class="modal-hero">
      ${avatarHTML(profile, true)}
      <div>
        <p class="eyebrow">Profil lauréat n°${profile.id}</p>
        <h2 id="modalName">${profile.name}</h2>
        <p class="meta">${profile.commune} · ${profile.region}</p>
        <div class="tags">
          <span class="tag green">${profile.score}</span>
          <span class="tag dark">${profile.paths}</span>
          <span class="tag">${profile.status}</span>
        </div>
      </div>
    </section>
    <section class="modal-grid">
      <article class="modal-card">
        <h3>Domaine</h3>
        <p>${profile.domain}</p>
      </article>
      <article class="modal-card">
        <h3>Positionnement</h3>
        <p>${profile.role}</p>
      </article>
      <article class="modal-card">
        <h3>Potentiel de collaboration B2B</h3>
        <p>${profile.b2b}</p>
      </article>
      <article class="modal-card">
        <h3>LinkedIn</h3>
        <p>${profile.linkedin ? `<a href="${profile.linkedin}" target="_blank" rel="noopener noreferrer">Ouvrir le profil / la publication</a><br><small>${profile.linkedinStatus}</small>` : `${profile.linkedinStatus}`}</p>
      </article>
    </section>
  `;
  modal.showModal();
}
window.openProfile = openProfile;

function updateStats() {
  document.getElementById('totalProfiles').textContent = profiles.length;
  document.getElementById('totalDomains').textContent = uniqueValues('domain').length;
  document.getElementById('totalRegions').textContent = uniqueValues('region').length;
}

function initFilters() {
  fillSelect(domainFilter, uniqueValues('domain'), 'Tous les domaines');
  fillSelect(regionFilter, uniqueValues('region'), 'Toutes les régions');
  fillSelect(statusFilter, uniqueValues('status'), 'Tous les statuts');
  [searchInput, domainFilter, regionFilter, statusFilter].forEach(element => element.addEventListener('input', renderCards));
  document.getElementById('clearFilters').addEventListener('click', () => {
    searchInput.value = '';
    domainFilter.value = '';
    regionFilter.value = '';
    statusFilter.value = '';
    renderCards();
  });
}

closeModal.addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    event.clientX < dialogDimensions.left ||
    event.clientX > dialogDimensions.right ||
    event.clientY < dialogDimensions.top ||
    event.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});
printBtn.addEventListener('click', () => window.print());
toggleView.addEventListener('click', () => {
  document.body.classList.toggle('compact');
  toggleView.textContent = document.body.classList.contains('compact') ? 'Vue détaillée' : 'Vue compacte';
});

function boot() {
  profiles = PROFILES_DATA;
  updateStats();
  initFilters();
  renderCards();
}

boot();
