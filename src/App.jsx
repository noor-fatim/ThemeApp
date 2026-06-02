import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import CustomBtn from "./components/CustomBtn";
import weather from "./assets/images/weather.png";
import moon from "./assets/images/moon.png";
import { ToggleProvider } from "./Context/ToggleContext";

function App() {
  const [theme, setTheme] = useState("light");

  const darkMode = () => {
    console.log("clicked");
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const title = theme.charAt(0).toUpperCase() + theme.slice(1);

  return (
    <>
      <ToggleProvider value={{ theme, darkMode }}>
        <div className={`container-body ${theme}`}>
          <div className="container">
            {
              theme === "light" ? (
                <img src={weather} alt="hero" className="hero-img" />
              ) : (
                <img src={moon} alt="hero" className="hero-img" />
              )
            }
            <h1>{title} Mode</h1>
            <CustomBtn />
          </div>
        </div>
      </ToggleProvider>
    </>
  );
}

export default App;
