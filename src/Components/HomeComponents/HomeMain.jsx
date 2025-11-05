import HomeHero from "./HomeHero";
import HomeIntro from "./HomeIntro";
import HomeContact from "./HomeContact";
import HomeServices from "./HomeServices";
import HomeTestimonials from "./HomeTestimonials";
import HomeSuccessStories from "./HomeSuccessStories";

export default function HomeMain() {
  return (
    <>
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      {/* <HomeWhy /> */}
      <HomeSuccessStories />
      <HomeTestimonials />
      <HomeContact />
      {/* <HomeCta /> */}
    </>
  );
}
