import React, { useState } from "react"; // Es importante importar esta hook para que no de errores en la carga de la página y también ya que vamos a trabajar con este mismo.

function Users() {
  const [users, setUsers] = useState([
    {
      Name: "Diego",
      Email: "lanzero@gmail.com",
      Age: 33,
    },
  ]);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                //Siempre que Usemos map debemos usar un prop key ejemplo key={user.id}
                <tr key={user.id}> 
                  <td>{user.Name}</td>
                  <td>{user.Email}</td>
                  <td>{user.Age}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>Update</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
