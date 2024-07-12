import { useSelector } from "react-redux";
import BagItems from "../components/BagItems.jsx";
import BagSummary from "../components/BagSummary.jsx";

const Bag = () => {
  const bagItems = useSelector((store) => store.bagItems);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const index = bagItems.indexOf(item.id);
    return index >= 0;
  });

  return (
    <div className="main-cart">
      <div className="cart">
        <div className="product-details-container">
          <span className="product-details-text">Product Details</span>
        </div>
        {finalItems.map((items) => (
          <BagItems key={items.id} items={items} />
        ))}
      </div>
      <BagSummary></BagSummary>
    </div>
  );
};
export default Bag;
