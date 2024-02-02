import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Navbar } from "./Components/Navbar/Navbar";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
