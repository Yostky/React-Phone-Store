import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
 
    state = {
        products: {
            phones:[],
            tablets:[],
            laptops:[],
        },
        detailProduct: detailProduct,
        quantity: [],
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct, 
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }

    componentDidMount() {
        this.addProducts();
    }
    
    addProducts = () => {
        let phones= [];
        let tablets= [];
        let laptops= [];
        storeProducts.phones.forEach(item => {
            const singleItem = {...item};
            phones = [...phones, singleItem];
        }); 
        storeProducts.tablets.forEach(item => {
            const singleItem = {...item};
            tablets = [...tablets, singleItem];
        }); 
        storeProducts.laptops.forEach(item => {
            const singleItem = {...item};
            laptops = [...laptops, singleItem];
        }); 
        this.setState(()=> {
            return{products:{tablets,phones,laptops}};
        });
    }


    getItem =(id)=> {
        const phoneId = this.state.products.phones.find(item => item.id === id);
        const tabletId = this.state.products.tablets.find(item => item.id === id);
        const laptopId = this.state.products.laptops.find(item => item.id === id);
        if (phoneId) {
            const product = phoneId;
            return product;
        } else if (tabletId) {
            const product = tabletId;
            return product;
        } else {
            const product = laptopId;
            return product;
        }
    }
  
    openDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {detailProduct:product};
        })
    }

    addToCart = (id) => {
        let products = this.state.products;
        const productValues = [...products.phones, ...products.tablets, ...products.laptops];
        const index = productValues.indexOf(this.getItem(id));
        const product = productValues[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(()=> {
            return{products: products, cart: [...this.state.cart, product]}
        }, ()=> {
            this.addTotals();
        })
    }

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {modalProduct:product, modalOpen: true,}
        }) 
    }

    closeModal = () => {
        this.setState(()=>{
            return {modalOpen: false}
        })
    }

    incrementQuantity = (id) => {
        let tempCart = [...this.state.cart];
        const chosenProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(chosenProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(()=>{
            return{cart:[...tempCart]};
        }, ()=>{
            this.addTotals();
        })
    }

    decrementQuantity = (id) => {
        let tempCart = [...this.state.cart];
        const chosenProduct = tempCart.find(item=>item.id === id);
        const index = tempCart.indexOf(chosenProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        
        if(product.count === 0){
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(()=>{
                return{cart:[...tempCart]};
            }, ()=>{
                this.addTotals();
            })
        }
    }

    removeItem = (id) => {
        const products = this.state.products;
        const tempProducts = [...products.phones, ...products.tablets, ...products.laptops];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(()=>{
            return {
                cart:[...tempCart], 
                products:products
            }
        }, ()=> {
            this.addTotals();
        })
    }

    clearCart = () =>{
        this.setState(()=>{
            return {cart:[]}
        },()=>{
            this.addProducts();
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * .15;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(()=>{

            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                openDetail: this.openDetail,
                addToCart: this.addToCart,
                incrementQuantity: this.incrementQuantity,
                decrementQuantity: this.decrementQuantity,
                removeItem: this.removeItem,
                addProducts: this.addProducts,
                openModal: this.openModal,
                closeModal: this.closeModal,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer, ProductProvider};