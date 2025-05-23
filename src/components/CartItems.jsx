function CartEmpty() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img src="./assets/images/illustration-empty-cart.svg"></img>
      <p className="text-gray-500 font-semibold text-center pb-4">
        Your added items will appear here
      </p>
    </div>
  );
}

export function OrderTotal({ total }) {
  return (
    <div className="flex justify-between items-center pt-4  border-gray-300">
      <span className="font-normal">Order Total:</span>
      <span className="font-bold text-2xl text-[#1a0b0a]">${total()}</span>
    </div>
  );
}

export default function CartItems({
  setConfirmOrder,
  cartItems,
  setCartItems,
}) {
  function calculateSum() {
    return cartItems
      .reduce((sum, item) => {
        return sum + item.count * item.price;
      }, 0)
      .toFixed(2);
  }

  return (
    <div className="z-[9999] flex-[0.3] flex flex-col gap-5 bg-[#fff] h-fit rounded-lg p-5 shadow-lg">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold text-[#de4527]">
          Your Cart ({cartItems.length})
        </h1>
        {cartItems.length === 0 ? (
          // Cart is Empty
          <CartEmpty />
        ) : (
          //   Cart is Not Empty
          <div className="flex flex-col gap-4">
            {cartItems.map((item, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <div className="flex w-full items-center justify-between">
                  <div className="space-y-2">
                    <h2 className="font-semibold text-[14px]">
                      {item.name}
                    </h2>
                    <div className="flex space-x-3">
                      <span className="text-[#de4527]">{item.count}x</span>
                      <span className="text-[#cdaea4]">
                        @ ${item.price.toFixed(2)}
                      </span>
                      <span className="text-[#2B1714] font-semibold">
                        ${(item.count * item.price).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    className="border-2 cursor-pointer p-[3px] hover:border-[hsl(14, 65%, 9%)] rounded-full"
                    onClick={() =>
                      setCartItems((prev) =>
                        prev.filter((cartItem) => cartItem.name !== item.name)
                      )
                    }
                  >
                    <img
                      src="./assets/images/icon-remove-item.svg"
                      alt="remove"
                    />
                  </button>
                </div>
              </div>
            ))}
            <OrderTotal total={() => calculateSum()} />
            <p className="rounded-lg flex justify-center items-center gap-1.5 text-center p-5 bg-[#fdf6f4]">
              <img src="./assets/images/icon-carbon-neutral.svg"></img>
              <span>
                This is a{" "}
                <span className="font-semibold text-[#3e1107]">
                  carbon-neutral{" "}
                </span>{" "}
                delivery
              </span>
            </p>

            <button
              onClick={() => setConfirmOrder((prev) => !prev)}
              className="bg-[#de4527] font-semibold text-lg py-3 rounded-full text-[#fceae5] hover:bg-[#c73817] transition duration-200"
            >
              Confirm Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
