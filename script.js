document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
    
    // Закрытие мобильного меню при клике на ссылку
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
    
    // Плавная прокрутка к секциям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Фиксированное меню при прокрутке
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Скрытие/показ меню при прокрутке
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            header.classList.add('nav-hidden');
        } else {
            header.classList.remove('nav-hidden');
        }
        
        lastScrollTop = scrollTop;
        
        // Активация кнопки прокрутки вверх
        const scrollTopBtn = document.querySelector('.scroll-top');
        if (scrollTop > 600) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    // Кнопка прокрутки вверх
    const scrollTopBtn = document.createElement('div');
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Фильтрация проектов
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаление активного класса со всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавление активного класса на нажатую кнопку
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Фильтрация проектов с анимацией
            projectCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else if (card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                    
                    setTimeout(() => {
                        if (card.style.display === 'block') {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }
                    }, 50);
                }, 300);
            });
        });
    });
    
    // Анимация появления элементов при прокрутке
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .service-card, .about-content, .contact-container, .cta .container');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Инициализация стилей для анимации
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // Добавление класса для анимации
    document.addEventListener('scroll', function() {
        animateElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            }
        });
    });
    
    // Функция проверки видимости элемента
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Добавление класса для анимации при загрузке
    window.addEventListener('load', function() {
        animateElements.forEach(element => {
            if (isElementInViewport(element)) {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 300);
            }
        });
    });
    
    // Обработка отправки формы
    const contactForm = document.querySelector('#contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Анимация отправки формы
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
            
            // Получаем данные формы
            const formData = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                date: new Date().toLocaleString('ru-RU')
            };
            
            // Отладочная информация
            console.log('Отправляемые данные:', formData);
            
            // Отправка данных через EmailJS
            emailjs.send('service_1oula49', 'template_ujj2jqf', formData, 'MMo9qgE1rkyHyOerx')
                .then((response) => {
                    console.log('Успех!', response.status, response.text);
                    
                    // Успешная отправка
                    contactForm.reset();
                    
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Отправлено!';
                    submitBtn.style.backgroundColor = 'var(--success-color)';
                    
                    // Создание всплывающего сообщения
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = `
                        <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                        <h3>Сообщение отправлено!</h3>
                        <p>Спасибо за обращение! Я свяжусь с вами в ближайшее время.</p>
                    `;
                    document.body.appendChild(successMessage);
                    
                    // Анимация появления сообщения
                    setTimeout(() => {
                        successMessage.style.opacity = '1';
                        successMessage.style.transform = 'translateY(0)';
                    }, 100);
                    
                    // Удаление сообщения через некоторое время
                    setTimeout(() => {
                        successMessage.style.opacity = '0';
                        successMessage.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            document.body.removeChild(successMessage);
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                            submitBtn.style.backgroundColor = '';
                        }, 300);
                    }, 3000);
                })
                .catch((error) => {
                    // Ошибка отправки
                    console.error('Ошибка отправки:', error);
                    
                    // Попробуем альтернативный метод отправки через Formspree
                    const formspreeUrl = 'https://formspree.io/f/sagadibeks@gmail.com';
                    
                    // Создаем новую форму для отправки через Formspree
                    const formspreeForm = document.createElement('form');
                    formspreeForm.method = 'POST';
                    formspreeForm.action = formspreeUrl;
                    formspreeForm.style.display = 'none';
                    
                    // Добавляем поля
                    for (const key in formData) {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = formData[key];
                        formspreeForm.appendChild(input);
                    }
                    
                    // Добавляем форму в документ и отправляем
                    document.body.appendChild(formspreeForm);
                    formspreeForm.submit();
                    
                    // Показываем сообщение об успешной отправке
                    submitBtn.innerHTML = '<i class="fas fa-check"></i> Отправлено!';
                    submitBtn.style.backgroundColor = 'var(--success-color)';
                    
                    // Создание всплывающего сообщения
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = `
                        <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                        <h3>Сообщение отправлено!</h3>
                        <p>Спасибо за обращение! Я свяжусь с вами в ближайшее время.</p>
                    `;
                    document.body.appendChild(successMessage);
                    
                    // Анимация появления сообщения
                    setTimeout(() => {
                        successMessage.style.opacity = '1';
                        successMessage.style.transform = 'translateY(0)';
                    }, 100);
                    
                    // Удаление сообщения через некоторое время
                    setTimeout(() => {
                        successMessage.style.opacity = '0';
                        successMessage.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            document.body.removeChild(successMessage);
                            submitBtn.innerHTML = originalText;
                            submitBtn.disabled = false;
                            submitBtn.style.backgroundColor = '';
                            document.body.removeChild(formspreeForm);
                        }, 300);
                    }, 3000);
                });
        });
    }
    
    // Добавление плавающих элементов
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (!section.classList.contains('hero') && !section.classList.contains('cta')) {
            for (let i = 0; i < 3; i++) {
                const floatingEl = document.createElement('div');
                floatingEl.className = `floating-element floating-${i+1}`;
                section.appendChild(floatingEl);
            }
        }
    });
    
    // Добавление стилей для сообщения об успешной отправке
    const style = document.createElement('style');
    style.textContent = `
        .success-message {
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%) translateY(20px);
            background-color: white;
            padding: 30px;
            border-radius: var(--border-radius-lg);
            box-shadow: var(--box-shadow);
            z-index: 1000;
            text-align: center;
            opacity: 0;
            transition: opacity 0.3s ease, transform 0.3s ease;
            max-width: 400px;
            width: 90%;
        }
        
        .success-icon {
            font-size: 3rem;
            color: var(--success-color);
            margin-bottom: 15px;
        }
        
        .success-message h3 {
            margin-bottom: 10px;
            color: var(--dark-color);
        }
        
        .success-message p {
            color: var(--text-light);
        }
        
        .animate {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .scrolled {
            padding: 15px 0;
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .nav-hidden {
            transform: translateY(-100%);
        }
        
        header {
            transition: transform 0.3s ease, padding 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .menu-open {
            overflow: hidden;
        }
    `;
    document.head.appendChild(style);
    
    // Инициализация переводов
    initLanguage();
    
    // Инициализация мобильного меню
    initMobileMenu();
    
    // Плавная прокрутка
    initSmoothScroll();
    
    // Проверка кликабельности кнопок переключения языка
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        // Добавляем прямой обработчик клика
        button.onclick = function(e) {
            console.log('Button clicked directly:', this.getAttribute('data-lang'));
            e.stopPropagation(); // Останавливаем всплытие события
        };
    });
    
    // Проверяем, есть ли перекрывающие элементы
    document.addEventListener('click', function(e) {
        const element = document.elementFromPoint(e.clientX, e.clientY);
        console.log('Clicked element:', element);
    });
});

function initLanguage() {
    console.log('Initializing language');
    
    // Получаем сохраненный язык или используем русский по умолчанию
    const savedLang = localStorage.getItem('lang') || 'ru';
    console.log('Saved language:', savedLang);
    
    // Активируем кнопку выбранного языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === savedLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Применяем перевод
    applyTranslation(savedLang);
    
    // Добавляем обработчики для кнопок переключения языка
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', langButtons.length);
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            console.log('Language button clicked:', lang);
            
            // Активируем кнопку
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Применяем перевод
            applyTranslation(lang);
        });
    });
}

function applyTranslation(lang) {
    console.log('Applying translation for:', lang);
    
    // Сохраняем выбранный язык
    localStorage.setItem('lang', lang);
    
    // Проверяем, что объект translations существует
    if (typeof translations === 'undefined' || !translations) {
        console.error('Translations object is not defined!');
        return;
    }
    
    // Проверяем, что выбранный язык существует в объекте translations
    if (!translations[lang]) {
        console.error('Translations for language', lang, 'not found!');
        return;
    }
    
    // Переводим все элементы с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (!key) return;
        
        // Получаем перевод по ключу
        const translation = getTranslation(lang, key);
        
        if (translation) {
            element.textContent = translation;
        } else {
            console.warn('Translation not found for key:', key);
        }
    });
}

function getTranslation(lang, key) {
    // Разбиваем ключ на части (например, "nav.home" -> ["nav", "home"])
    const keys = key.split('.');
    
    // Начинаем с корневого объекта переводов для выбранного языка
    let result = translations[lang];
    
    // Проходим по всем частям ключа
    for (const k of keys) {
        if (result && result[k]) {
            result = result[k];
        } else {
            console.warn(`Translation not found: ${lang}.${key}`);
            return null;
        }
    }
    
    return result;
}

function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Закрываем меню при клике на ссылку
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
}

// Инициализация плавной прокрутки
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Добавление класса при прокрутке для изменения стиля навигации
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// Проверяем, что объект translations существует
if (typeof translations === 'undefined') {
    console.error('Translations object is not defined. Make sure translations.js is loaded before script.js');
    
    // Создаем пустой объект переводов, чтобы избежать ошибок
    var translations = {
        ru: {},
        en: {},
        kz: {}
    };
} 