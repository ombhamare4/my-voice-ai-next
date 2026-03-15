import { Settings } from "lucide-react";

export function SettingPanel() {
  return (
    <div className="hidden w-105 min-h-0 flex-col border-l lg:flex">
      <div className="flex items-center gap-2 border-b px-4 h-12">
        <Settings className="size-4" />
        <span className="text-sm font-medium">Settings</span>
      </div>
    </div>
  );
}
