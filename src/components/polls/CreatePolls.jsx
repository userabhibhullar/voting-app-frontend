import { useState } from "react";
import Button from "../button/Button";
import styles from "./CreatePolls.module.css";

const CreatePolls = () => {
  const [options, setOptions] = useState(["", ""]);

  const addOptionField = (e) => {
    e.preventDefault();
    setOptions([...options, ""]);
  };

  const handleOptionChange = (e, i) => {
    const changedValue = [...options];
    changedValue[i] = e.target.value;
    setOptions(changedValue);
    console.log(options);
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
          required
        />
        <label className={styles.createLabel} htmlFor="body">
          Enter a poll title
        </label>
        <textarea
          className={styles.createTextArea}
          type="text"
          id="body"
          placeholder="Create a loving description..."
        />
        {options &&
          options.map((value, i) => {
            return (
              <>
                <input
                  className={styles.createOptionInput}
                  onChange={(e) => handleOptionChange(e, i)}
                  value={value}
                  type="text"
                  placeholder={`Option ${i + 1}`}
                  key={i}
                />
                <Button
                  onClick={(e) => handleDeleteOption(e, i)}
                  variant="secondary"
                >
                  Delete
                </Button>
              </>
            );
          })}
        <Button onClick={addOptionField} variant="primary">
          Add
        </Button>
      </form>
    </div>
  );
};

export default CreatePolls;
