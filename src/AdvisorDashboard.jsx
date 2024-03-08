import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard } from "./screens";
import Clientlist from "./components/dashboard/client/clientlist";
import Plans from "./components/dashboard/plans/plans";

import HomePage from "./components/PreLoginHomepage/HomePage" 
import Loginpage from './components/SignIn/Loginpage';
import Client_landing from './components/PreLoginHomepage/Client_landing'

import Registerpage from "./components/SignIn/Registerpage";
import UserDetails from "./checking/UserDetails";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
        <Route path ="/" element= {<HomePage />}/>
        <Route path ="/login" element= {<Loginpage />}/>
        <Route path ="/register" element= {<Registerpage/>}/>
        <Route path="/client_landing" element={<Client_landing/>} />
        <Route path="/client_landing" element={<Client_landing/>} />

        <Route element={<BaseLayout />}>
          <Route path="/advisor_dashboard" element={<Dashboard />} />
          <Route path="/clientlist" element={<Clientlist/>} />
          {/* <Route path="/transaction" element={<Transaction/>} />   */}
          {/* <Route path="/queries" element={<Queries/>} /> */}
          <Route path="/plan" element={<Plans/>} />
          <Route path="/details" element={<UserDetails/>}/>
        </Route>
        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
