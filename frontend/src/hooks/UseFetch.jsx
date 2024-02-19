import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Bearer 37053392ff8658f5e04ab61a5865149f23a5d84c27b5cdb864652de68eeba912b673690abcf82048cfee5dfbfd8757c513bbd943996354ef1475bc14667c616f1711795f925a45e637bdb0d464f482434f94f33369b60ff084865d4dedee42e28c74ac6115dc36da39613b81ea6f4566a7736546a4d2b7f19c5017b71f8d4215",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const resData = await res.json();
        setData(resData?.data?.attributes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
