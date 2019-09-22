import React, {useState} from 'react';

import CartItem from './CartItem';

let Cart = () => {
	let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
	let [updateCart, setUpdateCart ]= useState(cart) 
	let total = (updateCart.reduce( (total, item) => total += item.price*item.quantity, 0)).toLocaleString();
	localStorage.setItem("cart", JSON.stringify(updateCart))

	let removeFromCartItems = (id) => {
		let cartItems = updateCart.filter( cart => {
			return cart.id !== id
		})
			setUpdateCart(cartItems);
	}


	let displayCartItems = () =>
		updateCart.map( product => 
			<CartItem 
			key={product.id} 
			product={product} 
			removeFromCartItems = {removeFromCartItems}
			/>
			)


	let checkoutClickHandler = () => {
		fetch("http://localhost:8080/orders/"+JSON.parse(localStorage.getItem("userId")), {
			method: 'post',
			headers: {
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify({ date: Date.now() })
		})
		.then(res => res.json())
		.then(order => {
		
			// console.log({date: Date.now()})
			updateCart.map( item => {
				fetch("http://localhost:8080/orderdetails/"+order.id+"/"+item.id, {
					method: 'post',
					headers: {
						'Content-Type' : 'application/json'
					},
					body: JSON.stringify({quantity: item.quantity}, {status: item.status})
				})
				.then(res => res.json())
				.then(orderdetail =>{
					// console.log(orderdetail)
				})
			});
		});

		alert("checkout")
		// localStorage.removeItem("cart")
	}

					


	return(
		<div style={{ color: 'white'}}>
			<h1 style={{ color: 'white', textAlign: 'center'}}>
				Cart
			</h1>

			<table className="table table-striped" style={{ color: 'white', backgroundColor:'#66e377'}}>
				<thead >
					<tr style={{ color: 'white', backgroundColor:'#66e377'}}>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{displayCartItems()}
					<tr>
						<td></td>
						<td></td>
						<td><strong>Total </strong></td>
						<td>{total}</td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td><button onClick={checkoutClickHandler} className="btn btn-success">Checkout</button> </td>
						<td></td>
					</tr>

				</tbody>

			</table>
		</div>

	);
}

export default Cart;