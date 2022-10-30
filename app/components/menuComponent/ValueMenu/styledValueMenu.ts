import styled from "@emotion/styled";

export const StyledValueMenu: any = styled.div`
  margin-bottom: 54px;
  width: ${({widthCount}: any) => (100 * (widthCount.length - 1)) + 'px'};
  
  .numbers {
    display: flex;
    justify-content: space-between;
    padding: 0 5px 3px;
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #4F4B61;
    
  }
  
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
