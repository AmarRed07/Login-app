import React, { useState} from 'react';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const adminUser = {
    email: "givemeAnA@please.com",
    password: "yougetanA"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Welcome, you've successfully logged in!");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Incorrect! Try again.");
      setError("Incorrect! Try again.")
    }
  }

  const Logout = () => {
    setUser({ name: "", email: ""});
  }

  return (
    
    <div className="App" className="container">
       <nav className="navbar navbar-expand sm navbar-dark bg-dark">
        <a className="navbar-brand" href="placeholder.html">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
        <div className="collapse navbar-collapse" id="navbarNavBardropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <a className="nav-link" href="placeholder.html"> This </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="placeholder.html"> Is </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="placeholder.html"> A </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="placeholder.html"> Navbar </a>
                </li>
            </ul>
        </div>
    </nav><br></br>
      {(user.email !="") ? (
        <div className="welcome">
          <h2>Thanks for the grade! You promised! No going back now <span>{user.name}</span> :) </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;

