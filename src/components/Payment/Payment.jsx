import React, {useState} from 'react'
// import { Tab,Tabs, Nav, Col, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

import "./payment.css";
const Payment = () => {
   
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  
    return (
      <div className="container-fluid">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            One Off Donation
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Monthly Donation
          </button>
          
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-12' >
            <div className="card border-0">
            <div className='card-content text-center'>
                <h3>Individual</h3>
                <p>For Individual</p>
                <hr/>
                <h2>#5000 and Above</h2>
                <button>One Off</button>
                <p>Designed to suit those who can spare a little to give.</p>
                <hr/>
                <p>Food and beverages</p>
                <hr/>
                <p>Clothings</p>
                <hr/>
                <p>Blanket</p>
                <Link to="/contact">Donate</Link>
            </div>
          </div>
            </div>

            <div className='col-lg-4 col-md-4 col-12' >
            <div className="card border-0">
            <div className='card-content text-center'>
                <h3>Corporate</h3>
                <p>For corporate donations</p>
                <hr/>
                <h2>N500,000 & Above</h2>
                <button>One Off</button>
                <p>Created for the corporate donors who can spare more</p>
                <hr/>
                <p>Food and beverages</p>
                <hr/>
                <p>Clothings & Blankets</p>
                <hr/>
                <p>Funds and Med</p>
                <Link to="/contact">Donate</Link>
            </div>
          </div>
            </div>

            <div className='col-lg-4 col-md-4 col-12' >
            <div className="card border-0">
            <div className='card-content text-center'>
                <h3>PARTNER</h3>
                <p>Lets work together</p>
                <hr/>
                <h2>N1 Million & Above</h2>
                <button>One Off</button>
                <p>Work with us by sponsoring selected projects</p>
                <hr/>
                <p>Workshops</p>
                <hr/>
                <p>Facilitations</p>
                <hr/>
                <p>Provisions</p>
                <Link to="/contact">Donate</Link>
            </div>
          </div>
            </div>
          </div>
           
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <div className='row'>
            <div className='col-lg-4 col-md-4 col-12' >
            <div className="card border-0">
            <div className='card-content text-center'>
                <h3>Individual</h3>
                <p>For Individual</p>
                <hr/>
                <h2>#5000 and Above</h2>
                <button>Monthly</button>
                <p>Designed to suit those who can spare a little to give.</p>
                <hr/>
                <p>Food and beverages</p>
                <hr/>
                <p>Clothings</p>
                <hr/>
                <p>Blanket</p>
                <Link to="/contact">Donate</Link>
            </div>
          </div>
            </div>

            <div className='col-lg-4 col-md-4 col-12' >
            <div className="card border-0">
            <div className='card-content text-center'>
                <h3>Corporate</h3>
                <p>For corporate donations</p>
                <hr/>
                <h2>N500,000 & Above</h2>
                <button>Monthly</button>
                <p>Created for the corporate donors who can spare more</p>
                <hr/>
                <p>Food and beverages</p>
                <hr/>
                <p>Clothings & Blankets</p>
                <hr/>
                <p>Funds and Med</p>
                <Link to="/contact">Donate</Link>
            </div>
          </div>
            </div>

            <div className='col-lg-4 col-md-4 col-12' >
            <div className="card border-0">
            <div className='card-content text-center'>
                <h3>PARTNER</h3>
                <p>Lets work together</p>
                <hr/>
                <h2>N1 Million & Above</h2>
                <button>Monthly</button>
                <p>Work with us by sponsoring selected projects</p>
                <hr/>
                <p>Workshops</p>
                <hr/>
                <p>Facilitations</p>
                <hr/>
                <p>Provisions</p>
                <Link to="/contact">Donate</Link>
            </div>
          </div>
            </div>
          </div>
           
          </div>
          </div>
  
      </div>
      
  
    );
}

export default Payment