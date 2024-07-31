import Test from "./Test";
import useFetch from "./useFetch";

const About = () => {
  const {
    data: blogs,
    test,
    error,
    handleDelete,
  } = useFetch("http://localhost:8000/post");
  return (
    <div className="about">
      {error && <div className="error">{error}</div>}
      {test && <div className="test">Loading..</div>}
      {blogs && (
        <Test blogs={blogs} title="New Info" handleDelete={handleDelete} />
      )}
    </div>
  );
};

export default About;
