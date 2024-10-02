import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
            placeholder="leo@mail.com"
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
            placeholder="*********"
          />
        </div>
        <button type="submit" style={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    color: "#888",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#fff',
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    marginBottom: "8px",
    fontSize: "16px",
    color: "#555",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "18px",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
    backgroundColor: 'transparent'
  },
  inputFocused: {
    borderColor: "#007bff",
    boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
  },
  button: {
    padding: "12px",
    backgroundColor: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
    transform: "translateY(-2px)",
  },
};

export default Login;

