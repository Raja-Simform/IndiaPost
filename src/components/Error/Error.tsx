import { useNavigate } from "react-router-dom";

const Error = ({ message = "404! Page Not Found" }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        padding: "4rem 1rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>😕</h1>
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{message}</h2>
      <p style={{ marginBottom: "2rem" }}>
        Sorry, the page you are looking for does not exist.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
        }}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Error;
