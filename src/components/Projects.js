import Card from 'react-bootstrap/Card'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button'


// function used for step-1 verification log-in

export function Projects() {

    const Navigate = useNavigate()

    // useEffect used to clear history to avoid browser back button

    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event) {
            window.history.pushState(null, document.title, window.location.href);
        })
    }, []);

    // project 1

    const github1f = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Front-End
        </Tooltip>)

    const github1b = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Back-End
        </Tooltip>)

    const netlify1 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Netlify
        </Tooltip>)


    const video1 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Demo Video
        </Tooltip>)


    return (
        <>
            {/* Top Grid */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.1 } }}>
                <div class="container-fluid">
<div class="row justify-content-center">
<div class="col-lg-6 col-md-6 col-sm-12 text-center  mt-4 mt-lg-4 mt-md-4 mt-sm-4 ">
    <Card>
        <Card.Title>Credentials</Card.Title>
        <Card.Subtitle className="mb-2 ">User: user@example.com | Password : user123</Card.Subtitle>
        <Card.Subtitle className="mb-2 ">Admin: admin@example.com | Password : admin123</Card.Subtitle>
        <Card.Subtitle className="mb-2 ">OTP : abcDE1 </Card.Subtitle>
    </Card>
</div>
</div>


                    <div class="row mt-3 justify-content-center" >
                        <div class="col-lg-5 col-md-6 col-sm-12 text-center  mt-4 mt-lg-4 mt-md-4 mt-sm-4 ">
                            <Card  >
                                <Card.Img variant="top" src="blog.png" />
                                <Card.Body class="mb-3 mt-3">
                                    <Card.Title>Blog Web App</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">MERN Stack</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 ">
                                        User can create their own blog and they can view others blogs like Facebook and Instagram.
                                    </Card.Subtitle >

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={github1f}
                                    >
                                        <a href="https://github.com/RajeshManoharan92/Blog-App/tree/main/Front-End" target='_blank'>
                                            <img className="fbimg1" src="github-brands.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={github1b}
                                    >
                                        <a href="https://github.com/RajeshManoharan92/Blog-App/tree/main/Back-End" target='_blank'>
                                            <img className="fbimg1" src="github-brands.png"></img></a>
                                    </OverlayTrigger>  &nbsp; &nbsp; &nbsp;


                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={netlify1}
                                    >
                                        <a href="https://6318f1d88738d31ffd53248f--blogapp-rajeshm.netlify.app " target='_blank'>
                                            <img className="fbimg1" src="netlifylogo1.png"></img></a>
                                    </OverlayTrigger>  &nbsp; &nbsp; &nbsp;


                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={video1}
                                    >
                                        <img className="fbimg1" src="video.jfif" onClick={() => Navigate("/blogvideo")}></img>
                                    </OverlayTrigger>  &nbsp; &nbsp; &nbsp;


                                </Card.Body>
                            </Card>
                        </div>
                        <div class=" col-1 box">
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>
                    


                    
                        <div class="col-lg-5 col-md-6 col-sm-12 text-center offset-lg-1  mt-4 mt-lg-4 mt-md-4 mt-sm-4 ">
                            <Card >
                                <Card.Img  variant="top" src="quiz.png" />
                                <Card.Body class="mb-3 mt-3">
                                    <Card.Title>Quiz Web APP</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">MERN Stack</Card.Subtitle>
                                    <Card.Subtitle className="mb-2">
                                        Admin can create questions and let user to answer the questions on timer basis (30 sec), user can check their result once quiz ends.
                                    </Card.Subtitle>

                                    <OverlayTrigger
                                        placement="bottom"

                                        overlay={github1f}
                                    >
                                        <a href="https://github.com/RajeshManoharan92/Quiz-App/tree/main/Front-End" target='_blank'>
                                            <img className="fbimg1" src="github-brands.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;

                                    <OverlayTrigger
                                        placement="bottom"

                                        overlay={github1b}
                                    >
                                        <a href="https://github.com/RajeshManoharan92/Quiz-App/tree/main/Back-End" target='_blank'>
                                            <img className="fbimg1" src="github-brands.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;


                                    <OverlayTrigger
                                        placement="bottom"

                                        overlay={netlify1}
                                    >
                                        <a href="https://rajesh-m--quiz-app-rajesh.netlify.app/" target='_blank'>
                                            <img className="fbimg1" src="netlifylogo1.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;


                                    <OverlayTrigger
                                        placement="bottom"

                                        overlay={video1}
                                    >
                                        <img className="fbimg1" src="video.jfif" onClick={() => Navigate("/quizvideo")}></img>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;


                                </Card.Body>
                            </Card>
                        </div>

                    </div>

                    <br></br>

                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6 col-sm-12 text-center  mt-4 mt-lg-4 mt-md-4 mt-sm-3 ">
                            <Card >
                                <Card.Img variant="top" src="markdown.png" />
                                <Card.Body class="mb-3 mt-3">
                                    <Card.Title>React Markdown Editor & Viewer Web App</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">MERN Stack</Card.Subtitle>
                                                                        <Card.Subtitle className="mb-2">
                                        User can enter Markdown text in editor & View their live output simultaneously in viewer to check whether their text is correct.
                                    </Card.Subtitle>

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={github1f}
                                    >
                                        <a href="https://github.com/RajeshManoharan92/React-Markdown-Viewer-Editor-App/tree/main/Front-End" target='_blank'>
                                            <img className="fbimg1" src="github-brands.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={github1b}
                                    >
                                        <a href="https://github.com/RajeshManoharan92/React-Markdown-Viewer-Editor-App/tree/main/Back-End" target='_blank'>
                                            <img className="fbimg1" src="github-brands.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={netlify1}
                                    >
                                        <a href="https://63220841184cd52a50493a21--react-markdown-rajesh-m.netlify.app" target='_blank'>
                                            <img className="fbimg1" src="netlifylogo1.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={video1}
                                    >
                                        <img className="fbimg1" src="video.jfif" onClick={() => Navigate("/markdownvideo")}></img>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;

                                </Card.Body>
                            </Card>
                        </div>
                  
                        <div class="col-lg-5 col-md-6 col-sm-12 text-center offset-lg-1  mt-4 mt-lg-4 mt-md-4 mt-sm-4 ">
                            <Card  >
                                <Card.Img variant="top" src="product.png" />
                                <Card.Body class="mb-3 mt-3">
                                    <Card.Title>Product Rental Web App </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">MERN Stack</Card.Subtitle>
                                                                        <Card.Subtitle className="mb-2">
                                        Customer can book a product for rental in hour basis and payment done through Razor pay gateway.
                                    </Card.Subtitle>

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={github1f}
                                    >
                                        <a href="https://github.com/RajeshManoharan92/Product-Rental-App/tree/main/Front-End" target='_blank'>
                                            <img className="fbimg1" src="github-brands.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={github1b}
                                    >
                                        <a href="https://github.com/RajeshManoharan92/Product-Rental-App/tree/main/Back-End" target='_blank'>
                                            <img className="fbimg1" src="github-brands.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={netlify1}
                                    >
                                        <a href="https://6321647da4b3521ad3767863--product-rental-app.netlify.app/ " target='_blank'>
                                            <img className="fbimg1" src="netlifylogo1.png"></img></a>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;

                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={video1}
                                    >
                                        <img className="fbimg1" src="video.jfif" onClick={() => Navigate("/productvideo")}></img>
                                    </OverlayTrigger> &nbsp; &nbsp; &nbsp;


                                </Card.Body>
                            </Card>
                        </div>
                    </div>


                </div>
                <div class="row">
                    <div class="col-12">
                        <img src="wave.svg"></img>
                    </div>
                </div>
            </motion.div>
        </>
    )
}