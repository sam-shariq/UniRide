import { Home, Car, Users, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const location = useLocation();

  const navItem = (to, Icon, label) => {
    const active = location.pathname === to;

    return (
      <Link
        to={to}
        className={`flex flex-col items-center gap-1 transition-all ${
          active
            ? "text-indigo-600"
            : "text-white hover:text-indigo-600"
        }`}
      >
        <Icon size={22} strokeWidth={1.75} />
        <span className="text-xs">{label}</span>
      </Link>
    );
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full
  bg-black/80
  backdrop-blur-lg
  border-t-2 border-indigo-500/40
  py-3">
      <div className="flex justify-around">
        {navItem("/", Home, "Home")}
        {navItem("/fares", Car, "Fares")}
        {navItem("/groups", Users, "Groups")}
        {navItem("/profile", User, "Profile")}
      </div>
    </nav>
  );
}
