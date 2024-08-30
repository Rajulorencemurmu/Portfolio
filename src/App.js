import React, { useState, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName) {
      setIsPopupOpen(false);
    }
  };

  return (
    <div className={`App ${isPopupOpen ? 'blurred' : ''}`} style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h2 style={{ color: darkMode ? 'white' : '' }}>May I know your Name?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={userName}
                onChange={handleNameChange}
                placeholder="Enter your name"
                style={{ color: darkMode ? 'black' : 'black' }} // Dark mode text color
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <Navbar />
      <Intro userName={userName} />
      <Services />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
