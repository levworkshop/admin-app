function Customers() {
    return (
        <>
            <h2>Customers</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>bob</td>
                        <td>Netanya</td>
                        <td>03-5550000</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <div>
                <input
                    type="text"
                    placeholder="Name"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="City"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Phone"
                />
            </div>

            <button className="btn btn-primary">Add</button>

            <hr />

            <div>
                <input
                    type="text"
                    placeholder="ID"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="City"
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Phone"
                />
            </div>

            <button className="btn btn-primary">Edit</button>

            <hr />

            <div>
                <input
                    type="text"
                    placeholder="ID"
                />
            </div>

            <button className="btn btn-primary">Delete</button>
        </>
    );
}

export default Customers;