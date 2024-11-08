import featured from "../../assets/landing-page/featured/featured.svg"
const Featured = () => {
  return (
    <div className="screen-max-width py-12 flex ">
      <img src={featured} alt="featured" className="w-[60%]" />
      <div className="flex-1  bg-[#DADADA]">
        <p>Women Collection</p>
        <p>Peaky Blinders</p>
        <p>DESCRIPTION</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Scelerisque duis.
        </p>
        <div>
          <p>
            Size: <div className="bg-black text-white ">M</div>
          </p>
          <p className="text-lg text-black">$100.00</p>
        </div>
        <button className="px-4 mt-10 w-fit py-2 bg-[#000000] text-white rounded hover:bg-[#000000]/50 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Featured