import React from "react";
import styled from "styled-components";
import AdminCard from "./AdminCard";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    margin-top: 3rem;
    padding: 1.5rem;
    border: 1px solid #dddddd;
    border-radius: 10px;
    box-shadow: 0px 1px 8px lightgray;
`;

function AdminPanel(){
    return (
        <Container>
            <AdminCard title={"Joueurs"} type={0}/>
            <AdminCard title={"Bosses"} type={1}/>
        </Container>
    )
}

export default AdminPanel;