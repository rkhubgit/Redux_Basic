import React from "react";
import { useSelector } from "react-redux";

export const Shop = () => {
   const ShopData =  useSelector((state) => state.shop)

//    console.log(ShopData, 'dataaaaaaaaaa')
    return(

        <>
            <h2>OUR SHOP</h2>
            <h3>Cloths: {ShopData.Cloths} </h3>
            <h3>Mobile: {ShopData.Mobile} </h3>
        </>
    )
}