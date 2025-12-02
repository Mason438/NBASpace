import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 ">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Welcome To </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                            {" "}
                            NBA
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                            {""}
                        Space
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Stay on top of every dribble, dunk, and stat with NBA Space. Track playoff races, conference standings, 
                        and all your favorite team stats in one place—your ultimate NBA hub.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#standings" className="cosmic-button">
                            Current League Standings
                        </a>
                    </div>
                </div>
            </div>

            <div 
                className="absolute bottom-8 left-1/2 -translate-x-1/2 
                           flex flex-col items-center 
                           opacity-0 animate-fade-in-delay-5"
            >
                <div className="flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary" />
                </div>
            </div>
        </section>
    );
};