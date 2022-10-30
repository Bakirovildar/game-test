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
      
      .circle {
        background: black;
        opacity: 0.20;
        border-radius: 50%;
        margin: 0 2px;
      }
    }
  }
`
