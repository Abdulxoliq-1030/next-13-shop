'use client';
import { ProductType } from '@/interfaces';
import Link from 'next/link';
import { FC } from 'react';
import CustomImage from '../custom-image/custom-image';

const Product: FC<{ product: ProductType }> = ({ product }) => {

    return (
        <div
            style={{ textDecoration: "none" }}
            className='h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200'
        >
            <Link href={`/product/${product.id}`} className='relative flex-1 max-h-96 bg-white rounded'>
                <CustomImage product={product} fill />
            </Link>

            <div className="font-semibold flex flex-col">
                <p className="w-48 truncate mb-0 mt-2 text-black">{product.title}</p>
                <p className="text-muted">{product.category}</p>
            </div>
            <div className="font-semibold flex justify-between text-black">
                <p>${product.price}</p>
                <p className="bg-black text-white p-1 rounded cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </p>

            </div>
        </ div>
    );
};

export default Product;