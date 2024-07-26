import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to={"/"}>Voting-APP</Link>
      <div>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>
    </header>
  );
};

export default NavBar;
