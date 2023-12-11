import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Education from "../Components/Education/Education";
import Experience from "../Components/Experience/Experience";
import Footer from "../Components/Footer/Footer";
import Skills from "../Components/Skills/Skills";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Experience></Experience>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;