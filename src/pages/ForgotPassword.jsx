
import { Link } from "react-router-dom";

function ForgetPassword() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Password reset request submitted!");
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-4">

      <div className="w-full max-w-md rounded-xl border p-6">

        <h2 className="text-2xl font-bold">
          Forgot Password?
        </h2>

        <p className="my-3 text-gray-500">
          Enter your email to reset your password.
        </p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-700"
          >
            Reset Password
          </button>

        </form>

        <Link
          to="/login"
          className="mt-4 block text-center text-blue-600"
        >
          Back to Login
        </Link>

      </div>

    </section>
  );
}

export default ForgetPassword;
