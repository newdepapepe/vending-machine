import React from 'react'
import styled from "styled-components";
const HeaderDiv = styled.div`
    font-size : 35px;
    display: flex;
    justify-content: center;
`

function Header(props) {
    return (
        <div className="container">
            <div class="card">
                <HeaderDiv className="card-body">
                    <span>Fantastic Drink welcome</span>
                </HeaderDiv>
            </div>
        </div>
    )
}
export default Header

