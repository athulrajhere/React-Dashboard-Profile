import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <div className="header-container">
      <Link className="header-back">
        <img src={`/assets/icons/ic_left_arrow.svg`} />
      </Link>
      <Link className="header-search" style={{ textDecoration: "none" }}>
        <img src={`/assets/icons/ic_search.svg`} />
        <input placeholder="Search" />
      </Link>
      <Link className="header-recent" style={{ textDecoration: "none" }}>
        <img src={`/assets/icons/ic_recent.svg`} />
        <label className="header-label">Recent</label>
      </Link>
      <Link className="header-support" style={{ textDecoration: "none" }}>
        <img src={`/assets/icons/ic_support.svg`} />
        <label className="header-label">Support</label>
      </Link>
      <Link className="header-notification" style={{ textDecoration: "none" }}>
        <img src={`/assets/icons/ic_notification.svg`} />
        <label className="header-label">Notification</label>
      </Link>
      <div className="header-profile">
        <img
          className="header-avatar"
          src={`/assets/avatars/avatar_pic.png`}
        />
      </div>
    </div>
  );
};

export default Header;
