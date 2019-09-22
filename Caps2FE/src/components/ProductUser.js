import React, { useState } from 'react';

function ProductUser(props) {
	let [quantity, setQuantity] = useState(props.quantity)
	let atcClickHandler = () => {
		props.addToCart(props.id, quantity*1);
		setQuantity(1);

	}	

	return(
  			  <div className="card text-center">
      			<div className="p5">
       			   <div className="card-image">
          				<img 
          					className="card-img-top" 
		  					style={{"width":"75%", textAlign:'center'}} 
          					src={"http://localhost:8080/images/"+props.image} 
          					alt=""/>
        			</div>
      				<div className="card-title grey lighten-1-text ">{props.name}</div>
      					<button onClick={atcClickHandler} className="btn btn-success">Add to Cart</button>
			        <div className="card-content">
				          <p>Php {props.price}<br/> 

				          	Quantity:<input 
					    		type="number" 
					    		max={quantity}
					    		min="1"
					    		value={quantity}
					    		onChange={e => setQuantity(e.target.value)} 
					    	/>
					    	<br/>

				          </p>
			        </div>
			       

      			</div>

   			 </div>

	);
	
}

export default ProductUser;



