import axios from "axios";

export default async function apiFetcher(
  url: string,
  params?: { [key: string]: string }
) {
  return axios
    .get(url, {
      params: params,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      },
    })
    .then((response) => {
      if (import.meta.env.DEV) console.log(response);

      return response;
    });
}
