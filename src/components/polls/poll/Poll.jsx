import { useState } from "react";
import Option from "./option/Option";
import styles from "./Poll.module.css";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePoll } from "../../../store/actions/pollsActions";

const Poll = ({ poll, admin }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleDeletePoll = (id) => {
    dispatch(deletePoll(id));
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
        <>
          <Link to={`/edit/${poll._id}`} state={poll}>
            Edit
          </Link>
          <a onClick={() => handleDeletePoll(poll._id)}>Delete</a>
        </>
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
