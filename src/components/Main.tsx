import React, { useEffect, useRef, useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import profileWhite from "../assets/images/saikrishna-white.png";
import profileBlack from "../assets/images/saikrishna-black.png";

import "../assets/styles/Main.scss";

interface MainProps {
    parentToChild: {
        mode: string;
    };
}

function Main({ parentToChild }: MainProps) {
    const { mode } = parentToChild;

    const heroRef = useRef<HTMLElement | null>(null);

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    /*
     * ============================================
     * MOUSE PARALLAX
     * ============================================
     */
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const x = event.clientX / window.innerWidth - 0.5;
            const y = event.clientY / window.innerHeight - 0.5;

            setMousePosition({
                x,
                y,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    /*
     * ============================================
     * SMOOTH SCROLL
     * ============================================
     */
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    /*
     * ============================================
     * THEME IMAGE
     * ============================================
     */
    const profileImage =
        mode === "dark" ? profileWhite : profileBlack;

    return (
        <div className="container">
            <section
                ref={heroRef}
                className="about-section"
                aria-label="Introduction"
            >
                {/* =====================================
                    BACKGROUND ATMOSPHERE
                ====================================== */}

                <div className="hero-grid"></div>

                <div className="hero-glow hero-glow-one"></div>
                <div className="hero-glow hero-glow-two"></div>

                {/* =====================================
                    DECORATIVE SHAPES
                ====================================== */}

                <div
                    className="floating-shape shape-one"
                    style={{
                        transform: `
                            translate3d(
                                ${mousePosition.x * -18}px,
                                ${mousePosition.y * -18}px,
                                0
                            )
                            rotateX(${mousePosition.y * -12}deg)
                            rotateY(${mousePosition.x * 12}deg)
                        `,
                    }}
                    aria-hidden="true"
                />

                <div
                    className="floating-shape shape-two"
                    style={{
                        transform: `
                            translate3d(
                                ${mousePosition.x * 24}px,
                                ${mousePosition.y * 24}px,
                                0
                            )
                            rotate(${45 + mousePosition.x * 12}deg)
                        `,
                    }}
                    aria-hidden="true"
                />

                {/* =====================================
                    MAIN HERO
                ====================================== */}

                <div className="about-inner">

                    {/* =====================================
                        PROFILE
                    ====================================== */}

                    <div
                        className="image-wrapper"
                        style={{
                            transform: `
                                perspective(1000px)
                                rotateX(${mousePosition.y * -7}deg)
                                rotateY(${mousePosition.x * 7}deg)
                            `,
                        }}
                    >
                        {/* Main orbit */}
                        <div
                            className="orbit orbit-one"
                            aria-hidden="true"
                        ></div>

                        {/* Orbit dots */}
                        <div
                            className="orbit-dot orbit-dot-one"
                            aria-hidden="true"
                        ></div>

                        <div
                            className="orbit-dot orbit-dot-two"
                            aria-hidden="true"
                        ></div>

                        {/* Circular image ring */}
                        <div
                            className="image-ring"
                            aria-hidden="true"
                        ></div>

                        {/* Profile image */}
                        <div className="profile-image">
                            <img
                                src={profileImage}
                                alt="Sai Krishna - Full-Stack Software Engineer"
                            />
                        </div>

                        {/* Availability */}
                        <div className="availability-badge">
                            <span
                                className="status-dot"
                                aria-hidden="true"
                            ></span>

                            <span>
                                Available for opportunities
                            </span>
                        </div>

                        {/* React badge */}
                        <div className="floating-tech tech-react">
                            <span>R</span>

                            <span className="tech-name">
                                React
                            </span>
                        </div>

                        {/* Python badge */}
                        <div className="floating-tech tech-python">
                            <span>P</span>

                            <span className="tech-name">
                                Python
                            </span>
                        </div>
                    </div>

                    {/* =====================================
                        CONTENT
                    ====================================== */}

                    <div className="content">

                        {/* =====================================
                            TOP BAR
                        ====================================== */}

                        <div className="hero-top">

                            <div className="hero-label-wrapper">
                                <span
                                    className="hero-line"
                                    aria-hidden="true"
                                ></span>

                                <span className="hero-label">
                                    FULL-STACK SOFTWARE ENGINEER
                                </span>
                            </div>

                            {/* Desktop social icons */}
                            <div className="social_icons">

                                <a
                                    href="https://github.com/nandhukrishna"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="GitHub"
                                >
                                    <GitHubIcon />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/sai-krishna-vankeswaram/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <LinkedInIcon />
                                </a>

                            </div>
                        </div>

                        {/* =====================================
                            HEADING
                        ====================================== */}

                        <div className="hero-heading-wrapper">

                            <span className="hero-kicker">
                                HELLO, I'M
                            </span>

                            <h1>
                                Sai
                                <span> Krishna</span>
                            </h1>

                        </div>

                        {/* =====================================
                            ROLE
                        ====================================== */}

                        <p className="hero-role">
                            Full-Stack Engineer with
                            <span>
                                {" "}
                                4+ years of experience building
                                real-world web &amp; desktop
                                applications.
                            </span>
                        </p>

                        {/* =====================================
                            DESCRIPTION
                        ====================================== */}

                        <p className="hero-description">
                            I build production-ready applications
                            using React.js, Django and Electron.js,
                            with hands-on experience across Smart
                            Meter and EV Charger platforms, REST
                            APIs, real-time data integration and
                            Windows desktop deployment.
                        </p>

                        {/* =====================================
                            CTA
                        ====================================== */}

                        <div className="hero-actions">

                            <button
                                type="button"
                                className="primary-action"
                                onClick={() => scrollTo("projects")}
                            >
                                <span>
                                    Explore my work
                                </span>

                                <strong aria-hidden="true">
                                    ↗
                                </strong>
                            </button>

                            <button
                                type="button"
                                className="secondary-action"
                                onClick={() => scrollTo("contact")}
                            >
                                Let's connect
                            </button>

                        </div>

                        {/* =====================================
                            EXPERIENCE STATS
                        ====================================== */}

                        <div
                            className="hero-stats"
                            aria-label="Professional highlights"
                        >

                            {/* 4+ Years */}
                            <div className="hero-stat">
                                <strong>4+</strong>

                                <span>
                                    YEARS
                                    <br />
                                    EXPERIENCE
                                </span>
                            </div>

                            <div
                                className="stat-divider"
                                aria-hidden="true"
                            ></div>

                            {/* 2+ Professional Projects */}
                            <div className="hero-stat">
                                <strong>2+</strong>

                                <span>
                                    PROFESSIONAL
                                    <br />
                                    PROJECTS
                                </span>
                            </div>

                            <div
                                className="stat-divider"
                                aria-hidden="true"
                            ></div>

                            {/* 30+ Personal Projects */}
                            <div className="hero-stat">
                                <strong>30+</strong>

                                <span>
                                    PERSONAL
                                    <br />
                                    PROJECTS
                                </span>
                            </div>

                        </div>

                        

                        {/* =====================================
                            MOBILE SOCIAL
                        ====================================== */}

                        <div className="mobile_social_icons">

                            <a
                                href="https://github.com/nandhukrishna"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <GitHubIcon />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/sai-krishna-vankeswaram/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <LinkedInIcon />
                            </a>

                        </div>

                    </div>
                </div>

                {/* =====================================
                    SCROLL INDICATOR
                ====================================== */}

                <div className="scroll-indicator">

                    <span>
                        SCROLL TO EXPLORE
                    </span>

                    <div className="scroll-line">
                        <span></span>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default Main;