import styled from "@emotion/styled";
import Menu from "./Menu";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
    return (
        <div>
            <Container>
                <Menu/>
            </Container>
        </div>
    )
}
