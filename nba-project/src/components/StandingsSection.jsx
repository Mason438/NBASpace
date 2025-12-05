import { useState, useEffect } from "react";

export const StandingsSection = () => {
  
  return (
    <section
      id="standings"
      className="relative py-24 px-4 container mx-auto text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8">Live NBA Standings</h2>
        
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                  <div className="p-6">
                      <h3 className="text-3xl font-semibold mb-1"> Eastern Conference</h3>
                      <p className="text-muted-foreground text-sm mb-4"> paragraph</p>
                  </div>
              </div>
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                  <div className="p-6">
                      <h3 className="text-3xl font-semibold mb-1">Western Conference</h3>
                      <p className="text-muted-foreground text-sm mb-4"> paragraph</p>
                  </div>
              </div>    
          </div>
    </section>
  );
};
