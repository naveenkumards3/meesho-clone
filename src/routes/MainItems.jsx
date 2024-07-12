import { useDispatch, useSelector } from "react-redux";
import { bagItemsAction } from "../store/bagItemsSlice";

const MainItems = ({ items }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bagItems);

  const elementFound = bagItems.indexOf(items.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagItemsAction.addToBag(items.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagItemsAction.removeFromBag(items.id));
  };

  return (
    <div className="main-items-container">
      <img className="item-img" src={items.img} alt="item-img" />
      <div className="item-name">{items.name}</div>
      <div className="price-container">
        <span className="price">₹{items.price}</span>
        <span className="onwards-text">onwards</span>
      </div>
      <div className="free-delievery-container">
        <span className="free-delievery-text">Free Delievery</span>
      </div>
      <div className="rating-outer-container">
        <div className="rating-container">
          <span className="rating-number">{items.rating}</span>
          <img className="rating-img" src="public/starImg.png" alt="star" />
        </div>
        <div>
          <span className="reviews">{items.reviews}</span>
        </div>
      </div>
      <div className="button-container">
        {elementFound ? (
          <button className="remove-button" onClick={handleRemoveFromBag}>
            {" "}
            <img className="cross-img" src="public/crossImg.jpg" alt="remove" />
            Remove From Cart
          </button>
        ) : (
          <button className="add-button" onClick={handleAddToBag}>
            {" "}
            <img
              className="cart-button-img"
              src="public/purpleCart.png"
              alt="cart"
            />
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};
export default MainItems;
