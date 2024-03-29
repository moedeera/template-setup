import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Navbar } from "./Components/Navbar/Navbar";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { Footer } from "./Components/Footer/Footer";
import { PostsPage } from "./Pages/PostsPage/PostsPage";
import { SiteContextProvider } from "./Context/Context";
import { ReDirectPage } from "./Pages/ReDirectPage/ReDirectPage";
import { Login } from "./Pages/Login/Login";

function App() {
  return (
    <SiteContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/log" element={<Login />} />
          <Route path="/redirect/:from" element={<ReDirectPage />} />
          <Route path="/posts/:id" element={<PostsPage />} />
        </Routes>
        <Footer />
      </Router>
    </SiteContextProvider>
  );
}

export default App;
