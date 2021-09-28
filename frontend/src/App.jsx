import { useState } from "react";
import "./App.css";

function App() {
    const [signupUsername, setSignupUsername] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
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
                <button>Submit</button>
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
                <button>Submit</button>
            </div>
            <div>
                <h1>Get User</h1>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default App;
