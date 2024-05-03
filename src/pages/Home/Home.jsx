import Login from "../Login/Login";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Login></Login>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;