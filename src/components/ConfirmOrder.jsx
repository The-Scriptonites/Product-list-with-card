import { OrderTotal } from "./CartItems";

export default function ConfirmOrder({ cartItems, handleClearOrder }) {
    <div className="overflow-hidden z-[9999] fixed inset-0 flex flex-col items-center justify-center  bg-black/50">
      <div className="bg-[#fff] h-fit w-[90%] max-w-[500px] p-6 rounded-lg">
        <div className="flex flex-col space-y-2">
          <img
            src="./assets/images/icon-order-confirmed.svg"
            alt="Confirm Order"
            srcset=""
            width={30}
          />
          <h1 className="text-3xl tracking-wider font-bold text-[#3e1107]">
            Order Confirmed
          </h1>
          <p className="mb-5 text-[14px] text-[#3e1107]">
            We hope you enjoy your food!
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-[#fdf6f4] rounded-lg p-4">
          {cartItems.map((item, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={item.image} width={35} alt={item.name}></img>
                  <div className="space-y-2 flex flex-col">
                    <h2 className="font-semibold text-[12px">{item.name}</h2>
                    <div className="flex space-x-3">
                      <span className="text-[#de4527]">{item.count}x</span>
                      <span className="text-[#cdaea4]">
                        @ ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-[#2B1714] font-semibold">
                  ${(item.count * item.price).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
          <OrderTotal
            total={() =>
              cartItems
                .reduce((sum, item) => {
                  return sum + item.count * item.price;
                }, 0)
                .toFixed(2)
            }
          />
        </div>
        <button
          onClick={handleClearOrder}
          className="mt-12 w-full bg-[#de4527] font-semibold text-lg py-3 rounded-full text-[#fceae5] hover:bg-[#c73817] transition duration-200"
        >
          Start New Order
        </button>
      </div>
    </div>;
}