(function() {
    // 1. تحديد اللغة الافتراضية (تعتمد على التخزين المحلي أو الإنجليزية)
    let currentLang = localStorage.getItem('holdingw_lang') || 'en';

    // 2. قاموس الترجمة الكامل (كامل ومصلح ومطوّر لـ AdSense)
    const translations = {
        en: {
            // Navigation
            navHome: "Home",
            navDashboard: "Intelligence Dashboard",
            navPrivacy: "Data Privacy",
            navSupport: "Enterprise Support",
            btnLive: "Live Dashboard",
            
            // Hero Section
            heroTitle: "Find Next-Gen Winning Products For Free",
            heroDesc: "Real-time updates filtered from Amazon, eBay, and Etsy Top Charts. Access premium digital and physical assets insights instantly.",
            
            // Products Grid & Live Scanner
            p1Title: "Universal Heads-Up Display (HUD) GPS Speedometer",
            p1Target: "Target: Dropship • Country: US/CA • Rating: 4.8 ⭐",
            p1Badge1: "Growth +510%",
            p1Badge2: "AliExpress Hot Demand",
            
            p2Title: "Ultimate 2026 Digital Planner for iPad",
            p2Target: "Target: Resell • Country: US • Type: Digital Asset",
            p2Badge1: "Growth +410%",
            p2Badge2: "Etsy Top Trend",
            
            p3Title: "Refurbished iPhone 14 Pro Max 128GB",
            p3Target: "Target: E-Com • Country: Global • Condition: Unlocked",
            p3Badge1: "Growth +195%",
            p3Badge2: "eBay Hot Demand",
            
            p4Title: "Orthopedic Memory Foam Knee Pillow for Pain Relief",
            p4Target: "Target: E-Com • Country: EU/US • Format: Physical Asset",
            p4Badge1: "Growth +290%",
            p4Badge2: "Amazon Hot Seller",
            
            p5Title: "Handmade Vintage Leather Journal Notebook",
            p5Target: "Target: Premium Gift • Country: US • Rating: 4.9 ⭐",
            p5Badge1: "Growth +120%",
            p5Badge2: "Etsy Handmade",
            
            btnAnalyze: "Analyze Product",
            
            // CPA Box / Live Analytics
            cpaTitle: "📈 Deep Analytics Scanner Activated",
            cpaDesc: "Our platform scans live e-commerce API metrics every 6 hours to structure demand charts, competition indexes, and growth rates.",
            cpaBtn: "🚀 View Market Overview",
            
            // Articles / Insights Section
            secTitle: "📊 E-Commerce Intelligence & Data Insights",
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
            
            btnMore: "🔍 Read More Insights",
            
            // Footer Links
            footerAbout: "About Us",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms of Service",
            footerContact: "Contact Us",
            footerRights: "© 2026 HoldingW Platforms Inc. All rights reserved.",
            
            // ================= MODALS LEGAL CONTENT (AD-SENSE COMPLIANT) =================
            aboutTitle: "About HoldingW",
            aboutDesc: "Welcome to HoldingW Platforms. We are a premier digital hub dedicated to delivering cutting-edge market research, advanced technical insights, and automated data solutions. Our mission is to empower professionals and creators with the analytical tools and strategic frameworks needed to optimize their digital assets and scale operations effectively in today's dynamic markets. We leverage advanced predictive intelligence to map emerging e-commerce trends before global saturation.",
            
            privacyTitle: "Privacy Policy",
            privacyContent: "At HoldingW Analytics, accessible from our main platform, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HoldingW Analytics and how we use it.\n\nIf you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.\n\n### Log Files\nHoldingW Analytics follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.\n\n### Cookies and Web Beacons\nLike any other website, HoldingW Analytics uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.",
            
            termsTitle: "Terms of Service",
            termsContent: "Welcome to HoldingW Analytics!\n\nBy accessing this website, we assume you accept these terms of service. Do not continue to use HoldingW Analytics if you do not agree to take all of the terms and conditions stated on this page.\n\n### License\nUnless otherwise stated, HoldingW Analytics and/or its licensors own the intellectual property rights for all material on HoldingW Analytics. All intellectual property rights are reserved. You may access this from HoldingW Analytics for your own personal use subjected to restrictions set in these terms and conditions.\n\nYou must not:\n* Republish material from HoldingW Analytics\n* Sell, rent or sub-license material from HoldingW Analytics\n* Reproduce, duplicate or copy material from HoldingW Analytics\n* Redistribute content from HoldingW Analytics\n\nThis Agreement shall begin on the date hereof. As a user, you agree that you are responsible for compliance with any applicable local laws and market regulations.",
            
            contactTitle: "Contact Us",
            contactDesc: "If you have any questions about our analytical dashboards, data synchronization, market intelligence metrics, or enterprise tools, feel free to reach out to our team. We target to respond to all institutional and independent inquiry options within 24–48 operational hours.",
            contactEmailLbl: "Official Email Support:"
        },
        fr: {
            // Navigation
            navHome: "Accueil",
            navDashboard: "Tableau de Bord",
            navPrivacy: "Confidentialité",
            navSupport: "Support Client",
            btnLive: "Dashboard En Direct",
            
            // Hero Section
            heroTitle: "Trouvez Gratuitement les Produits Gagnants de Nouvelle Génération",
            heroDesc: "Mises à jour en temps réel filtrées depuis les tops classements d'Amazon, eBay et Etsy. Accédez instantanément aux analyses d'actifs physiques et numériques.",
            
            // Products Grid & Live Scanner
            p1Title: "Affichage Tête Haute Universel (HUD) Indicateur de Vitesse GPS",
            p1Target: "Cible : Dropship • Pays : US/CA • Note : 4.8 ⭐",
            p1Badge1: "Croissance +510%",
            p1Badge2: "AliExpress Forte Demande",
            
            p2Title: "Planificateur Numérique Ultime 2026 pour iPad",
            p2Target: "Cible : Revente • Pays : US • Type : Actif Numérique",
            p2Badge1: "Croissance +410%",
            p2Badge2: "Top Tendance Etsy",
            
            p3Title: "iPhone 14 Pro Max 128Go Reconditionné",
            p3Target: "Cible : E-Com • Pays : Global • État : Débloqué",
            p3Badge1: "Croissance +195%",
            p3Badge2: "eBay Forte Demande",
            
            p4Title: "Oreiller de Genou Orthopédique en Mousse à Mémoire de Forme",
            p4Target: "Cible : E-Com • Pays : EU/US • Format : Actif Physique",
            p4Badge1: "Croissance +290%",
            p4Badge2: "Top Vendeur Amazon",
            
            p5Title: "Carnet de Notes Journal en Cuir Vintage Fait Main",
            p5Target: "Cible : Cadeau Premium • Pays : US • Note : 4.9 ⭐",
            p5Badge1: "Croissance +120%",
            p5Badge2: "Fait Main Etsy",
            
            btnAnalyze: "Analyser le Produit",
            
            // CPA Box / Live Analytics
            cpaTitle: "📈 Scanner d'Analyse Approfondie Activé",
            cpaDesc: "Notre plateforme scanne les métriques de l'API e-commerce toutes les 6 heures pour structurer les graphiques de demande, les indices de concurrence et les taux de croissance.",
            cpaBtn: "🚀 Voir l'Aperçu du Marché",
            
            // Articles / Insights Section
            secTitle: "📊 Intelligence E-Commerce & Analyse de Données",
            art1Category: "Analyse Prédictive",
            art1Title: "Comment la télémétrie des données identifie les micro-tendances avant la saturation",
            art1Desc: "La méthode traditionnelle de recherche de produits gagnants repose fortement sur le volume historique des commandes. Cependant, au moment où un actif atteint des volumes records sur les places de marché centralisées, le coût d'acquisition client (CAC) a souvent dépassé les marges durables. Agir tôt permet une cartographie optimisée des produits et des fenêtres de croissance propres avant que la saturation du marché ne frappe la verticale.",
            art1Meta: "Mars 2026 • Par HoldingW Research",
            
            art2Category: "Arbitrage Numérique",
            art2Title: "L'économie unitaire de la mise à l'échelle des actifs numériques sur les plateformes à forte marge",
            art2Desc: "Le dropshipping physique comporte des contraintes structurelles : taux de fret fluctuants, goulots d'étranglement logistiques et pourcentages de retour variables. C'est pourquoi l'arbitrage numérique à grand volume connaît une adoption institutionnelle rapide. Les actifs tels que les planificateurs structurés, les modèles programmatiques et les fichiers de conception présentent un coût des marchandises vendues (COGS) proche de zéro.",
            art2Meta: "Avril 2026 • Par Sourcing Technique",
            
            art3Category: "Mécanique du Marché",
            art3Title: "Évaluation des indices de concurrence via des sources d'approvisionnement fragmentées",
            art3Desc: "Un faible indice de concurrence sur une plateforme analytique ne garantit pas toujours une croissance facile. Les opérations de données sérieuses évaluent la concurrence à travers la transparence fragmentée des fournisseurs. Si un produit est contrôlé par un seul groupe d'usines principal, les lignes d'approvisionnement sont sujettes à des changements de prix abrupts.",
            art3Meta: "Mai 2026 • Par L'Équipe Analytique",
            
            btnMore: "🔍 Lire Plus d'Articles",
            
            // Footer Links
            footerAbout: "À Propos",
            footerPrivacy: "Politique de Confidentialité",
            footerTerms: "Conditions d'Utilisation",
            footerContact: "Nous Contacter",
            footerRights: "© 2026 HoldingW Platforms Inc. Tous droits réservés.",
            
            // ================= MODALS LEGAL CONTENT (AD-SENSE COMPLIANT) =================
            aboutTitle: "À Propos de HoldingW",
            aboutDesc: "Bienvenue sur HoldingW Platforms. Nous sommes un pôle digital de premier plan dédié à la fourniture d'études de marché de pointe, d'analyses techniques avancées et de solutions de données automatisées. Notre mission est de donner aux professionnels et aux créateurs les outils analytiques et les cadres stratégiques nécessaires pour optimiser leurs actifs numériques et développer efficacement leurs opérations sur les marchés dynamiques d'aujourd'hui. Nous exploitons l'intelligence prédictive avancée pour cartographier les tendances émergentes du e-commerce avant la saturation mondiale.",
            
            privacyTitle: "Politique de Confidentialité",
            privacyContent: "Chez HoldingW Analytics, accessible depuis notre plateforme principale, l'une de nos priorités absolues est la confidentialité de nos visiteurs. Ce document de politique de confidentialité contient les types d'informations collectées et enregistrées par HoldingW Analytics et la manière dont nous les utilisons.\n\nSi vous avez des questions supplémentaires ou souhaitez obtenir plus d'informations sur notre politique de confidentialité, n'hésitez pas à nous contacter.\n\n### Fichiers Journaux\nHoldingW Analytics suit une procédure standard d'utilisation des fichiers journaux. Ces fichiers enregistrent les visiteurs lorsqu'ils visitent des sites Web. Toutes les entreprises d'hébergement font cela dans le cadre des analyses des services d'hébergement. Les informations collectées par les fichiers journaux comprennent les adresses IP, le type de navigateur, le fournisseur d'accès Internet (ISP), la date et l'heure, les pages de référence/sortie, et éventuellement le nombre de clics. Celles-ci ne sont liées à aucune information personnellement identifiable.\n\n### Cookies et Balises Web\nComme tout autre site Web, HoldingW Analytics utilise des 'cookies'. Ces cookies sont utilisés pour stocker des informations, notamment les préférences des visiteurs et les pages du site Web auxquelles le visiteur a accédé ou qu'il a visitées. Les informations sont utilisées pour optimiser l'expérience des utilisateurs en personnalisant le contenu de notre page Web en fonction du type de navigateur des visiteurs et/ou d'autres informations.",
            
            termsTitle: "Conditions d'Utilisation",
            termsContent: "Bienvenue sur HoldingW Analytics !\n\nEn accédant à ce site Web, nous supposons que vous acceptez ces conditions d'utilisation. Ne continuez pas à utiliser HoldingW Analytics si vous n'acceptez pas l'ensemble des termes et conditions énoncés sur cette page.\n\n### Licence\nSauf mention contraire, HoldingW Analytics et/ou ses concédants de licence détiennent les droits de propriété intellectuelle pour tout le matériel sur HoldingW Analytics. Tous les droits de propriété intellectuelle sont réservés. Vous pouvez y accéder depuis HoldingW Analytics pour votre usage personnel, sous réserve des restrictions définies dans les présentes conditions d'utilisation.\n\nVous ne devez pas :\n* Republier le matériel de HoldingW Analytics\n* Vendre, louer ou sous-concéder du matériel de HoldingW Analytics\n* Reproduire, dupliquer ou copier le matériel de HoldingW Analytics\n* Redistribuer le contenu de HoldingW Analytics\n\nCet accord commence à la date des présentes. En tant qu'utilisateur, vous acceptez d'être responsable de la conformité avec toutes les lois locales en vigueur.",
            
            contactTitle: "Nous Contacter",
            contactDesc: "Si vous avez des questions concernant nos tableaux de bord analytiques, la synchronisation des données, les métriques d'intelligence de marché ou nos outils d'entreprise, n'hésitez pas à contacter notre équipe. Notre objectif est de répondre à toutes les demandes institutionnelles et indépendantes dans un délai de 24 à 48 heures ouvrables.",
            contactEmailLbl: "Support Email Officiel :"
        }
    };

    // 3. دالة تحديث النصوص بناءً على اللغة المختارة
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                // الحفاظ على التنسيقات والأسطر الطويلة للمودال والخصوصية
                if (key === 'privacyContent' || key === 'termsContent' || key === 'aboutDesc' || key === 'contactDesc' || key.endsWith('Desc')) {
                    element.innerText = translations[currentLang][key];
                } else {
                    element.innerHTML = translations[currentLang][key];
                }
            }
        });

        // تحديث ألوان أزرار اختيار اللغة (EN / FR)
        const btnEn = document.getElementById('lang-en');
        const btnFr = document.getElementById('lang-fr');
        if (btnEn && btnFr) {
            if (currentLang === 'en') {
                btnEn.style.color = '#3b82f6';
                btnFr.style.color = '#9ca3af';
            } else {
                btnEn.style.color = '#9ca3af';
                btnFr.style.color = '#3b82f6';
            }
        }
    }

    // 4. دالة تبديل اللغة
    window.switchLang = function(lang) {
        currentLang = lang;
        localStorage.setItem('holdingw_lang', lang);
        updateContent();
    };

    // 5. دالة فتح الـ Modals القديمة الأصلية بدون تعديل المنطق
    window.openModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'flex';
    };

    // 6. دالة إغلاق الـ Modals
    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'none';
    };

    // الإغلاق عند الضغط خارج المودال
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };

    // 7. دالة الـ Analysis الأصلية ديالك (التي تعرض تحليلات المنتجات والـ Premium بدون أي تغيير في حساباتها)
    window.openAnalysis = function(product) {
        const modal = document.getElementById('analysisModal');
        const title = document.getElementById('analysisTitle');
        if (!modal) return;

        if (product === 'premium') {
            if (title) title.innerText = currentLang === 'en' ? "Enterprise Market Overview" : "Aperçu Global du Marché";
        } else {
            if (title) title.innerText = (currentLang === 'en' ? "Deep Analysis: " : "Analyse Approfondie : ") + product.toUpperCase();
        }
        modal.style.display = 'flex';
    };

    // تشغيل التحديث فور تحميل الصفحة
    document.addEventListener('DOMContentLoaded', updateContent);
})();
