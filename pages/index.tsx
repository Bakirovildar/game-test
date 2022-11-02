import styled from "@emotion/styled";
import Menu from "./Menu";
import MainLayout from "../app/components/MainLayout";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f1565;
`

export default function Home() {
    return (
        <div>
            <Container>
                <MainLayout>
                    <Menu/>
                </MainLayout>
            </Container>
        </div>
    )
}
