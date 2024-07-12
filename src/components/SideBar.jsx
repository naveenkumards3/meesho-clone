import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SideBar = () => {
  return (
    <div className="side-bar-container">
      <div className="heading">
        <span>Products For You</span>
      </div>
      <div className="sort-by-container">
        <span className="sort-by-text">Sort by :</span>
        <span className="relevance-text">Relevance</span>
        <ExpandMoreIcon />
      </div>
      <div className="filter-container">
        <div className="filter-text-container">
          <div className="filter">
            <span className="filter-text">FILTERS</span>
          </div>
          <div>
            <span className="products-text">1000+ Products</span>
          </div>
        </div>
        <div className="filter-container-1">
          <div className="filters">
            <span className="filters-text">Category</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Gender</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Color</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Fabric</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Dail Shape</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Size</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Price</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Rating</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Occassion</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Kurta Fabric</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Combo</span>
            <ExpandMoreIcon />
          </div>
          <div className="filters">
            <span className="filters-text">Discount</span>
            <ExpandMoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
