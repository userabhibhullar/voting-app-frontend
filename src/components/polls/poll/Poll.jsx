import { useState } from "react";
import Option from "./option/Option";
import styles from "./Poll.module.css";
import moment from "moment";
import { Link } from "react-router-dom";

const Poll = ({ poll, admin }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className={styles.pollContainer}>
      <span className={styles.pollAuthor}>
        {poll.author || "Anonymous"} &middot;
        <span className={styles.pollDate}>
          {moment(poll.date).fromNow() || "...."}
        </span>
      </span>
      {admin ? (
        <Link to={`/edit/${poll._id}`} state={poll}>
          Edit
        </Link>
      ) : (
        ""
      )}
      <span className={styles.pollTitle}>{poll.title}</span>
      {poll.body && <p className={styles.pollBody}>{poll.body}</p>}
      {poll.options &&
        poll.options.map((option) => {
          return <Option key={option} id={poll._id} value={option} />;
        })}
    </div>
  );
};

export default Poll;
