const CONTENTFUL_SPACE_ID = "ujjnpzbu47yu";
const CONTENTFUL_ACCESS_TOKEN = "CgGJdRcykhP8nVcS1XTiF9yzouz6ZHqLuk6yK3_QVfc";
const contentfulFetch = async (query) => {
  return await fetch(
    "https://graphql.contentful.com/content/v1/spaces/" + CONTENTFUL_SPACE_ID,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + CONTENTFUL_ACCESS_TOKEN
      },
      body: JSON.stringify({ query })
    }
  );
};
export {
  contentfulFetch as c
};
