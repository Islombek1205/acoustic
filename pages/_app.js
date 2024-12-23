import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <div>
      <Navbar />
      <Component { ...pageProps }/>
      <Footer />
    </div>
  );
}
