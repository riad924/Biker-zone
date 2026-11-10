
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-12">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to Dashboard!
          </h1>

          <p className="mt-2 text-gray-600">
            Hello, {user?.name || user?.email || "User"}.
            Welcome back!
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* Profile Card */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              My Profile
            </h2>

            <p className="mt-2 text-gray-600">
              View and manage your profile information.
            </p>

            <Link
              to="/profile"
              className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              View Profile
            </Link>
          </div>

          {/* Account Card */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              My Account
            </h2>

            <p className="mt-2 text-gray-600">
              Manage your account information.
            </p>

            <Link
              to="/profile"
              className="mt-5 inline-block rounded-lg bg-purple-600 px-5 py-2 text-white hover:bg-purple-700"
            >
              Manage Account
            </Link>
          </div>

          {/* Status Card */}
          <div className="rounded-xl bg-white p-6 shadow-md">
            <h2 className="text-xl font-semibold text-gray-800">
              Account Status
            </h2>

            <p className="mt-2 text-green-600 font-medium">
              Active
            </p>

            <p className="mt-2 text-sm text-gray-500">
              You are successfully logged in.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
