import "bootstrap/dist/css/bootstrap.css";

// Need this file for importing global CSS

const AppComponent = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default AppComponent;
