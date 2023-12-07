import Products from "../../../components/Products.view"
import Timer from "./Timer.view"
import ExpandIcon from "../../../assets/Expand_right.svg";

const FlashSale = () => {
    const flashSaleText = "text-orange-500 font-['Inter'] text-sm leading-[130%]";

    return (
        <div className="py-[0.5rem] px-[0.375rem]">
            <div className="py-[0.5rem] px-[0.375rem] justify-between items-center flex mb-[0.06rem] bg-white rounded">
                <div className="justify-start items-center flex gap-2.5">
                    <p className={flashSaleText}>Flash Sale</p>
                    <div><Timer /></div>
                </div>
                <div className="justify-start items-center flex">
                    <p className="text-[0.625rem] text-orange-500 font-['Inter'] font-medium leading-[130%]">
                        See More
                    </p>
                    <div>
                        <img src={ExpandIcon} alt="" />
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default FlashSale