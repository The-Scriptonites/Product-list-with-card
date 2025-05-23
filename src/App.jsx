import { useState } from "react";
import MenuBar from "./components/MenuBar";
import CartItems from "./components/CartItems";
import { useEffect } from "react";
import ConfirmOrder from "./components/ConfirmOrder";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [confirmOrder, setConfirmOrder] = useState(false);

  function handleClearOrder() {
    setCartItems([]);
    setConfirmOrder(false);
  }

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("./data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="bg-[#fdf6f4] w-full h-fit">
      <div className="flex h-full pt-10 w-[90%] mx-auto max-w-[1200px]">
        <MenuBar
          menu={menuItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        <CartItems
          setConfirmOrder={setConfirmOrder}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      </div>
      {confirmOrder && (
        <ConfirmOrder
          cartItems={cartItems}
          handleClearOrder={handleClearOrder}
        />
      )}
    </div>
  );
}

export default App;
