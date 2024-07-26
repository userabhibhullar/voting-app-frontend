import { useState } from "react";
import Option from "./option/Option";
import styles from "./Poll.module.css";
const Poll = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className={styles.pollContainer}>
      <span className={styles.pollAuthor}>
        Abhi Bhullar &middot;{" "}
        <span className={styles.pollDate}>2 days ago</span>
      </span>
      <span className={styles.pollTitle}>Poll Title</span>
      <p className={styles.pollBody}>Poll Description</p>
      <Option
        onChange={handleSelect}
        id="fav_language"
        value="Javascript"
        selected={selected === "Javascript"}
      />
      <Option
        onChange={handleSelect}
        id="fav_language"
        value="Python"
        selected={selected === "Python"}
      />
    </div>
  );
};

export default Poll;
