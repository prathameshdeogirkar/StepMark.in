const StatCard = ({ title, value }) => {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
        width: "200px"
      }}
    >
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
};

export default StatCard;