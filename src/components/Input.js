function Input({ handleSubmit, handleChange, value }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={value}
        placeholder="Type here..."
        required
        className="input"
      ></input>
    </form>
  );
}

export default Input;
