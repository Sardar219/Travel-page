const From = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="Form">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <h6>What do you need for your 🥰 trip</h6>
        <select name="number" id="number">
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Item ..." />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default From;
