const Register = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">
          Register
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded border px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border px-4 py-3"
          />

          <button
            type="submit"
            className="w-full rounded bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-700"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;