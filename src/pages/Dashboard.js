import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}