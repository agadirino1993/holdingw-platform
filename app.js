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
        aboutTitle: "About HoldingW",
        aboutDesc: "Welcome to HoldingW Platforms. We are a premier digital hub dedicated to delivering cutting-edge market research, advanced technical insights, and automated data solutions.",
        privacyTitle: "Privacy Policy",
        privacyContent: "Your privacy is important to us. HoldingW Analytics operates under strict data telemetry compliance guidelines. We do not persist raw user identity tracks; we only measure aggregate market movement patterns to optimize global product sourcing metrics.",
        termsTitle: "Terms of Service",
        termsContent: "By accessing HoldingW Platforms, you agree to our automated distributed data clauses. All predictive analytics models are presented as operational indicators and do not constitute absolute financial advisory metrics.",
        contactDesc: "If you have any questions feel free to reach out to our optimization team.",
        contactEmailLbl: "📧 Official Email Support:",
        // Analysis Modal Labels
        lblDemand: "Demand Index",
        lblComp: "Competition",
        lblMargin: "Margin Est.",
        lblSatTitle: "Market Saturation Insights",
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
        aboutTitle: "À Propos de HoldingW",
        aboutDesc: "Bienvenue sur HoldingW Platforms. Nous sommes un pôle de premier plan dédié à la recherche de marché et aux solutions de données automatisées.",
        privacyTitle: "Politique de Confidentialité",
        privacyContent: "Votre vie privée est essentielle. HoldingW Analytics fonctionne selon des directives strictes. Nous ne conservons pas les traces d'identité brutes.",
        termsTitle: "Conditions d'Utilisation",
        termsContent: "En accédant à HoldingW, vous acceptez nos clauses de données distribuées. Les modèles prédictifs ne constituent pas des conseils financiers absolus.",
        contactDesc: "Si vous avez des questions, n'hésitez pas à contacter notre équipe d'optimisation.",
        contactEmailLbl: "📧 Support Email Officiel:",
        // Analysis Modal Labels
        lblDemand: "Indice de Demande",
        lblComp: "Compétition",
        lblMargin: "Marge Est.",
        lblSatTitle: "Insights sur la Saturation du Marché",
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

// هاد الـ Function دابا مريكلة باش تفتح المودال بلا ما دير Redirect لراسها 
// حيت الـ Redirect عطيناه للـ Button فـ الـ HTML مباشرة باش نتفاداو أي تحويل تلقائي مزعج!
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

// إغلاق المودال عند الضغط خارج الإطار الخاص به
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
    
    // تحديث ألوان أزرار اختيار اللغة للإشارة إلى اللغة النشطة
    if (lang === 'en') {
        document.getElementById('lang-en').style.color = '#3b82f6';
        document.getElementById('lang-fr').style.color = '#9ca3af';
    } else {
        document.getElementById('lang-en').style.color = '#9ca3af';
        document.getElementById('lang-fr').style.color = '#3b82f6';
    }

    // ترجمة جميع العناصر التي تحتوي على الـ attribute "data-i18n"
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'A' || el.tagName === 'SPAN' || el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'P' || el.tagName === 'BUTTON' || el.tagName === 'DIV') {
                el.innerText = translations[lang][key];
            }
        }
    });
}

// تشغيل التهيئة عند تحميل الصفحة بالكامل لتثبيت نصوص السياسات والخصوصية
document.addEventListener("DOMContentLoaded", function() {
    switchLang('en');
});
