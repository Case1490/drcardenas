import InfoOfMe from "./InfoOfMe";
import Services from "./Services";
import WelcomePage from "./WelcomePage";

const MainPage = () => {
  return (
    <div className="pt-[95px]">
      <WelcomePage />
      <InfoOfMe />
      <Services />
    </div>
  );
};

export default MainPage;
