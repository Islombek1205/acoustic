import Footer from "@/components/footer/footer";
import { LanguageProvider } from "@/components/languageContext";
import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
    <div>
      <LanguageProvider >
        <Navbar />
        <Component { ...pageProps }/>
        <Footer />
      </LanguageProvider>
    </div>
  );
}
