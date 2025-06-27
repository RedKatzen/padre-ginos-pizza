import { useDebugValue, useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  useDebugValue(data ? `${data.id} : ${data.name}` : "loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Type: ", err.type);
        console.error("Msg: ", err.message);
      }
    };

    fetchData();
  }, []);

  return data;
};
