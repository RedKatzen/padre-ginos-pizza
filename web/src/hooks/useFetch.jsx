import { useDebugValue, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState();

  useDebugValue(data ? `${data.id} : ${data.name}` : "loading...");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    }

    fetchData();
  }, []);

  return data;
};
