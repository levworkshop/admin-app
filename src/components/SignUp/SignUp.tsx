function SignUp() {
    return (
        <>
            <h2>Sign Up</h2>

            <div>
                <input
                    type="text"
                    placeholder="Name"
                />
            </div>
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

            <button className="btn btn-primary">Sign Up</button>
        </>
    );
}

export default SignUp;