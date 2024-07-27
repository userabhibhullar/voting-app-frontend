import { useEffect, useState } from "react";
import Button from "../button/Button";
import styles from "./SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth._id) {
      navigate("/");
    }
  }, [auth, navigate]);

  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(credentials));
    setCredentials({
      email: "",
      password: "",
    });
  };

  if (auth._id) return null;

  return (
    <div className={styles.formContainer}>
      <form className={styles.inputForm} autoComplete="off" noValidate>
        <input
          className={styles.valueInput}
          type="text"
          value={credentials.email}
          placeholder="Enter your email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          className={styles.valueInput}
          type="password"
          value={credentials.password}
          placeholder="Enter your password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </div>
  );
};

export default SignIn;
