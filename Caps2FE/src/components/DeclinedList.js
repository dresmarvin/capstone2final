import React, {useState , useEffect} from 'react';

import AcceptedListItems from './AcceptedListItems';

let DeclinedList = () => {
	// let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

	let [declinedItems, setdeclinedItems] = useState([]);


	useEffect( () => {
		fetch("http://localhost:8080/status/declined/")
		.then(res => res.json())
		.then(data => {
			setdeclinedItems(data);
		});
	}, []);

		// console.log(declinedItems)


	let displayCartItems = () =>
		declinedItems.map( product => 
			<AcceptedListItems 
			key={product.id} 
			product={product}
			/>
			)

	return(
		<div>
			<h1
				style={{ color: 'white', textAlign: 'center'}}
					>Declined
			</h1>
			<table className="table table-striped"  style={{backgroundColor: '#66e377'}}>
				<thead>
					<tr style={{ color: 'white' }}>
						<th>Borrower</th>
						<th>Item Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						<th>Time Ordered </th>
						<th>Date declined</th>
					</tr>
				</thead>
				<tbody>
					{displayCartItems()}
				</tbody>

			</table>
		</div>

	);
}

export default DeclinedList;








// PendingList.js