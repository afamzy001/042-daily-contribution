import { Routes, Route } from "react-router-dom";
import Applayout from "../AppLayout/Applayout";
import Home from "../Pages/Home";

import Login from "../Pages/Login";
import Register from "../Pages/Register";

import ContributionPlan from "../Pages/ContributionPlan";
import DailyContributionTracker from "../components/dashboard/DailyContributionTracker";
import PersonalSavings from "../Pages/PersonalSavings";
import GroupRegister from "../Pages/GroupSavings";
import Startsaving from "../Pages/Startsaving";
// import About from "../Pages/About";

function Routing() {
    return (
        <Routes>
            <Route element={<Applayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/contribution-plan" element={<ContributionPlan />} />
                <Route path="/daily-contribution-tracker" element={<DailyContributionTracker />} />
                <Route path="/personal-savings" element={<PersonalSavings />} />
                <Route path="/group-register" element={<GroupRegister />} />
                <Route path="/start-saving" element={<Startsaving />} />
            </Route>
        </Routes>
    );

}

export default Routing;