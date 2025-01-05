import Styles from "./Dashboard.module.css";

type Props = {
  handleToggleSidebar: () => void;
};
function Dashboard({ handleToggleSidebar }: Props) {
  return (
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
      <h1>Bookings</h1>
      <div className={Styles.CardContainer}>
        {[
          {
            title: "Revenue",
            value: "₹ 78,000",
            change: "10%",
          },
          {
            title: "Bookings",
            value: "167",
            change: "36%",
          },
          {
            title: "Applications",
            value: "84",
            change: "12%",
          },
          {
            title: "Rating",
            value: "4.5",
            change: "5%",
          },
        ].map((item, index) => (
          <div
            className={Styles.Card}
            key={index}
          >
            <h2>{item.title}</h2>
            <div className={Styles.Data}>
              <h2>{item.value}</h2>
              <p>
                <b>{item.change}</b> last month
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
