import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../reducers/loginSlice";
import { useState } from "react";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simuler une authentification avec un email fixe
    if (email === "yones@yones.com" && password === "123") {
      dispatch(login({ email })); // Enregistrer l'utilisateur dans Redux
      navigate("/"); // Rediriger vers la page d'accueil
    } else {
      setError("données de connexion sont incorrecte");
    }
  };

  return (
    <div>
      <h1>Vous êtes déjà membre</h1>
        <p>Saisissez vos paramètres d'accès</p>
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h2>Connexion</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "5px 0" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", background: "#007bff", color: "#fff" }}>
          Se connecter
        </button>
      </form>
    </div>

      
    </div>
  );
};

export default Login;