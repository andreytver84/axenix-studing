import "./App.css";
import ItemList from "./components/ItemList";

export interface IUser {
  id: number;
  name: string;
  age: number;
}

//export interface IBook {
//   id: number;
//   title: string;
//   page: string;
// }

type usersData1 = IUser[];
// type usersData2 = IBook[];

const data1: usersData1 = [
  { id: 1, name: "Ivan", age: 42 },
  { id: 2, name: "Sasha", age: 22 },
  { id: 3, name: "Petr", age: 35 },
  { id: 4, name: "Olga", age: 31 },
];

// const data2: usersData2 = [
//   { id: 1, title: "book1", page: "42" },
//   { id: 2, title: "book2", page: "22" },
//   { id: 3, title: "book3", page: "35" },
//   { id: 4, title: "book4", page: "31" },
// ];

function App() {
  return (
    <>
      <ItemList items={data1} />
    </>
  );
}

export default App;
