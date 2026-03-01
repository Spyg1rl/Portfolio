import { useEffect, useMemo, useState } from 'react';
import ScrollReveal from 'scrollreveal';

import logo from '../assets/img/Logo-mobile.png';
import aboutImg from '../assets/img/about.jpeg';
import work1 from '../assets/img/wikiflix.png';
import work2 from '../assets/img/work2.png';
import work3 from '../assets/img/work3.png';
import work4 from '../assets/img/work4.png';
import work5 from '../assets/img/work5.png';
import work6 from '../assets/img/work6.jpg';
import work6Card from '../assets/img/work6.png';
import work7 from '../assets/img/work7.png';
import qrCode2 from '../assets/img/QRCode2.png';
import curriculoPdf from '../assets/doc/Curriculo Adriana Almeida.pdf';

const sections = [
    { id: 'home', labelKey: 'home', href: '#home' },
    { id: 'about', labelKey: 'about', href: '#about' },
    { id: 'skills', labelKey: 'skills', href: '#skills' },
    { id: 'work', labelKey: 'work', href: '#work' },
];

const LANGUAGE_OPTIONS = [
    { value: 'pt-BR', flagSrc: 'https://flagcdn.com/w40/br.png', ariaLabel: 'Português do Brasil' },
    { value: 'en', flagSrc: 'https://flagcdn.com/w40/us.png', ariaLabel: 'English' },
    { value: 'es', flagSrc: 'https://flagcdn.com/w40/es.png', ariaLabel: 'Español' },
    { value: 'de', flagSrc: 'https://flagcdn.com/w40/de.png', ariaLabel: 'Deutsch' },
];

const TRANSLATIONS = {
    'pt-BR': {
        nav: { home: 'Home', about: 'Sobre', skills: 'Skills', work: 'Projetos', contact: 'Contato' },
        contact: { github: 'GitHub', email: 'Email', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', resume: 'Baixar Currículo' },
        home: { hello: 'Olá, Eu sou', name: 'Adriana Almeida', role: 'Desenvolvedora Full-Stack' },
        about: {
            title: 'Sobre mim',
            intro: 'Desenvolvedora Full Stack | Graduada em ADS',
            trajectoryTitle: 'Trajetória',
            trajectoryText:
                'Minha jornada na tecnologia começou em 2021, quando transformei a curiosidade por desenvolvimento em um objetivo de carreira. Sou graduada em Análise e Desenvolvimento de Sistemas pela Universidade Veiga de Almeida e fortaleci minha base prática no bootcamp intensivo da Digital StartSE.',
            visionTitle: 'Visão',
            visionText:
                'Acredito que a tecnologia conecta ideias a resultados reais. Minha filosofia é evolução contínua: “Melhor que ontem, preparada para o amanhã”. Trago maturidade profissional, foco em aprendizado constante e compromisso com a construção de aplicações web robustas e escaláveis.',
            stackTitle: 'Stack',
            stackItems: [
                { label: 'Linguagens', text: 'JavaScript (ES6+), TypeScript e Python' },
                { label: 'Front-end', text: 'ReactJS, React Native, HTML5 e CSS3 (Flexbox, Grid), consumo de APIs REST, UI/UX e componentização' },
                { label: 'Back-end', text: 'Node.js, Express, Sequelize, padrões REST, autenticação básica e CRUD' },
                { label: 'Banco de Dados', text: 'MySQL e SQL (modelagem relacional, consultas e joins)' },
                { label: 'Ferramentas e Workflow', text: 'Git, GitHub, Scrum/Kanban, VS Code, Android Studio e Insomnia/Postman' },
                { label: 'Outros', text: 'Design System, Storybook e Tamagui (UI para React/React Native)' },
            ],
        },
        skills: {
            title: 'Skills',
            subtitle: 'Competências',
            text: 'Busco sempre me aperfeiçoar em minhas hard skills, desta forma sempre estou aprendendo uma nova tecnológia e implementando em meus projetos para fixar os conceitos.',
        },
        work: {
            title: 'Projetos',
            privateProject: 'Projeto privado',
            titles: [
                'Jogo Mario Bros.',
                'C#',
                'Pokedex',
                'Loja Virtual',
                'Home da Aplicação de filmes',
                'Sistema de Chamado',
                'SISVISA - Sistema de Vigilância Sanitária (4.0)',
                'App Mobile - Fiscalização Sanitária',
            ],
        },
        footer: { copyright: '©Copyright Adriana. All rights reserved' },
    },
    en: {
        nav: { home: 'Home', about: 'About', skills: 'Skills', work: 'Projects', contact: 'Contact' },
        contact: { github: 'GitHub', email: 'Email', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', resume: 'Download Resume' },
        home: { hello: 'Hi, I am', name: 'Adriana Almeida', role: 'Full-Stack Developer' },
        about: {
            title: 'About me',
            intro: 'Full-Stack Developer | ADS Graduate',
            trajectoryTitle: 'Journey',
            trajectoryText:
                'My journey in technology began in 2021, when I turned my curiosity for development into a career goal. I hold a degree in Systems Analysis and Development from Universidade Veiga de Almeida and strengthened my practical foundation at the intensive Digital StartSE bootcamp.',
            visionTitle: 'Vision',
            visionText:
                'I believe technology connects ideas to real outcomes. My philosophy is continuous growth: “Better than yesterday, ready for tomorrow”. I bring professional maturity, continuous learning focus, and commitment to building robust and scalable web applications.',
            stackTitle: 'Stack',
            stackItems: [
                { label: 'Languages', text: 'JavaScript (ES6+), TypeScript and Python' },
                { label: 'Front-end', text: 'ReactJS, React Native, HTML5 and CSS3 (Flexbox, Grid), REST API consumption, UI/UX and componentization' },
                { label: 'Back-end', text: 'Node.js, Express, Sequelize, REST patterns, basic authentication and CRUD' },
                { label: 'Database', text: 'MySQL and SQL (relational modeling, queries and joins)' },
                { label: 'Tools & Workflow', text: 'Git, GitHub, Scrum/Kanban, VS Code, Android Studio and Insomnia/Postman' },
                { label: 'Others', text: 'Design System, Storybook and Tamagui (UI for React/React Native)' },
            ],
        },
        skills: {
            title: 'Skills',
            subtitle: 'Competencies',
            text: 'I constantly improve my hard skills by learning new technologies and applying them in projects to solidify concepts.',
        },
        work: {
            title: 'Projects',
            privateProject: 'Private project',
            titles: [
                'Mario Bros. Game',
                'C#',
                'Pokedex',
                'Virtual Store',
                'Movie App Home',
                'Ticket System',
                'SISVISA - Health Surveillance System (4.0)',
                'Mobile App - Health Inspection',
            ],
        },
        footer: { copyright: '©Copyright Adriana. All rights reserved' },
    },
    es: {
        nav: { home: 'Inicio', about: 'Sobre mí', skills: 'Habilidades', work: 'Proyectos', contact: 'Contacto' },
        contact: { github: 'GitHub', email: 'Correo', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', resume: 'Descargar CV' },
        home: { hello: 'Hola, soy', name: 'Adriana Almeida', role: 'Desarrolladora Full-Stack' },
        about: {
            title: 'Sobre mí',
            intro: 'Desarrolladora Full Stack | Graduada en ADS',
            trajectoryTitle: 'Trayectoria',
            trajectoryText:
                'Mi camino en tecnología comenzó en 2021, cuando transformé mi curiosidad por el desarrollo en un objetivo profesional. Soy graduada en Análisis y Desarrollo de Sistemas por la Universidade Veiga de Almeida y reforcé mi base práctica en el bootcamp intensivo Digital StartSE.',
            visionTitle: 'Visión',
            visionText:
                'Creo que la tecnología conecta ideas con resultados reales. Mi filosofía es evolución continua: “Mejor que ayer, preparada para mañana”. Aporto madurez profesional, enfoque en aprendizaje constante y compromiso con la construcción de aplicaciones web robustas y escalables.',
            stackTitle: 'Stack',
            stackItems: [
                { label: 'Lenguajes', text: 'JavaScript (ES6+), TypeScript y Python' },
                { label: 'Front-end', text: 'ReactJS, React Native, HTML5 y CSS3 (Flexbox, Grid), consumo de APIs REST, UI/UX y componentización' },
                { label: 'Back-end', text: 'Node.js, Express, Sequelize, patrones REST, autenticación básica y CRUD' },
                { label: 'Base de Datos', text: 'MySQL y SQL (modelado relacional, consultas y joins)' },
                { label: 'Herramientas y Flujo', text: 'Git, GitHub, Scrum/Kanban, VS Code, Android Studio e Insomnia/Postman' },
                { label: 'Otros', text: 'Design System, Storybook y Tamagui (UI para React/React Native)' },
            ],
        },
        skills: {
            title: 'Habilidades',
            subtitle: 'Competencias',
            text: 'Busco mejorar constantemente mis hard skills, aprendiendo nuevas tecnologías y aplicándolas en mis proyectos para reforzar los conceptos.',
        },
        work: {
            title: 'Proyectos',
            privateProject: 'Proyecto privado',
            titles: [
                'Juego Mario Bros.',
                'C#',
                'Pokedex',
                'Tienda Virtual',
                'Inicio de la app de películas',
                'Sistema de Tickets',
                'SISVISA - Sistema de Vigilancia Sanitaria (4.0)',
                'App Móvil - Fiscalización Sanitaria',
            ],
        },
        footer: { copyright: '©Copyright Adriana. Todos los derechos reservados' },
    },
    de: {
        nav: { home: 'Start', about: 'Über mich', skills: 'Skills', work: 'Projekte', contact: 'Kontakt' },
        contact: { github: 'GitHub', email: 'E-Mail', whatsapp: 'WhatsApp', linkedin: 'LinkedIn', resume: 'Lebenslauf herunterladen' },
        home: { hello: 'Hallo, ich bin', name: 'Adriana Almeida', role: 'Full-Stack-Entwicklerin' },
        about: {
            title: 'Über mich',
            intro: 'Full-Stack-Entwicklerin | ADS-Abschluss',
            trajectoryTitle: 'Werdegang',
            trajectoryText:
                'Mein Weg in der Technologie begann 2021, als ich meine Neugier für Entwicklung in ein Karriereziel verwandelte. Ich habe einen Abschluss in Systemanalyse und -entwicklung von der Universidade Veiga de Almeida und habe meine praktische Basis im intensiven Digital StartSE Bootcamp gestärkt.',
            visionTitle: 'Vision',
            visionText:
                'Ich glaube, dass Technologie Ideen mit realen Ergebnissen verbindet. Meine Philosophie ist kontinuierliche Weiterentwicklung: “Besser als gestern, bereit für morgen”. Ich bringe berufliche Reife, Lernfokus und Engagement für robuste und skalierbare Webanwendungen mit.',
            stackTitle: 'Stack',
            stackItems: [
                { label: 'Sprachen', text: 'JavaScript (ES6+), TypeScript und Python' },
                { label: 'Front-end', text: 'ReactJS, React Native, HTML5 und CSS3 (Flexbox, Grid), REST-API-Nutzung, UI/UX und Komponentisierung' },
                { label: 'Back-end', text: 'Node.js, Express, Sequelize, REST-Muster, grundlegende Authentifizierung und CRUD' },
                { label: 'Datenbank', text: 'MySQL und SQL (relationale Modellierung, Abfragen und Joins)' },
                { label: 'Tools & Workflow', text: 'Git, GitHub, Scrum/Kanban, VS Code, Android Studio und Insomnia/Postman' },
                { label: 'Weitere', text: 'Design System, Storybook und Tamagui (UI für React/React Native)' },
            ],
        },
        skills: {
            title: 'Skills',
            subtitle: 'Kompetenzen',
            text: 'Ich verbessere kontinuierlich meine Hard Skills, lerne neue Technologien und setze sie in Projekten ein, um Konzepte zu festigen.',
        },
        work: {
            title: 'Projekte',
            privateProject: 'Privates Projekt',
            titles: [
                'Mario Bros. Spiel',
                'C#',
                'Pokedex',
                'Virtueller Shop',
                'Startseite der Film-App',
                'Ticketsystem',
                'SISVISA - Gesundheitsüberwachungssystem (4.0)',
                'Mobile App - Gesundheitsinspektion',
            ],
        },
        footer: { copyright: '©Copyright Adriana. Alle Rechte vorbehalten' },
    },
};

const SKILLS_LIST = [
    ['bx bxl-javascript skills__icon', 'JAVASCRIPT (ES6+)', 'skills__js', '85%'],
    ['bx bxl-react skills__icon', 'REACT JS / NATIVE', 'skills__react', '80%'],
    ['bx bxl-sass skills__icon', 'SAAS / SCSS', 'skills__sass', '85%'],
    ['bx bxl-nodejs skills__icon', 'NODE.JS / EXPRESS', 'skills__node', '75%'],
    ['bx bxl-python skills__icon', 'PYTHON', 'skills__python', '75%'],
    ['bx bxl-docker skills__icon', 'DOCKER', 'skills__docker', '48%'],
    ['bx bxl-angular skills__icon', 'ANGULAR', 'skills__angular', '55%'],
    ['bx bxl-react skills__icon', 'NEXT.JS', 'skills__next', '68%'],
    ['bx bx-git-branch skills__icon', 'GRAPHQL', 'skills__graphql', '45%'],
    ['bx bx-data skills__icon', 'SQL / SEQUELIZE', 'skills__sql', '70%'],
    ['bx bxl-html5 skills__icon', 'HTML5 / CSS3', 'skills__html', '95%'],
    ['bx bxl-git skills__icon', 'GIT / GITHUB', 'skills__git', '85%'],
    ['bx bx-code-alt skills__icon', 'C# / .NET', 'skills__dotnet', '80%'],
    ['bx bx-code-curly skills__icon', 'TYPESCRIPT', 'skills__ts', '75%'],
    ['bx bx-data skills__icon', 'SQL SERVER / SQLITE', 'skills__db', '75%'],
    ['bx bxl-android skills__icon', 'ANDROID', 'skills__android', '65%'],
    ['bx bx-code-alt skills__icon', 'JAVA', 'skills__java', '65%'],
    ['bx bx-layer skills__icon', 'TAMAGUI', 'skills__tamagui', '70%'],
    ['bx bx-shield-quarter skills__icon', 'CYBER SECURITY / REDES', 'skills__security', '65%'],
    ['bx bx-desktop skills__icon', 'LINUX / WINDOWS / MAC', 'skills__os', '80%'],
];

import work8 from '../assets/img/work8.png';
const works = [
    {
        href: 'https://spyg1rl.github.io/jogo-do-mario/index.html',
        img: work1,
        alt: 'Jogo Mario Bros.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        href: 'https://github.com/Spyg1rl/Meus-Projetos-CSharp',
        img: work2,
        alt: 'C#',
        technologies: ['C#', '.NET', 'SQL'],
    },
    {
        href: 'https://spyg1rl.github.io/-Construindo-uma-Pokedex-com-JavaScript/',
        img: work3,
        alt: 'Pokedex',
        technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
        href: 'https://github.com/Spyg1rl/Projeto-Inicial-Loja-Virtual-com-ReactNative-Android',
        img: work4,
        alt: 'Loja Virtual',
        technologies: ['React Native', 'JavaScript', 'Android'],
    },
    {
        href: 'https://github.com/Spyg1rl/Iniciando-Projetos-em-React/tree/main?tab=readme-ov-file',
        img: work5,
        alt: 'Home da Aplicação de filmes',
        technologies: ['React', 'JavaScript', 'CSS'],
    },
    {
        href: 'https://github.com/Spyg1rl/Iniciando-Projetos-em-React/tree/main?tab=readme-ov-file',
        img: work6,
        alt: 'Sistema de Chamado',
        technologies: ['React', 'Node.js', 'JavaScript'],
    },
    {
        href: '#',
        img: work6Card,
        alt: 'SISVISA - Sistema de Vigilância Sanitária (4.0)',
        technologies: ['.NET 8', 'C#', 'ASP.NET Core', 'SQL Server', 'GraphQL'],
        isPrivate: true,
    },
    {
        href: '#',
        img: work7,
        alt: 'App Mobile - Fiscalização Sanitária',
        technologies: ['React Native', 'TypeScript', 'JavaScript', 'SQLite', '.NET'],
        isPrivate: true,
    },
    {
        href: 'https://github.com/Spyg1rl/ClincaDeEstetica',
        img: work8,
        alt: 'Clínica de Estética',
        technologies: [
            'Next.js',
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'Prisma',
            'SQLite',
            'CSS'
        ],
    },
];

function App() {
    const whatsappUrl = 'https://wa.me/qr/JAA5VPTBKTECK1';
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactMenuOpen, setContactMenuOpen] = useState(false);
    const [themeMenuOpen, setThemeMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return LANGUAGE_OPTIONS.some((option) => option.value === savedLanguage) ? savedLanguage : 'pt-BR';
    });
    const [themePreference, setThemePreference] = useState(() => {
        const savedThemePreference = localStorage.getItem('themePreference');
        const legacyTheme = localStorage.getItem('theme');

        if (savedThemePreference === 'light' || savedThemePreference === 'dark') {
            return savedThemePreference;
        }

        if (legacyTheme === 'light' || legacyTheme === 'dark') {
            return legacyTheme;
        }

        return 'dark';
    });

    const t = TRANSLATIONS[language] || TRANSLATIONS['pt-BR'];

    const navLinks = useMemo(
        () => [
            ...sections.map((section) => ({
                ...section,
                label: t.nav[section.labelKey],
            })),
            {
                id: 'contato',
                label: t.nav.contact,
                isContactMenu: true,
            },
        ],
        [t]
    );

    const contactOptions = useMemo(
        () => [
            {
                id: 'github',
                label: t.contact.github,
                href: 'https://github.com/Spyg1rl',
                icon: 'bxl-github',
            },
            {
                id: 'email',
                label: t.contact.email,
                href: 'mailto:drykaicm@gmail.com?subject=Olá, Adriana',
                icon: 'bx-envelope',
            },
            {
                id: 'whatsapp',
                label: t.contact.whatsapp,
                isModal: true,
                icon: 'bxl-whatsapp',
            },
            {
                id: 'linkedin',
                label: t.contact.linkedin,
                href: 'https://www.linkedin.com/in/adriana-almeida-72a2a13b2',
                icon: 'bxl-linkedin',
            },
            {
                id: 'curriculo',
                label: t.contact.resume,
                href: curriculoPdf,
                icon: 'bx-download',
                download: true,
            },
        ],
        [t]
    );

    const themeOptions = useMemo(
        () => [
            { value: 'dark', label: 'Dark' },
            { value: 'light', label: 'Light' },
        ],
        []
    );

    const selectedLanguage = useMemo(
        () => LANGUAGE_OPTIONS.find((option) => option.value === language) || LANGUAGE_OPTIONS[0],
        [language]
    );

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.pageYOffset;

            sections.forEach((currentSection) => {
                const element = document.getElementById(currentSection.id);
                if (!element) return;

                const sectionHeight = element.offsetHeight;
                const sectionTop = element.offsetTop - 50;

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveSection(currentSection.id);
                }
            });
        };

        window.addEventListener('scroll', onScroll);
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            origin: 'top',
            distance: '60px',
            duration: 2000,
            delay: 200,
        });

        sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
        sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
        sr.reveal('.home__social-icon', { interval: 200 });
        sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', themePreference);
        document.documentElement.lang = language;
        localStorage.setItem('themePreference', themePreference);
        localStorage.setItem('theme', themePreference);
        localStorage.setItem('language', language);
    }, [themePreference, language]);

    useEffect(() => {
        if (!isWhatsappModalOpen) {
            return undefined;
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsWhatsappModalOpen(false);
            }
        };

        const previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isWhatsappModalOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
        setContactMenuOpen(false);
        setThemeMenuOpen(false);
        setLanguageMenuOpen(false);
    };

    const openWhatsappModal = () => {
        closeMenu();
        setIsWhatsappModalOpen(true);
    };

    const handleWhatsappAction = () => {
        const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;

        if (isMobileViewport) {
            closeMenu();
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
            return;
        }

        openWhatsappModal();
    };

    const closeWhatsappModal = () => {
        setIsWhatsappModalOpen(false);
    };

    const renderPreferenceControls = (scope) => (
        <>
            <div className="nav__theme-wrapper">
                <button
                    className="nav__theme"
                    type="button"
                    onClick={() => {
                        setThemeMenuOpen((previous) => !previous);
                        setLanguageMenuOpen(false);
                    }}
                    aria-label="Selecionar tema"
                    aria-expanded={themeMenuOpen}
                    aria-controls={`theme-options-${scope}`}
                    title="Selecionar tema"
                >
                    <i className="bx bx-palette" />
                </button>

                {themeMenuOpen ? (
                    <ul className="nav__theme-menu" id={`theme-options-${scope}`}>
                        {themeOptions.map((option) => (
                            <li key={option.value}>
                                <button
                                    type="button"
                                    className={`nav__link nav__theme-link ${themePreference === option.value ? 'nav__theme-link--selected' : ''}`}
                                    onClick={() => {
                                        setThemePreference(option.value);
                                        closeMenu();
                                    }}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>

            <div className="nav__language-wrapper">
                <button
                    className="nav__theme nav__language"
                    type="button"
                    onClick={() => {
                        setLanguageMenuOpen((previous) => !previous);
                        setThemeMenuOpen(false);
                    }}
                    aria-label={`Selecionar idioma: ${selectedLanguage.ariaLabel}`}
                    aria-expanded={languageMenuOpen}
                    aria-controls={`language-options-${scope}`}
                    title={`Idioma atual: ${selectedLanguage.ariaLabel}`}
                >
                    <img className="nav__language-flag-img" src={selectedLanguage.flagSrc} alt={selectedLanguage.ariaLabel} />
                </button>

                {languageMenuOpen ? (
                    <ul className="nav__theme-menu nav__language-menu" id={`language-options-${scope}`}>
                        {LANGUAGE_OPTIONS.map((option) => (
                            <li key={option.value}>
                                <button
                                    type="button"
                                    className={`nav__link nav__theme-link ${language === option.value ? 'nav__theme-link--selected' : ''}`}
                                    onClick={() => {
                                        setLanguage(option.value);
                                        closeMenu();
                                    }}
                                    aria-label={option.ariaLabel}
                                    title={option.ariaLabel}
                                >
                                    <img className="nav__language-flag-img" src={option.flagSrc} alt={option.ariaLabel} />
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>
        </>
    );

    return (
        <div>
            <header className="l-header">
                <nav className="nav bd-grid">
                    <div>
                        <a href="#home" className="nav__logo">
                            <img src={logo} alt="Logo Adriana Almeida" />
                        </a>
                    </div>

                    <div className={`nav__menu ${menuOpen ? 'show' : ''}`} id="nav-menu">
                        <ul className="nav__list">
                            {navLinks.map((item) => (
                                <li className="nav__item" key={item.id}>
                                    {item.isContactMenu ? (
                                        <div className="nav__contact-wrapper">
                                            <button
                                                type="button"
                                                className="nav__link nav__contact-trigger"
                                                onClick={() => setContactMenuOpen((previous) => !previous)}
                                                aria-expanded={contactMenuOpen}
                                                aria-controls="contact-options"
                                            >
                                                {item.label}
                                            </button>

                                            {contactMenuOpen ? (
                                                <ul className="nav__contact-menu" id="contact-options">
                                                    {contactOptions.map((option) => (
                                                        <li key={option.id}>
                                                            {option.isModal ? (
                                                                <button
                                                                    type="button"
                                                                    className="nav__link nav__contact-link nav__contact-link-button"
                                                                    onClick={handleWhatsappAction}
                                                                >
                                                                    <span>{option.label}</span>
                                                                </button>
                                                            ) : (
                                                                <a
                                                                    href={option.href}
                                                                    target={option.download ? undefined : '_blank'}
                                                                    rel={option.download ? undefined : 'noreferrer'}
                                                                    download={option.download ? 'Curriculo-Adriana-Almeida.pdf' : undefined}
                                                                    className="nav__link nav__contact-link"
                                                                    onClick={closeMenu}
                                                                >
                                                                    <span>{option.label}</span>
                                                                </a>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : null}
                                        </div>
                                    ) : (
                                        <a
                                            href={item.href}
                                            target={item.external ? '_blank' : undefined}
                                            rel={item.external ? 'noreferrer' : undefined}
                                            className={`nav__link ${activeSection === item.id ? 'active' : ''}`}
                                            onClick={closeMenu}
                                        >
                                            {item.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <div className="nav__controls-mobile">{renderPreferenceControls('mobile')}</div>
                    </div>

                    <div className="nav__controls-desktop">
                        {renderPreferenceControls('desktop')}
                    </div>

                    <button className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen((prev) => !prev)} type="button">
                        <i className="bx bx-menu" />
                    </button>
                </nav>
            </header>

            <main className="l-main">
                <section className="home bd-grid" id="home">
                    <div className="home__data">
                        <h1 className="home__title">
                            {t.home.hello} <span className="home__title-color">{t.home.name}</span>
                            <br />
                            {t.home.role}
                        </h1>
                    </div>

                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/adriana-almeida-72a2a13b2" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="bx bxl-linkedin" />
                        </a>
                        <a href="https://github.com/Spyg1rl" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="bx bxl-github" />
                        </a>
                        <a href="mailto:drykaicm@gmail.com?subject=Olá, Adriana" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="bx bx-envelope" />
                        </a>
                        <button type="button" className="home__social-icon home__social-icon-button" onClick={handleWhatsappAction}>
                            <i className="bx bx-phone" />
                        </button>
                    </div>

                    <div className="home__img">
                        <img className="home__profile-img" src={aboutImg} alt="Foto de Adriana Almeida" />
                    </div>
                </section>

                <section className="about section" id="about">
                    <h2 className="section-title">{t.about.title}</h2>

                    <div className="about__container bd-grid">
                        <div>
                            <div className="about__text">
                                <p className="about__intro">{t.about.intro}</p>

                                <div className="about__cards">
                                    <article className="about__card">
                                        <h3 className="about__card-title">{t.about.trajectoryTitle}</h3>
                                        <p className="about__paragraph">{t.about.trajectoryText}</p>
                                    </article>

                                    <article className="about__card">
                                        <h3 className="about__card-title">{t.about.visionTitle}</h3>
                                        <p className="about__paragraph">{t.about.visionText}</p>
                                    </article>

                                    <article className="about__card">
                                        <h3 className="about__card-title">{t.about.stackTitle}</h3>
                                        <ul className="about__stack-list">
                                            {t.about.stackItems.map((item) => (
                                                <li className="about__stack-item" key={item.label}>
                                                    <strong>{item.label}:</strong> {item.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="skills section" id="skills">
                    <h2 className="section-title">{t.skills.title}</h2>

                    <div className="skills__container bd-grid">
                        <div>
                            <h2 className="skills__subtitle">{t.skills.subtitle}</h2>
                            <p className="skills__text">{t.skills.text}</p>

                            <div className="skills__list">
                                {SKILLS_LIST.map(([iconClass, skillName, barClass, percentage]) => (
                                    <div className="skills__data" key={skillName}>
                                        <div className="skills__names">
                                            <i className={iconClass} />
                                            <span className="skills__name">{skillName}</span>
                                        </div>
                                        <div className={`skills__bar ${barClass}`} />
                                        <div>
                                            <span className="skills__percentage">{percentage}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="work section" id="work">
                    <h2 className="section-title">{t.work.title}</h2>

                    <div className="work__container bd-grid">
                        {works.map((work, index) => {
                            const translatedWorkTitle = t.work.titles?.[index] || work.alt;

                            return (
                            <article className="work__card" key={work.img}>
                                {work.isPrivate ? (
                                    <div className="work__img" aria-label={`${translatedWorkTitle} - ${t.work.privateProject}`}>
                                        <img src={work.img} alt={translatedWorkTitle} />
                                    </div>
                                ) : (
                                    <a href={work.href} target="_blank" rel="noreferrer" className="work__img">
                                        <img src={work.img} alt={translatedWorkTitle} />
                                    </a>
                                )}
                                <div className="work__content">
                                    <div className="work__header">
                                        <p className="work__title">{translatedWorkTitle}</p>
                                    </div>
                                    <ul className="work__tech-list">
                                        {work.technologies.map((technology) => (
                                            <li className="work__tech-item" key={`${translatedWorkTitle}-${technology}`}>
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                    {work.isPrivate ? <p className="work__private">{t.work.privateProject}</p> : null}
                                </div>
                            </article>
                            );
                        })}
                    </div>
                </section>
            </main>

            {isWhatsappModalOpen ? (
                <div className="whatsapp-modal" role="dialog" aria-modal="true" aria-label="QR Code do WhatsApp" onClick={closeWhatsappModal}>
                    <div className="whatsapp-modal__content" onClick={(event) => event.stopPropagation()}>
                        <button type="button" className="whatsapp-modal__close" aria-label="Fechar QR Code" onClick={closeWhatsappModal}>
                            <i className="bx bx-x" />
                        </button>
                        <img src={qrCode2} alt="QR Code para contato no WhatsApp" className="whatsapp-modal__image" />
                    </div>
                </div>
            ) : null}

            <footer className="footer">
                <p className="footer__title">Adriana Almeida</p>
                <div className="footer__icon">
                    <a href="https://www.linkedin.com/in/adriana-almeida-72a2a13b2" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="bx bxl-linkedin" />
                    </a>
                    <a href="https://github.com/Spyg1rl" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="bx bxl-github" />
                    </a>
                    <a href="mailto:drykaicm@gmail.com?subject=Olá, Adriana" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="bx bx-envelope" />
                    </a>
                    <button type="button" className="home__social-icon home__social-icon-button" onClick={handleWhatsappAction}>
                        <i className="bx bx-phone" />
                    </button>
                </div>
                <p className="footer__copy">{t.footer.copyright}</p>
            </footer>
        </div>
    );
}

export default App;
