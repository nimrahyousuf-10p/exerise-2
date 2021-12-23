import styled from 'styled-components';

export const ApplicationContainer = styled.div`
  margin: 0;
  padding: 0.5rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  width: ${(props) => props?.width};
  height: ${(props) => props?.height};
`;
