import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    max-width: 80%;
    height: 180px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;


`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background-color: #2d2d37;
    border-radius: 3px;
    padding: 2px 5px;
    margin: 0 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fafafa;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRigth = styled.a`
    font-size: 12px;
    line-height: 25px;
    color: #fafafa;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPictures = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fafafa;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #fafafa;
`
