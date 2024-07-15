import { redirect, Form, useActionData, useNavigation } from "react-router-dom";
import { login } from "../api";
import "./login.css";

export async function action({ request }) {
  try {
    const formData = await request.formData();
    await login(formData);
    return redirect("/");
  } catch (err) {
    return err;
  }
}

export default function Login() {
  const error = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
