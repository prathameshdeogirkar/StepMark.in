import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{
        width: "220px",
        background: "#111",
        color: "white",
        height: "100vh",
        padding: "20px"
      }}
    >
      <h2>StepMark</h2>

      <div style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
        <Link to="/">Dashboard</Link>
        <Link to="/agencies">Agencies</Link>
        <Link to="/users">Users</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Sidebar;