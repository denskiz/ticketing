import axios from "axios";

const LandingPage = ({ color }) => {
  return <h1>landing page</h1>;
};

LandingPage.getInitialProps = async (context) => {
  console.log("LANDING PAGE!");
  return {};
};

export default LandingPage;
