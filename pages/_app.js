import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layouts/layout";
import "../styles/globals.scss";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script src="/script/3dGlobe.js" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/ocanvas/2.8.1/ocanvas.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default MyApp;
