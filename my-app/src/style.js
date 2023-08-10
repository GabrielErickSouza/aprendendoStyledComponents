import styled from 'styled-components'

export const  Title = styled.h1`
    color: #f00;
    font-size: ${props => `${props.fontsize}px`};
    
    span{
        color: blue;
        font-size:12px;
        margin-left:10px;
    }
`

export const TitleSmall = styled(Title)`
    color: orange;
` 

export const Container = styled.div`
    background: aqua;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`
