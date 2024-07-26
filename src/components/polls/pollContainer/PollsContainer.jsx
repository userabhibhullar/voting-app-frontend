import Poll from "../poll/Poll";
import styles from "./PollsContainer.module.css";

const PollsContainer = () => {
  return (
    <div className={styles.pollsContainer}>
      <Poll />
      <Poll />
      <Poll />
      <Poll />
      <Poll />
    </div>
  );
};

export default PollsContainer;
