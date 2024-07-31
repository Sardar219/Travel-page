import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(null);
  const [test, setTest] = useState(true);
  const [data, setData] = useState(null);
  const handleDelete = (id) => {
    let newBlogs = data.filter((blog) => blog.id !== id);
    setData(newBlogs);
  };
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw Error("Fetch failed Error");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setTest(false);
        })
        .catch((error) => {
          setTest(false);
          setError(error.message);
        });
    }, 1000);
  }, [url]);

  return { data, test, error, handleDelete };
};

export default useFetch;
