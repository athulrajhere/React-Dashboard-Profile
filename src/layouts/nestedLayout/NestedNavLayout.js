import { NavLink, Outlet } from "react-router-dom";
import Header from "../header/Header";
import MenuItem from "./MenuItem";
import {
  NestedMenu,
  NestedMenuHome,
  NestedMenuUser,
  NestedMenuSettings,
} from "../../data/sidebar";
import { useLocation } from "react-router-dom";

const NestedNavLayout = () => {
  
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  const menu =
    splitLocation[1] === ""
      ? NestedMenuHome
      : splitLocation[1] === "message"
      ? NestedMenu
      : splitLocation[1] === "user"
      ? NestedMenuUser
      : splitLocation[1] === "settings"
      ? NestedMenuSettings
      : NestedMenu;

  return (
    <div className="nested-nav-layout">
      <div className="nested-layout-navigation">
        <h2>Service desk</h2>
        {menu.map((option) => {
          return (
            <NavLink to={option.to} style={{ textDecoration: "none" }}>
              <MenuItem
                key={option.id}
                item={option}
                isActive={option.name === "Profile" ? true : false}
              />
            </NavLink>
          );
        })}
      </div>
      <div class="content-page">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default NestedNavLayout;
