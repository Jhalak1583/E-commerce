import React, { useContext, useState } from 'react';
import product_rt_1 from "../assets/product_rt_1.png";
import product_rt_2 from "../assets/product_rt_2.png";
import product_rt_3 from "../assets/product_rt_3.png";
import product_rt_4 from "../assets/product_rt_4.png";
import { MdStar } from 'react-icons/md';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const [selectedSize, setSelectedSize] = useState(null);
    const {addToCart} = useContext(ShopContext);

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <section>
            <div className='flex flex-col gap-14 xl:flex-row'>
                <div className='flex gap-x-2'>
                    <div className='flex flex-col gap-[7px] flex-wrap'>
                        <img src={product_rt_1} alt="ProdImg" className='max-h-[99px]' />
                        <img src={product_rt_2} alt="ProdImg" className='max-h-[99px]' />
                        <img src={product_rt_3} alt="ProdImg" className='max-h-[99px]' />
                        <img src={product_rt_4} alt="ProdImg" className='max-h-[99px]' />
                    </div>
                    <div>
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
                <div className='flex-col flex'>
                    <h3 className='h3'>{product.name}</h3>
                    <div className='flex gap-x-2 text-secondary medium-22'>
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <p>(111)</p>
                    </div>
                    <div className='flex gap-x-6 medium-20 my-4'>
                        <div className='line-through'>${product.old_price}</div>
                        <div className='text-secondary'>${product.new_price}</div>
                        <div className='mb-4'>
                            <h4 className='bold-16'>Select Size</h4>
                            <div className='flex gap-3 my-3'>
                                {['S', 'M', 'L', 'XL'].map((size) => (
                                    <div
                                        key={size}
                                        className={`ring-2 w-10 flexCenter cursor-pointer ${selectedSize === size ? 'ring-slate-900' : 'ring-slate-900/10'}`}
                                        onClick={() => handleSizeClick(size)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                            <div className='flex flex-col gap-y-3 mb-4 max-w-[555px]'>
                                <button onClick={() => {addToCart(product.id)}} className=' w-[350px] btn_dark_outline !rounded-none uppercase regular-14 tracking-widest'>Add to Cart</button>
                                <button className='w-[350px] btn_dark_rounded !rounded-none uppercase regular-14 tracking-widest'>Buy it now</button>
                            </div>
                            <p>
                                <span className='medium-16 text-tertiary'>Category:</span>
                                Women | Jacket | Winter
                            </p>
                            <p>
                                <span className='medium-16 text-tertiary'>Tags: </span>
                                Modern | Latest
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDisplay;
