import { motion } from "framer-motion";
import fascoHero from "../../assets/landing-page/hero/fasco-hero.svg";
import fascoHeroTwo from "../../assets/landing-page/hero/images.svg";
import fascoHeroThree from "../../assets/landing-page/hero/fasco-heroThree.svg";
import fascoHeroFour from "../../assets/landing-page/hero/fasco-heroFour.svg";

const Hero = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:h-[600px] screen-max-width px-4">
      {/* Left Image */}
      <motion.div
        className="bg-[#e0e0e0] flex items-end rounded-md"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={fascoHero} alt="fasco hero" className="w-64 mx-auto" />
      </motion.div>

      {/* Center Column */}
      <div className="h-full flex justify-between flex-col w-full">
        {/* Top Image */}
        <motion.div
          className="bg-[#e0e0e0] p-3 rounded-lg  h-[200px] lg:h-[20%]"
          style={{
            backgroundImage: `url(${fascoHeroTwo})`,
            backgroundSize: "contain",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Text Content */}
        <div className="flex flex-col w-80 lg:w-64 mx-auto items-center py-8">
          <motion.p
            className="text-5xl font-semibold"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
          >
            ULTIMATE
          </motion.p>
          <motion.p
            className="sale-text text-4xl text-red-500 font-bold mt-2"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            style={{ textShadow: "1px 1px 2px white" }}
          >
            SALE
          </motion.p>
          <motion.p
            className="text-[#484848] text-sm"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            NEW COLLECTION
          </motion.p>
          <motion.button
            className="px-4 mt-4 w-full py-2 bg-[#000000] text-white rounded hover:bg-[#000000]/50 transition"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
          >
            Sign up
          </motion.button>
        </div>

        {/* Bottom Image */}
        <div
          className=" p-3 rounded-md w-44 h-[250px] lg:h-[20%]"
          style={{
            backgroundImage: `url(${fascoHeroThree})`, // Directly set the background image
            backgroundSize: "contain", // Ensures the image covers the entire container
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents tiling
            width: "100%", // Full width
          }}
        />
      </div>

      {/* Right Image */}
      <motion.div
        className="bg-[#e0e0e0] flex items-end rounded-md"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img src={fascoHeroFour} alt="fasco hero" className="w-44 mx-auto" />
      </motion.div>
    </div>
  );
};

export default Hero;
