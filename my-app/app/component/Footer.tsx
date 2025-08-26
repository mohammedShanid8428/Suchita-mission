import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-100 text-sm text-gray-700 mt-16">
      <div className="flex justify-center gap-8 flex-wrap py-6 border-t border-gray-300">
       <img src="/footer1.png" alt="" className="h-10" />
         <img src="/footer2.png" alt="" className="h-10" />
         <img src="/footer3.png" alt="" className="h-10" />
         <img src="/footer4.png" alt="" className="h-10" />
      </div>
      <div className="max-w-7xl mx-auto px-8 py-10 grid-cols-2 flex gap-8">
        <div>
          <h4 className="font-bold text-green-700 mb-2">Suchitwa Mission</h4>
          <p>
            4th Floor, Revenue Tower, Public Office Compound, Trivandrum,
            Kerala, PIN - 695 033
          </p>
          <div className="flex gap-3 mt-4">
            <Facebook className="h-5 w-5 text-green-700 " />
            <Twitter className="h-5 w-5 text-green-700 " />
            <Linkedin className="h-5 w-5 text-green-700 " />
            <Instagram className="h-5 w-5 text-green-700 " />
            <Youtube className="h-5 w-5 text-green-700 " />
          </div>
        </div>


        <div>
          <h4 className="font-bold text-green-700 mb-2">About SGLR</h4>
          <p>
            For ease of making the SGLR process, the state has prepared an online
            system for performing the self-assessment where hospitality
            facilities can register and create an account to take part in the
            process.
          </p>
          <div className="flex gap-4 mt-4 flex-wrap text-gray-600">
            <a href="#" className="hover:text-green-700">
              Disclaimer
            </a>
            <a href="#" className="hover:text-green-700">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-green-700">
              Cookies Policy
            </a>
            <a href="#" className="hover:text-green-700">
              Sitemap
            </a>
            <a href="#" className="hover:text-green-700">
              General Terms & Conditions*
            </a>
          </div>
        </div>
      </div>

      <div className="border-t text-center text-gray-600 bg-green-200 text-xs py-4">
        <div className="flex flex-row justify-between items-center max-w-6xl mx-auto px-12 text-md">
          <p className="text-sm">© 2025 Suchitwa Mission. All Rights Reserved</p>
          <p className="text-sm">Powered by SRV InfoTech</p>
        </div>
      </div>
    </footer>
  );
}
