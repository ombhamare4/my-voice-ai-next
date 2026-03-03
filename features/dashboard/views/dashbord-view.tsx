import { HeroPattern } from "../components/hero-pattern";
import { PageHeader } from "@/components/page-header";
import DashbordHeader from "@/features/dashboard/components/dashboard-header";
import { TextInputPannel } from "../components/text-input-pannel";
export const DashboardView = () => {
  return (
    <div className="relative">
      <HeroPattern />
      <PageHeader title="Dashboard" className="lg:hidden" />
      <div className="relative space-y-8 p-4 lg:p-16">
        <DashbordHeader />
        <TextInputPannel />
      </div>
    </div>
  );
};
