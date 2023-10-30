import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Mainpage from './Components/Mainpage';


function Navigatebar() {
  const [showWhyAdroll, setShowWhyAdroll] = useState(false);
  const [showMarketingPlatform, setShowMarketingPlatform] = useState(false);
  const [showForEcommerce, setShowForEcommerce] = useState(false);
  const [showResources, setShowResources] = useState(false);


  const handleWhyAdrollShow = () => {
    setShowWhyAdroll(true);
  };

  const handleWhyAdrollHide = () => {
    setShowWhyAdroll(false);
  };

  const handleMarketingPlatformShow = () => {
    setShowMarketingPlatform(true);
  };

  const handleMarketingPlatformHide = () => {
    setShowMarketingPlatform(false);
  };
  const handleForEcommerceShow = () => {
    setShowForEcommerce(true);
  }
  const handleForEcommerceHide = () => {
    setShowForEcommerce(false);
  }
  const handleResourcesShow = () => {
    setShowResources(true);
  }
  const handleResourcesHide = () => {
    setShowResources(false);
  }
  return (

    <Container fluid className='mynav'>
<Navbar collapseOnSelect expand="md" className="mainnav p-2"> {/* Change 'lg' to 'md' for medium-sized screens */}
  <Navbar.Brand href="#home"><img src='/adroll-logo-vector.png' className='img1' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"
          >
            <NavDropdown title="WhyAdroll" id="collapsible-nav-dropdown" show={showWhyAdroll}
              onMouseOver={handleWhyAdrollShow}
              onMouseLeave={handleWhyAdrollHide}>
              <NavDropdown.Item href="#">WhyAdRoll?</NavDropdown.Item>
              <NavDropdown.Item href="#">
                Managed services
              </NavDropdown.Item>
              <NavDropdown.Item href="#">case Studies</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Marketting Platform" id="marketing-platform-dropdown"
              show={showMarketingPlatform}
              onMouseOver={handleMarketingPlatformShow}
              onMouseLeave={handleMarketingPlatformHide}

              className="mega-dropdown-menu">
              <div className="mega-menu-content">
                <Row>
                  <Col md={2}>
                    <h5 className="mega-menu-title" href="#">  Marketing Platform</h5>

                    <NavDropdown.Item href="#" className='mega-menu1'></NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Audience & Segmentation
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Marketing Automation
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Customer Privacy Protection
                    </NavDropdown.Item>
                  </Col>
                  <Col md={2}>
                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Campaigns
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Retargeting Ads
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Brand Awareness Ads
                    </NavDropdown.Item>
                  </Col>

                  <Col md={2}>
                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Marketing Channels
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Display Advertising
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Video Advertising
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Native Advertising
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Email Marketing
                    </NavDropdown.Item>
                  </Col>

                  <Col md={2}>
                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Connected Channels
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Facebook Advertising
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Instagram Advertising
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      TikTok Advertising
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Pinterest Advertising
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Google Advertising
                    </NavDropdown.Item>
                  </Col>

                  <Col md={4}>
                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Analytics
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Cross-channel Performance
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#" className='mega-menu1'>
                      Cross-channel Attribution
                    </NavDropdown.Item>
                  </Col>
                </Row>
              </div>
            </NavDropdown>
            <NavDropdown title="For Ecommerce" id="For-Ecommerce-dropdown"
              show={showForEcommerce}
              onMouseOver={handleForEcommerceShow}
              onMouseLeave={handleForEcommerceHide}>
              <NavDropdown.Item href="#">AdRoll for Ecommerce</NavDropdown.Item>
              <NavDropdown.Item href="#">
                shopify
              </NavDropdown.Item>
              <NavDropdown.Item href="#">shopify plus</NavDropdown.Item>

              <NavDropdown.Item href="#">
                Woo Commerce
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                Wix
              </NavDropdown.Item>
              <NavDropdown.Item href="#">
                BigCommerce
              </NavDropdown.Item>

              <NavDropdown.Item href="#">
                Magento
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <NavDropdown title="Resources" id="resource-dropdown"
              show={showResources}
              onMouseOver={handleResourcesShow}
              onMouseLeave={handleResourcesHide} className="mega-dropdown-menu">
              <div className="mega-menu-content">

                <Row>
                  <Col md={2}>
                    <NavDropdown.Item href="#"> Managed services</NavDropdown.Item>
                    <NavDropdown.Item href="#">
                      Resource Library
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      AdRoll Blog
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Holiday Marketing Resources
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Third-Party Cookie Trail Guides
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Marketing Glossary
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      State of Digital Marketing Report
                    </NavDropdown.Item>
                  </Col>
                  <Col md={2}>
                    <NavDropdown.Item href="#">
                      Free Tools
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Return On Ad Spend Calculator
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      AdRoll UTM Link Builder
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Discount Profit Margin Calculator
                    </NavDropdown.Item>
                  </Col>
                  <Col md={2}>
                    <NavDropdown.Item href="#">
                      Community
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Growth Guerilla Collective
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Small Business Shopping List
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Events
                    </NavDropdown.Item>
                  </Col>
                  <Col md={2}>
                    <NavDropdown.Item href="#">
                      Customer Support
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Getting Started
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Help Center
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#">
                      Research Panel
                    </NavDropdown.Item>
                  </Col>
                  <Col md={4}>

                    <div className='box' >
                      <img src="https://www.adroll.com/assets/img/promo/holiday-marketing-hero.png?auto=webp&fm=png&width=350" />
                      <p style={{ fontWeight: "bold" }}>power up your holiday Marketing</p>
                      <p style={{ fontSize: "12px" }}>

                        It might seem early, but the race to holiday revenue is on! 🏃 <br></br>We’re here to guide you through your mission to generate <br></br> brand awareness, maximize budget, and create campaigns your  <br></br>target audience can’t ignore.

                        Play Now</p>
                      <p className='pink'>Play Now</p>
                    </div>
                  </Col>
                </Row></div>
            </NavDropdown>


          </Nav>
          <Nav>
            <button type="button" className='btn'>Login</button>
            <button type="button" className='startbtn'>Get Started</button>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      <Mainpage />

    </Container>
  );
}

export default Navigatebar;