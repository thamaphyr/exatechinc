## List Repositories with topic ='react'

{
search(type: REPOSITORY, query: "topic:react", last: 50) {
repos: edges {
repo: node {
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
