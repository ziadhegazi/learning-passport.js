import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [signupUsername, setSignupUsername] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleSignup = () => {
        axios
            .post(
                "http://localhost:8000/signup",
                {
                    username: signupUsername,
                    password: signupPassword,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log(res);
            });
    };
    const handleLogin = () => {
        axios
            .post(
                "http://localhost:8000/login",
                {
                    username: loginUsername,
                    password: loginPassword,
                },
                { withCredentials: true }
            )
            .then((res) => {
                console.log(res);
            });
    };
    const handleGetUser = () => {
        axios
            .get("http://localhost:8000/user", { withCredentials: true })
            .then((res) => {
                console.log(res);
            });
    };
    const handleLogout = () => {
        axios
            .get("http://localhost:8000/logout", { withCredentials: true })
            .then((res) => {
                console.log(res);
            });
    };

    return (
        <div className="App">
            <div>
                <h1>Signup</h1>
                <input
                    type="text"
                    placeholder="username"
                    onChange={(e) => setSignupUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="password"
                    onChange={(e) => setSignupPassword(e.target.value)}
                />
                <button onClick={handleSignup}>Submit</button>
            </div>
            <div>
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="username"
                    onChange={(e) => setLoginUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Submit</button>
            </div>
            <div>
                <h1>Get User</h1>
                <button onClick={handleGetUser}>Submit</button>
            </div>
            <div>
                <h1>Logout</h1>
                <button onClick={handleLogout}>Submit</button>
            </div>
        </div>
    );
}

export default App;
