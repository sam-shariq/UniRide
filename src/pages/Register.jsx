import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Register() {
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const cred = await createUserWithEmailAndPassword(auth, email, password);

    // 🔹 CREATE USER DOCUMENT
    await setDoc(doc(db, "users", cred.user.uid), {
      name,
      email,
      createdAt: Date.now(),
    });

    window.location.href = "/home";
  };

  return (
    <form onSubmit={handleRegister}>
      <input name="name" placeholder="Name" />
      <input name="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button>Create Account</button>
    </form>
  );
}
