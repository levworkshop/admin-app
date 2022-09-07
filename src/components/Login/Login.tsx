import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <h2>Login</h2>

            <div>
                <input
                    type="text"
                    placeholder="Email"
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                />
            </div>

            <button className="btn btn-primary">Login</button>
        </>
    );
}

export default Login;