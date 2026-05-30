import streamlit as st
import sqlite3

# إعدادات الصفحة الاحترافية والعالمية للمنصة
st.set_page_config(
    page_title="HoldingW - Winning Products Finder", 
    layout="wide", 
    page_icon="🚀"
)

# دالة جلب البيانات النظيفة من قاعدة البيانات
def get_products(platform_filter, country_filter):
    conn = sqlite3.connect('winning_products.db', check_same_thread=False)
    cursor = conn.cursor()
    
    query = "SELECT title, platform, country, image_url, source_url, engagement FROM products WHERE 1=1"
    params = []
    
    if platform_filter != "جميع المنصات":
        query += " AND platform = ?"
        params.append(platform_filter)
        
    if country_filter != "جميع الدول":
        query += " AND country = ?"
        params.append(country_filter)
        
    # جلب المنتجات بشكل فريد بدون تكرار العناوين في نفس الصفحة
    query += " GROUP BY title ORDER BY id DESC LIMIT 20"
    
    cursor.execute(query, params)
    data = cursor.fetchall()
    conn.close()
    return data

# العناوين الرئيسية للموقع ليعطي طابع أداة تجسس حقيقية
st.title("🎯 منصة HoldingW لاكتشاف المنتجات الرابحة")
st.subheader("مستشارك الذكي للتجسس على الأسواق العالمية والمحلية في التجارة الإلكترونية")
st.markdown("---")

# القائمة الجانبية (Sidebar)
st.sidebar.header("⚙️ فلاتر البحث والتحليل")

platform = st.sidebar.selectbox(
    "اختر المنصة المستهدفة:",
    ["جميع المنصات", "TikTok Trends 🕺", "Facebook Ads Library 🎯", "AliExpress Hot Sales 🛒"]
)

country = st.sidebar.selectbox(
    "اختر الدولة المستهدفة:",
    [
        "جميع الدول", "المغرب (MA)", "مصر (EG)", "السنغال (SN)", "ساحل العاج (CI)",
        "السعودية (KSA)", "الإمارات (UAE)", "الكويت (KW)", "قطر (QA)"
    ]
)

st.success(f"📊 جاري عرض البيانات لـ: **{platform}** | السوق: **{country}**")

# جلب لستة المنتجات الحقيقية
products_list = get_products(platform, country)

if not products_list:
    st.info("ℹ️ قاعدة البيانات فارغة حالياً لهذا الفلتر.")
else:
    # إنشاء نظام الكروت بـ 3 أعمدة متناسقة
    cols = st.columns(3)
    
    # خريطة روابط الصور الحقيقية والمستقرة والمطابقة لكل منتج بدقة
    images_dict = {
        "lamp": "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop",
        "cutter": "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=500&auto=format&fit=crop",
        "holder": "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop",
        "headphones": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",
        "massager": "https://images.unsplash.com/photo-1519823551279-64ad758c6306?w=500&auto=format&fit=crop",
        
        "cleaner": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&auto=format&fit=crop",
        "pump": "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=500&auto=format&fit=crop",
        "shoes": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop",
        "bag": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop",
        "blender": "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?w=500&auto=format&fit=crop",
        
        "lamp2": "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format&fit=crop",
        "coffee": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&auto=format&fit=crop",
        "watch": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop",
        "iron": "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=500&auto=format&fit=crop",
        "projector": "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=500&auto=format&fit=crop"
    }

    for index, prod in enumerate(products_list):
        title, plat, count, img_key, src, engage = prod
        
        # تحديد الصورة الصحيحة بناءً على المفتاح أو وضع صورة افتراضية
        fallback_url = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop"
        actual_img_url = images_dict.get(img_key, fallback_url)
        
        with cols[index % 3]:
            # عرض الصورة بالحجم المناسب والمتوافق بدون تحذيرات
            st.image(actual_img_url, use_container_width=True)
            st.subheader(title)
            st.write(f"🌍 الدولة: {count} | 🎯 المنصة: {plat}")
            st.write(f"📈 التفاعل: {engage}")
            
            # الزر العالمي التفاعلي الجديد: يفتح رابط المنتج الحقيقي مباشرة فـ تبويب جديد
            st.link_button("🔎 معاينة تفاصيل المنتج وتحليله", src, use_container_width=True)
            st.markdown("---")