const Poll = () => {
  return (
    <div>
      <h1>Poll Title</h1>
      <p>Poll Description</p>
      <br />
      <input type="radio" id="html" name="fav_language" value="HTML" />
      <label for="html">HTML</label>
      <br />
      <input type="radio" id="css" name="fav_language" value="CSS" />
      <label for="css">CSS</label>
      <br />
      <input
        type="radio"
        id="javascript"
        name="fav_language"
        value="JavaScript"
      />
      <label for="javascript">JavaScript</label>
    </div>
  );
};

export default Poll;
