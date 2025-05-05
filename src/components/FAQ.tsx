
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How does ANTLAND trap termites?",
      answer: "ANTLAND uses a proprietary blend of natural attractants that draw termites into the trap. Once inside, they are captured without the use of harmful chemicals or toxins."
    },
    {
      question: "Is ANTLAND safe to use around children and pets?",
      answer: "Yes, ANTLAND is completely safe for use around children, pets, and beneficial insects. It contains no toxic chemicals and works through natural biological processes."
    },
    {
      question: "How long does an ANTLAND trap last?",
      answer: "Each ANTLAND trap is effective for approximately 3-4 months, depending on the level of termite activity in your area. We recommend replacing traps seasonally for continuous protection."
    },
    {
      question: "Can I use ANTLAND for indoor plants?",
      answer: "Absolutely! ANTLAND is designed for both indoor and outdoor use. For indoor plants, simply place the trap in the soil of your potted plants."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most users notice a reduction in termite activity within 2-3 weeks. The fertilizing benefits typically become visible through improved plant health within 4-6 weeks."
    },
    {
      question: "Does ANTLAND work for all termite species?",
      answer: "ANTLAND is most effective against common subterranean and drywood termite species, including the naml abyad (white ant) varieties that are prevalent in many regions."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about ANTLAND's innovative termite trap and fertilizer solution
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
