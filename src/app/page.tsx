

import Hero from "@/components/Home/Hero";
import TreatmentCardProps from "@/components/Home/TreatmentCardProps";
import ClinicalTechnology from "@/components/Home/ClinicalTechnology";
import MeetTheExpert from "@/components/Home/MeetTheExpert";
import PatientSuccessStories from "@/components/Home/PatientSuccessStories";
import BookingCTA from "@/components/Home/BookingCTA";


export default function Home() {
  return (
    <>

      <Hero />
      <TreatmentCardProps />
      <ClinicalTechnology />
      <MeetTheExpert />
      <PatientSuccessStories />
      <BookingCTA />

    </>
  );
}
