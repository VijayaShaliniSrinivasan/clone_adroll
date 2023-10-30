import { Button, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from "react-bootstrap";
import './Mainpage.css'
import Listing from "./list";
import Footer from "./Footer";
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from 'react-icons/bs';
function Mainpage() {
    return (
        <Container fluid>
            <p className="para1">Learn how to optimize your webpages and ad creative at our upcoming workshop 👀<a>Register Now</a></p>
            <Row className="part1">
                <Col md={6}>
                    <h1>Smaller budgets need<br></br> smarter dollars</h1>
                    <h6>Create, manage, and analyze your display, Facebook, Instagram,<br></br> Pinterest, TikTok, and email campaigns from a single platform.<br></br> AdRoll helps marketers do more with less.

                    </h6>
                    <Button className="btn1 mt-5 me-4">GET STARTED</Button>
                    <Button className="btn2 mt-5">GET IN TOUCH</Button>

                </Col>
                <Col md={6}><img src="/hero-machine.webp" className="img2" /></Col>
            </Row>

            <Row className="part2" >
                <Col md={6}>
                    <h3>AdRoll works for the<br></br>marketing newbie.
                    </h3>
                    <p>Our industry-first automation builder gives you full control of <br></br>
                        campaigns across display, social, and email — all from one place.</p>
                    <p className="pink">

                        Explore automation builder

                    </p>
                </Col>
                <Col md={6}><img src="/img-automation_studio.webp" /></Col>
                <Row xs={3} md={6} style={{ alignItems: "center" }} className="mx-0">
                    <Col><img src="/lounge.webp" className="logo" /></Col>
                    <Col><img src="/topo-designs.webp" className="logo" /></Col>
                    <Col><img src="/peyton-jewelry.webp" className="logo" /></Col>
                    <Col><img src="/shady-rays.webp" className="logo" /></Col>
                    <Col><img src="/exploading-kittens.webp" className="logo" /></Col>
                    <Col><img src="/head-kandy.webp" className="logo" /></Col>



                </Row>
            </Row>
            <Row className="part3">
                <Col><img src="/customers-find.webp" id="img3" /></Col>
                <Col><h2>
                    For 15 years, we've been the leader<br></br> in helping our customers find their<br></br> best customers</h2>
                    <p>The AdRoll platform is powered by 15+ years of data from <br></br>hundreds of thousands of brands and billions of shoppers. Let our <br></br>expertise find the right customers for your business.</p>
                    <p className="pink">Learn More</p>
                </Col>
            </Row>
            <div className="Overpage">

                <Row className="part44">
                    <Col>
                        <h2>Save time and energy by running all <br></br> your campaigns across millions of<br></br> websites and mobile apps — from <br></br>one place</h2>
                        <p>When we say one-stop shop, we mean one-stop. Launch, pause, <br></br>and edit ad campaigns across all the places you want to advertise,<br></br> plus use that data to see your campaigns holistically <br></br>and make improvements.</p>
                        <p className="pink">.

                            Explore social ads manager</p>  </Col>
                    <Col><img src="/save-time.webp" /></Col>
                </Row>
                <Row className="part44">
                    <Col><img src="/correct-choices.webp" /></Col>
                    <Col>
                        <h2>Our retargeting and brand<br></br> awareness ads make billions of<br></br> correct choices every day</h2>
                        <p>Our AI does what even the most savvy marketer
                            alone cannot. Our  <br></br>powerful machine learning makes more predictions per second <br></br>than the NASDAQ to attract the right customers to your site
                            <br></br> and get them buying again and again.</p>
                        <p className="pink">
                            Explore retargeting ads</p>
                        <p className="pink">
                            Explore brand awareness ads</p>
                    </Col>

                </Row>
                <Row className="part44">
                    <Col>
                        <h2>Experts to manage your advertising</h2>
                        <p>Want to run effective campaigns but don’t have the bandwidth to<br></br>
                            manage different platforms? AdRoll managed services can be an <br></br>
                            extension of your marketing team, providing you with a dedicated<br></br>
                            platform expert to partner with, helping you and your team achieve your<br></br>
                            marketing goals and maximize return from your campaigns.</p>
                        <p className="pink">

                            Get the support you deserve</p></Col>
                    <Col><img src="/experts.webp" /></Col>

                </Row>
            </div>
            <div className="part55">
                <Row className="part5">

                    <Col md={6} ><img src="/logo-volcanica.webp" className="left-column mb-5" />
                        <h5>Since last year, our revenue has<br></br> increased 191%, our attributed conversions 177%,<br></br> and our engagement 33%. We’re reaching and converting customers<br></br> higher in the funnel."</h5>
                    </Col>
                    <Col md={6} className="right-column"><h3>AdRoll customers make
                    </h3>
                        <h1 style={{ fontSize: "120px", fontWeight: "800px" }}>$165B</h1>
                        <h3>in sales every year</h3>
                    </Col>

                </Row></div>

            <div className="Badge">
                
                <img className="b1" src="https://images.g2crowd.com/uploads/report_medal/image/1004323/medal.svg"/>
                    <img className="b1" src="https://images.g2crowd.com/uploads/report_medal/image/1004325/medal.svg" />
                    <img className="b1" src="https://images.g2crowd.com/uploads/report_medal/image/1004342/medal.svg" />
                    <img className="b1" src="https://www.g2.com/shared-assets/product-badges/users-love-us.svg" />
                
            </div>
            <div className="part6">
                <h3>Increase ROI. Learn from your data.<br></br>
                    Maximize sales.</h3>
                <Button className="btn1 mt-5 me-4">GET STARTED</Button>
                <Button className="btn2 mt-5">GET IN TOUCH</Button>
            </div>
            <div className="part7">
                <Row>
                    <Col md={10}>
                        <Listing />
                    </Col>
                    <Col md={2} className="col-logo">
                        <div className="div1 " style={{ display: "flex", justifyContent: "space-evenly", fontSize: "20px" }}>
                            <BsFacebook /><BsLinkedin /><BsInstagram /><BsTwitter />
                        </div>
                        <div className="div2 mt-3">
                            <img src="https://www.iab.com/wp-content/themes/iab/assets/img/iab-logo-cropped.png"/>
                        <img src="https://thenai.org/wp-content/uploads/2021/06/NAI_logo.png"/>
                        <img src="https://www.tagtoday.net/hubfs/Site%20Assets/TAG%20Brand%20Images/TAG%20Logo_Primary.svg"/>
                        </div>
                        <div className="div3 mt-3">
                        <img style={{height:"45px",width:"120px"}} src="https://www.g2.com/products/adroll/widgets/stars?color=white&type=read"/>

                        </div>
                    </Col>

                </Row>
            </div>
            <Footer />
        </Container>
    )



}
export default Mainpage;