import { Routes, Route } from "react-router-dom";
import Applayout from "../AppLayout/Applayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ContributionPlan from "../Pages/ContributionPlan";
import DailyContributionTracker from "../components/dashboard/DailyContributionTracker";

function Routing() {
    return (
        <Routes>
            <Route element={<Applayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contribution-plan" element={<ContributionPlan />} />
                <Route path="/daily-contribution-tracker" element={<DailyContributionTracker />} />
            </Route>
        </Routes>
    );

}

export default Routing;