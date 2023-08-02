import { Outlet, NavLink } from "react-router-dom";
import "../layout.css";
import { SidebarBottom, SidebarData } from "../../data/sidebar";
import SidebarOption from "./SidebarOption";

export default function RootLayout() {
  const topOptions = SidebarData;
  const bottomOptions = SidebarBottom;
  return (
    <div className="root-layout">
      <div className="root-layout-nav">
        <nav>
          <img src={`/assets/logo.svg`} />
          {topOptions.map((option) => {
            return (
              <NavLink to={option.to}>
                <SidebarOption key={option.id} option={option} />
              </NavLink>
            );
          })}
        </nav>
        <div className="sidebar-bottom">
          {bottomOptions.map((option) => {
            return <SidebarOption option={option} />;
          })}
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
