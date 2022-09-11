import { useNavigate } from "react-router-dom";

function LogOut() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <button
            onClickCapture={handleLogout}
            className="btn btn-info m-2">
            Log Out
        </button>
    );
}

export default LogOut;