import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import styles from "./NavBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../store/actions/authActions";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleLogOut = () => {
    dispatch(signOut());
    window.location.reload();
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to={"/"}>
          <span className={styles.navbarTitle}>Voting App</span>
        </Link>
        {auth._id ? (
          <>
            <p className={styles.navbarStatus}>
              Logged in as:{" "}
              <span className={styles.navbarUser}>{auth.name || "Guest"}</span>
            </p>
            <div>
              <Link style={{ marginRight: "9px" }} to={"/create"}>
                <Button variant="primary">Create</Button>
              </Link>
              <Button variant="secondary" onClick={handleLogOut}>
                Logout
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.navbarAuth}>
              <Link to={"/login"}>
                <Button variant="primary">Login</Button>
              </Link>
              <Link to={"/register"}>
                <Button variant="secondary">Register</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
