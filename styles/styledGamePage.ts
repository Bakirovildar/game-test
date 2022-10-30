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
