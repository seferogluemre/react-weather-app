import { useEffect, useState } from "react";

function fetchData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userFetchData = async () => {
     try {
        const response = await fetch(url);
        const userData = await response.json();
        setData(userData);
     
      } catch (error) {
        setError(error);
      }
    };
    userFetchData();
  }, [url]);
  return { data, error };
}

export default fetchData;