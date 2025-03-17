import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../pages/loginPage";  // Assure-toi que ton chemin est correct
import Personal from "../pages/personal";
import Connexion from "../pages/connexion"
import Inscription from "../pages/inscription"
import Technicien from "../pages/technicien"
import MainAdmin from "../components/admin/MainAdmin"

const PremierRoute = () => {
  return (
    <Router>
      <Routes>
        {/* Redirection vers /login */}
        <Route path="/" element={<LoginPage />} />

        {/* Page de Login */}
        <Route path="/utilisateur" element={<Personal />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={< Inscription/>} />
        <Route path="/technicien" element={< Technicien/>} />
        <Route path="/admin" element={< MainAdmin/>} />
      </Routes>
    </Router>
  );
}

export default PremierRoute;
