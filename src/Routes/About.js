import { useState } from "react";
const About = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      name: "Sardar",
      lastName: "Hossaini",
      classYear: "4th year",
      age: 23,
      email: "sardarhossaini@gmail.com",
    },
    {
      id: 2,
      name: "Hamid",
      lastName: "Refayi",
      classYear: "4th year",
      age: 23,
      email: "hamidrefayi@gmail.com",
    },
    {
      id: 3,
      name: "Zekrullah",
      lastName: "Askari",
      classYear: "4th year",
      age: 21,
      email: "zekrullahaskari@gmail.com",
    },
    {
      id: 4,
      name: "mahdi",
      lastName: "Hussaini",
      classYear: "4th year",
      age: 23,
      email: "mahdihussaini@gmail.com",
    },
  ]);
  return (
    <div className="About">
      {blogs.map((blog) => (
        <div className="info" key={blog.id}>
          <h2 className="name">
            {blog.name} {blog.lastName}
          </h2>
          <h5>{blog.email}</h5>
          <p>
            {blog.classYear} {blog.age}
          </p>
        </div>
      ))}
    </div>
  );
};

export default About;
