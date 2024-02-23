import React from 'react'
import { Card } from '../../Components/Card';
import { UserInfo } from '../../Components/UserInfo';

import Header from '../../Components/Header'

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Vinícius Lemos" image="https://avatars.githubusercontent.com/u/45412450?v=4" percentual={25}/>
                <UserInfo nome="Vinícius Lemos" image="https://avatars.githubusercontent.com/u/45412450?v=4" percentual={65}/>
                <UserInfo nome="Vinícius Lemos" image="https://avatars.githubusercontent.com/u/45412450?v=4" percentual={45}/>
                <UserInfo nome="Vinícius Lemos" image="https://avatars.githubusercontent.com/u/45412450?v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed }; 