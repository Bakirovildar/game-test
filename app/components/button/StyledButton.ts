import styled from "@emotion/styled";

export const StyledButton: any = styled.div`
  background: ${({active}: any) => active ?'#FFD748' :'rgba(255, 215, 72, 0.56)'};
  border-radius: 20px;
  padding: 2px 20px;
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  color: ${({active}: any) => active ?'#423F45' :'rgba(66, 63, 69, 0.56)'};
  cursor: pointer;
`
