interface Iuser {
  id: number;
  name: string;
  age: number;
}

type usersData = Iuser[];

const data: usersData = [
  { id: 1, name: "Ivan", age: 42 },
  { id: 2, name: "Sasha", age: 22 },
  { id: 3, name: "Petr", age: 35 },
  { id: 4, name: "Olga", age: 31 },
];

const ItemList = () => {
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
