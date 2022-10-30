import styled from "@emotion/styled";

export const StyledValueMenu: any = styled.div`
  
  .countBox {
    background: #FFD748;
    width: ${({widthCount}: any) => (100 * (widthCount.length - 1)) + 'px'};
    border-radius: 10px;
  }
  
  .circle {
    border-radius: 50%;
    width: 23px;
    height: 23px;
    background: #104987;
  } 
`
