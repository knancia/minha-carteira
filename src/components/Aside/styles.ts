import styled from 'styled-components'

export const Container = styled.div `
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray };
`

export const Header = styled.header `
    height: 70px;
    display: flex;
    align-items: center;
`

export const LogoImg = styled.img `
    height: 40px;
    width: 40px;
    margin-right: 10px;
`

export const Title = styled.span `
    color: ${props => props.theme.colors.white};
`

export const MenuContainer = styled.nav `
    margin-top: 50px;
    display: flex;
    flex-direction: column;

`

export const MenuItemLink = styled.a `
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.info};
    margin-bottom: 15px;
    text-decoration: none;
    transition: .3s;

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }

    &:hover {
        opacity: .7;
    }
`