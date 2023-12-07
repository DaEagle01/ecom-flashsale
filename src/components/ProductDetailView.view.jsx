import OfferBG from "../assets/OfferBG.svg";
import { LuHeart } from "react-icons/lu";

const ProductDetailView = (props) => {
    const { product } = props;

    return (
        <div className="relative pt-[0.31rem] px-[0.37rem]">
            <div className="shadow-md absolute top-[0.5rem] right-[0.5rem] p-[0.25rem] rounded-full">
                <LuHeart className="text-sm text-gray-400" />
            </div>
            <div className="w-full h-[7.125rem] pb-[0.63rem]">
                <img src={product?.image} alt="" className="w-full h-full" />
            </div>
            <div className="">
                <div
                    className="w-[3.2rem] bg-cover bg-center box-border mb-[0.62rem]"
                    style={{ backgroundImage: `url(${OfferBG})` }}
                >
                    <p className="text-white font-['Inter'] text-[0.5rem] font-medium leading-[130%] px-[0.46rem] py-[0.19rem] bg-orange-500] text-center">
                        {product?.offerPercentage}% Off
                    </p>
                </div>
                <p className="text-neutral-900 font-['Inter'] text-[0.675rem] font-medium leading-[130%]">
                    {product?.name}
                </p>
                <div className="inline-flex items-center gap-[0.37rem]">
                    <p className="text-orange-500 font-['Inter'] text-xs font-semibold leading-[130%]">৳ {product?.currentPrice}</p>
                    <p className="text-[#5a5a5a] font-['Inter'] line-through text-[0.5rem] leading-[130%]">৳ {product?.previousPrice}</p>

                </div>
            </div>
        </div>
    )
}

export default ProductDetailView;