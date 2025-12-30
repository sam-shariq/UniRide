import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fares from "./pages/Fares";
import Groups from "./pages/Groups";
import Profile from "./pages/Profile";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fares" element={<Fares />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}
