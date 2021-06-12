import React from 'react'
import Button from 'react-bootstrap/Button';
import styled from "styled-components";

const Image = styled.img`
    width:80px;
    border: 5px solid #555;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const PrductDiv = styled.div`
    margin-top:3px;
    margin-bottom:3px
`
const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-top:5px;
    margin-bottom:5px;
`

function Product(props) {
    const { name ,price ,image ,disabled ,totalNumber } = props.item
    return (
        <PrductDiv className="col-md-4">
            <div class="card">
                <div class="card-body">
                    <Image src={image}/>
                    <Content>{name}</Content>
                    <Content>ราคา {price}</Content>
                    <Content>
                        <SelectButton disabled={disabled} totalNumber={totalNumber} />
                    </Content>
                </div>
            </div>
        </PrductDiv>
    )
}

function SelectButton(props) {
    if(props.totalNumber === 0){
        return   <Button variant="btn btn-secondary" disabled={true}>select</Button>
    }
    return   <Button variant="success" disabled={props.disabled}>select</Button>
}
export default Product

