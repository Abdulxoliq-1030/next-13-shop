import React from 'react';
import cls from "./style.module.scss";
import Menu from '@/components/menu/menu';
import { ProductType } from '@/interfaces';
import Product from '@/components/product/product';

interface PageProps { }

const Page: React.FC<PageProps> = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: ProductType[] = await res.json();

  return (
    <div className={cls.wrapper}>
      <Menu />
      <div className={cls.productsWrap}>
        {
          products.map(product => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
    </div>
  )
}

export default Page;