import { useEffect, useState } from "react";
import styles from "./SignUp.module.css";
import Button from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

const SignUp = () => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth, navigate]);

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  if (auth._id) return null;

  return (
    <div className={styles.formContainer}>
      <form className={styles.inputForm} autoComplete="off">
        <input
          className={styles.valueInput}
          type="text"
          value={user.name}
          placeholder="Enter a username"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          className={styles.valueInput}
          type="text"
          value={user.email}
          placeholder="Enter a email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          className={styles.valueInput}
          type="password"
          value={user.password}
          placeholder="Enter a password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <Button onClick={handleSubmit}>Register</Button>
      </form>
    </div>
  );
};

export default SignUp;
