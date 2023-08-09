import styled from 'styled-components';
export const Button = styled.button`
  margin: 0;
  padding: 4px;
  border: none;
  width: 16px;
  height: 16px;
  border-radius: 4px;

  color: ${props => (props.variant === true ? 'green' : 'red')};
`;
