import Banner from "../../Components/Banner/Banner";
import AdvertisementSection from "../../Components/HomePage/AdvertisementSection";
import LatestUserReview from "../../Components/HomePage/LatestUserReview";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisementSection></AdvertisementSection>
            <LatestUserReview></LatestUserReview>
        </div>
    );
};

export default Home;