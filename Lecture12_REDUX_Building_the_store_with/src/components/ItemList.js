import { CDN_URL } from "../utils/constants";

const AddButton = (whetherToShowAddButton, item) => {
  // item = item;
  console.log(item)
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    //Wanna dispatch an action
    //suppose i pass pizza as an arguement to the AddItems , then the pizza will get as an payload.
    dispatch(addItems(item))
    /*
      Now, the redux creat an object
      {
        payload : "pizza"
      }
    */
   setAddItem("Item Added")
}
const [AddItem , setAddItem] = useState("Add +")
return (
  <div>
    {
    whetherToShowAddButton.whetherToShowAddButton===true && <button
    className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
    //The below method is wrong
    // onClick={handleAddItem(item)}
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
              <AddButton whetherToShowAddButton ={ true} item ={item} />
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;