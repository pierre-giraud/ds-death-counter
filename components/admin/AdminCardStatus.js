import React from 'react';
import styled from "styled-components";

const Container = styled.p`
    text-align: center;
    color: ${props => props.color ? props.color : "black"}
`;

function AdminCardStatus({children, color}){
    return (
        <Container color={color}>
            {children}
        </Container>
    )
}

export default AdminCardStatus;