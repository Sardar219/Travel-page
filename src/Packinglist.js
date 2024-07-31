const Packinglist = () => {
  const initItems = [
    {
      id: 1,
      description: " Passport",
      quantity: 1,
      packed: false,
    },
    {
      id: 2,
      description: " Socks",
      quantity: 20,
      packed: true,
    },
    {
      id: 3,
      description: " Charger",
      quantity: 2,
      packed: false,
    },
  ];
  return (
    <div className="Packinglist">
      <ul>
        {initItems.map((item) => (
          <li key={item.id}>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity}
              {item.description}
            </span>
            <button>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Packinglist;
