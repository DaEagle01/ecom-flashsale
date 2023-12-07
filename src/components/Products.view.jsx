import ProductDetailView from "../components/ProductDetailView.view";
import ProductCard from "./ProductCard.view";
import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [productIndex, setProductIndex] = useState(0);

    useEffect(() => {
        fetch("./products.JSON")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const product1 = products[productIndex + 0];
    const product2 = products[productIndex + 1];
    const product3 = products[productIndex + 2];
    const product4 = products[productIndex + 3];

    const handlePreviousProduct = () => {
        setProductIndex(pre => pre + 1)
    }

    const handleNextProduct = () => {
        setProductIndex(pre => pre - 1)
    }

    return (
        <div className="relative">
            {productIndex !== products.length - 1 && (
                <div
                    className="shadow-md absolute top-[6rem] right-[0rem] p-[0.25rem] rounded-full z-20 bg-white cursor-pointer"
                    onClick={handlePreviousProduct}
                >
                    <MdArrowForwardIos className="text-sm text-gray-400" />
                </div>
            )}
            {productIndex !== 0 && (
                <div
                    className="shadow-md absolute top-[6rem] left-[0rem] p-[0.25rem] rounded-full z-20 bg-white cursor-pointer"
                    onClick={handleNextProduct}
                >
                    <MdArrowBackIos className="text-sm text-gray-400" />
                </div>
            )}
            <div className="flex h-[13.75rem]">
                <div className="flex-shrink-0 w-[34%] h-full bg-white box-border mr-[0.12rem]">
                    <ProductDetailView product={products[productIndex]} />
                </div>
                <div className="flex-0 flex-shrink-0 w-[65%] h-full flex flex-col">
                    <div className="flex w-full box-border mr-[0.12rem]">
                        {product1?.name && (
                            <div className="flex-shrink-0 w-1/2 bg-white box-border mr-[0.12rem] mb-[0.12rem]">
                                <ProductCard product={product1} />
                            </div>
                        )}
                        {product2?.name && (
                            <div className="flex-shrink-0 w-1/2 bg-white box-border mr-[0.12rem] mb-[0.12rem]">
                                <ProductCard product={product2} />
                            </div>
                        )}
                    </div>
                    <div className="flex w-full box-border mr-[0.12rem]">
                        {product3?.name && (
                            <div className="flex-shrink-0 w-1/2 bg-white box-border mr-[0.12rem] mb-[0.12rem]">
                                <ProductCard product={product3} />
                            </div>
                        )}
                        {product4?.name && (
                            <div className="flex-shrink-0 w-1/2 bg-white box-border mr-[0.12rem] mb-[0.12rem]">
                                <ProductCard product={product4} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;