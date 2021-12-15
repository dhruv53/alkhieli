import React from "react";

function Contact() {
  return (
    <div>
      <h1>DROP US A MESSAGE.</h1>
       <div style={{ display: "flex", justifyContent: "space-around", flexWrap:"wrap" }}>
        <div style={{ width: "280px" }}>
          <h3>We would love to hear from you.</h3>
          <h4>ALKHIELI & ASSOCIATES</h4>
        </div>
        <div style={{ width: "280px" }}>
          <h3>Riyadh</h3>
          <p>
            https://www.alkhieli.com
            <br />
            +966112032181
            <br />
            <br />
            7544 King Fahd Branch Rd,
            <br />
            An Nakheel,
            <br />
            Riyadh 123815588,
            <br />
            Saudi Arabia
          </p>
        </div>
        <div style={{ width: "280px" }}>
          <h3>Follow us on</h3>
          <h3>
            <b>In &nbsp;&nbsp;&nbsp;Fb &nbsp;&nbsp;&nbsp;Tw</b>
          </h3>
        </div>
      </div> 
      {/* <hr/>
            <br/><br/> */}
    </div>
  );
}

export default Contact;
