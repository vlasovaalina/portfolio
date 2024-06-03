"use strict";

document.getElementById('dropdown-btn').addEventListener('click', function () {
  var dropdownList = document.getElementById('dropdown-list');

  if (dropdownList.style.display === 'none') {
    dropdownList.style.display = 'block';
  } else {
    dropdownList.style.display = 'none';
  }
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Функция для добавления анимации при прокрутке
function animateSkills() {
  var skills = document.querySelectorAll('.skill-bar');

  // Проверяем каждый элемент с классом 'skill-bar'
  skills.forEach(skill => {
    if (isElementInViewport(skill)) {
      var percent = skill.getAttribute('per');
      skill.style.width = percent;
    }
  });
}

// Вызываем функцию при загрузке страницы
animateSkills();

// Вызываем функцию при прокрутке страницы
document.addEventListener('scroll', animateSkills);