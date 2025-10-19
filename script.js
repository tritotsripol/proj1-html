const gotop = document.querySelector('.gotop');
gotop.addEventListener('click',function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

function changeLanguage(language) {
  document.querySelectorAll('[data-' + language + ']').forEach(function(element) {
    element.textContent = element.getAttribute('data-' + language);
  });

  const abbreviation = document.getElementById('abb');

  // abbreviation
  if (language === 'en') {
    abbreviation.title = 'Full form';
    abbreviation.textContent = abbreviation.getAttribute('data-en');
  } else if (language === 'th') {
    abbreviation.title = 'คำเต็ม';
    abbreviation.textContent = abbreviation.getAttribute('data-th');
  }

  // option
  const optgroups = document.querySelectorAll('optgroup');

    optgroups.forEach((optgroup, index) => {
      // เปลี่ยน label ของ optgroup
      if (language === 'en') {
        optgroup.setAttribute('label', `group ${index + 1}`);
      } else if (language === 'th') {
        optgroup.setAttribute('label', `กลุ่มที่ ${index + 1}`);
      }

      // เปลี่ยนข้อความของ option ตาม data-en หรือ data-th
      const options = optgroup.querySelectorAll('option');
      options.forEach(option => {
        option.textContent = option.getAttribute(`data-${language}`);
      });
    });
  }

changeLanguage('en');

// theme
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const prismTheme = document.getElementById('prism-theme');

// ตรวจสอบธีมที่บันทึกไว้
let savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  document.body.classList.remove('dark');
  themeIcon.src = 'sun-icon.png'; // ไอคอนพระอาทิตย์ (สว่าง)
  prismTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css'; // ใช้ธีม Prism แบบสว่าง
} else {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  themeIcon.src = 'moon-icon.png'; // ไอคอนพระจันทร์ (มืด)
  prismTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css'; // ใช้ธีม Prism แบบมืด
}

// ฟังก์ชันเปลี่ยนธีม
themeToggleButton.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  document.body.classList.toggle('dark', !isLight);

  if (isLight) {
    localStorage.setItem('theme', 'light');
    themeIcon.src = 'sun-icon.png'; 
    prismTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css'; 
  } else {
    localStorage.setItem('theme', 'dark');
    themeIcon.src = 'moon-icon.png'; 
    prismTheme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css'; 
  }
});

//--hori scroll
const tabsList = document.querySelectorAll('.indigo-block, .white-block');

tabsList.forEach(tabs => {
  tabs.addEventListener('wheel', (e) => {
    e.preventDefault(); 
    tabs.scrollLeft += e.deltaY * 0.5;
  });
});






