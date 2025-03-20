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

