import { IItem } from "../App";

type List<T> = {
  items: T[];
};

const ItemList = <U extends IItem>({ items }: List<U>) => {
  return (
    <div>
      <ul>
        {items.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
