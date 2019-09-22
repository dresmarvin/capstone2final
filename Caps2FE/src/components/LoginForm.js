import React, {useState} from 'react'

function LoginForm(props) {
	let [username, setUsername] = useState("");
	let [password, setPassword] = useState("");


	let usernameChangeHandler = (e) => {
		setUsername(e.target.value)
	}

	let passwordChangeHandler = (e) => {
		setPassword(e.target.value)
	}

	let submitClickHandler = () => {
		let user = {
		username,
		password
		}
	fetch("http://localhost:8080/users/login", {
		method: 'post',
		headers: {
		'Content-Type': 'application/json' 
	},
		body: JSON.stringify(user)
})
		.then(res => res.json())
		.then(data => {
			// console.log(data)
		localStorage.setItem("username",username);
		localStorage.setItem("userId",data.id);
		localStorage.setItem("isAdmin",false);
		props.setIsAdmin(false)
		props.setIsLoggedIn(true);

	})
		.catch(e => {
		alert("Username and Password does not match")
		console.log(e)
	});
}

	return(
		
		<form align="center">
			<div class="container login-container">
            	<div class="row">
                	<div class="col-md-6 login-form-1">
                    	<h3>Member Login </h3>                   
						<div className="form-group">
							<input
								type="text"
								placeholder="username"
								value={username}
								autoComplete="false"
								onChange={usernameChangeHandler}
								class="form-control"
							/>
						</div>

						<div className="form-group">
							<input
								type="password"
								placeholder="password"
								value={password}
								autoComplete="false"
								onChange={passwordChangeHandler}
								class="form-control"
							/>
						</div>

						<button 
							type="button"
							onClick={submitClickHandler}
							className="btn btn-success"
								>Log In
						</button>

					</div>
				</div>
			</div>


		</form>
		
	);

}

export default LoginForm;

