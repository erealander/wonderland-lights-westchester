export const TestimonialsSection = () => {
  const testimonials = [
    {
      title: "Christmas Light Installation Westchester",
      content: "Steve at Wonderland Holiday Lights was terrific. Very professional and efficient. I HIGHLY recommend their Christmas Light installation service. My house lights are beautiful and I am ready for the holidays!",
      author: "Lyn Marquis"
    },
    {
      title: "Christmas Light Installation Westchester County",
      content: "Great owner! I'm very satisfied and happy with their Christmas light installation service. Highly recommended",
      author: "Michael Rogers"
    },
    {
      title: "Christmas Lighting in Westchester County",
      content: "If you want a high-end look for Christmas lighting at your home, I highly recommend Steve. Very professional service, equipment and seemless Christmas light installation service. Higly recommend this company",
      author: "Majera Majidi"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Real Reviews From Happy Customers
          </h2>
          <h3 className="text-2xl text-primary">
            What Your Neighbors Are Saying About us
          </h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg">
              <h4 className="text-xl font-bold text-white mb-4">
                {testimonial.title}
              </h4>
              <p className="text-white leading-relaxed mb-4">
                {testimonial.content}
              </p>
              <p className="text-primary font-semibold">
                **{testimonial.author}**
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};