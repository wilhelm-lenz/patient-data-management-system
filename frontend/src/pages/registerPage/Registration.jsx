import { useState } from "react";
import "./Registration.scss";
import { backendUrl } from "../../api/api";
import { Link } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [registered, setRegistered] = useState(null);

  const fetchRegistrationData = async () => {
    try {
      const res = await fetch(backendUrl + "/api/v1/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, passwordConfirm }),
      });

      const { status, data, error } = await res.json();
      if (status !== "success") throw new Error(error);
      else console.log("Registration success: ", data);
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      setRegistered(true);
    } catch (error) {
      setRegistered(false);
      console.error("Registration error: User with this email exists");
    }
  };
  console.log(registered);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRegistrationData();
  };

  console.log("email:============", email);
  console.log("password:==========", password);
  console.log("confirmPassword:========", passwordConfirm);

  return (
    <main className="main-register">
      <article className="form-wrapper">
        <section className="section-info-illustration">
          <img src="../../../public/images/medical-illustration.jpg" alt="" />
          <h2 className="heading-info">Patientendaten Management Seytem</h2>
          <p className="app-info">Einfaches Verwalten der Patienten Daten</p>
          <p className="app-info">
            Bessere Kommunikation zwischen Arzt, Mitarbeiter und Patient
          </p>
        </section>
        <section className="section-register">
          <h1 className="heading-form">
            <span className="part-of-heading-primary">Doc</span> Link
          </h1>
          <form method="POST" className="register-form" onSubmit={handleSubmit}>
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
            <label htmlFor="passwordConfirm">
              Passwort wiederholen
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="confirm password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
            </label>
            <input type="submit" value="Registrieren" className="submit-btn" />
            {registered === true && (
              <p className="success">
                Account wurde erfolgreich erstellt. Sie können sich nun anmelden
              </p>
            )}
            {registered === false && (
              <p className="fail">
                Email oder Passwort entspricht nicht unseren Bedingungen. Oder
                der User mit dieser Email Adresse existiert bereits. Bitte geben
                Sie eine korrekte Email Adresse ein und ein Passwort mit
                mindestens 8 Zeichen!
              </p>
            )}
            <div className="devider-wrapper">
              <span className="devider"></span> oder
              <span className="devider"></span>
            </div>
            {/* ========= TODO ========= */}
            <Link className="register-google-wrapper">
              <img
                className="google-icon"
                src="../../../public/icons/google-logo.svg"
                alt="google icon"
              />
              <span className="sign-in-text">Mit Google registrieren</span>
            </Link>
            <p className="login-wrapper">
              Sie haben bereits einen Account?
              <Link to="/login" className="login">
                Hier Anmelden
              </Link>
            </p>
          </form>
        </section>
      </article>
    </main>
  );
};

export default Registration;
