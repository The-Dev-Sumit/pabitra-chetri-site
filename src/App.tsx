import Bouquet from "./components/Bouquet";
import LandingPage from "./components/LandingPage"
import Mahendi from "./components/Mahendi"
import NameAnimation from "./components/NameAnimation"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div className="min-h-screen w-full border-gray-700">
      <LandingPage />
      <NameAnimation />
      <Mahendi />
      <Bouquet />
      <Footer/>
    </div>
  );
}

export default App