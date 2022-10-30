import Head from 'next/head'
import styled from "@emotion/styled";
import {Menu} from "../app/menu/Menu";

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
            <Head>
                <title>Игра для развития</title>
                <meta name="description" content="Развивающая игра"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Container>
                <Menu/>
            </Container>
        </div>
    )
}
