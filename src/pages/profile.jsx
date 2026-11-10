
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-12">

      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">

        {/* Profile Heading */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-100 text-3xl font-bold text-purple-600">
            {(user?.name || user?.email || "U")
              .charAt(0)
              .toUpperCase()}
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your personal information
          </p>
        </div>

        {/* User Information */}
        <div className="space-y-5">

          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Full Name
            </p>

            <p className="mt-1 font-semibold text-gray-800">
              {user?.name || "Not available"}
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              Email Address
            </p>

            <p className="mt-1 font-semibold text-gray-800">
              {user?.email || "Not available"}
            </p>
          </div>

        </div>

        {/* Back Button */}
        <Link
          to="/dashboard"
          className="mt-8 inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700"
        >
          Back to Dashboard
        </Link>

      </div>
    </section>
  );
};

export default Profile;
