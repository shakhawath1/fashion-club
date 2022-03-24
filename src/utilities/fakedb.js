// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getStoredCart();

    // update quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity)
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// get the shopping cart from localStorage
const getStoredCart = () => {
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

// remove from local storage
const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}


export {
    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart
};