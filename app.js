// سيستم الترجمة الكامل للموقع
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
        footerRights: "© 2026 HoldingW Platforms Inc. All rights reserved.",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerContact: "Contact Us"
    },
    fr: {
        navHome: "Accueil",
        navDashboard: "Tableau de Bord",
        navPrivacy: "Confidentialité",
        navSupport: "Support Entreprise",
        btnLive: "Dashboard Live",
        heroTitle: "Trouvez des Produits Gagnants Gratuitement",
        heroDesc: "Mises à jour en temps réel filtrées depuis Amazon, eBay et Etsy. Accédez instantanément à des analyses d'actifs physiques et numériques.",
        btnAnalyze: "Analyser le Produit",
        cpaTitle: "📈 Scanner d'Analyse Approfondie Activé",
        cpaDesc: "Notre plateforme scanne les métriques API du e-commerce toutes les 6 heures pour structurer les graphiques de demande et de concurrence.",
        cpaBtn: "🚀 Voir l'Aperçu du Marché",
        secTitle: "📊 Intelligence E-Commerce & Insights",
        btnMore: "🔍 Lire Plus d'Articles",
        footerRights: "© 2026 HoldingW Platforms Inc. Tous droits réservés.",
        footerPrivacy: "Politique de Confidentialité",
        footerTerms: "Conditions d'Utilisation",
        footerContact: "Contactez-nous"
    }
};

let currentLang = 'en';

function switchLang(lang) {
    currentLang = lang;
    
    // تغيير التكست في العناصر اللي عندها داتا محددة
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
