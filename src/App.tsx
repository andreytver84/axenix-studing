import "./App.css";
import ItemList from "./components/ItemList";

export interface IItem {
  id: number;
  name: string;
}

export interface IUser extends IItem {
  age: number;
}

export interface IProduct extends IItem {
  price: number;
}

export interface IOrder extends IItem {
  products_id: number[];
  user_id?: number | null;
}

type usersData = IUser[];
type productsData = IProduct[];
type odersData = IOrder[];

const dataUsers: usersData = [
  { id: 1, name: "Ivan", age: 42 },
  { id: 2, name: "Sasha", age: 22 },
  { id: 3, name: "Petr", age: 35 },
  { id: 4, name: "Olga", age: 31 },
];

const dataProducts: productsData = [
  { id: 1, name: "Boots Nike", price: 420 },
  { id: 2, name: "Boots Puma", price: 720 },
  { id: 3, name: "Boots Reebok", price: 450 },
];

const dataOrders: odersData = [
  { id: 1, products_id: [1, 3], name: "Ivan", user_id: 1 },
  { id: 2, products_id: [2], name: "Sasha", user_id: 2 },
  { id: 3, products_id: [2, 2, 3], name: "Petr", user_id: 3 },
  { id: 4, products_id: [1], name: "Ivan", user_id: 1 },
];

function App() {
  return (
    <>
      <div>
        <h3>Customers</h3>
        <ItemList items={dataUsers} />
      </div>
      <div>
        <h3>Products</h3>
        <ItemList items={dataProducts} />
      </div>
      <div>
        <h3>Orders</h3>
        <ItemList items={dataOrders} />
      </div>
    </>
  );
}

export default App;
