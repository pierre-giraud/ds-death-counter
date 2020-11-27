import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
`;

function PlayerCardTitle({children}){
    return (
        <Container>
            <h2>{children}</h2>
        </Container>
    )
}

export default PlayerCardTitle;