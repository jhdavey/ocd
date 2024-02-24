import { useRef } from "react";
import QuoteForm from '../QuoteForm';
import background from "../../assets/images/ocdbackground2flip.png";
import highlightImage from "../../assets/images/ocd4.jpg";
import check from '../../assets/images/check.png';
import { ClipboardDocumentCheckIcon, ClockIcon, HandThumbUpIcon } from '@heroicons/react/24/outline';

export default function Home() {

    const form = useRef(null);
    const scrollTo = () => { window.scrollTo({ top: form.current.offsetTop, behavior: 'smooth', }) };

  return (
    <>
        {/* Landing Page intro section */}
        <div style={{ backgroundImage: `url(${background})` }} className="bg-top bg-cover w-full md:flex">

            {/* Landing page intro section (left side)  */}
            <div className="my-auto w-full md:w-1/2 p-3 flex flex-col bg-white/50">
              <h2 className="font-bold text-[36px]">Find Top-Rated Pros Near You</h2>

              <div className="pl-1">
                <h3 className="my-2 font-bold text-xl italic">All detailers in our Pro Network are verified:</h3>
                <ul className="flex flex-col text-xl">
                  <li className='m-2 flex items-center font-bold'><span><img className="h-[20px]" src={check} alt="check mark" /></span>&nbsp;Licensed</li>
                  <li className='m-2 flex items-center font-bold'><span><img className="h-[20px]" src={check} alt="check mark" /></span>&nbsp;Insured</li>
                  <li className='m-2 flex items-center font-bold'><span><img className="h-[20px]" src={check} alt="check mark" /></span>&nbsp;Highly Rated</li>
                  <li className='m-2 flex items-center font-bold'><span><img className="h-[20px]" src={check} alt="check mark" /></span>&nbsp;Professional</li>
                  <li className='m-2 flex items-center font-bold'><span><img className="h-[20px]" src={check} alt="check mark" /></span>&nbsp;Reliable</li>
                </ul>
                <p className="my-5 p-2 text-lg italic bg-red-600/80 text-white md:bg-white/0 md:text-black">Get the information you need to make the best choice for you. No pressure, no obligation, just top-rated detailing options tailored for you.</p>
              </div>
              
            </div>
 
            {/* Landing page intro section (right side)  */}
            <div ref={form} className="w-full md:w-1/2 p-5 flex justify-center items-center bg-white/50">
              <QuoteForm />
            </div>

        </div>

        {/* Callouts */}
        <div className="mx-auto w-7/8 p-4 md:flex md:justify-between">
          <div className="md:w-1/4 m-3 p-5 mx-auto bg-red-600 text-center rounded">
            <HandThumbUpIcon className="py-3 h-[100px] mx-auto text-white" />
            <p className="text-2xl font-bold text-white">FREE AND EASY TO USE</p>
            <p className="py-3 text-white text-sm">No credit card required. Simply enter your information and let the quotes come to you.</p>
          </div>
          <div className="md:w-1/4 m-3 p-5 mx-auto bg-red-600 text-center rounded">
            <ClockIcon className="py-3 h-[100px] mx-auto text-white" />
            <p className="text-2xl font-bold text-white">SAVE TIME AND MONEY</p>
            <p className="py-3 text-white text-sm">Begin getting quotes quickly. Choose the quote that fits your budget.</p>
          </div>
          <div className="md:w-1/4 m-3 p-5 mx-auto bg-red-600 text-center rounded">
            <ClipboardDocumentCheckIcon className=" py-3 h-[100px] mx-auto text-white" />
            <p className="text-2xl font-bold text-white">NO OBLIGATION QUOTES</p>
            <p className="py-3 text-white text-sm">Simply compare options and find the detailer that fits your needs. No up front commitment from you.</p>
          </div>
        </div>

        {/* Promotional section */}
        <div className="p-1 md:p-3 md:flex mt-5">

          {/*  On medium screens, left column image */}
          <img src={highlightImage} className="lg:w-1/2" />

          {/*  On medium screens, right column info section */}
          <div className="p-5 mx-auto rounded lg:w-1/2">
            <p className="text-3xl font-bold">PAY LESS & GET MORE</p>
            <p className="py-3">Get quotes from top car detailers near you. Pro network detailers go through extensive qualification checks before being allowed to join our network. These qualifications include professional training, business licensing and insurance requirements, and most importantly, high customer feedback benchmarks.</p>
            <p>Don't waste time searching through the tons of unverified detailers in your area. Simply enter your information and let Pro network detailers reach out to you.</p>
            <p className="py-3 text-lg font-bold">Services offered by Pro network detailers:</p>
            <ul className="py-3 grid grid-cols-2">
              <li>Exterior detailing</li>
              <li>Interior detailing</li>
              <li>Paint Correction</li>
              <li>Ceramic Coating</li>
              <li>PPF Installation</li>
              <li>Tint Installation</li>
              <li className="py-2">and more...</li>
            </ul>
            <p className="py-3 text-lg font-bold">Our network of detailers cover the following areas:</p>
            <ul className="grid grid-cols-2">
              <li>Orlando</li>
              <li>Winter Park</li>
              <li>Dr. Phillips</li>
              <li>Windermere</li>
              <li>Altamonte</li>
              <li>Maitland</li>
              <li>Lake Mary</li>
              <li>Lake Nona</li>
              <li>Kissimmee</li>
              <li>Sanford</li>
              <li className="py-2">and more...</li>
            </ul>

            {/* Quote button 2 */}
              <button className="link w-full md:w-5/6 mx-auto mt-4 p-1 bg-gray-800 text-white rounded h-[50px] font-bold" onClick={scrollTo}> Get Quote </button>



          </div>
        </div>

    </>
  )
}