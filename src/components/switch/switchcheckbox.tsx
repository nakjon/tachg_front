import "./switchcheckbox.css";
interface checkBoxProps {
  id: string;
  className?: string;
  type: string;
  onClick: () => void;
  onChange?: () => void;
  labelText: string;
  textColor : string
}
const CheckBox: React.FC<checkBoxProps> = ({
  id,
  className,
  type,
  onChange,
  labelText,
  textColor
}) => {
  return (
    <div className="form-check form-switch custom_switch">
      <input
        className="form-check-input"
        type={type}
        role="switch"
        id={id}
        onChange={onChange}
      />
      <label className="form-check-label" style={{color:textColor}} htmlFor={id}>
        {labelText}
      </label>
    </div>
  );
};

export default CheckBox;
