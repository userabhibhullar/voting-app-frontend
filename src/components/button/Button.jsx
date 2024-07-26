import styles from "./Button.module.css";

const Button = ({ variant, children, ...props }) => {
  if (variant === "secondary") {
    return (
      <button className={styles.buttonSecondary} {...props}>
        {children}
      </button>
    );
  } else {
    return (
      <button className={styles.buttonPrimary} {...props}>
        {children}
      </button>
    );
  }
};

export default Button;
