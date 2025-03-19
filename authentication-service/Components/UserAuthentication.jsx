import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../src/firebaseConfig";
import "../css-files/UserAuthenticate.css";

function UserAuthentication() {
  const [data, setData] = useState({});

  function handleInput(event) {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  }

  const handleSubmit = () => {};

  //database instance
  const db = getDatabase(app);

  //Put data in firebase database
  const putData = () => {
    set(
      ref(db, "users/rohan", {
        id: 1,
        name: "Rohan Rawat",
        age: 24,
        profession: "React and React Native Developer",
      })
    ); //pass reference of database - 1st is db instance, 2nd parameter is name of the root, 3rd parameter is actual data
  };

  return (
    <div className="main">
      <div className="container">
        <input
          name="email"
          placeholder="Email"
          onChange={(event) => handleInput(event)}
        />
        <input
          name="password"
          placeholder="Password"
          onChange={(event) => handleInput(event)}
        />
        <button onClick={putData}>Submit Data</button>
      </div>
    </div>
  );
}

export default UserAuthentication;
