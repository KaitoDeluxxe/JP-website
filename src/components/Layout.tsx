import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-on-background flex flex-col">
      <TopNav />
      <div className="flex flex-1 pt-16">
        <SideNav />
        <main className="flex-1 lg:ml-64 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
