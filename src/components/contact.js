import { motion } from "framer-motion"
import '../index.css';
import { useEffect } from "react"
import Card from 'react-bootstrap/Card'


// function used for User verification log-in

export function Contact() {

    // useEffect used to clear history to avoid browser back button

    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);
        })
    }, []);




    return (
        <>
            <section>
                <motion.div class="landingpage" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                    <div class="container-fluid " >
                        <div class="row" style={{ marginTop: "2%" }}>
                            <div class="col-lg-6 col-md-6 col-sm-12 text-center   d-md-table mx-auto my-auto programmerimg" >
                                <img src="programmer2.svg" class="img-fluid" ></img>
                            </div>

                            {/*skill images */}

                            <div class="col-lg-6 col-md-6 col-sm-12     my-auto  ">

                          

                                <div class="row skillimgrowht    ">
                                    <div class=" col-lg-6 col-md-6 col-sm-12 mt-5 mt-lg-0 mt-md-0 mt-sm-5 text-start align-self-center mx-auto"  >

                                        <Card  >
                                            <Card.Body>
                                                <Card.Title ><img src="gmail.png" class="skillimage1"   ></img> 
                                                &nbsp; <span>m.rajeshmanohar@gmail.com</span>
                                                </Card.Title>

                                            </Card.Body>
                                        </Card>

                                    </div>

                                </div> <br></br>

                                <div class="row skillimgrowht    ">
                                    <div class="col-lg-6 col-md-6 col-sm-12 mt-2 mt-lg-0 mt-md-0 mt-sm-2 text-start align-self-center mx-auto"  >

                                        <Card  >
                                            <Card.Body>
                                                <Card.Title ><img src="whatsup.png" class="skillimage1"   ></img> 
                                                &nbsp;&nbsp;<span>+91 9791967710</span>
                                                </Card.Title>

                                            </Card.Body>
                                        </Card>

                                    </div>

                                </div> <br></br>


                                <div class="row skillimgrowht    ">
                                    <div class=" col-lg-6 col-md-6 col-sm-12 mt-2 mt-lg-0 mt-md-0 mt-sm-2 text-start align-self-center mx-auto"  >
                                    <a className="a" href="https://github.com/RajeshManoharan92" target="_blank">
                                        <Card  >
                                            <Card.Body>
                                                <Card.Title ><img src="github-brands.png" class="skillimage1"   ></img> &nbsp;&nbsp; / &nbsp; RajeshManoharan92
                                                
                                                </Card.Title>

                                            </Card.Body>
                                        </Card> </a>

                                    </div>

                                </div> <br></br>


                                <div class="row skillimgrowht    ">
                                    <div class=" col-lg-6 col-md-6 col-sm-12 mt-2 mt-lg-0 mt-md-0 mt-sm-2 text-start align-self-center mx-auto"  >
                                    <a className="a" href="https://www.linkedin.com/in/rajesh-m-66bb8324b/" target="_blank">
                                        <Card  >
                                            <Card.Body>
                                                <Card.Title ><img src="linkedin.png" class="skillimage1"   ></img> &nbsp;&nbsp; / &nbsp; rajesh-m-66bb8324b  
                                                
                                                </Card.Title>

                                            </Card.Body>
                                        </Card> </a>

                                    </div>

                                </div> <br></br>

                                </div>
                            </div>
                        </div>

                        

                        <div class="row">
                            <div class="col-12 btmimg">
                                <img src="wave.svg"></img>
                            </div>
                        </div>
                </motion.div>
            </section>
        </>
    )
}