import "./Dashboard.scss";

const Dashboard = ({ onLogin }) => {
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={() => onLogin(null)}>Logout</button>
    </>
  );
};

export default Dashboard;
