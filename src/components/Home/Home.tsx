import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Styles from "./Home.module.css";
import Dashboard from "../Dashboard/Dashboard";
import Databox from "../Databox/Databox";

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
        <Dashboard handleToggleSidebar={handleToggleSidebar} />
        <Databox />
      </div>
    </div>
  );
}

export default Home;
