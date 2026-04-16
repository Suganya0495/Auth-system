import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔥 Default route fix */}
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected route example */}
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}