import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import UseAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = UseAuth();

  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl mb-4">
          <span>Hi, Welcome </span>
          <span className="text-4xl font-semibold text-[#382121]">
            {user?.displayName ? user.displayName : "Back"}
          </span>
        </h2>
        <h2 className="text-3xl mb-4">
          <span className="text-red-500 font-medium">EMAIL:-</span>
          <span className="text-4xl font-semibold text-[#382121]">
            {user?.email ? user.email : "Back"}
          </span>
        </h2>
        <h2 className="text-3xl">
         <span className="text-red-500 font-medium">LOGIN TIME:-</span>
          <span className="text-4xl font-semibold text-[#382121]">
            {user?.metadata?.lastSignInTime}
          </span>
        </h2>
      </div>
      <div className="mt-8">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserHome;
