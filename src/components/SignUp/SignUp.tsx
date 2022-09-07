import { useState } from "react";

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit() {
        // todo: replace with an API call to server
        console.log('submit data');
    }

    return (
        <>
            <h2>Sign Up</h2>

            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                onClick={submit}
                className="btn btn-primary">
                Sign Up
            </button>
        </>
    );
}

export default SignUp;