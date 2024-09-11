import './users.css';
import PropTypes from 'prop-types';
import useFetch from '../../data/useFeatch';
import { useParams , Link } from 'react-router-dom';
export default function Users() {
  // console.log(data);
  const {n} = useParams();
  const {data} = useFetch(`https://reqres.in/api/users?page=${n}`);
  return (
    <>
      <div className="card-container">
        {data && data.data.map(user => (
            <div key={user.id} className="card">
              <img src={user.avatar} alt={user.first_name} />
              <h3>{user.first_name} {user.last_name}</h3>
              <p>{user.email}</p>
              <Link to={`/users/${user.id}`} className="btn">View User</Link>
          </div>
        ))}
      </div>
      <div className="pagination">
          <Link to={`/users/pages/1`} className="pagination-btn">{"<"} Previous Page </Link>
          <Link to={`/users/pages/2`} className="pagination-btn">Next Page {">"}</Link>
      </div>
    </>
  );
}

Users.propTypes = {
  data: PropTypes.array.isRequired
};