import Navbar from "../components/Navbar";
import AboutOfMe from "../sections/AboutOfMe";
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
    </>
  );
};

export default MainPage;
