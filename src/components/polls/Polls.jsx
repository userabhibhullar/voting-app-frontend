import PollsContainer from "./pollContainer/PollsContainer";
import styles from "./Polls.module.css";

const Polls = () => {
  return (
    <div className={styles.pollsContent}>
      <PollsContainer />
    </div>
  );
};

export default Polls;
