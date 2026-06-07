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
        }
