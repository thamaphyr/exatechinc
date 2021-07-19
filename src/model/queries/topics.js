import { gql } from "@apollo/client";

export const GET_TOPICS = (topicName) => {
  return gql`
  query {
    search(type: REPOSITORY, query: "topic:${topicName}", last: 50) {
      topics: edges {
        topic: node {
          ... on Repository {
            databaseId
            name
            nameWithOwner
            homepageUrl
            isLocked
            diskUsage
            url
            description
            stargazerCount
          }
        }
      }
    }
  }
`;
};
