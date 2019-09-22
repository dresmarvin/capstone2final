import React, { useState } from 'react';

function Product(props) {
	let [quantity, setQuantity] = useState(props.quantity)
	let [edit,setEdit] = useState(false);
	let [name, setName] = useState(props.name);
	let atcClickHandler = () => {
		props.addToCart(props.id, quantity*1);
		setQuantity(1);

	}	


	let deleteClickHandler = (e) => {
		if(window.confirm("Are you sure you wanna delete " +props.name)) {
			fetch("http://localhost:8080/products/delete/" +props.id, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(props.id)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
		});
		}		
	}


	let nameSubmit = (e) => {
		if(e.key==="Enter"){
			props.editProduct(props.id,name);
			setEdit(false);
		}
	}


	let inputChangeHandler = (e) => {
		setName(e.target.value);
	}

	let editHandler = () =>{
		setEdit(true);
	}

	let showEditInput = () => {
		if(!edit) {
			return(
				<i className="fa fa-pencil-alt"
				onClick={editHandler}
				>
				&nbsp;{props.name}
				</i>
				);
			} else {
			return(
				<input 
				onKeyPress={nameSubmit}
				onChange={inputChangeHandler}
				type="text"
				value={name}
				
				/>
				)
		}
	}

	return(
  			  <div className="card text-center">
      			<div className="p5">
       			   <div className="card-image">

          				<img 
          					className="card-img-top" 
		  					style={{"width":"75%"}} 
          					src={"http://localhost:8080/images/"+props.image} 
          					alt=""/>
        			</div>
          					<span
          						onChange={inputChangeHandler}
          						onKeyPress={nameSubmit}
          						className="card-title orange lighten-1-text "> 
          						{showEditInput()} 
          					</span>
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
      					<div>
          					<button
          						onClick={atcClickHandler}
          						className="btn btn-success">
          							<i className="">Add to Cart</i>
          					</button>		
      					</div>
      					<br/>
				        <div>	
				        	<button
				        		onClick={deleteClickHandler}
				        		className="btn btn-danger">
				        			<i className="">Delete</i>
				        	</button>
				        </div>
      			</div>

   			 </div>

	);
	
}

export default Product;




