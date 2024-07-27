import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../button/Button";
import styles from "./CreatePolls.module.css";
import { useDispatch } from "react-redux";
import { createPoll } from "../../../store/actions/pollsActions";

const CreatePolls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [options, setOptions] = useState(["", ""]);
  const [poll, setPoll] = useState({
    title: "",
    body: "",
    options: options,
  });

  const addOptionField = (e) => {
    e.preventDefault();
    if (options.length < 5) {
      setOptions([...options, ""]);
    }
  };

  const handleOptionChange = (e, i) => {
    const changedValue = [...options];
    changedValue[i] = e.target.value;
    setOptions(changedValue);
    setPoll({ ...poll, options: changedValue });
  };

  const handleDeleteOption = (e, i) => {
    e.preventDefault();
    if (options.length === 2) {
      return;
    }
    const deletedValue = [...options];
    deletedValue.splice(i, 1);
    setOptions(deletedValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPoll(poll));
    return navigate("/");
  };
  return (
    <div className={styles.createContainer}>
      <form className={styles.createForm}>
        <label className={styles.createLabel} htmlFor="title">
          Enter a poll title
        </label>
        <input
          className={styles.createInput}
          type="text"
          id="title"
          placeholder="Create a title..."
          value={poll.title}
          onChange={(e) => setPoll({ ...poll, title: e.target.value })}
          required
        />
        <label className={styles.createLabel} htmlFor="body">
          Enter a poll title
        </label>
        <textarea
          className={styles.createTextArea}
          type="text"
          id="body"
          value={poll.body}
          onChange={(e) => setPoll({ ...poll, body: e.target.value })}
          placeholder="Create a loving description..."
        />
        <div className={styles.optionCreator}>
          {options &&
            options.map((value, i) => {
              return (
                <div key={i} className={styles.optionContainer}>
                  <input
                    className={styles.createOptionInput}
                    onChange={(e) => handleOptionChange(e, i)}
                    value={value}
                    type="text"
                    placeholder={`Option ${i + 1}`}
                  />
                  <Button
                    onClick={(e) => handleDeleteOption(e, i)}
                    variant="secondary"
                  >
                    -
                  </Button>
                </div>
              );
            })}
          <Button onClick={addOptionField} variant="secondary">
            +
          </Button>
        </div>
        <div>
          <Button onClick={handleSubmit} variant="primary">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePolls;
