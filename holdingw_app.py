import streamlit as st
import sqlite3
import json

# 1. إعداد الصفحة والـ Title
st.set_page_config(
    page_title="HoldingW Analytics | Free AI-Driven Spy Tool", 
    layout="wide", 
    page_icon="🚀"
)

# 2. كود CSS لتحويل الواجهة لـ Dark Mode احترافي ومناسب للـ Arbitrage
st.markdown("""
    <style>
        /* تغيير الخلفية العامة */
        .stApp {
            background-color: #0b0f19 !important;
            color: #f3f4f6 !important;
        }
        /* تعديل العناوين */
        h1 {
            color: #ffffff !important;
            font-size: 42px !important;
            font-weight: 800 !important;
            text-align: center;
        }
        h3, .stSubheader {
            color: #9ca3af !important;
            text-align: center;
        }
        /* ستايل مخصص للـ Cards ديال المنتجات */
        .product-card {
            background-color: #111827;
            border: 1px solid #1e293b;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 25px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }
        /* ستايل صندوق الـ CPA المنقط */
        .cpa-lock-box {
            background: linear-gradient(180deg, rgba(17,24,39,0.5) 0%, rgba(17,24,39,1) 100%);
            border: 2px dashed #374151;
            border-radius: 12px;
            padding: 40px 20px;
            text-align: center;
            margin-top: 40px;
        }
        .cpa-lock-box h2 {
            color: #ffffff !important;
        }
        .cpa-lock-box p {
            color: #9ca3af !important;
        }
    </style>
""", unsafe_allow_html=True)

# 3. دالة جلب المنتجات من قاعدة البيانات وتحديث ملف JSON لـ Netlify
def get_and_sync_products():
    try:
        conn = sqlite3.connect('winning_products.db', check_same_thread=False)
        cursor = conn.cursor()
        
        # جلب المنتجات (تأكد أن الجدول فيه هاد الـ Columns أو قادهم على حساب داتابيز ديالك)
        # غانجيبو أول 5 منتجات مخلطة
        query = "SELECT title, platform, country, image_url, source_url, engagement FROM products ORDER BY id DESC LIMIT 5"
        cursor.execute(query)
        data = cursor.fetchall()
        conn.close()
        
        # تحويل الداتا لـ Format JSON ونشروها لـ Netlify أوتوماتيك
        json_products = []
        for index, prod in enumerate(data):
            json_products.append({
                "id": index + 1,
                "title": prod[0],
                "platform": prod[1] if prod[1] else "Amazon",
                "country": prod[2] if prod[2] else "US",
                "category": "Digital" if "book" in prod[0].lower() or "planner" in prod[0].lower() else "Physical",
                "rating": "4.8",
                "image": prod[3] if prod[3] else "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500",
                "url": prod[4]
            })
            
        # كتابة ملف products.json باش يقراه السيت الرئيسي ديريكت
        with open('products.json', 'w', encoding='utf-8') as f:
            json.dump(json_products, f, ensure_ascii=False, indent=4)
            
        return data
    except Exception as e:
        # إذا وقع مشكل فالداتابيز، نرجعو داتا تجريبية نقية باش السيت ما يوقفش
        fallback_data = [
            ("Wireless Magnetic Power Bank 10000mAh", "Amazon", "US", "https://images.unsplash.com/photo-1609592424083-0498db2579df?w=500", "https://www.amazon.com", "Growth +340%"),
            ("Ultimate 2026 Digital Planner for iPad", "Etsy", "US", "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500", "https://www.etsy.com", "Growth +410%"),
            ("Refurbished iPhone 14 Pro Max 128GB", "eBay", "US", "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500", "https://www.ebay.com", "Growth +195%"),
            ("AI Prompt Engineering Complete E-Book", "Amazon", "UK", "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500", "https://www.amazon.com", "Growth +520%"),
            ("Handmade Vintage Leather Journal", "Etsy", "US", "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=500", "https://www.etsy.com", "Growth +120%")
        ]
        return fallback_data

# 4. الواجهة الرئيسية (الهيدر)
st.title("HoldingW Analytics 🚀")
st.subheader("Find Winning Trending Products For Free - AI Market Intelligence")
st.markdown("<p style='text-align:center; color:#6b7280;'>Real-time trending data from Amazon, eBay, and Etsy Top Charts.</p>", unsafe_allow_html=True)
st.markdown("---")

# جلب المنتجات ومزامنتها
products_list = get_and_sync_products()

# عرض المنتجات الحقيقية
cols = st.columns(2)

for index, prod in enumerate(products_list):
    title, plat, count, img_url, src, engage = prod
    
    # توزيع المنتجات على الأعمدة
    with cols[index % 2]:
        st.markdown(f"""
            <div class="product-card">
                <h3 style="color:#ffffff; text-align:left; margin-bottom:10px;">🔥 {title}</h3>
                <p style="margin:2px 0;">🌍 <b>Country:</b> {count} | 🎯 <b>Platform:</b> {plat} Best Seller</p>
                <p style="color:#10b981; font-weight:bold;">📈 Trend: {engage}</p>
            </div>
        """, unsafe_allow_html=True)
        
        # التأكد من جلب رابط الصورة الحقيقي
        st.image(img_url, use_container_width=True)
        
        # عند الضغط على تحليل البرودوي، يفتح رابط الـ CPA ديريكت
        st.link_button("🔎 Analyze Product & View Ads Source", "https://www.google.com", use_container_width=True)
        st.markdown("<br>", unsafe_allow_html=True)

# 5. صندوق الـ CPA المقفل الذكي (يظهر تحت الـ 5 منتجات)
st.markdown("""
    <div class="cpa-lock-box">
        <h2>🔒 Want to Unlock More Daily Winning Products?</h2>
        <p>Complete a quick free validation to reveal 50+ hidden products, exact suppliers, and full profit margins metrics.</p>
    </div>
""", unsafe_allow_html=True)

# زر الـ CPA الرئيسي بـ الإنجليزية لي غايدخل لينا الصرف
cpa_url = "https://www.google.com" # <-- حط رابط الـ CPA Locker ديالك هنا أ خاي

st.link_button("🚀 Show More Products", cpa_url, use_container_width=True, type="primary")
