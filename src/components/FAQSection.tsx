export const FAQSection = () => {
  const faqs = [
    {
      question: "After The holidays do you remove the Christmas Lights?",
      answer: "Yes! When the holidays are over, we return to your home at a time convenient for you and safely remove all the decorations and lights. Your property is completely safe, and we won't disturb your day! We offer an all-inclusive service, meaning we handle every aspect of the Christmas light installation in Westchester County and Fairfield County, including the removal."
    },
    {
      question: "If A Light Bulb Goes Out, Is This Under Warranty?",
      answer: "It is! All lights are under our warranty when they are on your property! So, any issue you have, such as a broken bulb, flickering light, or if any of the decorations have been knocked out of place, it's all covered by us. Just give us a call, and we'll fix the problem for free!"
    },
    {
      question: "What Types Of Decorations Do You Offer?",
      answer: "At Wonderland Holiday Lights, we offer lights and decorations for both your home and your landscape. That means you can have a design for both or just for one! If you want to light up your property, your driveway, or even your tree, we've got the light installation service you need!"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Frequently Asked Christmas Lighting Questions
          </h2>
        </div>
        
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">
                {faq.question}
              </h3>
              <p className="text-white leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};