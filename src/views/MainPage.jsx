import Navbar from "../components/Navbar";
import AboutOfMe from "../sections/AboutOfMe";
import Reasons from "../sections/Reasons";
import Services from "../sections/Services";
import WelcomePresentation from "../sections/WelcomePresentation";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <WelcomePresentation />
      <AboutOfMe />
      <Services />
      <Reasons />
    </>
  );
};

export default MainPage;
