import fs from "fs";

//

class CartManager{
    constructor(path){
        this.path = path
    };

    async addCart() {};

    async getCartById(idCart) {};
  
    async addProductToCart(idCart, idProduct) {};
}

export default CartManager;