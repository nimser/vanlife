import {
  Form,
  useActionData,
  useNavigation,
  useNavigate,
  useRouteError,
  useOutletContext,
} from "react-router-dom";
import { useEffect } from "react";
import { login } from "../api";
import "./login.css";

export async function action({ request }) {
  const formData = await request.formData();
  return login(formData);
}

export default function Login() {
  const loginData = useActionData();
  const { setAuth } = useOutletContext();
  const error = useRouteError();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (loginData) {
      setAuth({ host: loginData.host, token: loginData.token });
      navigate("/", { replace: true });
    }
  }, [loginData]);

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {error && <h2 className="error">{error.message}</h2>}

      <Form method="post" className="login-form">
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit" className="link-button" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </Form>
    </div>
  );
}
