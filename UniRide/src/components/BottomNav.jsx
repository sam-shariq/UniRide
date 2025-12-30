import { useNavigate } from "react-router-dom";

export default function BottomNav() {
    const navigate = useNavigate();
    
    return (
      <nav className="bg-white border-t flex justify-around py-3 text-sm">
        <button onClick={() => navigate("/")}>🏠 Home</button>
        <button onClick={() => navigate("/fares")}>🚕 Fares</button>
        <button onClick={() => navigate("/groups")}>👥 Groups</button>
        <button onClick={() => navigate("/profile")}>👤 Profile</button>
      </nav>
    );
  }