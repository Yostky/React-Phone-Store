import styled from "styled-components";

export const StyledButton = styled.button`
    text-transform: capitalize;
    cursor: pointer;
    padding: .2rem .5rem;
    margin: .2rem .5rem .2rem 0;
    transition: all .5s ease-in-out;
    color: ${props => props.detailCartBTN ? '#f5c71a' : '#00bfff'};
    background:transparent;
    border: .05rem solid #00bfff;
    border-radius: 4px;
    border-color: ${props => props.detailCartBTN ? '#f5c71a' : '#00bfff'};
    font-size: 1.6rem;
    &:hover {
        background: ${props => props.detailCartBTN ? '#f5c71a' : '#00bfff'};
        color: white;
    }
    &:focus {
        outline:none;
    }
`;