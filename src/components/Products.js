import React,{Component} from 'react';

/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faStar,faCartPlus,faHeart,faSearch,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'*/
import formatCurrency from '../util';


export default class Products extends Component{
    render(){
        return(
            <div >
                <ul className="products">
                    {this.props.products.map((product)=>(
                        <li key={product._id}>
                            <div className="product">
                            <a href={"#"+product._id}>
                                <img src={product.image} alt={product.title} ></img>
                                <p>
                                    {product.title}
                                    
                                </p>
                                
                                </a>
                                                        
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)} </div>
                                        
                                   
                                    <button onClick={() => this.props.addToCart(product)}
                                  className="button primary"
                                    >
                                       Add To Cart 
                                    </button>
                                    </div>
                                    </div>
                                   
                                
                                </li>
                    ))}

                </ul>
            </div>
        )}
}