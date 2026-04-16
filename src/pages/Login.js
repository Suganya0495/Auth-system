import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showDashboard, setShowDashboard] = useState(false);

  const { user, login, register, logout, message } = useContext(AuthContext);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Auth System</h2>

        {!showDashboard && (
          <>
            <input
              style={styles.input}
              placeholder="Username"
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, username: e.target.value })
              }
            />

            <input
              style={styles.input}
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <div style={styles.row}>
              <button
                type="button"
                style={styles.green}
                onClick={() =>
                  register(form.username, form.password)
                }
              >
                Register
              </button>

              <button
                type="button"
                style={styles.blue}
                onClick={() => login(form.username)}
              >
                Login
              </button>
            </div>
          </>
        )}

        {showDashboard && user && (
          <h3 style={{ marginTop: "20px" }}>
            Welcome {user}
          </h3>
        )}

        <div style={styles.row}>
          <button
            type="button"
            style={styles.gray}
            onClick={() => setShowDashboard(true)}
          >
            Dashboard
          </button>

          <button
            type="button"
            style={styles.red}
            onClick={() => {
              logout();
              setForm({ username: "", password: "" });
              setShowDashboard(false);
            }}
          >
            Logout
          </button>
        </div>

        {/* ✅ MESSAGE DISPLAY */}
        {message.length > 0 && (
          <div style={styles.messageBox}>
            {!message[0].includes("success") && (
              <div style={styles.heading}>
                Password must be:
              </div>
            )}

            <ul style={styles.list}>
              {message.map((msg, index) => (
                <li
                  key={index}
                  style={{
                    color: msg.includes("success")
                      ? "green"
                      : "red"
                  }}
                >
                  {msg}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #74ebd5, #ACB6E5)"
  },
  card: {
    width: "380px",
    padding: "30px",
    borderRadius: "15px",
    background: "white",
    textAlign: "center",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)"
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    boxSizing: "border-box"
  },
  row: {
    display: "flex",
    gap: "10px",
    marginTop: "10px"
  },
  green: {
    flex: 1,
    background: "green",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px"
  },
  blue: {
    flex: 1,
    background: "#007bff",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px"
  },
  gray: {
    flex: 1,
    background: "gray",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px"
  },
  red: {
    flex: 1,
    background: "red",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "8px"
  },
  messageBox: {
    marginTop: "15px",
    textAlign: "left",
    width: "100%"
  },
  heading: {
    fontWeight: "bold",
    marginBottom: "5px"
  },
  list: {
    paddingLeft: "20px",
    margin: 0
  }
};