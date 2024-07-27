import { useEffect } from "react";
import Poll from "../poll/Poll";
import styles from "./PollsContainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getPolls } from "../../../store/actions/pollsActions";

const PollsContainer = () => {
  const dispatch = useDispatch();
  const polls = useSelector((state) => state.polls);

  useEffect(() => {
    dispatch(getPolls());
  }, []);

  return (
    <div className={styles.pollsContainer}>
      {polls &&
        polls.map((poll) => {
          return <Poll key={poll._id} poll={poll} admin={true} />;
        })}
    </div>
  );
};

export default PollsContainer;
