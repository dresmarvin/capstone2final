import React, {useState , useEffect} from 'react';

import AcceptedListItems from './AcceptedListItems';

let AcceptedList = () => {
	let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

	let [acceptedItems, setAcceptedItems] = useState([]);


	useEffect( () => {
		fetch("http://localhost:8080/status/accepted/")
		.then(res => res.json())
		.then(data => {
			setAcceptedItems(data);
		});
	}, []);

		// console.log(acceptedItems)


	let displayCartItems = () =>
		acceptedItems.map( product => 
			<AcceptedListItems 
			key={product.id} 
			product={product}
			/>
			)

	return(
		<div style={{ color: 'white' }}>
			<h1
				style={{ color: 'white', textAlign: 'center'}}>
					Accepted Items
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
						<th>Date Accepted</th>
					</tr>
				</thead>
				<tbody>
					{displayCartItems()}
				</tbody>

			</table>
		</div>

	);
}

export default AcceptedList;








// PendingList.js