import apiFetcher from "./apiFetcher";

export default async function apiLoader(
  entries: {
    url: string;
    params?: { [key: string]: string };
  }[]
) {
  return Promise.allSettled(
    entries.map((entry) => apiFetcher(entry.url, entry.params))
  ).then((responses) => {
    const data = responses.reduce((obj, response) => {
      const url = new URL(
        response.status === "fulfilled"
          ? response.value.request.responseURL
          : response.reason.request.responseURL
      );

      const key = url.pathname.substring(url.pathname.lastIndexOf("/") + 1);

      const data =
        response.status === "fulfilled" ? response.value.data : response.reason;

      if (responses.length === 1) return data;

      return { ...obj, [key]: data.results };
    }, {});

    if (import.meta.env.DEV) console.log(data);

    return data;
  });
}
