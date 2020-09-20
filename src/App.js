import React, { useEffect, useState } from 'react';

const App = () => {
const [users, setUsers] = useState([]);


    useEffect(() => {
      console.log('in use effect')
      fetch('/users')
      .then(res => res.json())
      .then(users => setUsers(users));
    }, []);

    return (
      <div className="App">
        <h1>Users</h1>
        {users.map(user =>
          <div key={user.id+user.username}>{user.username}</div>
        )}
      </div>
    );
  }

export default App;