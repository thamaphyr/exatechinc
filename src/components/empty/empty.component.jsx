import "./empty.styles.css";
import Topic from "../topic/topic.component";

const Empty = () => {
  const topic = {
    databaseId: 0,
    name: "react",
    description: "No Data Returned, Click to Go Init",
    stargazerCount: 0,
  };
  return (
    <div className="empty-content">
      <h2>There is no Data returned, Click below to go back</h2>
      <Topic key={0} topic={topic} />
    </div>
  );
};

export default Empty;
