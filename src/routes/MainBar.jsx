import SideBar from "../components/SideBar";
import { useSelector } from "react-redux";
import MainItems from "./MainItems";

const MainBar = () => {
  const items = useSelector((store) => store.items);

  return (
    <div className="main-container">
      <SideBar></SideBar>
      <div className="main">
        {items.map((items) => (
          <MainItems key={items.id} items={items} />
        ))}
      </div>
    </div>
  );
};

export default MainBar;
