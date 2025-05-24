import { AddToCartButton, CounterButton } from "./AddToCart";

export default function MenuBar({ menu, cartItems, setCartItems }) {
  const handleSetCount = (itemName, newCount, price, image) => {
    setCartItems((prevCounts) => {
      if (newCount === 0) {
        return prevCounts.filter((item) => item.name !== itemName);
      } else {
        const existingItem = prevCounts.find((item) => item.name === itemName);

        if (existingItem) {
          return prevCounts.map((item) =>
            item.name === itemName ? { ...item, count: newCount } : item
          );
        } else {
          return [
            ...prevCounts,
            { name: itemName, count: newCount, price, image },
          ];
        }
      }
    });
  };

  const getItemCount = (itemName) => {
    const item = cartItems.find((countItem) => countItem.name === itemName);
    return item ? item.count : 0;
  };

  return (
    <div className="pb-24 flex-[0.7]">
      <h1 className="text-3xl mb-6 font-bold text-[#1a0b0a]">Dessert</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {menu.map((item) => {
          const count = getItemCount(item.name);
          return (
            <div key={item.name} className={`mb-6 w-full md:w-[250px] rounded-lg`}>
              <div
                className={`relative ${
                  count ? "border-2 border-[#9e2b13] rounded-lg" : ""
                }`}
              >
                <img
                  src={item.image.desktop}
                  alt={item.displayName}
                  className="rounded-lg w-full h-auto"
                />
                {count ? (
                  <CounterButton
                    key={item.name}
                    count={count}
                    setCount={(newCount) =>
                      handleSetCount(
                        item.name,
                        newCount,
                        item.price,
                        item.image.tablet
                      )
                    }
                  />
                ) : (
                  <AddToCartButton
                    key={item.name}
                    setCount={() =>
                      handleSetCount(
                        item.name,
                        1,
                        item.price,
                        item.image.tablet
                      )
                    }
                  />
                )}
              </div>
              <div className="mt-9 space-y-0.5">
                <p className="text-gray-500 text-sm">{item.category}</p>
                <h2 className="text-[16px] text-[#2B1714] font-semibold">
                  {item.displayName}
                </h2>
                <p className="text-sm text-[#c73817] font-bold">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
