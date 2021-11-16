//  adding id to local storage
const addToDb = id => {
    const exists = getDb()
    let shopping_cart = {}
    if(!exists){
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exists);
        if(shopping_cart[id]){
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else{
            shopping_cart[id] = 1
        }
    }
    // localStorage.setItem('shopping_cart', JSON.stringify(shopping_cart))
    updateDb(shopping_cart)
}

//  deleting from database
const removeFromDb = id => {
    const exists = getDb();
    if(!exists){

    }
    else{
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id]
        updateDb(shopping_cart)

    }
}

// function for get item and update item in local storage
 const getDb = () => localStorage.getItem("shopping_cart");
 const updateDb = (cart) => localStorage.setItem('shopping_cart', JSON.stringify(cart))
export {addToDb, removeFromDb as deleteDb}