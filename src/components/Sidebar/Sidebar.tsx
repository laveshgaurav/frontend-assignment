import Styles from "./Sidebar.module.css";

type Props = {
  toggleSidebar: boolean;
};
function Sidebar({ toggleSidebar }: Props) {
  return (
    <div
      className={Styles.SidebarContainer}
      style={{
        left: toggleSidebar ? "0px" : "-300px",
      }}
    >
      <div className={Styles.Header}>
        <div className={Styles.Brand}>
          <img src="https://cdn-icons-png.flaticon.com/512/9187/9187555.png " />
          <h1>Project</h1>
        </div>
        <div className={Styles.Menu}>
          <ul>
            <li>
              <a href="#">
                <i className="fa-solid fa-house"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-box"></i>
                <span>Products</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-users"></i>
                <span>Customers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-chart-bar"></i>
                <span>Reports</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-cog"></i>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={Styles.Footer}>
        <div className={Styles.Terms}>
          <p>© 2025 All rights reserved</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className={Styles.Admin}>
          <div className={Styles.Profile}>
            <img
              className={Styles.Avatar}
              src="https://randomuser.me/api/portraits/men/51.jpg"
            />
            <div className={Styles.AdminInfo}>
              <p>John Doe</p>
              <span>Admin</span>
            </div>
          </div>
          <button className={Styles.LogoutButton}>
            <i className="fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
