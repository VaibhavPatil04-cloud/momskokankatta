import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReservationHero from "@/components/reservation/ReservationHero";
import ReservationForm from "@/components/reservation/ReservationForm";
import ReservationHowItWorks from "@/components/reservation/ReservationHowItWorks";
import ReservationNotice from "@/components/reservation/ReservationNotice";
import ReservationCTAStrip from "@/components/reservation/ReservationCTAStrip";

const Reservation = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <main>
        <ReservationHero />
        <ReservationForm />
        <ReservationHowItWorks />
        <ReservationNotice />
        <ReservationCTAStrip />
      </main>
      <Footer />
    </div>
  );
};

export default Reservation;
