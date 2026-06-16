// ==================== CONFIGURATION & TRANSLATIONS ====================
const translations = {
    en: {
        navHome: "Home",
        navDashboard: "Intelligence Dashboard",
        navPrivacy: "Data Privacy",
        navSupport: "Enterprise Support",
        btnLive: "Live Dashboard",
        heroTitle: "Find Next-Gen Winning Products For Free",
        heroDesc: "Real-time updates filtered from Amazon, eBay, and Etsy Top Charts. Access premium digital and physical assets insights instantly.",
        btnAnalyze: "Analyze Product",
        cpaTitle: "📈 Deep Analytics Scanner Activated",
        cpaDesc: "Our platform scans live e-commerce API metrics every 6 hours to structure demand charts, competition indexes, and growth rates.",
        cpaBtn: "🚀 View Market Overview",
        secTitle: "📊 E-Commerce Intelligence & Data Insights",
        btnMore: "🔍 Read More Insights",
        footerAbout: "About Us",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerContact: "Contact Us",
        footerRights: "© 2026 HoldingW Platforms Inc. All rights reserved.",
        aboutTitle: "About HoldingW Platforms",
        aboutDesc: "HoldingW Platforms is a premier decentralized intelligence network providing high-fidelity data streams for global e-commerce operations. By structuralizing distributed cloud computing and proprietary telemetry scrapers, we capture real-time market velocity across major digital and physical asset verticals. Our mission is to democratize high-barrier institutional arbitrage metrics, offering self-taught developers, independent dropshippers, and scaling enterprises the execution frameworks required to establish sustainable market share. Operating at the intersection of programmatic market analysis and predictive consumer flow telemetry, HoldingW bridges the structural gap between volatile retail demand curves and enterprise inventory management systems.",
        privacyTitle: "Data Telemetry & Privacy Policy",
        privacyContent: "1. DATA COLLECTION ARCHITECTURE AND TELEMETRIC CAPTURE\nHoldingW Analytics operates a highly optimized, non-persistent data telemetry framework designed to evaluate aggregate market movement metrics without compromised user identity persistence. When accessing our distributed node network, our systems capture baseline non-identifiable technical properties including localized browser configurations, generalized geographic regional telemetry (Country-level resolution), and real-time interaction timestamps. We do not maintain, serialize, or write to permanent storage any raw structural identity identifiers, personal financial configurations, or private user database keys.\n\n2. ADVANCED ADVERTISING PARTNERSHIPS AND BEHAVIORAL TELEMETRY\nTo sustain our infrastructure without operational cost barriers, this platform implements advanced monetization interfaces provided by verified programmatic advertising exchanges, including Monetag (PropellerAds network nodes). These third-party network modules utilize localized asynchronous data tracking scripts, operational cookie infrastructure, and decentralized tracking beacons to dynamically render relevant algorithmic advertisements based on aggregated programmatic profiles. Users possess the absolute sovereign technical authority to limit behavioral telemetry tracking by utilizing client-side script restrictions, content-blocking systems, or specialized browser configurations. HoldingW asserts zero direct administrative governance over the technical script logic executed by external advertising platforms.\n\n3. CRYPTOGRAPHIC DATA INTEGRITY AND SECURITY CLAUSES\nAny analytical parameter, localized preference selection, or interface session cache generated during active operational infrastructure connectivity is protected via standard Transport Layer Security (TLS 1.3) protocols. While our structural database logic ensures that operational dashboards are isolated from systemic attack vectors, no distributed web deployment provides an absolute guarantee of digital security. Users connect with full acknowledgement of the decentralized network risks inherent to open internet protocols.\n\n4. PROGRESSIVE COMPLIANCE AMENDMENTS AND STRUCTURAL LEGAL UPDATES\nHoldingW retains the unrestricted operational right to modify, reconstruct, or compress sections of this telemetric privacy policy at any given moment without prior interface notification. Continual utilization of our automated sourcing scanner implicitly validates absolute user alignment with our active compliance frameworks. For further regulatory or operational transparency inquiries, contact our legal oversight desk.",
        termsTitle: "Terms of Service & Infrastructure Agreement",
        termsContent: "1. ACKNOWLEDGEMENT OF DISTRIBUTED RISK AND DATA DISCLAIMER\nBy establishing a websocket or HTTP connection to HoldingW Platforms, you expressly agree that all data arrays, growth percentages, demand graphs, and product analysis matrices rendered through our interface are purely informational indicators. HoldingW explicitly disclaims all functional liability for financial capital losses, inventory overhead errors, or strategic execution mistakes incurred by users utilizing our predictive analytics models. This framework does not constitute financial advisory, institutional trade recommendations, or legal e-commerce counseling.\n\n2. OPERATIONAL INFRASTRUCTURE BOUNDARIES AND ACCEPTABLE USE\nUsers are granted a non-exclusive, non-transferable, temporary interface license to view scanned e-commerce assets. Programmatic extraction of our intelligence pipelines via automated headless scrapers, specialized bot infrastructure, or unsanctioned API interceptors without written architectural consent from our system administrators is strictly prohibited and constitutes a direct breach of this infrastructure agreement. We reserve the full technical right to deploy automated firewalls to block offending IP addresses or network nodes showing anomalous requests.\n\n3. ZERO LIABILITIES AND OUTCOME INSULATION\nHoldingW Platforms, its developers, data suppliers, and operational partners shall not under any jurisdictional framework be held legally or financially responsible for indirect, incidental, punitive, or consequential operational damages arising from systemic platform downtime, temporary cache delivery latencies, or programmatic metric adjustments. You operate within our environment completely at your own risk.\n\n4. INTELLECTUAL PROPERTY AND BRAND PROTECTION\nThe UI/UX infrastructure, specific branding configurations, customized indicator styles, and proprietary telemetry aggregation algorithms embedded within HoldingW are the exclusive intellectual property of HoldingW Platforms Inc. Unauthorized reskinning, duplication, or source redistribution of these web structures is strictly legally protected.",
        contactDesc: "If you have any questions feel free to reach out to our optimization team.",
        contactEmailLbl: "📧 Official Email Support:",
        // Analysis Modal Labels
        lblDemand: "Demand Index",
        lblComp: "Competition",
        lblMargin: "Margin Est.",
        lblSatTitle: "Market Saturation Insights",
        // Articles Section
        art1Category: "Predictive Analytics",
        art1Title: "How Data Telemetry Identifies Micro-Trends Before Saturation",
        art1Desc: "The traditional method of sourcing winning products relies heavily on historical order volume. However, by the time an asset hits peak volume figures on centralized marketplaces, the customer acquisition cost (CAC) has often scaled beyond sustainable margins. Moving early allows for optimized product mapping and clean scaling windows before market saturation hits the vertical.",
        art1Meta: "March 2026 • By HoldingW Research",
        art2Category: "Digital Arbitrage",
        art2Title: "The Unit Economics of Scaling Digital Assets on High-Margin Platforms",
        art2Desc: "Physical dropshipping carries structural liabilities: fluctuating freight rates, logistics bottlenecks, and variable return percentages. This is why high-volume digital arbitrage is seeing rapid institutional adoption. Assets like structured planners, programmatic templates, and design files feature near-zero cost of goods sold (COGS).",
        art2Meta: "April 2026 • By Technical Sourcing Desk",
        art3Category: "Market Mechanics",
        art3Title: "Evaluating Competition Indexes via Fragmented Supply Sources",
        art3Desc: "A low competition index score on an analytical platform doesn't always guarantee an easy scaling window. Serious data operations evaluate competition through fragmented supplier transparency. If a product is controlled by a single main factory cluster, supply lines are prone to abrupt pricing shifts.",
        art3Meta: "May 2026 • By Analytics Team",
        // Product Specific Data
        hudTitle: "Universal Heads-Up Display (HUD) GPS Speedometer",
        hudSat: "Demand is heavily scaling across US automotive sub-niches. Competitor density is currently medium-low, optimizing current ad spend margins.",
        plannerTitle: "Ultimate 2026 Digital Planner for iPad",
        plannerSat: "Digital asset structure shows immediate download velocity. Zero COGS allows scaling with aggressive micro-influencer targeting.",
        iphoneTitle: "Refurbished iPhone 14 Pro Max 128GB",
        iphoneSat: "High consumer trade-in search volume creates fragmented supply windows. Recommended operational model: quick inventory turnover.",
        pillowTitle: "Orthopedic Memory Foam Knee Pillow for Pain Relief",
        pillowSat: "E-commerce volume index peaks mid-quarter. High cross-border demand across EU zones suggests localized listing advantages.",
        journalTitle: "Handmade Vintage Leather Journal Notebook",
        journalTitleText: "Handmade Vintage Leather Journal Notebook",
        journalSat: "Premium gifting curves show stability. High rating configurations yield stronger organic search rankings on Etsy marketplace setups.",
        premiumTitle: "Market Overview & Macro Trends",
        premiumSat: "Deep scanner telemetry highlights an immediate surge in cross-border digital commodities. Multi-channel optimization required."
    },
    fr: {
        navHome: "Accueil",
        navDashboard: "Tableau de Bord",
        navPrivacy: "Confidentialité",
        navSupport: "Support Entreprise",
        btnLive: "Dashboard En Direct",
        heroTitle: "Trouvez des Produits Gagnants de Nouvelle Génération Gratuitement",
        heroDesc: "Mises à jour en temps réel filtrées depuis Amazon, eBay et Etsy. Accédez instantanément à des analyses d'actifs physiques et numériques premium.",
        btnAnalyze: "Analyser le Produit",
        cpaTitle: "📈 Scanner d'Analyse Approfondie Activé",
        cpaDesc: "Notre plateforme scanne les métriques de l'API e-commerce toutes les 6 heures pour structurer les graphiques de demande et les indices de croissance.",
        cpaBtn: "🚀 Voir l'Aperçu du Marché",
        secTitle: "📊 Intelligence E-Commerce & Insights",
        btnMore: "🔍 Lire Plus d'Insights",
        footerAbout: "À Propos",
        footerPrivacy: "Politique de Confidentialité",
        footerTerms: "Conditions d'Utilisation",
        footerContact: "Contactez-nous",
        footerRights: "© 2026 HoldingW Platforms Inc. Tous droits réservés.",
        aboutTitle: "À Propos de HoldingW Platforms",
        aboutDesc: "HoldingW Platforms est un réseau d'intelligence décentralisé de premier plan fournissant des flux de données de haute fidélité pour les opérations de commerce électronique mondiales. En structurant l'informatique en nuage distribuée et des scanners de télémétrie exclusifs, nous capturons la vitesse du marché en temps réel à travers les principaux verticaux d'actifs numériques et physiques. Notre mission est de démocratiser les métriques d'arbitrage institutionnel à barrière élevée, en offrant aux développeurs autodidactes, aux dropshippers indépendants et aux entreprises en pleine croissance les cadres d'exécution requis pour établir une part de marché durable. Opérant à l'intersection de l'analyse de marché programmatique et de la télémétrie prédictive des flux de consommateurs, HoldingW comble le fossé structure l'écart entre les courbes de demande de détail volatiles et les systèmes de gestion des stocks d'entreprise.",
        privacyTitle: "Télémétrie des Données & Politique de Confidentialité",
        privacyContent: "1. ARCHITECTURE DE COLLECTE DE DONNÉES ET CAPTURE TÉLÉMÉTRIQUE\nHoldingW Analytics exploite un cadre de télémétrie de données non persistant hautement optimisé conçu pour évaluer les métriques de mouvement du marché agrégées sans compromettre la persistance de l'identité de l'utilisateur. Lors de l'accès à notre réseau de nœuds distribués, nos systèmes capturent les propriétés techniques de base non identifiables, y compris les configurations de navigateur localisées, la télémétrie régionale géographique généralisée (résolution au niveau du pays) et les horodatages d'interaction en temps réel. Nous ne conservons, ne sérialisons ni n'écrivons dans aucun stockage permanent des identifiants d'identité bruts, des configurations financières personnelles ou des clés de base de données utilisateur privées.\n\n2. PARTENARIATS PUBLICITAIRES AVANCÉS ET TÉLÉMÉTRIE COMPORTEMENTALE\nPour maintenir notre infrastructure sans barrières de coûts opérationnels, cette plateforme implémente des interfaces de monétisation avancées fournies par des bourses publicitaires programmatiques vérifiées, y compris Monetag (nœuds du réseau PropellerAds). Ces modules de réseau tiers utilisent des scripts de suivi de données asynchrones localisés, une infrastructure de cookies opérationnelle et des balises de suivi décentralisées pour afficher dynamiquement des publicités algorithmiques pertinentes basées sur des profils programmatiques agrégés. Les utilisateurs possèdent l'autorité technique absolue pour limiter le suivi de la télémétrie comportementale en utilisant des restrictions de script côté client, des systèmes de blocage de contenu ou des configurations de navigateur spécialisées. HoldingW n'exerce aucune gouvernance administrative directe sur la logique de script externe exécutée par les plateformes publicitaires tierces.\n\n3. INTÉGRITÉ DES DONNÉES CRYPTOGRAPHIQUES ET CLAUSES DE SÉCURITÉ\nTout paramètre analytique, sélection de préférence localisée ou cache de session d'interface généré lors d'une connectivité active à l'infrastructure est protégé via les protocole standard Transport Layer Security (TLS 1.3). Bien que notre logique de base de données structurelle garantisse que les tableaux de bord opérationnels sont isolés des vecteurs d'attaque systémiques, aucun déploiement Web distribué ne fournit une garantie absolue de sécurité numérique. Les utilisateurs se connectent en pleine connaissance des risques de réseau décentralisés inhérents aux protocoles Internet ouverts.\n\n4. AMENDEMENTS DE CONFORMITÉ PROGRESSIVE ET MISES À JOUR LÉGALES\nHoldingW conserve le droit opérationnel illimité de modifier, reconstruire ou compresser des sections de cette politique de confidentialité télémétrique à tout moment et sans notification préalable de l'interface. L'utilisation continue de notre scanner de sourcing automatisé valide implicitement l'alignement absolu de l'utilisateur avec nos cadres de conformité actifs. Pour toute autre demande de transparence réglementaire ou opérationnelle, contactez notre bureau de surveillance juridique.",
        termsTitle: "Conditions d'Utilisation & Accord d'Infrastructure",
        termsContent: "1. RECONNAISSANCE DES RISQUES DISTRIBUÉS ÉMANANT DES DONNÉES\nEn établissant une connexion websocket ou HTTP avec HoldingW Platforms, vous acceptez expressément que tous les tableaux de données, pourcentages de croissance, graphiques de demande et matrices d'analyse de produits rendus via notre interface sont purement des indicateurs informatifs. HoldingW décline explicitement toute responsabilité fonctionnelle pour les pertes de capital financier, les erreurs de stocks ou les erreurs d'exécution stratégique subies par les utilisateurs utilisant nos modèles d'analyse prédictive. Ce cadre ne constitue pas un conseil financier, des recommandations commerciales institutionnelles ou un conseil juridique en commerce électronique.\n\n2. LIMITES DE L'INFRASTRUCTURE OPÉRATIONNELLE ET UTILISATION ACCEPTABLE\nLes utilisateurs se voient accorder une licence d'interface temporaire, non exclusive et non transférable pour afficher les actifs de commerce électronique scannés. L'extraction programmatique de nos pipelines d'intelligence via des scrapers automatisés sans tête, une infrastructure de bots spécialisés ou des intercepteurs d'API non sanctionnés sans le consentement architectural écrit de nos administrateurs système est strictement interdite et constitue une violation directe de cet accord d'infrastructure. Nous nous réservons le droit technique complet de déployer des pare-feu automatisés pour bloquer les adresses IP incriminées ou les nœuds de réseau présentant des requêtes anormales.\n\n3. ABSENCE DE RESPONSABILITÉ ET ISOLATION DES RÉSULTATS\nHoldingW Platforms, ses développeurs, fournisseurs de données et partenaires opérationnels ne seront en aucun cas tenus légalement ou financièrement responsables des dommages opérationnels indirects, accessoires, punitifs ou consécutifs découlant d'indisponibilités systémiques de la plateforme, de latences temporaires de livraison du cache ou d'ajustements programmatiques des métriques. Vous opérez dans notre environnement entièrement à vos propres risques.\n\n4. PROPRIÉTÉ INTELLECTUELLE ET PROTECTION DE LA MARQUE\nL'infrastructure UI/UX, les configurations de marque spécifiques, les styles d'indicateurs personnalisés et les algorithmes d'agrégation de télémétrie propriétaires intégrés au sein de HoldingW sont la propriété intellectuelle exclusive de HoldingW Platforms Inc. Toute refonte, duplication ou redistribution non autorisée de ces structures Web est strictement protégée par la loi.",
        contactDesc: "Si vous avez des questions, n'hésitez pas à contacter notre équipe d'optimisation.",
        contactEmailLbl: "📧 Support Email Officiel:",
        // Analysis Modal Labels
        lblDemand: "Indice de Demande",
        lblComp: "Compétition",
        lblMargin: "Marge Est.",
        lblSatTitle: "Insights sur la Saturation du Marché",
        // Articles Section
        art1Category: "Analyse Prédictive",
        art1Title: "Comment la télémétrie des données identifie les micro-tendances avant la saturation",
        art1Desc: "La méthode traditionnelle de sourcing de produits gagnants repose largement sur le volume historique des commandes. Cependant, au moment où un actif atteint des chiffres de volume de pointe sur des marchés centralisés, le coût d'acquisition client (CAC) a souvent grimpé au-delà des marges durables. Agir tôt permet une cartographie optimisée des produits et des fenêtres de mise à l'échelle propres avant que la saturation du marché ne frappe le vertical.",
        art1Meta: "Mars 2026 • Par HoldingW Research",
        art2Category: "Arbitrage Numérique",
        art2Title: "L'économie unitaire de la mise à l'échelle des actifs numériques sur des plateformes à forte marge",
        art2Desc: "Le dropshipping physique comporte des passifs structurels : taux de fret fluctuants, goulots d'étranglement logistiques et pourcentages de retour variables. C'est pourquoi l'arbitrage numérique à volume élevé connaît une adoption institutionnelle rapide. Les actifs tels que les planificateurs structurés, les modèles programmatiques et les fichiers de conception présentent un coût des marchandises vendues (COGS) proche de zéro.",
        art2Meta: "Avril 2026 • Par Technical Sourcing Desk",
        art3Category: "Mécanique du Marché",
        art3Title: "Évaluation des indices de concurrence via des sources d'approvisionnement fragmentées",
        art3Desc: "Un faible score d'indice de concurrence sur une plateforme analytique ne garantit pas toujours une fenêtre de mise à l'échelle facile. Les opérations de données sérieuses évaluent la concurrence par la transparence fragmentée des fournisseurs. Si un produit est contrôlé par un seul cluster d'usines principal, les lignes d'approvisionnement sont sujettes à des changements de prix abrupts.",
        art3Meta: "Mai 2026 • Par Analytics Team",
        // Product Specific Data
        hudTitle: "Affichage Tête Haute Universel (HUD) Tachymètre GPS",
        hudSat: "La demande augmente fortement dans les sous-niches automobiles aux États-Unis. Densité concurrentielle moyenne-basse.",
        plannerTitle: "Planificateur Numérique Ultime 2026 pour iPad",
        plannerSat: "La structure des actifs numériques montre une vitesse de téléchargement immédiate. Un coût des marchandises vendues nul.",
        iphoneTitle: "iPhone 14 Pro Max 128Go Reconditionné",
        iphoneSat: "Le volume de recherche élevé crée des fenêtres d'approvisionnement fragmentées. Renouvellement rapide des stocks recommandé.",
        pillowTitle: "Oreiller de Genou Orthopédique en Mousse à Mémoire de Forme",
        pillowSat: "L'indice de volume e-commerce culmine au milieu du trimestre. Forte demande transfrontalière dans les zones de l'UE.",
        journalTitle: "Carnet de Notes Journal en Cuir Vintage Fait Main",
        journalTitleText: "Carnet de Notes Journal en Cuir Vintage Fait Main",
        journalSat: "Les courbes de cadeaux premium montrent une stabilité. Les configurations à note élevée génèrent de meilleurs classements.",
        premiumTitle: "Aperçu du Marché & Macro-Tendances",
        premiumSat: "La télémétrie met en évidence une augmentation immédiate des produits numériques transfrontaliers. Optimisation requise."
    }
};

let currentLang = 'en';

// ==================== MODAL & ANALYSIS LOGIC ====================
function openAnalysis(product) {
    const modal = document.getElementById('analysisModal');
    const title = document.getElementById('analysisTitle');
    const satText = document.getElementById('saturationText');
    const dStat = document.getElementById('statDemand');
    const cStat = document.getElementById('statComp');
    const mStat = document.getElementById('statMargin');

    // جلب التسميات حسب اللغة الحالية
    document.getElementById('lbl-demand').innerText = translations[currentLang].lblDemand;
    document.getElementById('lbl-comp').innerText = translations[currentLang].lblComp;
    document.getElementById('lbl-margin').innerText = translations[currentLang].lblMargin;
    document.getElementById('lbl-sat-title').innerText = translations[currentLang].lblSatTitle;

    // تخصيص البيانات حسب المنتج المختار
    if (product === 'hud') {
        title.innerText = translations[currentLang].hudTitle;
        satText.innerText = translations[currentLang].hudSat;
        dStat.innerText = "94.2%";
        cStat.innerText = currentLang === 'en' ? "Medium" : "Moyenne";
        mStat.innerText = "+68%";
    } else if (product === 'planner') {
        title.innerText = translations[currentLang].plannerTitle;
        satText.innerText = translations[currentLang].plannerSat;
        dStat.innerText = "91.5%";
        cStat.innerText = currentLang === 'en' ? "Low" : "Basse";
        mStat.innerText = "+92%";
    } else if (product === 'iphone') {
        title.innerText = translations[currentLang].iphoneTitle;
        satText.innerText = translations[currentLang].iphoneSat;
        dStat.innerText = "88.9%";
        cStat.innerText = currentLang === 'en' ? "High" : "Élevée";
        mStat.innerText = "+24%";
    } else if (product === 'pillow') {
        title.innerText = translations[currentLang].pillowTitle;
        satText.innerText = translations[currentLang].pillowSat;
        dStat.innerText = "93.1%";
        cStat.innerText = currentLang === 'en' ? "Medium" : "Moyenne";
        mStat.innerText = "+55%";
    } else if (product === 'journal') {
        title.innerText = translations[currentLang].journalTitleText;
        satText.innerText = translations[currentLang].journalSat;
        dStat.innerText = "85.4%";
        cStat.innerText = currentLang === 'en' ? "Low" : "Basse";
        mStat.innerText = "+42%";
    } else if (product === 'premium') {
        title.innerText = translations[currentLang].premiumTitle;
        satText.innerText = translations[currentLang].premiumSat;
        dStat.innerText = "97.8%";
        cStat.innerText = currentLang === 'en' ? "Dynamic" : "Dynamique";
        mStat.innerText = "+74%";
    }

    modal.style.display = 'block';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    const modals = ['aboutModal', 'analysisModal', 'privacyModal', 'termsModal', 'contactModal'];
    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
}

// ==================== LANGUAGE SWITCHING LOGIC ====================
function switchLang(lang) {
    currentLang = lang;
    
    if (lang === 'en') {
        document.getElementById('lang-en').style.color = '#3b82f6';
        document.getElementById('lang-fr').style.color = '#9ca3af';
    } else {
        document.getElementById('lang-en').style.color = '#9ca3af';
        document.getElementById('lang-fr').style.color = '#3b82f6';
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'A' || el.tagName === 'SPAN' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'P' || el.tagName === 'BUTTON' || el.tagName === 'DIV') {
                el.innerText = translations[lang][key];
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    switchLang('en');
});
