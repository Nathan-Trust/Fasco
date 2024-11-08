import HomeClient from "./client"
import { Helmet } from 'react-helmet-async';


const Home = () => {
  return (
    <>
      <Helmet>
        <title>Fasco|Home</title>
        <meta name="description" content="Welcome to Fasco, your go-to platform for XYZ." />
        <link rel="canonical" href="https://fasco-vercel.app/" />
      </Helmet>
      <HomeClient />
    </>
  );
}

export default Home