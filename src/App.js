import "./App.css";

import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_TOPICS } from "./model/queries/topics";
import Spinner from "./components/spinner/spinner";

import { TopicList } from "./components/topic-list/topic-list.component";
import { useLocation } from "react-router-dom";

import { Search } from "./components/search/search.component";
function App() {
  const location = useLocation();
  //console.log(location);
  const topicName = location.state ? location.state.topicName : "react";
  const { loading, error, data } = useQuery(GET_TOPICS(topicName));

  const [topicN, setTopicN] = useState(topicName);

  if (loading) return <Spinner />;
  if (error) return `Error! ${error.message}`;

  const filteredData = data.search.topics.filter(({ topic }) =>
    topic.name.toLowerCase().includes(topicN.toLowerCase())
  );
  //console.warn("AppArr", filteredData);
  return (
    <div className="App">
      <h1>Topic searching List GitHub</h1>
      <Search onChange={(e) => setTopicN(e.target.value)} />
      <TopicList topics={filteredData} />
    </div>
  );
}

export default App;
