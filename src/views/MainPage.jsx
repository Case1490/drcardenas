import Navbar from "../components/Navbar";
import AboutOfMe from "../sections/AboutOfMe";
import Contact from "../sections/Contact";
import MissionVision from "../sections/MissionVision";
import Reasons from "../sections/Reasons";
import Services from "../sections/Services";
import Values from "../sections/Values";
import WelcomePresentation from "../sections/WelcomePresentation";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <WelcomePresentation />
      <AboutOfMe />
      <Services />
      <MissionVision />
      <Values />
      <Reasons />
      <Contact />
    </>
  );
};

export default MainPage;
