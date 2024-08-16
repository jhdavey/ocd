import { useRef } from "react";
import ContactForm from "../FormSpree";
import background from "../../assets/images/rightbluebmw1.png";
import highlightImage from "../../assets/images/Exterior-Auto-Detailing.jpg";
import check from "../../assets/images/check.png";
import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const form = useRef(null);
  const scrollTo = () => {
    window.scrollTo({ top: form.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      {/* Landing Page intro section */}
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-top bg-cover w-full md:flex"
      >
        {/* Landing page intro section (left side)  */}
        <div className="my-auto w-full md:w-1/2 p-2 flex flex-col bg-white/50">
          <h2 className="font-bold text-[36px] ml-2">
            Find Professional Detailers Near You
          </h2>

          <div className="p-3">
            <h3 className="my-2 font-bold text-xl">
              All Detailers Verified:
            </h3>
            <ul className="flex flex-col text-xl">
              <li className="my-1 flex items-center font-bold">
                  <img className="h-[20px]" src={check} alt="check mark" />
                &nbsp;Licensed
              </li>
              <li className="my-1 flex items-center font-bold">
                  <img className="h-[20px]" src={check} alt="check mark" />
                &nbsp;Insured
              </li>
              <li className="my-1 flex items-center font-bold">
                  <img className="h-[20px]" src={check} alt="check mark" />
                &nbsp;Highly Rated
              </li>
              <li className="my-1 flex items-center font-bold">
                  <img className="h-[20px]" src={check} alt="check mark" />
                &nbsp;Professional
              </li>
              <li className="my-1 flex items-center font-bold">
                  <img className="h-[20px]" src={check} alt="check mark" />
                &nbsp;Reliable
              </li>
            </ul>

            <p className="py-1 text-xl font-bold">
              Services Offered:
            </p>
            <ul className="py-2 md:grid md:grid-cols-2 font-bold">
              <li className="text-xl list-disc m-1">Exterior detailing</li>
              <li className="text-xl list-disc m-1">Interior detailing</li>
              <li className="text-xl list-disc m-1">Paint Correction</li>
              <li className="text-xl list-disc m-1">Ceramic Coating</li>
              <li className="text-xl list-disc m-1">Headlight Restoration</li>
              <li className="text-xl list-disc m-1">PPF Installation</li>
              <li className="text-xl list-disc m-1">Tint Installation</li>
              <p className="text-xl m-1">and more...</p>
            </ul>
          </div>
        </div>

        {/* Landing page intro section (right side)  */}
        <div
          ref={form}
          className="w-full md:w-4/5 p-2 flex justify-center items-center bg-white/50"
        >
          <ContactForm />
        </div>
      </div>

      {/* Callouts */}
      <div className="mx-auto w-7/8 p-2 md:flex md:justify-between">
        <div className="md:w-1/4 m-2 p-3 mx-auto bg-blue-800 text-center rounded">
          <HandThumbUpIcon className="py-3 h-[100px] mx-auto text-white" />
          <p className="text-2xl font-bold text-white">FREE AND EASY TO USE</p>
          <p className="py-3 text-white text-sm">
            No credit card required. Simply enter your information and let the
            quotes come to you.
          </p>
        </div>
        <div className="md:w-1/4 m-2 p-3 mx-auto bg-blue-800 text-center rounded">
          <ClockIcon className="py-3 h-[100px] mx-auto text-white" />
          <p className="text-2xl font-bold text-white">SAVE TIME AND MONEY</p>
          <p className="py-3 text-white text-sm">
            Begin getting quotes quickly. Choose the quote that fits your
            budget.
          </p>
        </div>
        <div className="md:w-1/4 m-2 p-3 mx-auto bg-blue-800 text-center rounded">
          <ClipboardDocumentCheckIcon className=" py-3 h-[100px] mx-auto text-white" />
          <p className="text-2xl font-bold text-white">NO OBLIGATION QUOTES</p>
          <p className="py-3 text-white text-sm">
            Simply compare options and find the detailer that fits your needs.
            No commitment from you.
          </p>
        </div>
      </div>

      {/* Promotional section */}
      <div className="p-1 md:p-5 md:flex mt-5">
        {/*  On medium screens, left column image */}
        <img src={highlightImage} className="md:w-1/2" />

        {/*  On medium screens, right column info section */}
        <div className="p-3 mx-auto rounded md:w-1/2">
          <p className="text-3xl font-bold">PAY LESS & GET MORE</p>
          <p className="py-2">
            Get quotes from top car detailers near you. Pro network detailers go
            through extensive qualification checks before being allowed to join
            our network. These qualifications include professional training,
            business licensing and insurance requirements, and most importantly,
            high customer feedback benchmarks.
          </p>
          <p>
            Don't waste time searching through the tons of unverified detailers
            in your area. Simply enter your information and let Pro network
            detailers reach out to you.
          </p>
          <p className="py-3 text-lg font-bold">
            Our network of detailers cover the following areas:
          </p>
          <ul className="grid grid-cols-2">
            <li className="text-xl list-disc m-1">Orlando</li>
            <li className="text-xl list-disc m-1">Winter Park</li>
            <li className="text-xl list-disc m-1">Dr. Phillips</li>
            <li className="text-xl list-disc m-1">Windermere</li>
            <li className="text-xl list-disc m-1">Altamonte</li>
            <li className="text-xl list-disc m-1">Maitland</li>
            <li className="text-xl list-disc m-1">Lake Mary</li>
            <li className="text-xl list-disc m-1">Lake Nona</li>
            <li className="text-xl list-disc m-1">Kissimmee</li>
            <li className="text-xl list-disc m-1">Sanford</li>
            <li className="py-2">and more...</li>
          </ul>

          {/* Quote button 2 */}
          <button
            className="link w-full md:w-5/6 mx-auto mt-4 p-1 bg-gray-800 text-white rounded h-[50px] font-bold"
            onClick={scrollTo}
          >
            {" "}
            Get Quote{" "}
          </button>
        </div>
      </div>
    </>
  );
}
