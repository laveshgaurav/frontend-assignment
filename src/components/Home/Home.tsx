import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Styles from "./Home.module.css";

function Home() {
  // States
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(true);

  // Functions
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  // JSX
  return (
    <div className={Styles.MainContainer}>
      {/* Sidebar */}
      <Sidebar toggleSidebar={toggleSidebar} />

      {/* Content */}
      <div
        className={Styles.ContentContainer}
        style={{
          marginLeft: toggleSidebar ? "300px" : "0px",
        }}
      >
        <div className={Styles.DashboardContaier}>
          <div className={Styles.Header}>
            <button
              className={Styles.Menu}
              onClick={handleToggleSidebar}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className={Styles.Control}>
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
              <button>
                <i className="fa-regular fa-heart"></i>
              </button>
              <button>
                <i className="fa-solid fa-globe"></i>
                <p>EN</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
