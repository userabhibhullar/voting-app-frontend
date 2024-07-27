import { useEffect, useState } from "react";
import Option from "./option/Option";
import styles from "./Poll.module.css";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePoll, selectPoll } from "../../../store/actions/pollsActions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Poll = ({ poll }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const selectedOption = poll.usersSelection.filter(
      (selection) => selection.uid === auth._id
    );
    if (selectedOption[0]) {
      setSelected(selectedOption[0].selection);
    }
  }, [auth]);

  const handleDeletePoll = (id) => {
    dispatch(deletePoll(id));
  };

  const handleSelection = (e) => {
    if (auth._id) {
      setSelected(e.target.value);
      dispatch(
        selectPoll(poll._id, { uid: auth._id, selection: e.target.value })
      );
      return;
    }
    navigate("/login");
  };

  return (
    <div className={styles.pollContainer}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span className={styles.pollAuthor}>
          {poll.author || "Anonymous"} &middot;
          <span className={styles.pollDate}>
            {moment(poll.date).fromNow() || "...."}
          </span>
        </span>
        {poll.uid === auth._id ? (
          <div>
            <Link
              style={{ color: "black", marginRight: "8px" }}
              to={`/edit/${poll._id}`}
              state={poll}
            >
              Edit
            </Link>
            <a onClick={() => handleDeletePoll(poll._id)}>Delete</a>
          </div>
        ) : (
          ""
        )}
      </div>
      <span className={styles.pollTitle}>{poll.title}</span>
      {poll.body && <p className={styles.pollBody}>{poll.body}</p>}
      {poll.options &&
        poll.options.map((option) => {
          return (
            <Option
              key={option}
              id={poll._id}
              value={option}
              onChange={handleSelection}
              selected={selected === option}
            />
          );
        })}
    </div>
  );
};

export default Poll;
