import { Container } from "react-bootstrap";

export default  function Footer(){
    return(
        <Container fluid>
     
<div className="footer">
    <img src="https://www.adroll.com/assets/svg/logo-nextroll.svg"/><br></br>
    <img src="https://www.adroll.com/assets/svg/logo-adroll.svg"/>
    <img src="https://www.adroll.com/assets/svg/logo-rollworks.svg"/>
    <p style={{fontSize:"10px"}} className="my-3">NextRoll is as an equal opportunity employer.<br></br>
We stand alongside organizations that support our Rollers and Community.</p>
<div className="p my-3" style={{display:"flex",fontSize:"11px",justifyContent:"space-evenly",fontWeight:"bold"}}>
<p>Careers</p>
    <p>Trust Center</p>
    <p>Terms of Service</p>
    <p>Website Terms of Use</p>
    <p>Privacy Notice</p>
    <p>Infringement Policy</p>
    <p>Ad Opt Out</p>
    <p>CCPA Notice at Collection</p>
    <p>AdChoices</p></div>

    <p>Your Privacy Choices <img src="https://www.adroll.com/assets/img/your-privacy-choices.png" style={{height:"10px",width:"20px"}}/>
</p>
<p style={{fontSize:"9.5px"}}>© 2006-2023, NextRoll, Inc. All rights reserved. AdRoll is a division of NextRoll. To learn more please visit nextroll.com.

</p>
<button className="footerbtn">DO NOT SELL OR SHARE MY PERSONAL INFORMATION</button>
        </div>



</Container>
    )}