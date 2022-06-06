import styled from "@emotion/styled";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  border: ${(props) =>
    !props.isMinSum
      ? "1px solid var(--gradient-font-warning)"
      : "1px solid var(--form-color)"};
  border-radius: 5px;
  justify-content: space-between;
  overflow: hidden;
  flex-wrap: nowrap;
  transition: all 1s ease;
  &:hover {
    border: 1px solid var(--highlight-color);
  }

  & label {
    font-size: 1.4rem;
    opacity: 0.3;
    padding: 0 0.4rem;
    font-family: var(--p-font);
  }

  & input[type="text"] {
    border: none;
    font-size: 1.5rem;
    flex: 2;
    width: 11vw;
    color: "var(--primary-color)";
    opacity: 0.6;
    background: inherit;
  }
  & input[type="submit"] {
    border: none;
    font-size: 1.2rem;
    padding: 1rem;
    color: white;
    background: ${(props) =>
      props.isMinSum
        ? "var(--highlight-color)"
        : "var(--gradient-font-warning)"};
    width: 7vw;

    @media (max-width: 1280px) {
      flex: 1;
    }
  }
`;

const Form = (props) => {
  return <FormContainer {...props}>{props.children}</FormContainer>;
};

export default Form;
