import React, { useEffect } from 'react'
import Product from './Product'

function Index(props) {
    return (
        <div className="container">
            <div class="card" style={{ marginTop:'5px' }}>
                <div className="card-body">
                    <div class="row">
                        {
                            props.goods.map(item => {
                                return <Product item={item} handleSelectProduct={props.handleBuyGoods} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index

