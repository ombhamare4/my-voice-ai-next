"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { OrganizationSwitcher, useClerk, UserButton } from "@clerk/nextjs";
import {
  type LucideIcon,
  Home,
  LayoutGrid,
  AudioLines,
  Volume2,
  Settings,
  Headphones,
  User,
  Contact,
  Headset,
} from "lucide-react";

import Link from "next/link";

interface MenuItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  onClick?: () => void;
}

interface NavSectionProps {
  label?: string;
  items: MenuItem[];
  pathname: string;
}

function Navbar({ label, items, pathname }: NavSectionProps) {
  return (
    <SidebarGroup>
      {label && <SidebarGroupLabel>{label}</SidebarGroupLabel>}
      <SidebarGroupContent>
        {items.map((item) => (
          <SidebarMenuItem key={item.title} onClick={item.onClick}>
            <SidebarMenuButton
              asChild={!!item.url}
              isActive={
                item.url
                  ? item.url === "/dashboard"
                    ? pathname === "/dashboard"
                    : pathname.startsWith(item.url)
                  : false
              }
              onClick={item.onClick}
              tooltip={item.title}
              className="h-9 px-3 py-2 text-[13px] tracking-tight font-medium border border-transparent data-[active=true]:border-border data-[active=true]:shadow-xs data-[active=true]:shadow-accent-foreground"
            >
              {item.url ? (
                <Link href={item.url}>
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              ) : (
                <>
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarGroupContent>
    </SidebarGroup>
  );
}

const DashboardSidebar = () => {
  const pathname = usePathname();
  const clerk = useClerk();
  const mainMenuItems: MenuItem[] = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Explore voices",
      url: "/dashboard/voices",
      icon: LayoutGrid,
    },
    {
      title: "Text to speech",
      url: "/dashboard/text-to-speech",
      icon: AudioLines,
    },
    {
      title: "Voice cloning",
      //   url: "/dashboard/volume",
      icon: Volume2,
    },
  ];

  const othersMenuItems: MenuItem[] = [
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: Settings,
      onClick: () => clerk.openOrganizationProfile(),
    },
    {
      title: "Help and support",
      url: "mailto:support@myvoiceai.com",
      icon: Headset,
    },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex flex-col gap-4 pt-4">
        <div className="flex items-center gap-2 pl-1 group-data[collapsible=icon]:justify-center group-data-[collapsible=icon]:pl-0">
          <Image
            src="/images/logo.png"
            alt="myvoiceai"
            width={32}
            height={32}
          />
          <span className="group-data-[collapsible=icon]:hidden font-semibold text-lg tracking-tighter text-foreground">
            My Vocie AI
          </span>
          <SidebarTrigger className="ml-auto  group-data-[collapsible=icon]:hidden" />
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <OrganizationSwitcher
              hidePersonal
              fallback={
                <Skeleton className="h-8.5 group-data-[collapsible=icon]:size-8 rounded-md border  " />
              }
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  organizationSwitcherTigger:
                    "w-full! justify-between! bg-white! border! border-border! rounded-md! pl-1! pr-2! py-1! gap-3!group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:p-1! shadow-xs shadow-accent-foreground",
                  organizationPreview: "gap-2!",
                  organizationPreviewAvatarBox: "size-6! rounded-sm!",
                  organizationPreviewTextContainer:
                    "text-xs! tracking-tight! font-medium! text-foreground! group-data-[collapsible=icon]:hidden!",
                  organizationPreviewMainIdentifier: "text-[13px]!",
                  organizationSwitcherTriggerIcon:
                    "size-4! text-sidebar-foreground! group-data-[collapsible=icon]:hidden!",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div className="border-b border-dashed border-border"></div>
      <SidebarContent>
        <Navbar label="Navigation" items={mainMenuItems} pathname={pathname} />
        <Navbar label="Others" items={othersMenuItems} pathname={pathname} />
      </SidebarContent>
      <div className="border-b border-dashed border-border"></div>
      <SidebarFooter className="gap-3 py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="h-9 px-3 py-2 text-[13px] tracking-tight font-medium border border-transparent"
            >
              <button
                onClick={() =>
                  document.documentElement.classList.toggle("dark")
                }
              >
                <span className="mr-auto">Theme</span>
                <span className="ml-2 text-muted-foreground dark:hidden">
                  Light
                </span>
                <span className="ml-2 text-muted-foreground hidden dark:inline">
                  Dark
                </span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <UserButton
              showName
              fallback={<Skeleton className="h-8.5 w-full rounded-md border" />}
              appearance={{
                elements: {
                  rootBox:
                    "w-full! group-data-[collapsible=icon]:w-auto! group-data-[collapsible=icon]:flex! group-data-[collapsible=icon]:justify-center!",
                  userButtonTrigger:
                    "w-full! justify-between! bg-transparent!  rounded-md! pl-1! pr-2! py-1!",
                  userButtonBox: "flex-row-reverse! gap-2",
                  userButtonOuterIdentifier:
                    "text-[13px] tracking-tight! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!",
                  userButtonAvatarBox: "size-6!",
                  userPreviewTextContainer:
                    "text-[13px] tracking-tight! font-medium! text-foreground! pl-0! group-data-[collapsible=icon]:hidden!",
                },
              }}
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
