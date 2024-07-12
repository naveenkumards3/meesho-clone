import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItems = useSelector((store) => store.bagItems);
  const items = useSelector((store) => store.items);

  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  let totalMRP = 0;
  let totalDiscount = 5;
  const additionalFees = 64;
  let finalPayment = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.price;
    totalDiscount = Math.floor(totalMRP * (5 / 100));
    finalPayment = totalMRP - totalDiscount + additionalFees;
  });

  return (
    <>
      <div className="bag-summary-container">
        <div className="price-details-text">
          <span>Price Details</span>
          <span className="items-length">({bagItems.length} Items)</span>
        </div>
        <div className="item-price-container">
          <span className="item-price-text">Total Product Price</span>
          <span className="item-price">+₹{totalMRP}</span>
        </div>
        <div className="item-price-container green-text">
          <span className="item-price-text">Total Discounts</span>
          <span className="item-price">-₹{totalDiscount}</span>
        </div>
        <div className="item-price-container">
          <span className="item-price-text">Additional Fees</span>
          <span className="item-price">+₹{additionalFees}</span>
        </div>
        <hr />
        <div className="item-price-container">
          <span className="item-price-text bold-text">Order Total</span>
          <span className="item-price bold-text">₹{finalPayment}</span>
        </div>
        <div className="discount-container">
          <img
            className="discount-img"
            src="public/discountImg.png"
            alt="discountImg"
          />
          <span className="discount-text">
            Yay! Your total discount is ₹{totalDiscount}
          </span>
        </div>
        <div className="continue-container">
          <div className="continue-text-container">
            {" "}
            <span className="continue-text">
              Clicking on `Continue` will not deduct any money
            </span>
          </div>

          <button className="continue-button">Continue</button>
        </div>
        <div>
          <img
            className="meesho-safe-img"
            src="public/bagSummaryImg.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default BagSummary;
