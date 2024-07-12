import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { bagItemsAction } from "../store/bagItemsSlice";

const BagItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleRemoveFromBag = () => {
    dispatch(bagItemsAction.removeFromBag(items.id));
  };

  return (
    <div className="bag-items-outer-container">
      <div className="bag-items-container">
        <div className="item-img-container">
          <img className="bag-item-img" src={items.img} alt="item-img" />
        </div>
        <div className="item-container">
          <div className="item-info">
            <span className="item-name">{items.name}</span>
            <span className="item-price">₹{items.price}</span>
            <span className="return-text">All issue easy returns allowed</span>
            <span className="size-text">Size:Free Size Qty:1</span>
            <div className="remove" onClick={handleRemoveFromBag}>
              <CloseIcon></CloseIcon>
              <span className="remove-text">Remove</span>
            </div>
          </div>

          <div className="sold-by-container">
            <span className="sold-by-text">
              Sold by:BODY CUPID PRIVATE LIMITED
            </span>
            <span className="free-delivery">Free Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BagItems;
