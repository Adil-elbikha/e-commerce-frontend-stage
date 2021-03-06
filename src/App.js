
import React from "react";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      cartItems:[],
      size:"",
      sort:"",
    };
  }
  removeToCart= (product) =>{
    const cartItems =this.state.cartItems.slice();
    TouchList.setState({
      cartItems:cartItems.filter(x=>x._id !== product._id),
    });
    

  };
  addToCart=(product)=>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart=false;
    cartItems.forEach((item)=>{
      if(item.id === product._id){
        item.count++;
        alreadyInCart=true;

      }
    });
    if(!alreadyInCart){
      cartItems.push({...product,count:1});
    }
    this.setState({cartItems})
  };
  sortProducts = (event)=>{
    //impl
    const sort=event.target.value;

    console.log(event.target.value);
    this.setState((state)=>({
      sort: sort,
      products: this.state.products.slice()
      .sort((a,b)=>
        sort === "lowest"?
        a.price<b.price
        ? 1
        :-1:
        sort === "highest"?
        a.price>b.price
        ? 1
        :-1:
        a.id>b.id
        ? 1
        :-1
      
      ),
    }));
    
    
    
  };
  filterProducts = (event) =>{
    //impl
    console.log(event.target.value);
    if(event.target.value === ""){
    this.setState({size:event.target.value  , products:data.products});
  } else{
    this.setState({
    size:event.target.value,
      products:data.products.filter(
        (product) =>product.availableSiezs.indexOf(event.target.value)>=0),
  
      
    });
  }
};

  render(){
  return (
    <div className="grid-container">
      <header>
        <a href="/">React ecommerce</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              filterProducts={this.filterProducs}
              sortProducts={this.sortProducts}
            ></Filter>
            
             <Products
              products={this.state.products}
              addToCart={this.addToCart}>

              </Products>
          </div>
          <div className="sidebar">
            <Cart cartItems={this.state.cartItems} removeToCart={this.removeToCart}/>
          </div>

        </div>
      </main>
      <footer>All right is reserverd</footer>
    </div>
  );
  }
}

export default App;
