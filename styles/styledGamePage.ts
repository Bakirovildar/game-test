import styled from "@emotion/styled";

export const StyledGamePages: any = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({bgColor} : any) => bgColor};
`

export const StyledBg: any = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: ${({isTop}: any) => isTop ? 'flex-start' : 'flex-end'};
`

export const StyledNewYear = styled.div`
  position: absolute;
  left: 0;
  right: 0;

  .toys {
    display: flex;
    justify-content: space-between;
  }
`

export const StyledFlowers = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const StyledBgFlowersContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
`


export const StyledBoardBiscuit = styled.div`
  position: relative;
  bottom: 330px;
  width: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;

  .asend {
    position: absolute;
    left: 30%;
    top: -70px;
  }
  
  .desc {
    position: absolute;
    right: 28%;
    top: -70px;
  }

  @media all and (min-width: 1000px) {
    .board {
      width: 850px;
    }
    
    .circle {
      height: 140px;
      width: 140px;
    }
  }

  @media all and (min-width: 0) and (max-width: 1000px) {
    .board {
      width: 85vw;
    }

    .circle {
      height: 14vw;
      width: 14vw;
    }
  }
  
  .board-container {
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    
    .board {
      height: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      
      .number {
        position: absolute;
        padding-top: 30px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Calibri';
        font-style: normal;
        font-weight: 400;
        font-size: 56px;
        line-height: 68px;
        letter-spacing: 2px;

        color: #FFFFFF;
      }
      
      .circle {
        background: black;
        opacity: 0.20;
        border-radius: 50%;
        margin: 0 2px;
      }
    }
  }
`

export const StyledDragIcon = styled.div`
  position: absolute;
  bottom: 60%;
  width: 100%;
  display: flex;
  justify-content: center;

  @media all and (min-width: 1000px) {
    .dragIcon {
      height: 140px;
      width: 140px;
    }
  }

  @media all and (min-width: 0) and (max-width: 1000px) {
    .dragIcon {
      height: 14vw;
      width: 14vw;
    }
  }

  .dragIconContent {
    display: flex;
    justify-content: space-between;
    
    .dragIcon {
      margin: 0 2px;
      position: relative;
      cursor: pointer;
      
      
      span {
        position: absolute;
        width: 100%;
        height: 100%;
        font-family: 'Calibri';
        font-style: normal;
        font-weight: 400;
        font-size: 56px;
        line-height: 68px;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
        color: #FFFFFF;
      }
    }
  }
`
