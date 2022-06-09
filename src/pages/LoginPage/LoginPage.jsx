
import {useState} from "react";

export default function LoginPage(props) {
  const [userName, setUserName] = useState("");

  const handleChange = (evt) => {
    setUserName(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setUser(userName);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" value ={userName} onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}