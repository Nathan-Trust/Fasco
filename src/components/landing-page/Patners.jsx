import partnersOne from "../../assets/landing-page/partners/channel.svg"
import partnersTwo from "../../assets/landing-page/partners/louisvuitton.svg"
import partnersThree from "../../assets/landing-page/partners/prada.svg"
import partnersFour from "../../assets/landing-page/partners/calvinklein.svg"
import partnersFive from "../../assets/landing-page/partners/denim.svg"
import Marquee from "react-fast-marquee"
const Partners = () => {
  return (
    <div className="screen-max-width py-8">
      <Marquee autoFill>
        <div className="flex gap-4">
          <img src={partnersOne} alt="partners-one" className="w-32 ml-4" />
          <img src={partnersTwo} alt="partners-two" className="w-24" />
          <img src={partnersThree} alt="partners-three" className="w-32" />
          <img src={partnersFour} alt="partners-four" className="w-24" />
          <img src={partnersFive} alt="partners-five" className="w-28" />
        </div>
      </Marquee>
    </div>
  );
}

export default Partners