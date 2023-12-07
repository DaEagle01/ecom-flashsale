const ProductCard = (props) => {
    const { product } = props;

    return (
        <div className="pt-[0.31rem] pb-[0.88rem] rounded">
            <div className="w-[4.125rem] h-[4.125rem] mx-auto mb-[0.62rem]">
                <img src={product?.image} alt="" className="w-full h-full" />
            </div>
            <p className="text-neutral-900 font-['Inter'] text-[0.675rem] font-medium leading-[130%] text-center">
                {product?.name}
            </p>
        </div>
    )
}

export default ProductCard