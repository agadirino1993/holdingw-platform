// سيستم الترجمة الشامل لجميع عناصر الموقع (الواجهة + المنتجات + المقالات)
const translations = {
    en: {
        // Navbar & Hero
        navHome: "Home",
        navDashboard: "Intelligence Dashboard",
        navPrivacy: "Data Privacy",
        navSupport: "Enterprise Support",
        btnLive: "Live Dashboard",
        heroTitle: "Find Next-Gen Winning Products For Free",
        heroDesc: "Real-time updates filtered from Amazon, eBay, and Etsy Top Charts. Access premium digital and physical assets insights instantly.",
        
        // Products Section
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
        
        // CPA Box
        cpaTitle: "📈 Deep Analytics Scanner Activated",
        cpaDesc: "Our platform scans live e-commerce API metrics every 6 hours to structure demand charts, competition indexes, and growth rates.",
        cpaBtn: "🚀 View Market Overview",
        
        // Articles Section
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
        
        // Footer
        footerRights: "© 2026 HoldingW Platforms Inc. All rights reserved.",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerContact: "Contact Us"
    },
    fr: {
        // Navbar & Hero
        navHome: "Accueil",
        navDashboard: "Tableau de Bord",
        navPrivacy: "Confidentialité",
        navSupport: "Support Entreprise",
        btnLive: "Dashboard Live",
        heroTitle: "Trouvez des Produits Gagnants Gratuitement",
        heroDesc: "Mises à jour en temps réel filtrées depuis Amazon, eBay et Etsy. Accédez instantanément à des analyses d'actifs physiques et numériques.",
        
        // Products Section
        p1Title: "Affichage Tête Haute Universel (HUD) Tachymètre GPS",
        p1Target: "Cible : Dropship • Pays : US/CA • Note : 4.8 ⭐",
        p1Badge1: "Croissance +510%",
        p1Badge2: "AliExpress Forte Demande",
        
        p2Title: "Planificateur Numérique Ultime 2026 pour iPad",
        p2Target: "Cible : Revente • Pays : US • Type : Actif Numérique",
        p2Badge1: "Croissance +410%",
        p2Badge2: "Etsy Top Tendance",
        
        p3Title: "iPhone 14 Pro Max 128Go Reconditionné",
        p3Target: "Cible : E-Com • Pays : Global • État : Débloqué",
        p3Badge1: "Croissance +195%",
        p3Badge2: "eBay Forte Demande",
        
        p4Title: "Oreiller de Genou en Mousse à Mémoire Orthopédique",
        p4Target: "Cible : E-Com • Pays : EU/US • Format : Actif Physique",
        p4Badge1: "Croissance +290%",
        p4Badge2: "Amazon Top Vendeur",
        
        p5Title: "Carnet de Notes Journal en Cuir Vintage Fait Main",
        p5Target: "Cible : Cadeau Premium • Pays : US • Note : 4.9 ⭐",
        p5Badge1: "Croissance +120%",
        p5Badge2: "Etsy Fait Main",
        
        btnAnalyze: "Analyser le Produit",
        
        // CPA Box
        cpaTitle: "📈 Scanner d'Analyse Approfondie Activé",
        cpaDesc: "Notre plateforme scanne les métriques API du e-commerce toutes les 6 heures pour structurer les graphiques de demande et de concurrence.",
        cpaBtn: "🚀 Voir l'Aperçu du Marché",
        
        // Articles Section
        secTitle: "📊 Intelligence E-Commerce & Insights Data",
        
        art1Category: "Analyse Prédictive",
        art1Title: "Comment la Télémétrie des Données Identifie les Micro-Tendances",
        art1Desc: "La méthode traditionnelle de sourcing repose sur le volume historique des commandes. Cependant, lorsqu'un actif atteint son pic sur les marchés centralisés, le coût d'acquisition client (CAC) dépasse souvent les marges durables. Agir tôt permet une cartographie optimisée des produits avant la saturation.",
        art1Meta: "Mars 2026 • Par HoldingW Research",
        
        art2Category: "Arbitrage Numérique",
        art2Title: "L'Économie Unitaire des Actifs Numériques sur Plateformes à Haute Marge",
        art2Desc: "Le dropshipping physique comporte des responsabilités structurelles : taux de fret fluctuants et goulots d'étranglement logistiques. C'est pourquoi l'arbitrage numérique à volume élevé connaît une adoption rapide. Les planificateurs et modèles ont un coût des marchandises (COGS) proche de zéro.",
        art2Meta: "Avril 2026 • Par Technical Sourcing Desk",
        
        art3Category: "Mécanique du Marché",
        art3Title: "Évaluation des Indices de Concurrence via des Sources d'Approvisionnement",
        art3Desc: "Un faible score de concurrence ne garantit pas toujours une croissance facile. Les opérations de données évaluent la concurrence par la transparence des fournisseurs. Si un produit est contrôlé par un seul cluster d'usines, les lignes d'approvisionnement sont sujettes à des changements de prix abrupts.",
        art3Meta: "Mai 2026 • Par Analytics Team",
        
        btnMore: "🔍 Lire Plus d'Articles",
        
        // Footer
        footerRights: "© 2026 HoldingW Platforms Inc. Tous droits réservés.",
        footerPrivacy: "Politique de Confidentialité",
        footerTerms: "Conditions d'Utilisation",
        footerContact: "Contactez-nous"
    }
};

let currentLang = 'en';

function switchLang(lang) {
    currentLang = lang;
    
    // تغيير التكست في العناصر اللي عندها داتا محددة تلقائياً
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // تبديل ستايل الأزرار النشطة للغات
    document.getElementById('lang-en').style.color = lang === 'en' ? '#3b82f6' : '#9ca3af';
    document.getElementById('lang-fr').style.color = lang === 'fr' ? '#3b82f6' : '#9ca3af';
}

// داتا التحليلات الخاصة بالـ Modals
const productData = {
    hud: {
        title: "HUD GPS Speedometer - Performance Analysis",
        demand: "91.4%",
        comp: "Low",
        compColor: "#10b981",
        margin: "+74%",
        text: "Automotive niche signals extreme viral push on TikTok. Orders are mostly scaling across US, DE, and Australia with high saturation resistance."
    },
    planner: {
        title: "Ultimate 2026 Digital Planner - Performance Analysis",
        demand: "96.8%",
        comp: "High",
        compColor: "#ef4444",
        margin: "+88%",
        text: "Etsy digital downloads are hitting record-high margins. Zero shipping costs allow massive ROI for scalable digital arbitrage campaigns."
    },
    iphone: {
        title: "Refurbished iPhone 14 Pro Max - Performance Analysis",
        demand: "88.2%",
        comp: "Medium",
        compColor: "#f59e0b",
        margin: "+35%",
        text: "High-ticket volume trend steady on eBay. Tech category has high conversion rates but requires strict customer trust patterns."
    },
    pillow: {
        title: "Orthopedic Knee Pillow - Performance Analysis",
        demand: "93.5%",
        comp: "Medium",
        compColor: "#f59e0b",
        margin: "+62%",
        text: "Health & comfort catalog product with massive repeat-purchase stability on Amazon. Best performing scale target for Facebook/Meta video Ads."
    },
    journal: {
        title: "Handmade Vintage Leather Journal - Performance Analysis",
        demand: "84.1%",
        comp: "Low",
        compColor: "#10b981",
        margin: "+55%",
        text: "Premium gift product sub-category. High perceived value offers great opportunity to scale personalized landing pages for Q4."
    },
    premium: {
        title: "Premium Analytical Cloud - Global Overview",
        demand: "95.0%",
        comp: "System Live",
        compColor: "#3b82f6",
        margin: "+65% Avg",
        text: "Global database aggregated telemetry. Live system monitors 14,000 active winning listings to feed algorithmic predictions metrics."
    }
};

function openAnalysis(prodKey) {
    const data = productData[prodKey];
    if (data) {
        document.getElementById('analysisTitle').innerText = data.title;
        document.getElementById('statDemand').innerText = data.demand;
        document.getElementById('statComp').innerText = data.comp;
        document.getElementById('statComp').style.color = data.compColor;
        document.getElementById('statMargin').innerText = data.margin;
        document.getElementById('saturationText').innerText = data.text;
        document.getElementById('analysisModal').style.display = "flex";
    }
}

function openModal(modalId) { document.getElementById(modalId).style.display = "flex"; }
function closeModal(modalId) { document.getElementById(modalId).style.display = "none"; }

window.onclick = function(event) { 
    if (event.target.classList.contains('modal')) { 
        event.target.style.display = "none"; 
    } 
};
