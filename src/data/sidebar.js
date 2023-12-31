const icon = (name) => (
  <img
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 32, height: 32 }}
  />
);

export const SidebarData = [
  { id: 1, name: "Home", to: "/", icon: icon("ic_home") },
  { id: 2, name: "Message", to: "message", icon: icon("ic_message") },
  { id: 3, name: "User", to: "user", icon: icon("ic_user") },
  { id: 4, name: "Settings", to: "settings", icon: icon("ic_settings") },
];

export const NestedMenu = [
  {
    id: 1,
    to: "profile",
    name: "Profile",
  },
  {
    id: 2,
    to: "security",
    name: "Security",
  },
];

export const NestedMenuHome = [
  {
    id: 1,
    to: "/",
    name: "Home",
  },
];

export const NestedMenuUser = [
  {
    id: 1,
    to: "user",
    name: "User",
  },
];

export const NestedMenuSettings = [
  {
    id: 1,
    to: "settings",
    name: "Settings",
  },
];

export const SidebarBottom = [
  {
    id: 1,
    name: "Download",
    icon: icon("ic_download"),
  },
];
