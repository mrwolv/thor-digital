import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer 086d185b8a5c7e404e25fa5cee6f7baa8764d4ea693e073f2a127a9d9180a905f80c7440a89515a3e67b4b7e16ef5c278b92b840532082da373019761c1f447e820b2b6425ff99fd2557208bb6967a248d699dc786a1a8cac2c23bb3b883661cf379fbeb12ee2f1b47520efb1d4ee5f54670dd11b79ef5d96ce1f52a122855f8",
        },
      });
      const resData = await res.json();
      setData(resData.data?.attributes);
      setLoading(false);
    }
    fetchData();
  }, [url]);

  return { data, loading };
};

export default UseFetch;
