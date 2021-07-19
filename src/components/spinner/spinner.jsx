import spinner from "../../assets/spinner.svg";
import "./spinner.styles.css";
function Spinner() {
  return <img src={spinner} className="spinner" alt="Loading ..." />;
}

export default Spinner;
