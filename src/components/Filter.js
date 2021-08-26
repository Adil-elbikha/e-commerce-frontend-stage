import React ,{Component} from "react"

export default class Filter extends Component{

    render(){
        return(
            <div className="filter">
            <div className="filter-result">{this.props.count} product</div>
                
            <div className="filter-sort">
                Ctegories{" "}
                <select value={this.props.size} onChange={this.props.sortProducts}>
                    <option>Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="hightest">Hightest</option>
                </select>
                </div>
            <div className="filter-size">
                Size Filter{" "}
                <select value={this.props.size} onChange={this.props.filterProducts}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
             </div>
             <div className="filter-price">
                 Filter Price{" "}
            <select value={this.props.size} onChange={this.props.filterProducts}> 
                <option value="">All</option>
                    <option value="0-2000">Rs.0-100</option>
                    <option value="100-500">Rs.100-500</option>
                    <option value="500-1000">Rs.500-1000</option>
                    <option value="1000-2000">Rs.1000-2000</option></select>
    
    
  
                
        </div>
      
    </div>
                               
            
        );
    }
}