import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    background-color: ${props => props.active == props.id ? '#FFF' : '#AAE09A'};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 10px;
`;

export const CategoryImage = styled.img`
    height: 55px;
    width: 55px;
`;
