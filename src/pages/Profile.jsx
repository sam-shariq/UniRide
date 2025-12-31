export default function Profile() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-black p-4 space-y-4">
        <h1 className="text-white font-semibold">Profile</h1>
  
        <div className="bg-white/95 p-4 rounded-xl shadow">
          <p className="font-semibold">Student Name</p>
          <p className="text-sm text-gray-500">student@college.edu</p>
          <p className="mt-2">⭐ Rating: 4.5</p>
        </div>
      </div>
    );
  }
  