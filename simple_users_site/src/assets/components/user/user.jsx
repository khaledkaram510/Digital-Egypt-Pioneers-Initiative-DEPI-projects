import useFetch from "../../data/useFeatch"; // Ensure spelling is correct
import "./user.css";
import { useParams, Link } from "react-router-dom";

export default function User() {
    const { id } = useParams();
    const { data: user, loading, error } = useFetch(`https://reqres.in/api/users/${id}`);

    if (loading) return <div>Loading...</div>; // Display a loading message
    if (error) return <div>Error fetching user: {error.message}</div>; // Display error message

    // Check if user data exists
    if (!user || !user.data) {
        return <div>User not found.</div>; // Handle case where user data is null
    }

    return (
        <>
            <div className="user-detail-card">
                <img 
                    src={user.data.avatar} 
                    alt={`${user.data.first_name} ${user.data.last_name}`} 
                />
                <h3>{`${user.data.first_name} ${user.data.last_name}`}</h3>
                <p>
                    <strong>Email:</strong> {user.data.email}
                </p>
            </div>
            <Link to={id > 6 ? `/users/pages/2` : `/users/pages/1`} className="btn back-btn">
                Back to Users
            </Link>
        </>
    );
}
