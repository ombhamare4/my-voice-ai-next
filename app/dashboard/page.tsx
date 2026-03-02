import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
      <div className="flex items-center gap-3">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  );
};

export default Dashboard;
