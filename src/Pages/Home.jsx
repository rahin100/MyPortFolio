import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Education from "../Components/Education/Education";
import Experience from "../Components/Experience/Experience";
import Footer from "../Components/Footer/Footer";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import SocialLinks from "../Components/SocialLinks/SocialLinks";


const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <SocialLinks></SocialLinks>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Experience></Experience>
            <Projects/>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;