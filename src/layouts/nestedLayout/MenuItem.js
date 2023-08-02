import "./MenuItem.css";

const MenuItem = ({ item }) => {
  return (
    <div className="menu-item">
      <div className="item-label">{item.name}</div>
    </div>
  );
};

export default MenuItem;