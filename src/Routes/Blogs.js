import { useParams } from "react-router-dom";

const Blogs = () => {
  const { id } = useParams;
  return (
    <div className="Blogs">
      <h2>Blogs-{id}</h2>
    </div>
  );
};

export default Blogs;
