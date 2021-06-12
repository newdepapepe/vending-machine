import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import Header from './Header'
import {data} from './exampleData'
import Product from './product'

function App() {
  const [goods, setgoods] = useState(data)
  const [moneyCustomer, setmoneyCustomer] = useState(null)
  const [remainingBalance, setremainingBalance] = useState(null)
  return (
    <div className="container">
      <div style={{ width:'800px' ,marginTop:'20px' ,marginBottom:'20px' }}>
        <div class="row">
          <div className="col-md-10">
          <div class="card">
          <div class="card-body">
              <Header/>
              <Product goods={goods}/>
          </div>
        </div>
          </div> 
          <div className="col-md-2" style={{
            // display:'flex',
            // justifyContent:'center',
          }}>
              Insert Momney 
              <input  class="form-control"></input>
              Remaining
              <input  class="form-control"></input>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
