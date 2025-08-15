export const iniVal = {
    Cloths: 50,
    Mobile: 100,
}


export const ShopReducer = (initialValue = iniVal, shopAction) => {

    if(shopAction.type === "buy-cloths"){
        return{
            ...initialValue,
            cloths: initialValue.Cloths-1
        }
    }else if(shopAction.type === "buy-mobile"){
        return{
            ...initialValue,
            mobile: initialValue.Mobile-1
        }
    }
    return initialValue;
}