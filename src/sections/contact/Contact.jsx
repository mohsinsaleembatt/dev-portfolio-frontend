import { useState } from "react";
import ContactFlipCard from "./ContactFlipCard";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT: Info */}
        <ContactInfo />

        {/* RIGHT: Flip card */}
        <ContactFlipCard
          isSubmitted={isSubmitted}
          setIsSubmitted={setIsSubmitted}
        />

      </div>
    </section>
  );
};

export default Contact;
