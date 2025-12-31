export default function Landing() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black flex flex-col items-center justify-center text-white px-6">
        <h1 className="text-5xl font-bold mb-4">UniRide</h1>
        <p className="text-gray-300 mb-10 text-center max-w-md">
          Smart fare comparison, group splitting, and traffic‑aware ETAs for students.
        </p>
  
        <div className="flex gap-6">
          <a href="/login" className="px-6 py-3 bg-teal-600 rounded-lg font-medium">
            Login
          </a>
          <a href="/register" className="px-6 py-3 border border-teal-600 rounded-lg">
            Sign up
          </a>
        </div>
      </div>
    );
  }
  