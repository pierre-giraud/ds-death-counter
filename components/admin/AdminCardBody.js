import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1rem;
    justify-content: center;
    
    > * {
        margin: 0.5rem;
    }
`;

function AdminCardBody({children}){
    return(
        <Container>
            {children}
        </Container>
    )
}

export default AdminCardBody;