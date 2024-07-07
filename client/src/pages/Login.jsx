import { redirect, Form, useActionData, useNavigation } from "react-router-dom";
import { login } from "../api";
import "./login.css";

export async function action({ request }) {
  const formData = await request.formData();
  try {
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

      <Form method="post" className="login-form" replace>
        {error && <h2 className="error">{error.message}</h2>}
        <input type="email" name="email" placeholder="Email address" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit" className="link-button" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </Form>
    </div>
  );
}
