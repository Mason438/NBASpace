import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> NBA Space</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-semibold">
                            What Is <span className="text-primary">NBA Space</span>
                        </h3>

                        <p className="text-muted-foreground">
                            NBA Space is a web application built to provide basketball fans with a clean,
                            modern, and interactive way to explore NBA data. Users can browse teams by
                            conference and division, check standings, and stay informed on the league at a glance.
                        </p>

                        <p className="text-muted-foreground">
                            This project is powered by a Node/Express backend that securely accesses the Balldontlie API
                            and serves structured NBA data to a React + TailwindCSS frontend.
                            NBA Space focuses on speed, simplicity, and a visually polished user experience
                            inspired by the energy of the NBA.
                        </p>

                       <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="https://nba.balldontlie.io/?javascript#nba-api" 
                                className="cosmic-button"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                API Documentation
                            </a>

                            <a
                                href="https://github.com/Mason438/NBASpace"
                                className="inline-block px-6 py-2 rounded-full border border-primary text-primary 
                                hover:bg-primary/10 transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Repository
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Data Integration */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Real-Time NBA Data</h4>
                                    <p className="text-muted-foreground">
                                        Powered by a secure Node/Express backend that fetches live NBA data
                                        through the Balldontlie API, ensuring accurate and up-to-date team information.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* UI/UX */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Clean, Basketball-Inspired UI</h4>
                                    <p className="text-muted-foreground">
                                        A modern interface built with React and TailwindCSS, styled with NBA-themed colors
                                        for a smooth, intuitive experience from conference browsing to team details.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Project Structure */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Scalable Architecture</h4>
                                    <p className="text-muted-foreground">
                                        Designed with a structured API layer, clear routing, and reusable components,
                                        making it easy to expand with standings, player stats, and playoff projections.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};