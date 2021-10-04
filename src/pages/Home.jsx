import React from "react";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import UnderConstruction from "./UnderConstruction";

export default function Home() {
    return (
        <div id="home">
   <UnderConstruction />
            <Container>
                <header className="site-title" >
                    <h1>Women Who've Changed Tech</h1>
                </header>
                <div className="main">
                    <p class="lead" id="summary"> A history of Female Tech Pioneers and the Women Changing Tech Today.<br></br>
                       <span id="summary-info">An Open Source Project</span><br></br>
                       
                    </p>
                    <p class="lead" id="summary"><a href="https://github.com/kwing25/Women-Who-ve-Changed-Tech"><i class="fab fa-github">  </i> Github Repository</a> </p>
                    
                    <p class="lead" id="quote">“Well-behaved women seldom make history.” Laurel Thatcher Ulrich</p>
                    {/* <a href="#" class="btn btn-lg btn-secondary">Learn more</a> */}
                </div>
            </Container>
     
        </div>



    )
}

