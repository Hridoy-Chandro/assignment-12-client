import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {


    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400 ">
                <ul className="menu gap-3">
                    <li><NavLink to="/dashboard">User Home</NavLink></li>
                    <li><NavLink to="/dashboard/paymentHistory">Employee List</NavLink></li>
                    <li><NavLink to="/dashboard/workSheet">Progress</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/">Home</NavLink></li>
                </ul>
            </div>
            <div className="flex-1 ml-6">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;