import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const bag = useSelector((store) => store.bagItems);
  return (
    <header>
      <div className="container_1">
        <Link to="/" className="logo_container">
          <img className="logo" src="public/meesho5755.png" alt="meesho logo" />
        </Link>
        <div className="search_bar_container">
          <div className="search_icon">
            <img src="public/search.png" alt="search" />
          </div>
          <input
            className="search_input"
            type="text"
            placeholder="Try Saree,Kurti or Search by Product Code"
          />
        </div>
        <a href="#" className="download_container">
          <div className="mobile_icon">
            <img src="public/mobile.png" alt="mobile" />
          </div>
          <span className="download_text"> Download App</span>
        </a>
        <div className="nav_bar">
          <nav>
            <div className="become_supplier_container">
              <a href="#" className="become_supplier_text">
                Become a Supplier
              </a>
              <a href="#" className="news_room_text">
                Newsroom
              </a>
            </div>
          </nav>
        </div>
        <div className="profile_action_bar">
          <div className="profile_container">
            <div className="profile_icon">
              <img src="public/user.png" alt="user" />
            </div>
            <div className="profile-text">
              <span className="profile-text">Profile</span>
            </div>
          </div>
          <div className="cart_container">
            <Link to="/bag" className="cart_icon">
              <img src="public/cart.png" alt="cart" />
            </Link>
            <div className="cart-text">
              <span className="cart-font">Cart</span>
            </div>
            <span className="bag-item-count">{bag.length}</span>
          </div>
        </div>
      </div>

      <div className="container_2">
        <span className="container2_text">Women Ethnic</span>
        <span className="container2_text">Women Western</span>
        <span className="container2_text">Men</span>
        <span className="container2_text">Kids</span>
        <span className="container2_text">Home & Kitchen</span>
        <span className="container2_text">Beauty & Health</span>
        <span className="container2_text">Jewellery & Accessories</span>
        <span className="container2_text">Bags & Footwear</span>
        <span className="container2_text">Electronics</span>
      </div>
    </header>
  );
};
export default Header;
