import styled from "styled-components";

export const LinkArea = styled.a`
    display: flex;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${props=>props.active ? '#0B4D00' : 'transparent'};
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
    width: 34px;
`;