import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faReact,
    faDocker,
    faJs,
    faHtml5,
    faCss3Alt,
    faPython,
    faGitAlt,
    faAws,
    faSass,
} from "@fortawesome/free-brands-svg-icons";

import Chip from "@mui/material/Chip";

import "../assets/styles/Expertise.scss";

const labelsFirst = [
    { label: "React.js", icon: faReact },
    { label: "JavaScript", icon: faJs },
    { label: "HTML5", icon: faHtml5 },
    { label: "CSS3", icon: faCss3Alt },
    { label: "SASS", icon: faSass },
    { label: "Python", icon: faPython },
    { label: "Django", textIcon: "DJ" },
    { label: "SQL", textIcon: "SQL" },
    { label: "PostgreSQL", textIcon: "PG" },
];

const labelsSecond = [
    { label: "Electron.js", textIcon: "EL" },
    { label: "REST APIs", textIcon: "API" },
    { label: "SSE", textIcon: "SSE" },
    { label: "DLMS / COSEM", textIcon: "DLMS" },
    { label: "Git", icon: faGitAlt },
    { label: "Docker", icon: faDocker },
    { label: "AWS", icon: faAws },
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">

                <h1>Expertise</h1>

                <div className="skills-grid">

                    {/* Full Stack */}
                    <div className="skill">

                        <FontAwesomeIcon icon={faReact} size="3x" />

                        <h3>Full-Stack Development</h3>

                        <p>
                            Building modern web applications with React.js
                            and Django, from responsive UI to backend APIs
                            and database integration.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>

                            <div className="tech-chips">
                                {labelsFirst.map((tech) => (
                                    <Chip
                                        key={tech.label}
                                        className="chip"
                                        label={
                                            <span className="chip-content">
                                                {tech.icon ? (
                                                    <FontAwesomeIcon
                                                        icon={tech.icon}
                                                        className="tech-icon"
                                                    />
                                                ) : (
                                                    <span className="tech-text-icon">
                                                        {tech.textIcon}
                                                    </span>
                                                )}

                                                <span className="tech-label">
                                                    {tech.label}
                                                </span>
                                            </span>
                                        }
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Real-Time & Desktop */}
                    <div className="skill">

                        <FontAwesomeIcon icon={faPython} size="3x" />

                        <h3>Real-Time & Desktop Apps</h3>

                        <p>
                            Developing Smart Meter and EV Charger solutions
                            with real-time data, REST APIs, SSE, and
                            Electron.js desktop applications.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>

                            <div className="tech-chips">
                                {labelsSecond.map((tech) => (
                                    <Chip
                                        key={tech.label}
                                        className="chip"
                                        label={
                                            <span className="chip-content">
                                                {tech.icon ? (
                                                    <FontAwesomeIcon
                                                        icon={tech.icon}
                                                        className="tech-icon"
                                                    />
                                                ) : (
                                                    <span className="tech-text-icon">
                                                        {tech.textIcon}
                                                    </span>
                                                )}

                                                <span className="tech-label">
                                                    {tech.label}
                                                </span>
                                            </span>
                                        }
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Professional Projects */}
                <div className="expertise-highlights">

                    <div className="expertise-highlight">
                        <span className="highlight-number">01</span>

                        <div className="highlight-content">
                            <h4>EV Charger Platform</h4>

                            <p>
                                React.js platform for EV charging,
                                device monitoring, and role-based workflows.
                            </p>
                        </div>
                    </div>

                    <div className="expertise-highlight">
                        <span className="highlight-number">02</span>

                        <div className="highlight-content">
                            <h4>Smart Meter Management System</h4>

                            <p>
                                React.js + Django application with
                                real-time data, 200+ APIs, and Electron.js
                                Windows deployment.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Expertise;