import Banner from "../../Components/Banner/Banner";
import AdvertisementSection from "../../Components/HomePage/AdvertisementSection";
import LatestUserReview from "../../Components/HomePage/LatestUserReview";
import OurAgent from "../../Components/HomePage/OurAgent";
import SecurePayment from "../../Components/HomePage/SecurePayment";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisementSection></AdvertisementSection>
            <LatestUserReview></LatestUserReview>
            <SecurePayment></SecurePayment>
            <OurAgent></OurAgent>
        </div>
    );
};

export default Home;