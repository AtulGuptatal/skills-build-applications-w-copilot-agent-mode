import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  useEffect(() => {
    console.log('Fetching users from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const items = data.results ? data.results : data;
        console.log('Fetched users:', items);
        setUsers(items);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Users</h2>
      <ul className="list-group">
        {users.map((user, idx) => (
          <li key={idx} className="list-group-item">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
