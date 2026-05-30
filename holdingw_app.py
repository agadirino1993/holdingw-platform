import streamlit as st
import sqlite3

st.set_page_config(
    page_title="HoldingW - Winning Products Finder", 
    layout="wide", 
    page_icon="🚀"
)

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
        
    query += " GROUP BY title ORDER BY id DESC LIMIT 20"
    
    cursor.execute(query, params)
    data = cursor.fetchall()
    conn.close()
    return data

st.title("🎯 منصة HoldingW لاكتشاف المنتجات الرابحة")
st.subheader("مستشارك الذكي للتجسس على الأسواق العالمية والمحلية في التجارة الإلكترونية")
st.markdown("---")

st.sidebar.header("⚙️ فلاتر البحث والتحليل")

platform = st.sidebar.selectbox(
    "اختر المنصة المستهدفة:",
    ["جميع المنصات", "TikTok Trends", "Facebook Ads Library", "AliExpress Hot Sales"]
)

country = st.sidebar.selectbox(
    "اختر الدولة المستهدفة:",
    [
        "جميع الدول", "المغرب (MA)", "مصر (EG)", "السنغال (SN)", "ساحل العاج (CI)",
        "السعودية (KSA)", "الإمارات (UAE)", "الكويت (KW)", "قطر (QA)"
    ]
)

st.success(f"📊 جاري عرض البيانات لـ: **{platform}** | السوق: **{country}**")

products_list = get_products(platform, country)

if not products_list:
    st.info("ℹ️ قاعدة البيانات فارغة حالياً لهذا الفلتر.")
else:
    cols = st.columns(3)
    
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
        
        fallback_url = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop"
        actual_img_url = images_dict.get(img_key, fallback_url)
        
        with cols[index % 3]:
            st.image(actual_img_url, use_container_width=True)
            st.subheader(title)
            st.write(f"🌍 الدولة: {count} | 🎯 المنصة: {plat}")
            st.write(f"📈 التفاعل: {engage}")
            st.link_button("🔎 معاينة تفاصيل المنتج وتحليله", src, use_container_width=True)
            st.markdown("---")