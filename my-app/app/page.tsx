import Header from "./component/Header";
import LoginCard from "./component/Authentication";
import CertificationSteps from "./component/CertificationSetup";
import Footer from "./component/Footer";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen flex flex-col">
    
      <Header />

    
      <section className="flex flex-row justify-between items-start px-20 mt-10 gap-10">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold text-green-800 leading-snug">
            Register for Swachhatha <br />
            <span className="text-green-600 text-4xl font-extrabold tracking-wider">Green Leaf Rating</span> <br />
            in Hospitality Facilities
          </h2>

          <p className="mt-6 text-gray-600 font-medium">Certified in Four Steps:</p>

          <Hero/>

       
          <CertificationSteps />
        </div>


        <LoginCard />
      </section>


      <Footer />
    </div>
  );
}
