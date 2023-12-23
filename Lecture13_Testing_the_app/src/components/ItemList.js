import { CDN_URL } from "../utils/constants";

const AddButton = ({whetherToShowAddButton, item}) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item))
    console.log(item)
   setAddItem("Item Added")
}
const [AddItem , setAddItem] = useState("Add +")
return (
  <div>
    {
    whetherToShowAddButton===true && <button
    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
    onClick={() => handleAddItem(item)}
  >
    {AddItem}
  </button>
}
  </div>
)
}
import { useDispatch } from "react-redux";
import { addItems } from "../utils/Slices/cartSlice";
import { useState } from "react";


const ItemList = ({ items, dummy , whetherToShowAddButton}) => {
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <AddButton whetherToShowAddButton ={ whetherToShowAddButton} item ={item} />
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;