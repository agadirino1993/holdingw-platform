(function() {
    // 1. تحديد اللغة الافتراضية
    let currentLang = localStorage.getItem('holdingw_lang') || 'en';

    // قاعدة بيانات المنتجات مع المؤشرات الخاصة بكل منتج (بألوان ونسب مختلفة)
    const productData = {
        hud: {
            demand: "94.2%", competition: "Medium", margin: "+68%",
            demandFr: "94.2%", competitionFr: "Moyenne", marginFr: "+68%",
            insightsEn: "High traction in automotive niches. Telemetry indicators update continuously.",
            insightsFr: "Forte traction dans les niches automobiles. Les indicateurs de télémétrie sont mis à jour en continu."
        },
        planner: {
            demand: "88.5%", competition: "Low", margin: "+92%",
            demandFr: "88.5%", competitionFr: "Faible", marginFr: "+92%",
            insightsEn: "Digital asset with near-zero COGS. Scaling rapidly on high-margin design channels.",
            insightsFr: "Actif numérique avec coût de revient proche de zéro. Croissance rapide sur les canaux à forte marge."
        },
        iphone: {
            demand: "76.1%", competition: "High", margin: "+24%",
            demandFr: "76.1%", competitionFr: "Élevée", marginFr: "+24%",
            insightsEn: "Steady secondary market demand. Volume-driven profit margins with tight supply lines.",
            insightsFr: "Demande stable sur le marché secondaire. Marges axées sur le volume avec flux tendus."
        },
        pillow: {
            demand: "81.4%", competition: "Medium", margin: "+55%",
            demandFr: "81.4%", competitionFr: "Moyenne", marginFr: "+55%",
            insightsEn: "Evergreen health and wellness product. Strong performance during Q1-Q2 cycles.",
            insightsFr: "Produit de santé et bien-être intemporel. Forte performance durant les cycles Q1-Q2."
        },
        journal: {
            demand: "69.8%", competition: "Low", margin: "+74%",
            demandFr: "69.8%", competitionFr: "Faible", marginFr: "+74%",
            insightsEn: "Premium gift positioning. Excellent conversion rates via organic visual marketing.",
            insightsFr: "Positionnement cadeau haut de gamme. Excellent taux de conversion via marketing visuel organique."
        },
        premium: {
            demand: "85.0%", competition: "Balanced", margin: "+62%",
            demandFr: "85.0%", competitionFr: "Équilibrée", marginFr: "+62%",
            insightsEn: "Global institutional market overview aggregation active.",
            insightsFr: "Agrégation globale de l'aperçu du marché institutionnel activée."
        }
    };

    // 2. قاموس الترجمة الكامل لـ AdSense والمقالات والمودالات
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
            
            // Products Grid
            p1Title: "Universal Heads-Up Display (HUD) GPS Speedometer",
            p1Target: "Target: Dropship • Country: US/CA • Rating: 4.8 ⭐",
            p1Badge1: "Growth +510%", p1Badge2: "AliExpress Hot Demand",
            
            p2Title: "Ultimate 2026 Digital Planner for iPad",
            p2Target: "Target: Resell • Country: US • Type: Digital Asset",
            p2Badge1: "Growth +410%", p2Badge2: "Etsy Top Trend",
            
            p3Title: "Refurbished iPhone 14 Pro Max 128GB",
            p3Target: "Target: E-Com • Country: Global • Condition: Unlocked",
            p3Badge1: "Growth +195%", p3Badge2: "eBay Hot Demand",
            
            p4Title: "Orthopedic Memory Foam Knee Pillow for Pain Relief",
            p4Target: "Target: E-Com • Country: EU/US • Format: Physical Asset",
            p4Badge1: "Growth +290%", p4Badge2: "Amazon Hot Seller",
            
            p5Title: "Handmade Vintage Leather Journal Notebook",
            p5Target: "Target: Premium Gift • Country: US • Rating: 4.9 ⭐",
            p5Badge1: "Growth +120%", p5Badge2: "Etsy Handmade",
            
            btnAnalyze: "Analyze Product",
            
            // CPA Box / Live Analytics
            cpaTitle: "📈 Deep Analytics Scanner Activated",
            cpaDesc: "Our platform scans live e-commerce API metrics every 6 hours to structure demand charts, competition indexes, and growth rates.",
            cpaBtn: "🚀 View Market Overview",
            
            // Section Research Papers (اللي ف الصورة الأولى)
            secTitle: "📊 E-Commerce Intelligence & Data Insights",
            researchHeader: "Deep Analytics Reports & Research Papers",
            researchSub: "Advanced algorithmic documentation regarding structural market shifts, scaling frameworks, and cross-border digital logistics.",
            
            art1Category: "SUPPLY CHAIN OPTIMIZATION",
            art1Title: "Mitigating Variable CPM Inflation through Product Bundle Architecture",
            art1Desc: "An institutional-grade resolution requires implementing dynamic cross-selling algorithms. By structuring high-perceived-value product bundles at the payment processing crossroad, operations elevate Average Order Value (AOV) by a calculated 34%. This buffers the underlying unit economics against fluctuating cost-per-thousand (CPM) parameters.",
            art1Meta: "March 2026 • By HoldingW Research",
            
            art2Category: "DIGITAL ARBITRAGE",
            art2Title: "The Unit Economics of Scaling Digital Assets on High-Margin Platforms",
            art2Desc: "Physical dropshipping carries structural liabilities: fluctuating freight rates, logistics bottlenecks, and variable return percentages. This is why high-volume digital arbitrage is seeing rapid institutional adoption. Assets like structured planners, programmatic templates, and design files feature near-zero cost of goods sold (COGS).",
            art2Meta: "April 2026 • By Technical Sourcing Desk",
            
            art3Category: "MARKET MECHANICS",
            art3Title: "Evaluating Competition Indexes via Fragmented Supply Sources",
            art3Desc: "A low competition index score on an analytical platform doesn't always guarantee an easy scaling window. Serious data operations evaluate competition through fragmented supplier transparency. If a product is controlled by a single main factory cluster, supply lines are prone to abrupt pricing shifts.",
            art3Meta: "May 2026 • By Analytics Team",
            
            btnMore: "🔍 Read More Insights",
            
            // Labels inside Analysis Modal (اللي ف الصورة الثانية)
            lblDemand: "Demand Index",
            lblCompetition: "Competition",
            lblMargin: "Margin Est.",
            lblSaturation: "Market Saturation Insights",
            
            // Footer Links
            footerAbout: "About Us",
            footerPrivacy: "Privacy Policy",
            footerTerms: "Terms of Service",
            footerContact: "Contact Us",
            footerRights: "© 2026 HoldingW Platforms Inc. All rights reserved.",
            
            // Modals Legal Content
            aboutTitle: "About HoldingW",
            aboutDesc: "Welcome to HoldingW Platforms. We are a premier digital hub dedicated to delivering cutting-edge market research, advanced technical insights, and automated data solutions. Our mission is to empower professionals and creators with the analytical tools and strategic frameworks needed to optimize their digital assets and scale operations effectively.",
            privacyTitle: "Privacy Policy",
            privacyContent: "At HoldingW Analytics, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by HoldingW Analytics and how we use it.\n\nOur system logs standard analytics data such as IP addresses, browser types, and timestamp markers to evaluate macro demographic traffic flows.",
            termsTitle: "Terms of Service",
            termsContent: "Welcome to HoldingW Analytics!\n\nBy accessing this website, we assume you accept these terms of service. Do not continue to use HoldingW Analytics if you do not agree to take all of the terms and conditions stated on this page.\n\nIntellectual property rights are fully protected and corporate code telemetry remains proprietary.",
            contactTitle: "Contact Us",
            contactDesc: "If you have any questions about our analytical dashboards, data synchronization, market intelligence metrics, or enterprise tools, feel free to reach out to our team. We target to respond within 24–48 operational hours.",
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
            
            // Products Grid
            p1Title: "Affichage Tête Haute Universel (HUD) Indicateur de Vitesse GPS",
            p1Target: "Cible : Dropship • Pays : US/CA • Note : 4.8 ⭐",
            p1Badge1: "Croissance +510%", p1Badge2: "AliExpress Forte Demande",
            
            p2Title: "Planificateur Numérique Ultime 2026 pour iPad",
            p2Target: "Cible : Revente • Pays : US • Type : Actif Numérique",
            p2Badge1: "Croissance +410%", p2Badge2: "Top Tendance Etsy",
            
            p3Title: "iPhone 14 Pro Max 128Go Reconditionné",
            p3Target: "Cible : E-Com • Pays : Global • État : Débloqué",
            p3Badge1: "Croissance +195%", p3Badge2: "eBay Forte Demande",
            
            p4Title: "Oreiller de Genou Orthopédique en Mousse à Mémoire de Forme",
            p4Target: "Cible : E-Com • Pays : EU/US • Format : Actif Physique",
            p4Badge1: "Croissance +290%", p4Badge2: "Top Vendeur Amazon",
            
            p5Title: "Carnet de Notes Journal en Cuir Vintage Fait Main",
            p5Target: "Cible : Cadeau Premium • Pays : US • Note : 4.9 ⭐",
            p5Badge1: "Croissance +120%", p5Badge2: "Fait Main Etsy",
            
            btnAnalyze: "Analyser le Produit",
            
            // CPA Box / Live Analytics
            cpaTitle: "📈 Scanner d'Analyse Approfondie Activé",
            cpaDesc: "Notre plateforme scanne les métriques de l'API e-commerce toutes les 6 heures pour structurer les graphiques de demande, les indices de concurrence et les taux de croissance.",
            cpaBtn: "🚀 Voir l'Aperçu du Marché",
            
            // Section Research Papers (اللي ف الصورة الأولى)
            secTitle: "📊 Intelligence E-Commerce & Analyse de Données",
            researchHeader: "Rapports d'Analyse Approfondie & Documents de Recherche",
            researchSub: "Documentation algorithmique avancée concernant les changements structurels du marché, les cadres de mise à l'échelle et la logistique numérique transfrontalière.",
            
            art1Category: "OPTIMISATION DE LA CHAÎNE D'APPROVISIONNEMENT",
            art1Title: "Atténuer l'Inflation Variable des CPM grâce à l'Architecture de Packs Produits",
            art1Desc: "Une résolution de niveau institutionnel nécessite la mise en œuvre d'algorithmes de vente croisée dynamiques. En structurant des packs de produits à forte valeur perçue lors du passage en caisse, les opérations augmentent la Valeur Moyenne des Commandes (AOV) de 34%. Cela protège l'économie unitaire contre la fluctuation des paramètres du coût par mille (CPM).",
            art1Meta: "Mars 2026 • Par HoldingW Research",
            
            art2Category: "ARBITRAGE NUMÉRIQUE",
            art2Title: "L'Économie Unitaire de la Vente d'Actifs Numériques sur les Plateformes à Forte Marge",
            art2Desc: "Le dropshipping physique comporte des contraintes structurelles : taux de fret fluctuants, goulots d'étranglement logistiques et taux de retour variables. C'est pourquoi l'arbitrage numérique à grand volume connaît une adoption rapide. Les actifs tels que les planificateurs structurés et les modèles de conception présentent un coût des marchandises vendues (COGS) proche de zéro.",
            art2Meta: "Avril 2026 • Par Sourcing Technique",
            
            art3Category: "MÉCANIQUE DU MARCHÉ",
            art3Title: "Évaluation des Indices de Concurrence via des Sources d'Approvisionnement Fragmentées",
            art3Desc: "Un faible indice de concurrence sur une plateforme analytique ne garantit pas toujours une croissance facile. Les opérations de données sérieuses évaluent la concurrence à travers la transparence fragmentée des fournisseurs. Si un produit est contrôlé par un seul groupe d'usines, les lignes d'approvisionnement sont sujettes à des changements de prix abrupts.",
            art3Meta: "Mai 2026 • Par L'Équipe Analytique",
            
            btnMore: "🔍 Lire Plus d'Articles",
            
            // Labels inside Analysis Modal (اللي ف الصورة الثانية)
            lblDemand: "Indice de Demande",
            lblCompetition: "Concurrence",
            lblMargin: "Marge Est.",
            lblSaturation: "Perspectives de Saturation du Marché",
            
            // Footer Links
            footerAbout: "À Propos",
            footerPrivacy: "Politique de Confidentialité",
            footerTerms: "Conditions d'Utilisation",
            footerContact: "Nous Contacter",
            footerRights: "© 2026 HoldingW Platforms Inc. Tous droits réservés.",
            
            // Modals Legal Content
            aboutTitle: "À Propos de HoldingW",
            aboutDesc: "Bienvenue sur HoldingW Platforms. Nous sommes un pôle digital de premier plan dédié à la fourniture d'études de marché de pointe, d'analyses techniques avancées et de solutions de données automatisées. Notre mission est de donner aux professionnels et aux créateurs les outils analytiques nécessaires.",
            privacyTitle: "Politique de Confidentialité",
            privacyContent: "Chez HoldingW Analytics, l'une de nos priorités absolues est la confidentialité de nos visiteurs. Ce document de politique de confidentialité contient les types d'informations collectées et enregistrées par HoldingW Analytics.\n\nNotre système enregistre les données analytiques standard telles que les adresses IP et les navigateurs pour évaluer les flux de trafic.",
            termsTitle: "Conditions d'Utilisation",
            termsContent: "Bienvenue sur HoldingW Analytics !\n\nEn accédant à ce site Web, nous supposons que vous acceptez ces conditions d'utilisation. Ne continuez pas à utiliser HoldingW Analytics si vous n'acceptez pas l'ensemble des termes et conditions énoncés sur cette page.",
            contactTitle: "Nous Contacter",
            contactDesc: "Si vous avez des questions concernant nos tableaux de bord analytiques, la synchronisation des données ou nos outils d'entreprise, n'hésitez pas à contacter notre équipe. Réponse sous 24 à 48 heures ouvrables.",
            contactEmailLbl: "Support Email Officiel :"
        }
    };

    // 3. دالة تحديث النصوص واللغات ف الصفحة كاملة
    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang] && translations[currentLang][key]) {
                if (key.endsWith('Content') || key.endsWith('Desc')) {
                    element.innerText = translations[currentLang][key];
                } else {
                    element.innerHTML = translations[currentLang][key];
                }
            }
        });

        // تحديث ألوان أزرار اختيار اللغة ف الهيدر
        const btnEn = document.getElementById('lang-en');
        const btnFr = document.getElementById('lang-fr');
        if (btnEn && btnFr) {
            if (currentLang === 'en') {
                btnEn.style.fontWeight = 'bold'; btnEn.style.color = '#3b82f6';
                btnFr.style.fontWeight = 'normal'; btnFr.style.color = '#9ca3af';
            } else {
                btnFr.style.fontWeight = 'bold'; btnFr.style.color = '#3b82f6';
                btnEn.style.fontWeight = 'normal'; btnEn.style.color = '#9ca3af';
            }
        }
    }

    // 4. تبديل اللغة وإعادة رندرة كل شيء فوراً
    window.switchLang = function(lang) {
        currentLang = lang;
        localStorage.setItem('holdingw_lang', lang);
        updateContent();
    };

    // 5. فتح وإغلاق مودالات الروابط القانونية
    window.openModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'flex';
    };

    window.closeModal = function(id) {
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'none';
    };

    // 6. دالة التحليل الاحترافية (تحديث ديناميكي، لغة متغيرة، ألوان خضراء وليمونية)
    window.openAnalysis = function(productKey) {
        const modal = document.getElementById('analysisModal');
        if (!modal) return;

        // جلب البيانات الخاصة بالمنتج المحدد، وإذا لم توجد نأخذ الافتراضي (hud)
        const data = productData[productKey] || productData['hud'];

        // أداة تحديث العنوان الرئيسي للمودال ديناميكياً حسب اللغة
        const titleElem = document.getElementById('analysisTitle');
        if (titleElem) {
            if (productKey === 'premium') {
                titleElem.innerText = currentLang === 'en' ? "Enterprise Market Overview" : "Aperçu Global du Marché";
            } else {
                titleElem.innerText = (currentLang === 'en' ? "Deep Analysis: " : "Analyse Approfondie : ") + productKey.toUpperCase();
            }
        }

        // تحديث محتوى المودال بالداتا والألوان
        const demandVal = currentLang === 'en' ? data.demand : data.demandFr;
        const compVal = currentLang === 'en' ? data.competition : data.competitionFr;
        const marginVal = currentLang === 'en' ? data.margin : data.marginFr;
        const insightText = currentLang === 'en' ? data.insightsEn : data.insightsFr;

        // حقن الداتا داخل الـ HTML مع الـ Labels المترجمة والألوان المتناسقة
        modal.innerHTML = `
            <div class="modal-content" style="background: #1e293b; color: #fff; padding: 25px; border-radius: 12px; max-width: 550px; width: 90%; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.5);">
                <span onclick="closeModal('analysisModal')" style="position: absolute; top: 15px; right: 20px; cursor: pointer; font-size: 24px; color: #9ca3af;">&times;</span>
                <h3 id="analysisTitle" style="font-size: 22px; font-weight: bold; margin-bottom: 25px;">${titleElem ? titleElem.innerText : 'Analysis'}</h3>
                
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; text-align: center; background: #111827; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                    <div>
                        <p style="font-size: 13px; color: #9ca3af; margin-bottom: 8px;">${translations[currentLang].lblDemand}</p>
                        <p style="font-size: 18px; font-weight: bold; color: #10b981;">${demandVal}</p>
                    </div>
                    <div>
                        <p style="font-size: 13px; color: #9ca3af; margin-bottom: 8px;">${translations[currentLang].lblCompetition}</p>
                        <p style="font-size: 18px; font-weight: bold; color: ${compVal === 'Low' || compVal === 'Faible' ? '#10b981' : '#f59e0b'};">${compVal}</p>
                    </div>
                    <div>
                        <p style="font-size: 13px; color: #9ca3af; margin-bottom: 8px;">${translations[currentLang].lblMargin}</p>
                        <p style="font-size: 18px; font-weight: bold; color: #10b981;">${marginVal}</p>
                    </div>
                </div>
                
                <div>
                    <h4 style="font-size: 15px; font-weight: bold; margin-bottom: 8px; color: #fff;">${translations[currentLang].lblSaturation}</h4>
                    <p style="font-size: 13px; color: #cbd5e1; line-height: 1.5;">${insightText}</p>
                </div>
            </div>
        `;

        modal.style.display = 'flex';
    };

    window.onclick = function(event) {
        if (event.target.classList.contains('modal') || event.target.id === 'analysisModal') {
            const m = document.getElementById('analysisModal');
            if (m) m.style.display = 'none';
            document.querySelectorAll('.modal').forEach(mod => mod.style.display = 'none');
        }
    };

    // تشغيل النظام وتحديث المحتوى فور جاهزية الصفحة
    document.addEventListener('DOMContentLoaded', updateContent);
})();
