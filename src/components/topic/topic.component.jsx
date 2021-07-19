import "./topic.styles.css";

import { useHistory } from "react-router-dom";

function Topic({ topic }) {
  const history = useHistory();

  const fncReturnApp = (topicName) => {
    // console.log({ topic: topicName });
    history.push({
      pathname: "/",
      search: `?topicName=${topicName}`,
      state: { topicName },
    });
  };

  return (
    <div
      key={topic.databaseId}
      className="topic-content"
      onClick={() => fncReturnApp(topic.name)}
    >
      <h2>{topic.name}</h2>
      <span>count stargazer {topic.stargazerCount}</span>
      <p>{topic.description}</p>
    </div>
  );
}
export default Topic;
