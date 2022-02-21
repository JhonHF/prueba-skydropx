import styled from "styled-components";

export const CardWrapper = styled.div`
  cursor: pointer;
  ${({ selected }) => selected && `border: 3px solid #4e34e1;`}
`;
