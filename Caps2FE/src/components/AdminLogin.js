import React, {useState} from 'react'

function AdminLogin(props) {
	let [username, setUsername] = useState("");
	let [password, setPassword] = useState("");

	let usernameChangeHandler = (e) => {
		setUsername(e.target.value)
	}

	let passwordChangeHandler = (e) => {
		setPassword(e.target.value)
	}

	let submitClickHandler = () => {
		let admin = {
			username,
			password
		}

		fetch("http://localhost:8080/admin/login", {
			method: 'post',
			headers: {
				'Content-Type': 'application/json' 
			},
			body: JSON.stringify(admin)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			localStorage.setItem("username",username);
			localStorage.setItem("isAdmin", true);
			props.setIsAdmin(true)
			props.setIsLoggedIn(true);
			// props.setAdminIsLoggedIn(true);
			// props.history.push("/productupdate")
		})

		.catch(e => {
			alert("Login failed")
			console.log(e)
		});
	}
	
	return(
		<form align="center">
			<div class="container login-container">
            	<div class="row">
                	<div class="col-md-6 login-form-1">
                    	<h3>Admin Login </h3>
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
							>Log In</button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default AdminLogin;