const Main = ({ activeNote }) => {
  console.log({ activeNote });
  return (
    <div className="col-md-8">
      <div className="main-wrapper">
        <div className="form-wrapper">
          <input type="text" />
          <textarea name=""></textarea>
        </div>
        <div className="preview">{/* <pre>{activeNote}</pre> */}</div>
      </div>
    </div>
  );
};

export default Main;
