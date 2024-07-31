const Test = ({ blogs, title, handleDelete }) => {
  return (
    <div className="test">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="books" key={blog.id}>
          <h3>{blog.book}</h3>
          <p>
            {blog.author} {blog.page}
          </p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Test;
