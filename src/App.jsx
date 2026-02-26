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

const sections = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'Sobre', href: '#about' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'work', label: 'Projetos', href: '#work' },
];

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
];

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [contactMenuOpen, setContactMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    });

    const navLinks = useMemo(
        () => [
            ...sections,
            {
                id: 'contato',
                label: 'Contato',
                isContactMenu: true,
            },
        ],
        []
    );

    const contactOptions = useMemo(
        () => [
            {
                id: 'github',
                label: 'GitHub',
                href: 'https://github.com/Spyg1rl',
                icon: 'bxl-github',
            },
            {
                id: 'email',
                label: 'Email',
                href: 'mailto:drykaicm@gmail.com?subject=Olá, Adriana',
                icon: 'bx-envelope',
            },
            {
                id: 'whatsapp',
                label: 'WhatsApp',
                href: 'https://wa.me/qr/JAA5VPTBKTECK1',
                icon: 'bxl-whatsapp',
            },
            {
                id: 'linkedin',
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/adriana-almeida-72a2a13b2/',
                icon: 'bxl-linkedin',
            },
        ],
        []
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
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const closeMenu = () => {
        setMenuOpen(false);
        setContactMenuOpen(false);
    };

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
                                                <i className={`bx ${contactMenuOpen ? 'bx-chevron-up' : 'bx-chevron-down'}`} />
                                            </button>

                                            {contactMenuOpen ? (
                                                <ul className="nav__contact-menu" id="contact-options">
                                                    {contactOptions.map((option) => (
                                                        <li key={option.id}>
                                                            <a
                                                                href={option.href}
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                className="nav__contact-link"
                                                                onClick={closeMenu}
                                                            >
                                                                <i className={`bx ${option.icon}`} />
                                                                <span>{option.label}</span>
                                                            </a>
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
                    </div>

                    <button
                        className="nav__theme"
                        type="button"
                        onClick={() => setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'))}
                        aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
                        title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
                    >
                        <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`} />
                    </button>

                    <button className="nav__toggle" id="nav-toggle" onClick={() => setMenuOpen((prev) => !prev)} type="button">
                        <i className="bx bx-menu" />
                    </button>
                </nav>
            </header>

            <main className="l-main">
                <section className="home bd-grid" id="home">
                    <div className="home__data">
                        <h1 className="home__title">
                            Olá,
                            <br />
                            Eu sou <span className="home__title-color">Adriana</span>
                            <br />
                            Desenvolvedora Full-Stack
                        </h1>
                    </div>

                    <div className="home__social">
                        <a href="https://www.linkedin.com/in/adriana-almeida-72a2a13b2/" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="bx bxl-linkedin" />
                        </a>
                        <a href="https://github.com/Spyg1rl" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="bx bxl-github" />
                        </a>
                        <a href="mailto:drykaicm@gmail.com?subject=Olá, Adriana" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="bx bx-envelope" />
                        </a>
                        <a href="https://wa.me/qr/JAA5VPTBKTECK1" target="_blank" rel="noreferrer" className="home__social-icon">
                            <i className="bx bx-phone" />
                        </a>
                    </div>

                    <div className="home__img">
                        <img className="home__profile-img" src={aboutImg} alt="Foto de Adriana Almeida" />
                    </div>
                </section>

                <section className="about section" id="about">
                    <h2 className="section-title">Sobre mim</h2>

                    <div className="about__container bd-grid">
                        <div>
                            <div className="about__text">
                                <p className="about__intro">Desenvolvedora Full Stack | Graduada em ADS</p>

                                <div className="about__cards">
                                    <article className="about__card">
                                        <h3 className="about__card-title">Trajetória</h3>
                                        <p className="about__paragraph">
                                            Minha jornada na tecnologia começou em 2021, quando transformei a curiosidade por desenvolvimento em um objetivo de carreira. Sou graduada em Análise e Desenvolvimento de Sistemas pela Universidade Veiga de Almeida e fortaleci minha base prática no bootcamp intensivo da Digital StartSE.
                                        </p>
                                    </article>

                                    <article className="about__card">
                                        <h3 className="about__card-title">Visão</h3>
                                        <p className="about__paragraph">
                                            Acredito que a tecnologia conecta ideias a resultados reais. Minha filosofia é evolução contínua: “Melhor que ontem, preparada para o amanhã”. Trago maturidade profissional, foco em aprendizado constante e compromisso com a construção de aplicações web robustas e escaláveis.
                                        </p>
                                    </article>

                                    <article className="about__card">
                                        <h3 className="about__card-title">Stack</h3>
                                        <ul className="about__stack-list">
                                            <li className="about__stack-item"><strong>Front-end:</strong> ReactJS, HTML5, CSS3, JavaScript (ES6+)</li>
                                            <li className="about__stack-item"><strong>Back-end:</strong> NodeJS, Express, Sequelize</li>
                                            <li className="about__stack-item"><strong>Dados:</strong> MySQL e SQL</li>
                                            <li className="about__stack-item"><strong>Ferramentas:</strong> Git, GitHub, Metodologias Ágeis</li>
                                        </ul>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="skills section" id="skills">
                    <h2 className="section-title">Skills</h2>

                    <div className="skills__container bd-grid">
                        <div>
                            <h2 className="skills__subtitle">Competências</h2>
                            <p className="skills__text">
                                Busco sempre me aperfeiçoar em minhas hard skills, desta forma sempre estou aprendendo uma nova tecnológia e implementando em meus projetos para fixar os conceitos.
                            </p>

                            <div className="skills__list">
                                {[
                                    ['bx bxl-javascript skills__icon', 'JAVASCRIPT (ES6+)', 'skills__js', '85%'],
                                    ['bx bxl-react skills__icon', 'REACT JS / NATIVE', 'skills__react', '80%'],
                                    ['bx bxl-nodejs skills__icon', 'NODE.JS / EXPRESS', 'skills__node', '75%'],
                                    ['bx bx-data skills__icon', 'SQL / SEQUELIZE', 'skills__sql', '70%'],
                                    ['bx bxl-html5 skills__icon', 'HTML5 / CSS3', 'skills__html', '95%'],
                                    ['bx bxl-git skills__icon', 'GIT / GITHUB', 'skills__git', '85%'],
                                    ['bx bx-code-alt skills__icon', 'C# / .NET', 'skills__dotnet', '80%'],
                                    ['bx bx-code-curly skills__icon', 'TYPESCRIPT', 'skills__ts', '75%'],
                                    ['bx bx-data skills__icon', 'SQL SERVER / SQLITE', 'skills__db', '75%'],
                                    ['bx bxl-android skills__icon', 'ANDROID / JAVA', 'skills__mobile', '65%'],
                                    ['bx bx-layer skills__icon', 'TAMAGUI', 'skills__tamagui', '70%'],
                                    ['bx bx-shield-quarter skills__icon', 'CYBER SECURITY / REDES', 'skills__security', '65%'],
                                    ['bx bx-desktop skills__icon', 'LINUX / WINDOWS / MAC', 'skills__os', '80%'],
                                ].map(([iconClass, skillName, barClass, percentage]) => (
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
                    <h2 className="section-title">Projetos</h2>

                    <div className="work__container bd-grid">
                        {works.map((work) => (
                            <article className="work__card" key={work.img}>
                                {work.isPrivate ? (
                                    <div className="work__img" aria-label={`${work.alt} - Projeto privado`}>
                                        <img src={work.img} alt={work.alt} />
                                    </div>
                                ) : (
                                    <a href={work.href} target="_blank" rel="noreferrer" className="work__img">
                                        <img src={work.img} alt={work.alt} />
                                    </a>
                                )}
                                <div className="work__content">
                                    <div className="work__header">
                                        <p className="work__title">{work.alt}</p>
                                    </div>
                                    <ul className="work__tech-list">
                                        {work.technologies.map((technology) => (
                                            <li className="work__tech-item" key={`${work.alt}-${technology}`}>
                                                {technology}
                                            </li>
                                        ))}
                                    </ul>
                                    {work.isPrivate ? <p className="work__private">Projeto privado</p> : null}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p className="footer__title">Adriana Almeida</p>
                <div className="footer__icon">
                    <a href="https://www.linkedin.com/in/adriana-almeida-72a2a13b2/" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="bx bxl-linkedin" />
                    </a>
                    <a href="https://github.com/Spyg1rl" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="bx bxl-github" />
                    </a>
                    <a href="mailto:drykaicm@gmail.com?subject=Olá, Adriana" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="bx bx-envelope" />
                    </a>
                    <a href="https://wa.me/qr/JAA5VPTBKTECK1" target="_blank" rel="noreferrer" className="home__social-icon">
                        <i className="bx bx-phone" />
                    </a>
                </div>
                <p className="footer__copy">&#169;Copyright Adriana. All rights reserved</p>
            </footer>
        </div>
    );
}

export default App;
