import styled from "@emotion/styled";

export const StyledValueMenu: any = styled.div`
  margin-bottom: 54px;
  width: ${({widthCount}: any) => (100 * (widthCount.length - 1)) + 'px'};

  .numbers {
    display: flex;
    padding: 0 5px 3px;
    font-family: 'Calibri';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #4F4B61;

    .styleNum1 {
      padding-right: 83px;
    }
    .styleNum {
      padding-right: 76px;
    }
  }

  .countBox {
    width: ${({widthCount}: any) => (100 * (widthCount.length - 1)) + 'px'};
  }

  input[type=range] {
    width: 100%;
    background: #FFD748;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 21px;
    border-radius: 10px;
  }

  .circle {
    border-radius: 50%;
    width: 23px;
    height: 23px;
    background: #104987;
  }
`
