import "./topic-list.styles.css";
import Topic from "../topic/topic.component";

import Empty from "../empty/empty.component";
export function TopicList({ topics, setSearch }) {
  // console.warn(topics);
  return topics.length > 0 ? (
    <div className="topics-content">
      {topics.map(({ topic }) => (
        <Topic key={topic.databaseId} topic={topic} />
      ))}
    </div>
  ) : (
    <Empty />
  );
}
