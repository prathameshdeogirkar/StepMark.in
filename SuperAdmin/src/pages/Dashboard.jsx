import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <StatCard title="Total Users" value="0" />
        <StatCard title="Total Agencies" value="0" />
        <StatCard title="Total Tours" value="0" />
        <StatCard title="Total Bookings" value="0" />
      </div>
    </div>
  );
};

export default Dashboard;