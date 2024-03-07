import { useState } from "react";
import "./Login.scss";
import { backendUrl } from "../../api/api";
import { Link } from "react-router-dom";

const Login = ({ login, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchLoginData = async () => {
    try {
      const res = await fetch(backendUrl + "/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const { status, token, error } = await res.json();
      if (status !== "success") throw new Error(error);
      else console.log("Login success: ", status, token);
      setEmail("");
      setPassword("");
      onLogin(true);
    } catch (error) {
      onLogin(false);
      console.error("Login error: User with this email not exist");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchLoginData();
  };

  console.log("email: ", email);
  console.log("password: ", password);

  return (
    <main className="main-login">
      <article className="form-wrapper">
        <section className="section-info-illustration">
          <img src="../../../public/images/medical-illustration.jpg" alt="" />
          <h2 className="heading-info">Patientendaten Management Seytem</h2>
          <p className="app-info">Einfaches Verwalten der Patienten Daten</p>
          <p className="app-info">
            Bessere Kommunikation zwischen Arzt, Mitarbeiter und Patient
          </p>
        </section>
        <section className="section-login">
          <h1 className="heading-form">
            <span className="part-of-heading-primary">Doc</span> Link
          </h1>
          <form method="POST" className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">
              Username oder email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@mail.de..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label htmlFor="password">
              Passwort (Mindestens 8 Zeichen)
              <input
                type="password"
                name="password"
                id="password"
                placeholder="passwort..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {/* ========= TODO ========= */}
            <Link className="forgot-password">Passwort vergessen?</Link>
            <input type="submit" value="Anmelden" className="submit-btn" />
            {login === false && (
              <p className="fail">Email or password are not correct</p>
            )}
            <div className="devider-wrapper">
              <span className="devider"></span> oder
              <span className="devider"></span>
            </div>
            {/* ========= TODO ========= */}
            <Link className="login-google-wrapper">
              <img
                className="google-icon"
                src="../../../public/icons/google-logo.svg"
                alt="google icon"
              />
              <span className="sign-in-text">Mit Google anmelden</span>
            </Link>
            <p className="register-wrapper">
              Sind sie neu?
              <Link
                to="/signup"
                className="register"
                onClick={() => onLogin(null)}
              >
                Account erstellen
              </Link>
            </p>
          </form>
        </section>
      </article>
    </main>
  );
};

export default Login;
