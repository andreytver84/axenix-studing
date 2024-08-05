import { IUser } from "../App";

type List<T> = {
  items: T[];
};

const ItemList = <T extends IUser>({ items }: List<T>) => {
  return (
    <div>
      <ul>
        {items.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
