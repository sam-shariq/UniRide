import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "/home";
  };

  return (
    <form onSubmit={handleLogin} className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white/10 p-8 rounded-xl w-80">
        <h2 className="text-white text-xl mb-4">Login</h2>
        <input name="email" placeholder="Email" className="w-full mb-3 p-2" />
        <input name="password" type="password" placeholder="Password" className="w-full mb-4 p-2" />
        <button className="w-full bg-teal-600 text-white py-2 rounded">
          Login
        </button>
      </div>
    </form>
  );
}
