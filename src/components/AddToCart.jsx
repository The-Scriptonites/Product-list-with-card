export function AddToCartButton({ setCount }) {
  return (
    <button
      onClick={() => setCount((prevCount) => prevCount + 1)}
      className="z-[9999] flex items-center bg-[#ffff] justify-center gap-2 absolute bottom-[-20px] left-[15%] w-[70%] py-2 rounded-full border border-[#de4527] hover:bg-[#de4527] hover:text-white outline-none transition-colors cursor-pointer group"
    >
      <img
        src="./assets/images/icon-add-to-cart.svg"
        className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all"
      ></img>
      <span className="font-semibold">Add to Cart</span>
    </button>
  );
}

//  sure i get...


export function CounterButton({ count, setCount }) {
  return (
    <div className="z-[9999] flex items-center justify-between absolute bottom-[-20px] left-[15%] w-[70%] py-2 rounded-full border border-[#de4527] bg-[#de4527] ">
      <button
        onClick={() => setCount(count - 1)}
        disabled={count === 0}
        className={` text-white rounded-full w-4 h-4 border cursor-pointer flex items-center justify-center ml-2`}
      >
        <img src="./assets/images/icon-decrement-quantity.svg"></img>
      </button>
      <span className="text-white">{!count ? "0" : count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className=" rounded-full border border-[white] w-4 h-4 mr-3 flex items-center justify-center cursor-pointer"
      >
        <img
          src="./assets/images/icon-increment-quantity.svg"
          alt="increment"
          className=""
        ></img>
      </button>
    </div>
  );
}
