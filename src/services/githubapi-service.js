import { token } from "../token_git";

const BASE_URI = "https://api.github.com/users/";

export default async function getGithubUser(username) {
  const response = await fetch(`${BASE_URI}${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      'X-GitHub-Api-Version':  "2022-11-28",
    },
  });
  let data;
  if (!response.ok){
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    if (typeof data.errors === "object") {
      const errors = Object.entries(data.errors);
      const messages = errors.map(([key, value]) => `${key} ${value}`);
      data.errors = messages;
    }
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}
