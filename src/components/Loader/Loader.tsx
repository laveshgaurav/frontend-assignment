import Styles from "./Loader.module.css";

function Loader(): JSX.Element {
  return (
    <div className={Styles.Loader}>
      <div className={Styles.Bar}></div>
    </div>
  );
}

export default Loader;
