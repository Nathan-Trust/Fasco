import { useState, useEffect } from "react";
import EmblaCarousel from "./embla/EmblaCarousel";

const Deals = () => {
  // Set the target date for the countdown (for example, 2 days, 5 hours, 30 minutes from now)
  const targetDate = new Date();
  targetDate.setSeconds(targetDate.getSeconds() + 100000); // Set a target time (e.g., 100000 seconds from now)

  // State to hold the countdown
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Function to calculate the remaining time
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    // Calculate remaining time
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  // Update the countdown every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      // If the countdown reaches zero, clear the interval
      if (
        newTimeLeft.days === 0 &&
        newTimeLeft.hours === 0 &&
        newTimeLeft.minutes === 0 &&
        newTimeLeft.seconds === 0
      ) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const OPTIONS = { align: "start", dragFree: true, loop: true };
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="bg-[#FAFAFA] py-16 px-4">
      <div className="screen-max-width grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4">
          <h3 className="text-4xl font-medium text-[#484848]">
            Deals Of The Month
          </h3>
          <p className="mb-6 mt-5 text-[#8A8A8A] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin{" "}
          </p>
          <button className="px-4 mt-4 w-fit py-2 bg-[#000000] text-white rounded hover:bg-[#000000]/50 transition">
            Buy Now
          </button>
          <div className="mt-6">
            <p className="text-[#484848] font-medium">
              Hurry, Before It’s Too Late!
            </p>
            <div className="flex gap-4 mt-5">
              <div className="flex flex-col items-center">
                <div className="shadow-2xl md:text-5xl py-7 px-5 text-md md:py-9 md:px-4 lg:text-2xl rounded-md font-digital lg:py-3 lg:px-2">
                  {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
                </div>
                <span className="mt-1.5">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="shadow-2xl md:text-5xl py-7 px-5 text-md md:py-9 md:px-4 lg:text-2xl rounded-md font-digital lg:py-3 lg:px-2">
                  {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
                </div>
                <span className="mt-1.5">Hr</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="shadow-2xl md:text-5xl py-7 px-5 text-md md:py-9 md:px-4 lg:text-2xl rounded-md font-digital lg:py-3 lg:px-2">
                  {timeLeft.minutes < 10
                    ? `0${timeLeft.minutes}`
                    : timeLeft.minutes}
                </div>
                <span className="mt-1.5">Mins</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="shadow-2xl md:text-5xl py-7 px-5 text-md md:py-9 md:px-4 lg:text-2xl rounded-md font-digital lg:py-3 lg:px-2">
                  {timeLeft.seconds < 10
                    ? `0${timeLeft.seconds}`
                    : timeLeft.seconds}
                </div>
                <span className="mt-1.5">Sec</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
};

export default Deals;
