"use client"
import React, { useEffect, useState } from 'react';
import cls from "./style.module.scss";
import Menu from '@/components/menu/menu';
import { ProductType } from '@/interfaces';
import Product from '@/components/product/product';
import Bag from '@/components/bag/bag';
import axios from 'axios';

interface PageProps { }


const Page: React.FC<PageProps> = () => {

  const [data, setData] = useState<ProductType[]>([]);
  const [selectedData, setSelectedData] = useState<any>([]);
  const [isLoading, setIsloading] = useState(true);


  const getData = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products")
      setData(data);
      setIsloading(false)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData();
  }, [])


  const chooseProducts = (product: ProductType) => {
    const existingProduct = selectedData.find((p: any) => p.id === product.id);

    if (!existingProduct) {
      const updatedProducts = [...selectedData, product];
      setSelectedData(updatedProducts);
      localStorage.setItem("selectedProducts", JSON.stringify(updatedProducts))
    }
  }


  return (
    <div className={cls.wrapper}>
      <Menu />
      {isLoading ? (
        <div className={cls.loadingWrap}>
          <div className="h-10 w-10 rounded-full border-2 border-dotted border-blue-600 animate-spin"></div>
        </div>
      ) : <div className={cls.productsWrap}>
        {
          data.map(product => (
            <Product key={product.id} product={product} handleProduct={chooseProducts} />
          ))
        }
      </div>}

      <Bag />
    </div>
  )
}

export default Page;