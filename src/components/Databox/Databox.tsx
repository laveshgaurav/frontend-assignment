/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Styles from "./Databox.module.css";
import axios from "axios";
import Loader from "../Loader/Loader";

type CampaignData = {
  "s.no": number;
  "amt.pledged": number;
  blurb: string;
  by: string;
  country: string;
  currency: string;
  "end.time": string;
  location: string;
  "percentage.funded": number;
  "num.backers": string;
  state: string;
  title: string;
  type: string;
  url: string;
  guests: number;
  profilePhoto: string;
};

function Databox(): JSX.Element {
  // States
  const [activeTab, setActiveTab] = useState<string>("All");
  const [campaignData, setCampaignData] = useState<CampaignData[]>([]);
  const [dataLoading, setDataLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Variables
  const profilePictures: string[] = [
    "https://randomuser.me/api/portraits/men/67.jpg",
    "https://randomuser.me/api/portraits/men/41.jpg",
    "https://randomuser.me/api/portraits/men/66.jpg",
    "https://randomuser.me/api/portraits/men/67.jpg",
    "https://randomuser.me/api/portraits/men/17.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
    "https://randomuser.me/api/portraits/men/20.jpg",
    "https://randomuser.me/api/portraits/men/72.jpg",
    "https://randomuser.me/api/portraits/men/8.jpg",
    "https://randomuser.me/api/portraits/men/82.jpg",
  ];
  const itemsPerPage: number = 5;
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const currentData: CampaignData[] = campaignData.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages: number = Math.ceil(campaignData.length / itemsPerPage);

  // Functions
  const fetchData = async (): Promise<void> => {
    try {
      setDataLoading(true);
      const response = await axios.get(
        "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
      );
      console.log("Data fetched: ", response.data);
      setTimeout(() => {
        setCampaignData(
          response.data.map((i: CampaignData) => ({
            ...i,
            guests: Math.ceil(Math.random() * 20),
            profilePhoto: profilePictures[Math.floor(Math.random() * 10)],
          }))
        );
        setDataLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const handleNext = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Effects
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={Styles.DataContainer}>
      <div className={Styles.TabContainer}>
        {["All", "Pending", "Active", "Completed"].map((tab) => (
          <button
            key={tab}
            className={`${Styles.Tab} ${
              activeTab === tab ? Styles.ActiveTab : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {dataLoading ? (
        <Loader />
      ) : (
        <div className={Styles.TableContainer}>
          <table className={Styles.Table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Location</th>
                <th>Title</th>
                <th>End Time</th>
                <th>Percentage Funded</th>
                <th>Amount Pledged</th>
                <th>Number of Backers</th>
              </tr>
            </thead>
            <tbody>
              {currentData?.map((campaign) => (
                <tr key={campaign["s.no"]}>
                  <td className={Styles.SerialNum}># {campaign["s.no"]}</td>
                  <td>
                    <div className={Styles.Profile}>
                      <img src={campaign.profilePhoto} />
                      <div className={Styles.Data}>
                        <h4>{campaign.by}</h4>
                        <p>{campaign.guests} Guests</p>
                      </div>
                    </div>
                  </td>
                  <td>{campaign.location}</td>
                  <td>{campaign.title}</td>
                  <td>
                    <div className={Styles.Date}>
                      <h2>
                        {new Date(campaign["end.time"]).toLocaleDateString()}
                      </h2>
                      <h3>
                        {new Date(campaign["end.time"]).toLocaleTimeString()}
                      </h3>
                    </div>
                  </td>
                  <td>{campaign["percentage.funded"]} %</td>
                  <td>
                    {campaign.currency.toUpperCase()} {campaign["amt.pledged"]}
                  </td>
                  <td>{campaign["num.backers"]}</td>
                </tr>
              ))}
              <tr className={Styles.Pagination}>
                <td colSpan={8}>
                  <div className={Styles.Control}>
                    <button
                      className={
                        currentPage === 1
                          ? Styles.ButtonDisabled
                          : Styles.ButtonEnabled
                      }
                      onClick={handlePrevious}
                    >
                      Previous
                    </button>
                    <h3>
                      Page {currentPage} of {totalPages}
                    </h3>
                    <button
                      className={
                        currentPage === totalPages
                          ? Styles.ButtonDisabled
                          : Styles.ButtonEnabled
                      }
                      onClick={handleNext}
                    >
                      Next
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Databox;
