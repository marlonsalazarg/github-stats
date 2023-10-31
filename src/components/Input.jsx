import styled from "@emotion/styled";

const CustomDiv = styled.div`
margin-bottom: 1em;
text-align: center;
`

const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  label,
}) => {
  return (
    <CustomDiv>
      <div>
      {label && <label htmlFor={id || name}>{label}</label>}
      </div>
      <input
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </CustomDiv>
  );
};

export default Input;