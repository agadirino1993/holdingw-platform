import streamlit as st
import sqlite3

# 1. إعداد الصفحة والـ Title
st.set_page_config(
    page_title="HoldingW Analytics | AI-Driven E-Commerce Intelligence", 
    layout="wide", 
    page_icon="🚀"
)

# 2. كود CSS لتحويل الواجهة لـ Dark Mode احترافي ومناسب للـ Ads
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
""", unsafe_allow_args=True)

# 3. دالة جلب المنتجات من قاعدة البيانات
def get_products():
    try:
        conn = sqlite3.connect('winning_products.db', check_same_thread=False)
        cursor = conn.cursor()
        query = "SELECT title, platform, country, image_url, source_url, engagement FROM products GROUP BY title ORDER BY id DESC LIMIT 5"
        cursor.execute(query)
        data = cursor.fetchall()
        conn.close()
        return data
    except Exception as e:
        return []

# 4. الواجهة الرئيسية (الهيدر)
st.title("HoldingW Analytics 🚀")
st.subheader("Discover Next-Gen Winning Products Driven by AI Market Intelligence")
st.markdown("<p style='text-align:center; color:#6b7280;'>Real-time social media ad scanning platform for global and local e-commerce.</p>", unsafe_allow_html=True)
st.markdown("---")

# جلب أول 5 منتجات حقيقية
products_list = get_products()

# قاموس الصور الاحتياطية (تأمين في حالة كانت داتا الصور فارغة)
images_dict = {
    "lamp": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop",
    "cutter": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=500&auto=format&fit=crop",
    "holder": "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop",
    "headphones": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",
    "massager": "https://images.unsplash.com/photo-1519823551279-64ad758c6306?w=500&auto=format&fit=crop",
    "cleaner": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop"
}

if not products_list:
    st.info("ℹ️ Platform initializing... Loading active winning products stream.")
else:
    # عرض الـ 5 منتجات الحقيقية بشكل متناسق (على 2 أعمدة للترتيب)
    cols = st.columns(2)
    
    for index, prod in enumerate(products_list):
        title, plat, count, img_key, src, engage = prod
        
        fallback_url = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop"
        actual_img_url = images_dict.get(img_key, fallback_url)
        
        # توزيع المنتجات على الأعمدة
        with cols[index % 2]:
            st.markdown(f"""
                <div class="product-card">
                    <h3 style="color:#ffffff; text-align:left; margin-bottom:10px;">🔥 {title}</h3>
                    <p style="margin:2px 0;">🌍 <b>Country:</b> {count} | 🎯 <b>Platform:</b> {plat}</p>
                    <p style="color:#10b981; font-weight:bold;">📈 Trend: {engage}</p>
                </div>
            """, unsafe_allow_html=True)
            st.image(actual_img_url, use_container_width=True)
            st.link_button("🔎 Analyze Product & View Ads Source", src, use_container_width=True)
            st.markdown("<br>", unsafe_allow_html=True)

# 5. صندوق الـ CPA المقفل الذكي (يظهر تحت الـ 5 منتجات)
st.markdown("""
    <div class="cpa-lock-box">
        <h2>🔒 Want to Unlock 50+ More Daily Winning Products?</h2>
        <p>You have viewed the free tier products. Upgrade to Premium Dashboard to access advanced filters, verified supplier links, and scaling metrics.</p>
    </div>
""", unsafe_allow_html=True)

# زر الـ CPA التمويلي الحالي (يظهر رسالة تنبيه)
# نهار يتقبل السيت وتبغي تخدم، غادي نحطو هنا الكود د اللوكر د OGAds ديريكت!
if st.button("🚀 Unlock Premium Dashboard Now", use_container_width=True, type="primary"):
    st.warning("🔒 Premium Access Required: Please complete the verification process or contact support to activate your dashboard.")
