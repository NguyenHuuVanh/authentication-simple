import { Link } from "react-router-dom";
import axiosInstance from "../../api/configs/axiosConfig";

const SigninPage = () => {
  const handleLogin = (e) => {
    const target = e.target;
    e.preventDefault();
    axiosInstance.post("/api/auth/signin", {
      username: target.gmail.value,
      password: target.password.value,
    });
  };

  return (
    <div>
      <h1>Signin Page</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="gmail">Email:</label>
        <br />
        <input type="text" id="gmail" className="gmail" placeholder="Enter your email" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" className="password" placeholder="Enter your password" />
        <br />
        <button className="btn" type="submit" style={{ cursor: "pointer" }}>
          Sign in
        </button>
        <p>
          Create an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default SigninPage;
