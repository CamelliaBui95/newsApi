const Button = ({onClick, styleAttributes, label, disabled}) => {
    return (
      <button className={"btn " + styleAttributes.buttonStyle} style={styleAttributes.style} onClick={onClick} disabled={disabled}>
        {label}
      </button>
    );
}
 
export default Button;