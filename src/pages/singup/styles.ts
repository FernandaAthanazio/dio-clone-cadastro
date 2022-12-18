import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFF;
`

export const TitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleLogin = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const SubtitleRow = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 35px;
    padding-top: 15px;
`

export const EsqueciText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #e5e844;
`

export const CriarText = styled.p`
    width: 185px;
    top: 584px;
    left: 750px;
    font-family: 'Open Sans';
    font-style: bold;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;

    color: #23DD7A;
`

export const InputContainer = styled.div`
   margin-top: 67px;
   width: 90%;
   flex: 1;
`

export const ButtonContainer = styled.div`
   width: 90%;
   margin-top: 20px;
   display: flex;
   align-items: center;
   flex-direction: column;
   p{
       font-size: 0.75rem;
       font-weight: 400;
       color: ${({theme})=> theme.colors.secondary};
 
      a {
       font-size: 1rem;
       font-weight: 700;
      }
   }
`