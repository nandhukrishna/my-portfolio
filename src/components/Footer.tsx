import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../assets/styles/Footer.scss";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToSection = (section: string) => {
        const element = document.getElementById(section);

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Footer Header */}
                <div className="footer-header">

                    <div className="footer-identity">
                        <div className="footer-logo" aria-label="Sai Krishna">
                            SK
                        </div>

                        <div className="footer-identity-content">
                            <h3>Sai Krishna</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>

                    <div className="footer-availability">
                        <span className="availability-dot"></span>
                        <span>Available for opportunities</span>
                    </div>

                </div>


                <div className="footer-divider"></div>


                {/* Main Footer Content */}
                <div className="footer-content">

                    <div className="footer-message">
                        <span className="footer-eyebrow">
                            GET IN TOUCH
                        </span>

                        <h2>
                            Let's build something
                            <span> meaningful.</span>
                        </h2>

                        <p>
                            I'm always open to discussing new projects,
                            creative ideas, and opportunities to build
                            great digital experiences.
                        </p>
                    </div>


                    {/* Navigation */}
                    <div className="footer-navigation">

                        <h4>Explore</h4>

                        <button
                            type="button"
                            onClick={() => scrollToSection("expertise")}
                        >
                            Expertise
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollToSection("history")}
                        >
                            History
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollToSection("projects")}
                        >
                            Projects
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </button>

                    </div>


                    {/* Social Links */}
                    <div className="footer-social">

                        <h4>Connect</h4>

                        <a
                            href="https://github.com/YOUR_USERNAME"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Visit my GitHub profile"
                        >
                            <GitHubIcon />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/YOUR_USERNAME/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Visit my LinkedIn profile"
                        >
                            <LinkedInIcon />
                            <span>LinkedIn</span>
                        </a>

                    </div>

                </div>


                <div className="footer-divider"></div>


                {/* Footer Bottom */}
                <div className="footer-bottom">

                    <div className="footer-copyright">
                        <span>
                            © {new Date().getFullYear()} Sai Krishna
                        </span>

                        <span className="footer-separator">
                            •
                        </span>

                        <span>
                            All rights reserved.
                        </span>
                    </div>


                    <button
                        type="button"
                        className="back-to-top"
                        onClick={scrollToTop}
                        aria-label="Scroll back to top"
                    >
                        <span>Back to top</span>
                        <ArrowUpwardIcon />
                    </button>

                </div>

            </div>

        </footer>
    );
}

export default Footer;