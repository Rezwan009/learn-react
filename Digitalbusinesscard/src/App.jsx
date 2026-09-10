import About from "./components/About";
import Interests from "./components/Interests";
import PersonalInfo from "./components/PersonalInfo";
import SocialLink from "./components/SocialLink";

function App() {
  return (
    <div className="container">
      <div className="personal">
        <PersonalInfo />
        <About />
        <Interests />
        <SocialLink />
      </div>
    </div>
  );
}

export default App;
