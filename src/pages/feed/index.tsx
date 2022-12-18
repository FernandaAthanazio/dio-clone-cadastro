import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Column, Container, Title } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true}/>
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>

            <Column flex={1}>
                <Title><div># RANKING 5 TOP DA SEMANA</div></Title>
            <UserInfo percentual={89} nome="Yaki Yakito" image='https://img1.ak.crunchyroll.com/i/spire3/b04bb9778e5e5f4aacc48341c6c301711621877106_large.jpg' />
            <UserInfo percentual={80} nome="Fernanda Maria" image='https://avatars.githubusercontent.com/u/119270607?s=400&u=20443d1b6b62228ee2efeb05c010c176edb2e081&v=4' />
            <UserInfo percentual={53} nome="Shoyo" image='https://vidanimal.com.br/wp-content/uploads/cachorro-fofo-pug-2048x1366.jpg' />
            <UserInfo percentual={25} nome="Bonifácio" image='https://risu-blog.s3.amazonaws.com/wp-content/uploads/2018/05/cachorros-fofos-shihtzu.jpg' />
            <UserInfo percentual={12} nome="Pandora" image='https://ae01.alicdn.com/kf/HTB1yN.6PVXXXXbkXXXXq6xXFXXXY/Mpk-peruca-de-gato-peruca-azul-e-magenta-para-gatos-assessoria-traje-de-gato-fofo.jpg_Q90.jpg_.webp' />
            </Column>
        </Container>
    </>)
}

export { Feed };