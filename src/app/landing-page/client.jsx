import Deals from "../../components/landing-page/Deals"
import Featured from "../../components/landing-page/Featured"
import Hero from "../../components/landing-page/Hero"
import NewArrivals from "../../components/landing-page/NewArrivals"
import Partners from "../../components/landing-page/Patners"

const HomeClient = () => {
  return (
      <div>
      <Hero />
      <Partners />
      <Deals />
      <NewArrivals />
      <Featured/>
    </div>
  )
}

export default HomeClient