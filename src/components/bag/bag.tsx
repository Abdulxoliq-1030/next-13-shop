import React from 'react';
import cls from "./style.module.scss"
import { ProductType } from '@/interfaces';
import Image from 'next/image';

interface BagProps {
}

const Bag: React.FC<BagProps> = () => {

    const data: ProductType[] = JSON.parse(localStorage.getItem("selectedProducts") as string) || [];

    return (
        <div className={cls.wrapper}>
            <h1>Bag</h1>
            <div className={cls.products}>
                {data.map((product) => (
                    <img src={product.image} alt={product.title} />
                ))}
            </div>
        </div>
    )
}

export default Bag;