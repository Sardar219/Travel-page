import { useState } from "react";
import { useEffect } from "react";
import "./home.css";
import Test from "./Test";
const Home = () => {
  const [blogs, setBlogs] = useState(
    null
    //  [
    //   {
    //     id: 1,
    //     book: "Python",
    //     author: "Sardar Hossaini & Reza Ahmadi",
    //     page: 893,
    //   },
    //   {
    //     id: 2,
    //     book: "JavaScript",
    //     author: "Zekrullah & Mahdi Hossaini",
    //     page: 747,
    //   },
    //   {
    //     id: 3,
    //     book: "React",
    //     author: "Bassir Payenda & Najib Jafari",
    //     page: 523,
    //   },
    //   {
    //     id: 4,
    //     book: "Python",
    //     author: "Ali & Reza Ahmadi",
    //     page: 634,
    //     },]
  );
  const handleDelete = (id) => {
    const newlist = blogs.filter((blog) => blog.id !== id);
    setBlogs(newlist);
  };
  useEffect(() => {
    fetch("http://localhost:8000/post")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className="home">
      {blogs && (
        <Test
          blogs={blogs}
          title="Books Information"
          handleDelete={handleDelete}
        />
      )}

      {/* <Test
        blogs={blogs.filter((blog) => blog.book === "Python")}
        title="Python Books Information"
        handleDelete={handleDelete}
      /> */}
    </div>
  );
};

export default Home;
