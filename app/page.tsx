import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Stats from "./components/Stats";
import FeaturedTools from "./components/FeaturedTools";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-black via-slate-950 to-gray-900 text-white">
      <Navbar />

      <main>
        <Landing />
        <Stats />
        <FeaturedTools />
      </main>

      <Footer />
    </div>
  );
}