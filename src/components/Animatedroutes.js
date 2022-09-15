import { Route, Routes, useLocation } from "react-router-dom";
import { Landingpage } from "../components/landingpage";
import { Projects } from "./Projects"
import { Skills } from "./Skill"
import { Blogvideo } from "../components/blogvideo"
import { Markdownvideo } from "../components/markdownvideo"
import { Productvideo } from "../components/productvideo"
import { Quizvideo } from "../components/quizvideo"
import { Contact } from "../components/contact"
import { AnimatePresence } from "framer-motion"


export function AnimatedRoutes() {

    const Location = useLocation()

    return (
        <>
            <AnimatePresence>
                <Routes Location={Location} key={Location.pathname}>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/blogvideo" element={<Blogvideo />} />
                    <Route path="/markdownvideo" element={<Markdownvideo />} />
                    <Route path="/quizvideo" element={<Quizvideo />} />
                    <Route path="/productvideo" element={<Productvideo />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}