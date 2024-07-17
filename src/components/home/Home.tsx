import BestActivities from "./components/bestactivities/BestActivities";
import CityList from "./components/citylist/CityList";
import ExploreMenu from "./components/exploremenu/ExploreMenu";
import Hero from "./components/hero/Hero";
import Offers from "./components/offers/Offers";
import VideoSec from "./components/videosec/VideoSec";
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero/>
      <Offers/>
      <ExploreMenu/>
      <VideoSec/>
      <BestActivities/>
      <CityList/>
    </>
  )
}

export default Home