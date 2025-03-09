// Полный объект переводов для всего сайта
const translations = {
    ru: {
        nav: {
            home: "Главная",
            about: "Обо мне",
            skills: "Навыки",
            projects: "Проекты",
            pricing: "Цены",
            contact: "Контакты"
        },
        hero: {
            greeting: "Привет, я",
            name: "Санжар",
            role: "Разработчик полного стека",
            description: "Создаю веб и мобильные приложения с использованием Django и Flutter",
            contact: "Связаться со мной",
            projects: "Мои проекты"
        },
        about: {
            title: "Обо мне",
            description: "Я разработчик программного обеспечения с опытом создания веб-сайтов, мобильных приложений и ботов. Моя цель - создавать качественные цифровые решения, которые помогают бизнесу и людям.",
            experience: "лет опыта",
            education: "Образование",
            educationDetails: "Бакалавр компьютерных наук, Университет МУИТ",
            experienceTitle: "Опыт работы",
            job1: {
                title: "Старший разработчик",
                company: "TechCorp",
                period: "2020 - настоящее время",
                description: "Разработка и поддержка веб-приложений, создание мобильных приложений, интеграция с API."
            },
            job2: {
                title: "Веб-разработчик",
                company: "WebSolutions",
                period: "2018 - 2020",
                description: "Создание адаптивных веб-сайтов, интеграция CMS, оптимизация производительности."
            },
            job3: {
                title: "Фрилансер",
                company: "Самозанятый",
                period: "2016 - 2018",
                description: "Разработка сайтов и приложений для малого бизнеса, создание ботов для Telegram и Discord."
            }
        },
        skills: {
            title: "Мои навыки",
            description: "Я специализируюсь на следующих технологиях и инструментах:",
            frontend: "Фронтенд",
            backend: "Бэкенд",
            mobile: "Мобильная разработка",
            other: "Другие навыки"
        },
        projects: {
            title: "Мои проекты",
            description: "Вот некоторые из моих последних работ:",
            viewProject: "Посмотреть проект",
            viewCode: "GitHub",
            project1: {
                title: "Интернет-магазин",
                description: "Полнофункциональный интернет-магазин с каталогом товаров, корзиной и системой оплаты.",
                technologies: "Django, PostgreSQL, JavaScript"
            },
            project2: {
                title: "Мобильное приложение",
                description: "Приложение для Android и iOS с функциями геолокации и push-уведомлениями.",
                technologies: "Flutter, Firebase, Google Maps API"
            },
            project3: {
                title: "Telegram бот",
                description: "Бот для автоматизации бизнес-процессов с интеграцией с CRM-системой.",
                technologies: "Python, Telegram API, MongoDB"
            },
            project4: {
                title: "Корпоративный сайт",
                description: "Многостраничный сайт для компании с админ-панелью и блогом.",
                technologies: "Django, MySQL, Bootstrap"
            },
            zcord: {
                title: "Zcord",
                description: "Мобильное приложение для общения и обмена сообщениями",
                tech1: "Flutter",
                tech2: "Dart",
                tech3: "Firebase"
            },
            march8: {
                title: "8 March",
                description: "Праздничный веб-сайт, посвященный Международному женскому дню",
                tech1: "HTML/CSS",
                tech2: "JavaScript",
                tech3: "Responsive"
            },
            tnkprod: {
                title: "TNK-Prod",
                description: "Веб-сайт с интегрированным мессенджером для общения в реальном времени",
                tech1: "Django",
                tech2: "WebSockets",
                tech3: "JavaScript"
            },
            fooddetection: {
                title: "Food Detection",
                description: "ИИ для определения продуктов и подсчета калорий с функцией озвучки",
                tech1: "Python",
                tech2: "TensorFlow",
                tech3: ""
            }
        },
        pricing: {
            title: "Стоимость услуг",
            description: "Предлагаю разработку различных цифровых решений по доступным ценам. Каждый проект уникален, поэтому окончательная стоимость может варьироваться в зависимости от сложности и требований.",
            button: "Заказать",
            note: "* Окончательная стоимость зависит от сложности проекта и требуемого функционала. Для получения точной оценки свяжитесь со мной.",
            landing: {
                title: "Лендинг",
                price: "от 15 000 ₸",
                period: "одностраничный сайт",
                feature1: "Адаптивный дизайн",
                feature2: "SEO-оптимизация",
                feature3: "Форма обратной связи",
                feature4: "Бесплатное обновление"
            },
            website: {
                title: "Многостраничный сайт",
                price: "от 40 000 ₸",
                period: "базовая версия",
                feature1: "До 5 страниц",
                feature2: "Адаптивный дизайн",
                feature3: "SEO-оптимизация",
                feature4: "Техническая поддержка"
            },
            bot: {
                title: "Telegram/Discord бот",
                price: "от 20 000 ₸",
                period: "базовая версия",
                feature1: "Интеграция с API",
                feature2: "Базовые команды",
                feature3: "Хостинг на 1 месяц",
                feature4: "Настройка уведомлений"
            },
            app: {
                title: "Android приложение",
                price: "от 60 000 ₸",
                period: "базовая версия",
                feature1: "Нативный UI",
                feature2: "Базовый функционал",
                feature3: "Публикация в Play Market",
                feature4: "Бесплатные обновления"
            },
            ai: {
                title: "ИИ решения",
                price: "от 30 000 ₸",
                period: "базовая версия",
                feature1: "Интеграция с OpenAI",
                feature2: "Обучение модели",
                feature3: "Настройка под задачи",
                feature4: "Техническая поддержка"
            }
        },
        contact: {
            title: "Свяжитесь со мной",
            description: "Если у вас есть вопросы или вы хотите обсудить проект, свяжитесь со мной удобным способом.",
            form: {
                title: "Отправить сообщение",
                name: "Имя",
                email: "Email",
                subject: "Тема",
                message: "Сообщение",
                send: "Отправить",
                success: "Сообщение успешно отправлено!",
                error: "Произошла ошибка. Пожалуйста, попробуйте еще раз."
            },
            info: {
                title: "Контактная информация",
                email: "Email",
                phone: "Телефон",
                address: "Адрес",
                addressValue: "Алматы, Казахстан"
            },
            social: {
                title: "Социальные сети",
                follow: "Подписывайтесь на меня в социальных сетях"
            },
            whatsapp: "WhatsApp"
        },
        footer: {
            copyright: "© 2023 Saler Game. Все права защищены.",
            links: "Быстрые ссылки",
            social: "Социальные сети",
            privacy: "Политика конфиденциальности",
            terms: "Условия использования",
            navigation: "Навигация"
        },
        cta: {
            title: "Готовы обсудить ваш проект? Свяжитесь со мной сегодня!",
            button: "Начать проект"
        },
        facts: {
            currentWork: "🔭 Сейчас я работаю над: веб и мобильными приложениями с использованием Django и Flutter.",
            collaboration: "👯 Ищу сотрудничество в: разработке полного стека, Android-приложениях и проектах с ИИ.",
            helpNeeded: "🤝 Ищу помощь с: углублением знаний в глубоком обучении и облачных вычислениях.",
            learning: "🌱 Сейчас изучаю: машинное обучение, ИИ и продвинутую разработку на Flutter.",
            askMe: "💬 Спрашивайте меня о: Django, Flutter, PostgreSQL, разработке API и инженерии полного стека.",
            funFact: "⚡ Интересный факт: я начал программировать как хобби, а теперь это моя страсть к созданию значимых проектов!"
        },
        projectFilters: {
            all: "Все",
            web: "Веб",
            mobile: "Мобильные",
            other: "Другие"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            pricing: "Pricing",
            contact: "Contact"
        },
        hero: {
            greeting: "Hello, I'm",
            name: "Sanzhar",
            role: "Full Stack Developer",
            description: "I create web and mobile applications using Django and Flutter",
            contact: "Contact Me",
            projects: "My Projects"
        },
        about: {
            title: "About Me",
            description: "I am a software developer with experience in creating websites, mobile applications, and bots. My goal is to create quality digital solutions that help businesses and people.",
            experience: "years of experience",
            education: "Education",
            educationDetails: "Bachelor of Computer Science, IITU University",
            experienceTitle: "Work Experience",
            job1: {
                title: "Senior Developer",
                company: "TechCorp",
                period: "2020 - present",
                description: "Development and maintenance of web applications, creation of mobile applications, API integration."
            },
            job2: {
                title: "Web Developer",
                company: "WebSolutions",
                period: "2018 - 2020",
                description: "Creation of responsive websites, CMS integration, performance optimization."
            },
            job3: {
                title: "Freelancer",
                company: "Self-employed",
                period: "2016 - 2018",
                description: "Development of websites and applications for small businesses, creation of bots for Telegram and Discord."
            }
        },
        skills: {
            title: "My Skills",
            description: "I specialize in the following technologies and tools:",
            frontend: "Frontend",
            backend: "Backend",
            mobile: "Mobile Development",
            other: "Other Skills"
        },
        projects: {
            title: "My Projects",
            description: "Here are some of my recent works:",
            viewProject: "View Project",
            viewCode: "GitHub",
            project1: {
                title: "E-commerce Store",
                description: "A full-featured online store with product catalog, shopping cart, and payment system.",
                technologies: "Django, PostgreSQL, JavaScript"
            },
            project2: {
                title: "Mobile Application",
                description: "Android and iOS application with geolocation features and push notifications.",
                technologies: "Flutter, Firebase, Google Maps API"
            },
            project3: {
                title: "Telegram Bot",
                description: "Bot for business process automation with CRM system integration.",
                technologies: "Python, Telegram API, MongoDB"
            },
            project4: {
                title: "Corporate Website",
                description: "Multi-page website for a company with admin panel and blog.",
                technologies: "Django, MySQL, Bootstrap"
            },
            zcord: {
                title: "Zcord",
                description: "Mobile application for communication and messaging",
                tech1: "Flutter",
                tech2: "Dart",
                tech3: "Firebase"
            },
            march8: {
                title: "8 March",
                description: "Festive website dedicated to International Women's Day",
                tech1: "HTML/CSS",
                tech2: "JavaScript",
                tech3: "Responsive"
            },
            tnkprod: {
                title: "TNK-Prod",
                description: "Website with integrated real-time messenger",
                tech1: "Django",
                tech2: "WebSockets",
                tech3: "JavaScript"
            },
            fooddetection: {
                title: "Food Detection",
                description: "AI for food recognition and calorie counting with voice feature",
                tech1: "Python",
                tech2: "TensorFlow",
                tech3: ""
            }
        },
        pricing: {
            title: "Pricing",
            description: "I offer development of various digital solutions at affordable prices. Each project is unique, so the final cost may vary depending on the complexity and requirements.",
            button: "Order",
            note: "* The final cost depends on the complexity of the project and the required functionality. For an accurate estimate, please contact me.",
            landing: {
                title: "Landing Page",
                price: "from $33",
                period: "one-page website",
                feature1: "Responsive design",
                feature2: "SEO optimization",
                feature3: "Contact form",
                feature4: "Free updates"
            },
            website: {
                title: "Multi-page Website",
                price: "from $88",
                period: "basic version",
                feature1: "Up to 5 pages",
                feature2: "Responsive design",
                feature3: "SEO optimization",
                feature4: "Technical support"
            },
            bot: {
                title: "Telegram/Discord Bot",
                price: "from $44",
                period: "basic version",
                feature1: "API integration",
                feature2: "Basic commands",
                feature3: "1 month hosting",
                feature4: "Notification setup"
            },
            app: {
                title: "Android Application",
                price: "from $132",
                period: "basic version",
                feature1: "Native UI",
                feature2: "Basic functionality",
                feature3: "Play Market publication",
                feature4: "Free updates"
            },
            ai: {
                title: "AI Solutions",
                price: "from $66",
                period: "basic version",
                feature1: "OpenAI integration",
                feature2: "Model training",
                feature3: "Task customization",
                feature4: "Technical support"
            }
        },
        contact: {
            title: "Contact Me",
            description: "If you have any questions or want to discuss a project, contact me in a convenient way.",
            form: {
                title: "Send a Message",
                name: "Name",
                email: "Email",
                subject: "Subject",
                message: "Message",
                send: "Send",
                success: "Message sent successfully!",
                error: "An error occurred. Please try again."
            },
            info: {
                title: "Contact Information",
                email: "Email",
                phone: "Phone",
                address: "Address",
                addressValue: "Almaty, Kazakhstan"
            },
            social: {
                title: "Social Media",
                follow: "Follow me on social media"
            },
            whatsapp: "WhatsApp"
        },
        footer: {
            copyright: "© 2023 Saler Game. All rights reserved.",
            links: "Quick Links",
            social: "Social Media",
            privacy: "Privacy Policy",
            terms: "Terms of Use",
            navigation: "Navigation"
        },
        cta: {
            title: "Ready to discuss your project? Contact me today!",
            button: "Start a project"
        },
        facts: {
            currentWork: "🔭 I'm currently working on: web and mobile applications using Django and Flutter.",
            collaboration: "👯 I'm looking to collaborate on: full-stack development, Android apps, and AI projects.",
            helpNeeded: "🤝 I'm looking for help with: deepening my knowledge in deep learning and cloud computing.",
            learning: "🌱 I'm currently learning: machine learning, AI, and advanced Flutter development.",
            askMe: "💬 Ask me about: Django, Flutter, PostgreSQL, API development, and full-stack engineering.",
            funFact: "⚡ Fun fact: I started programming as a hobby, and now it's my passion for creating meaningful projects!"
        },
        projectFilters: {
            all: "All",
            web: "Web",
            mobile: "Mobile",
            other: "Other"
        }
    },
    kz: {
        nav: {
            home: "Басты бет",
            about: "Мен туралы",
            skills: "Дағдылар",
            projects: "Жобалар",
            pricing: "Бағалар",
            contact: "Байланыс"
        },
        hero: {
            greeting: "Сәлем, мен",
            name: "Санжар",
            role: "Толық стек әзірлеуші",
            description: "Django және Flutter қолдана отырып, веб және мобильді қосымшалар жасаймын",
            contact: "Маған хабарласыңыз",
            projects: "Менің жобаларым"
        },
        about: {
            title: "Мен туралы",
            description: "Мен веб-сайттар, мобильді қосымшалар және боттар жасау тәжірибесі бар бағдарламалық жасақтама әзірлеушісімін. Менің мақсатым - бизнес пен адамдарға көмектесетін сапалы цифрлық шешімдер жасау.",
            experience: "жыл тәжірибе",
            education: "Білім",
            educationDetails: "Компьютерлік ғылымдар бакалавры, ХАТУ Университеті",
            experienceTitle: "Жұмыс тәжірибесі",
            job1: {
                title: "Аға әзірлеуші",
                company: "TechCorp",
                period: "2020 - қазіргі уақытқа дейін",
                description: "Веб-қосымшаларды әзірлеу және қолдау, мобильді қосымшалар жасау, API интеграциясы."
            },
            job2: {
                title: "Веб-әзірлеуші",
                company: "WebSolutions",
                period: "2018 - 2020",
                description: "Адаптивті веб-сайттар жасау, CMS интеграциясы, өнімділікті оңтайландыру."
            },
            job3: {
                title: "Фрилансер",
                company: "Өзін-өзі жұмыспен қамтыған",
                period: "2016 - 2018",
                description: "Шағын бизнес үшін веб-сайттар мен қосымшалар әзірлеу, Telegram және Discord үшін боттар жасау."
            }
        },
        skills: {
            title: "Менің дағдыларым",
            description: "Мен келесі технологиялар мен құралдарға маманданамын:",
            frontend: "Фронтенд",
            backend: "Бэкенд",
            mobile: "Мобильді әзірлеу",
            other: "Басқа дағдылар"
        },
        projects: {
            title: "Менің жобаларым",
            description: "Міне, менің соңғы жұмыстарымның кейбіреулері:",
            viewProject: "Жобаны қарау",
            viewCode: "GitHub",
            project1: {
                title: "Интернет-дүкен",
                description: "Тауарлар каталогы, себет және төлем жүйесі бар толық функционалды интернет-дүкен.",
                technologies: "Django, PostgreSQL, JavaScript"
            },
            project2: {
                title: "Мобильді қосымша",
                description: "Геолокация функциялары және push-хабарламалары бар Android және iOS қосымшасы.",
                technologies: "Flutter, Firebase, Google Maps API"
            },
            project3: {
                title: "Telegram бот",
                description: "CRM жүйесімен интеграциясы бар бизнес-процестерді автоматтандыруға арналған бот.",
                technologies: "Python, Telegram API, MongoDB"
            },
            project4: {
                title: "Корпоративтік сайт",
                description: "Әкімшілік панелі және блогы бар компания үшін көп беттік сайт.",
                technologies: "Django, MySQL, Bootstrap"
            },
            zcord: {
                title: "Zcord",
                description: "Байланыс және хабар алмасуға арналған мобильді қосымша",
                tech1: "Flutter",
                tech2: "Dart",
                tech3: "Firebase"
            },
            march8: {
                title: "8 Наурыз",
                description: "Халықаралық әйелдер күніне арналған мерекелік веб-сайт",
                tech1: "HTML/CSS",
                tech2: "JavaScript",
                tech3: "Responsive"
            },
            tnkprod: {
                title: "TNK-Prod",
                description: "Нақты уақыттағы мессенджері бар веб-сайт",
                tech1: "Django",
                tech2: "WebSockets",
                tech3: "JavaScript"
            },
            fooddetection: {
                title: "Food Detection",
                description: "Тағамдарды анықтау және калорияларды есептеу үшін дауыс функциясы бар ЖИ",
                tech1: "Python",
                tech2: "TensorFlow",
                tech3: ""
            }
        },
        pricing: {
            title: "Қызмет құны",
            description: "Мен қолжетімді бағамен әртүрлі цифрлық шешімдерді әзірлеуді ұсынамын. Әрбір жоба бірегей, сондықтан соңғы құны күрделілігі мен талаптарына байланысты өзгеруі мүмкін.",
            button: "Тапсырыс беру",
            note: "* Соңғы құны жобаның күрделілігі мен қажетті функционалдылыққа байланысты. Нақты бағалау үшін маған хабарласыңыз.",
            landing: {
                title: "Лендинг",
                price: "15 000 ₸ бастап",
                period: "бір беттік сайт",
                feature1: "Адаптивті дизайн",
                feature2: "SEO оңтайландыру",
                feature3: "Кері байланыс формасы",
                feature4: "Тегін жаңартулар"
            },
            website: {
                title: "Көп беттік сайт",
                price: "40 000 ₸ бастап",
                period: "негізгі нұсқа",
                feature1: "5 бетке дейін",
                feature2: "Адаптивті дизайн",
                feature3: "SEO оңтайландыру",
                feature4: "Техникалық қолдау"
            },
            bot: {
                title: "Telegram/Discord бот",
                price: "20 000 ₸ бастап",
                period: "негізгі нұсқа",
                feature1: "API интеграциясы",
                feature2: "Негізгі командалар",
                feature3: "1 айлық хостинг",
                feature4: "Хабарландыруларды баптау"
            },
            app: {
                title: "Android қосымшасы",
                price: "60 000 ₸ бастап",
                period: "негізгі нұсқа",
                feature1: "Нативті UI",
                feature2: "Негізгі функционал",
                feature3: "Play Market-те жариялау",
                feature4: "Тегін жаңартулар"
            },
            ai: {
                title: "ЖИ шешімдері",
                price: "30 000 ₸ бастап",
                period: "негізгі нұсқа",
                feature1: "OpenAI интеграциясы",
                feature2: "Модельді оқыту",
                feature3: "Тапсырмаларға баптау",
                feature4: "Техникалық қолдау"
            }
        },
        contact: {
            title: "Маған хабарласыңыз",
            description: "Егер сізде сұрақтар болса немесе жобаны талқылағыңыз келсе, маған ыңғайлы жолмен хабарласыңыз.",
            form: {
                title: "Хабарлама жіберу",
                name: "Аты",
                email: "Email",
                subject: "Тақырып",
                message: "Хабарлама",
                send: "Жіберу",
                success: "Хабарлама сәтті жіберілді!",
                error: "Қате орын алды. Қайталап көріңіз."
            },
            info: {
                title: "Байланыс ақпараты",
                email: "Email",
                phone: "Телефон",
                address: "Мекенжай",
                addressValue: "Алматы, Қазақстан"
            },
            social: {
                title: "Әлеуметтік желілер",
                follow: "Мені әлеуметтік желілерде қадағалаңыз"
            },
            whatsapp: "WhatsApp"
        },
        footer: {
            copyright: "© 2023 Saler Game. Барлық құқықтар қорғалған.",
            links: "Жылдам сілтемелер",
            social: "Әлеуметтік желілер",
            privacy: "Құпиялылық саясаты",
            terms: "Қолдану шарттары",
            navigation: "Навигация"
        },
        cta: {
            title: "Жобаңызды талқылауға дайынсыз ба? Бүгін маған хабарласыңыз!",
            button: "Жобаны бастау"
        },
        facts: {
            currentWork: "🔭 Қазір мен: Django және Flutter қолданып веб және мобильді қосымшалар жасаумен айналысамын.",
            collaboration: "👯 Мен: толық стек әзірлеу, Android қосымшалары және ЖИ жобаларында ынтымақтастық іздеймін.",
            helpNeeded: "🤝 Маған: терең оқыту және бұлтты есептеулер саласындағы білімімді тереңдетуге көмек қажет.",
            learning: "🌱 Қазір мен: машиналық оқыту, ЖИ және Flutter-де жетілдірілген әзірлеуді үйренудемін.",
            askMe: "💬 Менен сұраңыз: Django, Flutter, PostgreSQL, API әзірлеу және толық стек инженериясы туралы.",
            funFact: "⚡ Қызықты факт: мен бағдарламалауды хобби ретінде бастадым, ал қазір бұл маңызды жобалар жасауға деген құмарлығым!"
        },
        projectFilters: {
            all: "Барлығы",
            web: "Веб",
            mobile: "Мобильді",
            other: "Басқа"
        }
    }
};

// Базовые цены в тенге для конвертации
const basePrices = {
    landing: 15000,
    website: 40000,
    bot: 20000,
    app: 60000,
    ai: 30000
};

// Курсы валют (приблизительные)
const exchangeRates = {
    ru: 0.2,    // 1 тенге ≈ 0.2 рубля
    en: 0.0022, // 1 тенге ≈ 0.0022 доллара
    kz: 1       // базовая валюта
};

// Символы валют
const currencySymbols = {
    ru: "₽",
    en: "$",
    kz: "₸"
}; 