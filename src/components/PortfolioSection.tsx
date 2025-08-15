export const PortfolioSection = () => {
  const portfolioItems = [
    { title: "Install Crew", location: "" },
    { title: "Design team", location: "" },
    { title: "Westchester Neighborhood", location: "" },
    { title: "Westchester County", location: "" },
    { title: "Fairfield County", location: "" },
    { title: "White Plains, NY", location: "" },
    { title: "Stamford, CT", location: "" },
    { title: "Greenwich, CT", location: "" }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional Holiday Light Installation Westchester County
          </h2>
          <p className="text-xl text-primary">
            Click Any Image To Enlarge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-muted rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                <span className="text-muted-foreground text-center px-4">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center bg-primary py-8 px-6 rounded-lg">
          <h3 className="text-3xl font-bold text-white mb-4">
            New Customers Take $50 Off!
          </h3>
          <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get A Fast Quote
          </button>
        </div>
      </div>
    </section>
  );
};