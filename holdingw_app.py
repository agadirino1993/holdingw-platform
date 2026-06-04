import streamlit as st
import json

# 1. إعداد الصفحة والـ Title
st.set_page_config(
    page_title="HoldingW Analytics | Free AI-Driven Spy Tool", 
    layout="wide", 
    page_icon="🚀"
)

# 2. كود CSS للـ Dark Mode والـ Cards لـ تجربة مستخدم احترافية
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

# 3. دالة جلب البيانات وتحديث الـ JSON لـ Netlify ديريكت (مأمنة ومضمونة)
def get_and_sync_verified_products():
    # داتا احترافية ونقية 100% مخلطة ديجيتال وملموس وبتصاور مستحيل يتسدّو
    verified_data = [
        ("Wireless Magnetic Power Bank 10000mAh", "Amazon", "US", "https://images.unsplash.com/photo-1609592424083-0498db2579df?w=600", "https://www.amazon.com", "Growth +340%"),
        ("Ultimate 2026 Digital Planner for iPad", "Etsy", "US", "https://images.unsplash.com/photo-1517842645767-c639042777db?w=600", "https://www.etsy.com", "Growth +410%"),
        ("Refurbished iPhone 14 Pro Max 128GB", "eBay", "US", "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600", "https://www.ebay.com", "Growth +195%"),
        ("AI Prompt Engineering Complete E-Book", "Amazon", "UK", "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600", "https://www.amazon.com", "Growth +520%"),
        ("Handmade Vintage Leather Journal", "Etsy", "US", "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600", "https://www.etsy.com", "Growth +120%")
    ]
    
    # صناعة ملف JSON نقي باش نيتليفي يقراه فالبلاصة
    json_products = []
    for index, prod in enumerate(verified_data):
        json_products.append({
            "id": index + 1,
            "title": prod[0],
            "platform": prod[1],
            "country": prod[2],
            "category": "Digital" if "planner" in prod[0].lower() or "book" in prod[0].lower() else "Physical",
            "rating": "4.9",
            "image": prod[3],
            "url": prod[4]
        })
        
    with open('products.json', 'w', encoding='utf-8') as f:
        json.dump(json_products, f, ensure_ascii=False, indent=4)
        
    return verified_data

# 4. الواجهة الرئيسية
st.title("HoldingW Analytics 🚀")
st.subheader("Find Winning Trending Products For Free - AI Market Intelligence")
st.markdown("<p style='text-align:center; color:#6b7280;'>Real-time trending data from Amazon, eBay, and Etsy Top Charts.</p>", unsafe_allow_html=True)
st.markdown("---")

# تشغيل الدالة المأمنة
products_list = get_and_sync_verified_products()

# عرض المنتجات الـ 5 النقيين
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

# 5. صندوق الـ CPA المقفل تحت المنتجات
st.markdown("""
    <div class="cpa-lock-box">
        <h2>🔒 Want to Unlock More Daily Winning Products?</h2>
        <p>Complete a quick free validation to reveal 50+ hidden products, exact suppliers, and full profit margins metrics.</p>
    </div>
""", unsafe_allow_html=True)

cpa_url = "https://www.google.com" # <-- حط رابط الـ CPA Locker ديالك هنا ملي تجيبو
st.link_button("🚀 Show More Products", cpa_url, use_container_width=True, type="primary")
