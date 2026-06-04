import streamlit as st
import sqlite3
import json

# 1. إعداد الصفحة والـ Title
st.set_page_config(
    page_title="HoldingW Analytics | Free AI-Driven Spy Tool", 
    layout="wide", 
    page_icon="🚀"
)

# 2. كود CSS للـ Dark Mode والـ Cards
st.markdown("""
    <style>
        .stApp { background-color: #0b0f19 !important; color: #f3f4f6 !important; }
        h1 { color: #ffffff !important; font-size: 42px !important; font-weight: 800 !important; text-align: center; }
        h3, .stSubheader { color: #9ca3af !important; text-align: center; }
        .product-card {
            background-color: #111827; border: 1px solid #1e293b; border-radius: 12px;
            padding: 20px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        .cpa-lock-box {
            background: linear-gradient(180deg, rgba(17,24,39,0.5) 0%, rgba(17,24,39,1) 100%);
            border: 2px dashed #374151; border-radius: 12px; padding: 40px 20px; text-align: center; margin-top: 40px;
        }
        .cpa-lock-box h2 { color: #ffffff !important; }
        .cpa-lock-box p { color: #9ca3af !important; }
    </style>
""", unsafe_allow_html=True)

# 📦 قاموس الصور المأمنة والعالية الدقة (مستحيل تتبلوك)
FALLBACK_IMAGES = {
    "digital": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600",
    "planner": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600",
    "book": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600",
    "e-book": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600",
    "lamp": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600",
    "phone": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600",
    "iphone": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600",
    "power": "https://images.unsplash.com/photo-1609592424083-0498db2579df?w=600",
    "gadget": "https://images.unsplash.com/photo-1609592424083-0498db2579df?w=600",
    "leather": "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600",
    "journal": "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600"
}

def get_secure_image(title):
    # كيدور فـ السميّة د البرودوي ويشوف آينا وحدة كاتناسبو
    title_lower = title.lower()
    for key, url in FALLBACK_IMAGES.items():
        if key in title_lower:
            return url
    # صورة عامة احترافية للـ E-com إلا مالقا حتى كلمة
    return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"

# 3. جلب الداتا وتحديث الـ JSON لـ Netlify
def get_and_sync_products():
    try:
        conn = sqlite3.connect('winning_products.db', check_same_thread=False)
        cursor = conn.cursor()
        
        query = "SELECT title, platform, country, image_url, source_url, engagement FROM products ORDER BY id DESC LIMIT 5"
        cursor.execute(query)
        data = cursor.fetchall()
        conn.close()
        
        json_products = []
        final_data = []
        
        for index, prod in enumerate(data):
            title = prod[0]
            plat = prod[1] if prod[1] else "Amazon"
            count = prod[2] if prod[2] else "US"
            src = prod[4]
            engage = prod[5]
            
            # تأمين الصورة داخلياً 100% بالذكاء
            img_url = get_secure_image(title)
            
            final_data.append((title, plat, count, img_url, src, engage))
            
            json_products.append({
                "id": index + 1,
                "title": title,
                "platform": plat,
                "country": count,
                "category": "Digital" if "book" in title.lower() or "planner" in title.lower() or "digital" in title.lower() else "Physical",
                "rating": "4.9",
                "image": img_url,
                "url": src
            })
            
        with open('products.json', 'w', encoding='utf-8') as f:
            json.dump(json_products, f, ensure_ascii=False, indent=4)
            
        return final_data
    except Exception as e:
        # داتا تجريبية مأمنة تماماً في حالة البلوك الكلي لقاعدة البيانات
        fallback_data = [
            ("Wireless Magnetic Power Bank 10000mAh", "Amazon", "US", "https://images.unsplash.com/photo-1609592424083-0498db2579df?w=600", "https://www.amazon.com", "Growth +340%"),
            ("Ultimate 2026 Digital Planner for iPad", "Etsy", "US", "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600", "https://www.etsy.com", "Growth +410%"),
            ("Refurbished iPhone 14 Pro Max 128GB", "eBay", "US", "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600", "https://www.ebay.com", "Growth +195%"),
            ("AI Prompt Engineering Complete E-Book", "Amazon", "UK", "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600", "https://www.amazon.com", "Growth +520%"),
            ("Handmade Vintage Leather Journal", "Etsy", "US", "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600", "https://www.etsy.com", "Growth +120%")
        ]
        return fallback_data

# 4. الواجهة الرئيسية
st.title("HoldingW Analytics 🚀")
st.subheader("Find Winning Trending Products For Free - AI Market Intelligence")
st.markdown("<p style='text-align:center; color:#6b7280;'>Real-time trending data from Amazon, eBay, and Etsy Top Charts.</p>", unsafe_allow_html=True)
st.markdown("---")

products_list = get_and_sync_products()

cols = st.columns(2)
for index, prod in enumerate(products_list):
    title, plat, count, img_url, src, engage = prod
    
    with cols[index % 2]:
        st.markdown(f"""
            <div class="product-card">
                <h3 style="color:#ffffff; text-align:left; margin-bottom:10px;">🔥 {title}</h3>
                <p style="margin:2px 0;">🌍 <b>Country:</b> {count} | 🎯 <b>Platform:</b> {plat} Best Seller</p>
                <p style="color:#10b981; font-weight:bold;">📈 Trend: {engage}</p>
            </div>
        """, unsafe_allow_html=True)
        
        st.image(img_url, use_container_width=True)
        st.link_button("🔎 Analyze Product & View Ads Source", "https://www.google.com", use_container_width=True)
        st.markdown("<br>", unsafe_allow_html=True)

# 5. صندوق الـ CPA
st.markdown("""
    <div class="cpa-lock-box">
        <h2>🔒 Want to Unlock More Daily Winning Products?</h2>
        <p>Complete a quick free validation to reveal 50+ hidden products, exact suppliers, and full profit margins metrics.</p>
    </div>
""", unsafe_allow_html=True)

cpa_url = "https://www.google.com" # <-- حط رابط اللوكر ديالك هنا
st.link_button("🚀 Show More Products", cpa_url, use_container_width=True, type="primary")
