import "./SidebarOption.css";

const SidebarOption = ({ option }) => {
  return (
    <div id={option.id} className="sidebar-option">
      <div className="sidebar-icon">{option.icon}</div>
    </div>
  );
};

export default SidebarOption;
