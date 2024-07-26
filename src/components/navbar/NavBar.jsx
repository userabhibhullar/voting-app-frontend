import { Link } from "react-router-dom";
import Button from "../button/Button";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to={"/"}>
          <span className={styles.navbarTitle}>Voting App</span>
        </Link>
        <p className={styles.navbarStatus}>
          Logged in as: <span className={styles.navbarUser}>Abhi Bhullar</span>
        </p>
        <Button>Logout</Button>
        <div className={styles.navbarAuth}>
          <Link to={"/login"}>
            <Button variant="primary">Login</Button>
          </Link>
          <Link to={"/register"}>
            <Button variant="secondary">Register</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
