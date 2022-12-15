import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Autorization: "ba51e6095ee7484f934818e8c0ce7a12",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.results);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}
