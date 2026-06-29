import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ResumeHero from "../../components/ResumeHero";
import ResumeForm from "../../components/ResumeForm";

export default function ResumeBuilder() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">

        <ResumeHero />

        <ResumeForm />

      </main>

      <Footer />
    </>
  );
}