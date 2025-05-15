---
permalink: /
title: "Huangwei Chen's Academic Homepage"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

## 👨‍🎓 &nbsp;About Me {#about-me}

I am an undergraduate student majoring in **Computer Science and Technology** at **Hangzhou Dianzi University** (2022-2026). I'm currently advised by [Prof. Feiwei Qin (秦飞巍)](https://faculty.hdu.edu.cn/jsjxy/qfw/main.htm) from [School of Computer Science](https://computer.hdu.edu.cn/), [Hangzhou Dianzi University](https://www.hdu.edu.cn/main.htm). My academic interests lie in **Medical Image Processing** and **Multimodal Learning**.

## 🔬 &nbsp;Researches {#researches}

- MMLNB: Multi-Modal Learning for Neuroblastoma Subtyping Classification Assisted with Textual Description Generation [[GitHub]](https://github.com/HovChen/MMLNB) [[Paper]](https://arxiv.org/abs/2503.12927)

## 🏆 &nbsp;Awards {#awards}

- *2023-2024* **National Scholarship**
- *2022-2023* Provincial Government Scholarship
- *2023-2024* Top 10 College Students in HDUCS
- *2023-2024* Influential Man of HDUCS
- *2024-2025* 7th "Youth HDU" 100 outstanding college students "Star of Learning"
- *2024-2025* 7th "Youth HDU" 100 outstanding college students "Star of Integrity"
- *2024-2025* "Star of Tailong" Scholarship

## 🥇 &nbsp;Competitions {#competitions}

- **Meritorious Winner - 2024 Interdisciplinary Contest In Modeling**
- **Silver Medal - China International College Students'Innovation Competition**
- First Prize - MathorCup Mathematical Modeling Competition
- First Prize - APMCM Asia-Pacific Mathematical Modeling Competition
- Third Prize - Competition of Service Outsourcing and Entrepreneurship Innovation‌
- Third Prize - Chinese Collegiate Computing Competition
- Third Prize - ICT Production-education Integration Innovation Competition

## 📷 &nbsp;Gallery {#gallery}
<div class="gallery-scroll">
  <img src="/images/2023西湖.JPG" alt="2023西湖" class="gallery-img" />
  <img src="/images/2023先进班集体答辩.jpeg" alt="2023先进班集体答辩" class="gallery-img" />
  <img src="/images/2025百大领奖.jpg" alt="2025百大领奖" class="gallery-img" />
  <img src="/images/2025松花江铁路大桥.jpg" alt="2025松花江铁路大桥" class="gallery-img" />
</div>

<!-- Lightbox Modal -->
<div id="img-modal" style="display:none; position:fixed; z-index:9999; left:0; top:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); justify-content:center; align-items:center;">
  <img id="modal-img" src="" alt="" style="max-width:70vw; max-height:70vh; border-radius:16px; box-shadow:0 4px 32px #222; border:6px solid #fff; object-fit:contain; background:#fff;" />
</div>

<style>
.gallery-scroll {
  overflow-x: auto;
  white-space: nowrap;
  padding: 15px; /* 为滚动区域增加一些内边距 */
  scrollbar-height: thin;
  scrollbar-color: #b3b3b3 #f5f5f5;
  -webkit-overflow-scrolling: touch;
}
.gallery-scroll::-webkit-scrollbar {
  height: 8px;
  background: #f5f5f5;
  border-radius: 4px;
}
.gallery-scroll::-webkit-scrollbar-thumb {
  background: #b3b3b3;
  border-radius: 4px;
}

.gallery-img {
  max-height: 180px; /* 设置最大高度 */
  width: auto;   /* 宽度自适应以保持原始宽高比 */
  height: auto;  /* 高度自适应 */
  display: inline-block; /* 配合 white-space: nowrap 实现横向排列 */
  margin-right: 15px; /* 图片之间的右边距 */
  vertical-align: top; /* 图片顶部对齐 */
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  border: 1px solid #eee;
  transition: transform 0.2s, box-shadow 0.2s, border 0.2s;
  overflow: hidden; /* 确保圆角效果正确应用 */
}
.gallery-img:last-child {
  margin-right: 0; /* 最后一个图片不需要右边距 */
}
.gallery-img:hover {
  /* transform: scale(1.08) translateY(-4px); */
  /* 取消放大和上移动画，改为轻微阴影和边框高亮 */
  box-shadow: 0 8px 32px #bbb, 0 0 0 3px #b3b3b3;
  border: 2px solid #b3b3b3;
  z-index: 10;
  background: #fff;
  /* 保持过渡动画流畅 */
}
#img-modal {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px; /* 增加顶部内边距以避免被导航栏遮挡 */
  z-index: 9999;
}
#img-modal[style*="display:none"] {
  display: none !important;
}
</style>
<script>
document.addEventListener('DOMContentLoaded', function() {
  var imgs = document.querySelectorAll('.gallery-img');
  var modal = document.getElementById('img-modal');
  var modalImg = document.getElementById('modal-img');
  imgs.forEach(function(img) {
    img.onclick = function() {
      modal.style.display = 'flex';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      document.body.style.overflow = 'hidden';
      document.body.classList.toggle('dark');
    };
  });
  modal.onclick = function(e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
      document.body.style.overflow = '';
      document.body.classList.toggle('dark');
    }
  };
  window.addEventListener('keydown', function(e) {
    if (modal.style.display !== 'none' && (e.key === 'Escape' || e.key === 'Esc')) {
      modal.style.display = 'none';
      modalImg.src = '';
      document.body.style.overflow = '';
    }
  });
});
</script>

<style>
.contact-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background: #f8f9fa;
  border-radius: 8px;
  text-decoration: none;
  color: #495057;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: #e9ecef;
  transform: translateX(5px);
  text-decoration: none;
}

.contact-item i {
  font-size: 1.2em;
  margin-right: 12px;
  color: rgb(74, 78, 82);
}

.contact-item span {
  font-size: 1em;
}
</style>

---
This website is powered by [Academic Pages](https://github.com/academicpages/academicpages.github.io) and hosted on GitHub Pages.

