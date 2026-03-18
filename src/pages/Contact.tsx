import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";
import ContactCTA from "@/components/contact/ContactCTA";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <main>
        <ContactHero />
        <ContactCards />
        <ContactMap />
        <ContactForm />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
