import { DashboardView } from "@/features/dashboard/views/dashbord-view";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Dashboard",
}

const Dashboard = () => {
  return <DashboardView />;
};

export default Dashboard;
