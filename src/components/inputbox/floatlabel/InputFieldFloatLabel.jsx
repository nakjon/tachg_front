import "./inputfieldfloatlabel.css";
import { useState } from "react";

const BasicField = (props) => {
  return (
    <div className="floatlabel">
      <input
        type={props.type}
        id={props.id}
        className="form-control mb-1"
        required
        onClick={props.onclick}
        onChange={props.onchange}
        autoComplete="off"
      />
    </div>
  );
};

const WithError = (props) => {
  const [selected, setSelected] = useState(true);
  return (
    <div className="floatlabel">
      <input
        autoComplete="off"
        type={props.type}
        id={props.id}
        className="form-control"
        required
        onBlur={() => setSelected(false)}
        onSelect={() => setSelected(true)}
        onClick={props.onclick}
        onChange={props.onchange}
      />
      <label className="form-label" htmlFor={props.id}>
        {props.placeholder}
      </label>
      <small>
        {props.errorMsg !== "" && selected !== true && props.errorMsg}
      </small>
    </div>
  );
};

const fields = { BasicField, WithError };

export default fields;
