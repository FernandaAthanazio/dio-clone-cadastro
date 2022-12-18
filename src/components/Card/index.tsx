import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import {
    CardContainer,
    Content,
    HasInfo,
    ImageBackground,
    PostInfo,
    UserInfo,
    UserPicture
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://res-3.cloudinary.com/fieldfisher/image/upload/c_lfill,dpr_1,g_auto,h_700,w_1240/f_auto,q_auto/v1/sectors/technology/tech_neoncircuitboard_857021704_medium_lc5h05' />
        <Content>
            <UserInfo>
                <UserPicture  src='https://avatars.githubusercontent.com/u/119270607?s=400&u=20443d1b6b62228ee2efeb05c010c176edb2e081&v=4' />
                <div>
                    <h4>Fernanda Maria</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4> Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de HTML e CSS no Bootcamp dio do OrengeTech...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10{}
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }