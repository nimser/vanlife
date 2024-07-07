import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import "./login.css";

export default function Login() {
  const form = useRef();
  const [error, setError] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    setIsSubmitting(true);
    try {
      await login(formData);
      navigate("/", { replace: true });
    } catch (err) {
      setError(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>

      <form ref={form} onSubmit={handleFormSubmit} className="login-form">
        {error && <h2 className="error">{error.message}</h2>}
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit" className="link-button" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
