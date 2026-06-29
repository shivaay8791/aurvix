import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Stats from "./components/Stats";
import FeaturedTools from "./components/FeaturedTools";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white">
        <Landing />
        <Stats />
        <FeaturedTools />
      </main>

      <Footer />
    </>
  );
}