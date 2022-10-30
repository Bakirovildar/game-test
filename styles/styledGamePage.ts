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
