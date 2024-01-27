export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}

export const addQuantity = (product) => {
    return {
        type : "ADD_QUANTITY",
        payload : product
    }
}