import { Link } from "react-router-dom";
import Container from "./Container";
import cartImg from "../assets/Special Offer 4.png";

const AddtoCart = () => {
  return (
    <>
      <section className="py-[64px]">
        <Container>
          <div className="text-[#262626] font-sans font-bold text-[49px]">
            Cart
          </div>
          <div className="text-[#767676] font-sans font-normal text-[12px]">
            <Link to="/">Home</Link> &gt; <Link to="/cart">Cart</Link>
          </div>
          <div className="flex mt-[64px] py-[32px] px-[20px] bg-[#F5F5F3]">
            <div className="w-4/12 text-[#262626] font-sans font-bold text-[16px]">
              Product
            </div>
            <div className="w-2/12 text-[#262626] font-sans font-bold text-[16px]">
              Price
            </div>
            <div className="w-3/12 text-[#262626] font-sans font-bold text-[16px]">
              Quantity
            </div>
            <div className="w-3/12 text-[#262626] font-sans font-bold text-[16px]">
              Total
            </div>
          </div>
          <div className="flex items-center px-[20px] py-[30px] border-x-[1px] border-x-[#F0F0F0]">
            <div className="w-4/12 flex items-center">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M6.89545 5L9.73835 2.1571C10.0872 1.80824 10.0872 1.24261 9.73835 0.893466L9.10653 0.261648C8.75767 -0.0872159 8.19205 -0.0872159 7.8429 0.261648L5 3.10455L2.1571 0.261648C1.80824 -0.0872159 1.24261 -0.0872159 0.893466 0.261648L0.261648 0.893466C-0.0872159 1.24233 -0.0872159 1.80795 0.261648 2.1571L3.10455 5L0.261648 7.8429C-0.0872159 8.19176 -0.0872159 8.75739 0.261648 9.10653L0.893466 9.73835C1.24233 10.0872 1.80824 10.0872 2.1571 9.73835L5 6.89545L7.8429 9.73835C8.19176 10.0872 8.75767 10.0872 9.10653 9.73835L9.73835 9.10653C10.0872 8.75767 10.0872 8.19205 9.73835 7.8429L6.89545 5Z"
                    fill="#262626"
                  />
                </svg>
              </div>
              <div className="w-[100px] h-[100px] ml-[40px] mr-[20px]">
                <img src={cartImg} alt="" className="w-full" />
              </div>
              <div className="text-[#262626] font-sans font-bold text-[16px]">
                Product name
              </div>
            </div>
            <div className="w-2/12">
              <div className="text-[#262626] font-sans font-bold text-[16px]">
                $44.00
              </div>
            </div>
            <div className="w-3/12">
              <div className="flex justify-between w-[139px] border border-[#F0F0F0] px-[21px] py-[3px] text-[#767676] font-sans font-normal text-[16px]">
                <div className="">-</div>
                <div className="">1</div>
                <div className="">+</div>
              </div>
            </div>
            <div className="w-3/12">
              <div className="text-[#262626] font-sans font-bold text-[16px]">
                $44.00
              </div>
            </div>
          </div>
          <div className="flex items-center border-[1px] border-[#F0F0F0] p-[20px]">
            <select className="w-[255px] bg-[transparent] border border-[#EAEAEA] text-[#767676] text-[16px] font-sans font-normal py-[10px] pl-[21px]">
              <option value="Size">Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <div className="text-[#262626] font-sans font-bold ml-[23px] text-[14px]">
              Apply coupon
            </div>
            <div className="text-[#262626] ml-auto font-sans font-bold text-[14px]">
              Update cart
            </div>
          </div>
          <div className="text-end mt-[54px] mb-[24px] text-[#262626] text-[20px] font-sans font-bold">
            Cart totals
          </div>
          <div className="flex w-5/12 ml-auto border border-[#F0F0F0]">
            <div className="w-1/2 text-[#262626] text-[16px] font-sans font-bold border-r border-r-[#F0F0F0]">
              <div className="pl-[20px] pt-[17px] pb-[14px] border-b border-b-[#F0F0F0]">
                Subtotal
              </div>
              <div className="pl-[20px] pt-[17px] pb-[14px] ">Total</div>
            </div>
            <div className="w-1/2 text-[16px] font-sans">
              <div className="text-[#767676] font-normal pl-[20px] pt-[17px] pb-[14px] border-b border-b-[#F0F0F0]">
                $ 389.99
              </div>
              <div className="text-[#262626] font-normal pl-[20px] pt-[17px] pb-[14px]">
                $ 389.99
              </div>
            </div>
          </div>
          <div className="w-[200px] h-[50px] leading-[50px] text-center mt-[30px] ml-auto bg-black text-white font-sans text-[14px] font-bold cursor-pointer">
            Proceed to Checkout
          </div>
        </Container>
      </section>
    </>
  );
};

export default AddtoCart;