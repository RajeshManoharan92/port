import { motion } from "framer-motion"
import '../index.css';
import { useEffect } from "react"


// function used for User verification log-in

export function Skills() {



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
                    <div class="container-fluid  " >
                        <div class="row" style={{ marginTop: "4%" }}>
                            <div class="col-lg-6 col-md-12 col-sm-12 text-center mt-5 d-md-table mx-auto my-auto programmerimg" >
                                <img src="programmer1.svg" class="img-fluid" ></img>
                            </div>

                            {/*skill images */}

                            <div class="col-lg-6 col-md-12 col-sm-12  mt-5 mt-lg-0 mt-md-5 mt-sm-5  text-center align-self-center">

                                <div class="row skillimgrowht justify-content-center  ">
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4 "  >
                                        <img src="js-logo.svg" class="skillimage"   ></img>
                                        <p className="skillimagetext">javascript</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4 " >
                                        <img src="react.png" class="skillimage"   ></img>
                                        <p className="skillimagetext">react</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4 " >
                                        <img src="nodejs.svg" class="skillimage"  ></img>
                                        <p className="skillimagetext">nodejs</p>
                                    </div>
                                </div> <br></br>

                                <div class="row skillimgrowht justify-content-center " >
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="html.png" class="skillimage"  ></img>
                                        <p className="skillimagetext">HTML</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="css.svg" class="skillimage" ></img>
                                        <p className="skillimagetext">CSS</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="bootstrap.svg" class="skillimage"  ></img>
                                        <p className="skillimagetext">Bootstrap</p>
                                    </div>
                                </div> <br></br>

                                <div class="row skillimgrowht justify-content-center">
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="materialui.svg" class="skillimage"  ></img>
                                        <p className="skillimagetext">material-ui</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="expressjs.svg" class="skillimage" style={{ backgroundColor: "white", borderRadius: "30%" }} ></img>
                                        <p className="skillimagetext">expressjs</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="mongodb.svg" class="skillimage"  ></img>
                                        <p className="skillimagetext">mongodb</p>
                                    </div>
                                </div> <br></br>

                                <div class="row skillimgrowht justify-content-center">
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="aws.jfif" class="skillimage" style={{ backgroundColor: "white", borderRadius: "20%" }} ></img>
                                        <p className="skillimagetext">aws</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="sql.png" class="skillimage"  ></img>
                                        <p className="skillimagetext">sql</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="postman-icon.webp" class="skillimage" style={{ backgroundColor: "white", borderRadius: "60%" }}  ></img>
                                        <p className="skillimagetext">postman</p>
                                    </div>
                                </div>

                                <div class="row mt-3 skillimgrowht justify-content-center">
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="firebase.png" class="skillimage" style={{ backgroundColor: "white", borderRadius: "20%" }} ></img>
                                        <p className="skillimagetext">firebase</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="netlifylogo1.png" class="skillimage"  ></img>
                                        <p className="skillimagetext">netlify</p>
                                    </div>
                                    <div class="col-4 col-lg-2 col-md-4 col-sm-4" >
                                        <img src="heroku.png" class="skillimage" style={{ backgroundColor: "white", borderRadius: "60%" }}  ></img>
                                        <p className="skillimagetext">heroku</p>
                                    </div>
                                </div>

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