import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import Header from './Header'
import {data} from './exampleData'
import Product from './product'

function App() {
  const [goods, setgoods] = useState(data)
  const [totalAmount, settotalAmount] = useState(null)
  const [remainingBalance, setremainingBalance] = useState(null)
  const handleTotalAmount = (e) => {
    const value = parseInt(e.target.value)
    settotalAmount(value)
    setremainingBalance(0)
    setgoods(goods.map(item => {
      if(value >= item.price){
        item.disabled = false
      }else{
        item.disabled = true
      }
      return item
    }))
  }
  const buyGoods = (id) => {
      const index = goods.findIndex(item => { return item.id === id })
      goods[index].totalNumber = goods[index].totalNumber - 1
      goods.map(item => { 
        item.disabled = true 
        return item
      })
      setgoods(goods)
      setremainingBalance(totalAmount - goods[index].price)
      settotalAmount(0)
  }
  return (
    <div className="container">
      <div style={{ width:'800px' ,marginTop:'20px' ,marginBottom:'20px' }}>
        <div class="row">
          <div className="col-md-10">
          <div class="card">
          <div class="card-body">
              <Header/>
              <Product goods={goods} handleBuyGoods={buyGoods}/>
          </div>
        </div>
          </div> 
          <div className="col-md-2" style={{
            // display:'flex',
            // justifyContent:'center',
          }}>
              Insert Momney 
              <input type='number'  class="form-control" onChange={handleTotalAmount} value={totalAmount}></input>
              Remaining
              <input  class="form-control" disabled={true} value={remainingBalance}></input>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
