import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function FaqsModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">FAQs</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="w-full flex flex-col p-2">
          <ul className="text-xl">
            <li className="py-2">
              <h2 className="font-bold">
                What is the difference between a car wash and car detailing?
              </h2>
              <p>
                A car wash is primarily focused on the exterior surface cleaning
                of the vehicle, often using automated systems or hand washes.
                Car detailing goes much deeper, including both exterior and
                interior cleaning, with attention to detail that restores and
                protects the vehicle.
              </p>
            </li>

            <li className="py-2">
              <h2 className="font-bold">
                How often should I have my car detailed?
              </h2>
              <p>
                It depends on several factors including driving conditions,
                vehicle storage, and personal preference. Generally, a full
                detail is recommended every 6-12 months, with regular washes in
                between.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">How long does car detailng take?</h2>
              <p>
                The time can vary based on the vehicle's condition and the level
                of service requested, but typically, a full detail can take
                between 2 to 8 hours.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                Can detailing remove scratces from my car's paint?
              </h2>
              <p>
                Minor scratches and swirl marks can often be removed or greatly
                diminished through polishing during the detailing process.
                However, deep scratches that penetrate the paint may require
                more extensive repairs.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                What kind of products do you use for detailing?
              </h2>
              <p>
                All Pro Network detailers use professional-grade, vehicle-safe
                cleaning products and equipment, including pH-balanced soaps,
                microfiber towels, and high-quality waxes and sealants to
                protect your vehicle.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                Do you offer mobile detailing services?
              </h2>
              <p>
                Pro Network detailers offer both mobile and in-house services.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">How much does car detailng cost?</h2>
              <p>
                Prices vary based on the size of the vehicle and the level of
                detail requested. Basic cleanings can start as low as $50 and
                full details with long-lasting protection could cost upwards of
                $3,000.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                Can detailing improve the resale value of my car?
              </h2>
              <p>
                Absolutely. A well-maintained and detailed car can significantly
                increase its appeal and potentially its resale value, as it
                shows the car has been well cared for.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                Is engine bay cleaning included in car detailing?
              </h2>
              <p>
                Yes, engine bay cleaning can be included upon request. It
                involves carefully cleaning the engine bay area to remove dirt,
                grease, and grime, improving both appearance and functionality.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">What is paint correction?</h2>
              <p>
                Paint correction is a process that removes imperfections in a
                vehicle's finish, such as swirls, scratches, oxidation, and
                etching, restoring the paint to its original shine.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                How can I maintain my cars detail after service?
              </h2>
              <p>
                Regular washing with a pH-neutral soap, avoiding harsh
                chemicals, using microfiber towels for drying, and applying a
                quality wax or sealant periodically can help maintain the
                detail.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                Can you remove pet hair during detailing?
              </h2>
              <p>
                Yes, pet hair removal can be included upon request. Pro Netword
                detailers have specialized tools and techniques to effectively
                remove pet hair from your vehicle's interior.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                What measures do you take to protect my vehicle during
                detailing?
              </h2>
              <p>
                Pro Networkd detailers use only high-quality, vehicle-safe
                products, and are trained professionals employing techniques
                that ensure your vehicle is protected and treated with care
                throughout the detailing process.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                Do you offer any protective coatings like ceramic or wax?
              </h2>
              <p>
                Yes, Pro Network detailers offer various protective coatings,
                including wax, sealants, and ceramic coatings, each providing
                different levels of protection and durability for your vehicle’s
                exterior.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">
                How do I prepare my vehicle for detailing?
              </h2>
              <p>
                We recommend removing personal items and any valuables from your
                vehicle before the detailing appointment to ensure a thorough
                and efficient service.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">Can detailing fix faded paint?</h2>
              <p>
                Detailing can significantly improve the appearance of faded
                paint through polishing and waxing, but severely faded or
                damaged paint may require repainting.
              </p>
            </li>
            <li className="py-2">
              <h2 className="font-bold">Do you offer headlight restoration?</h2>
              <p>
                Yes, headlight restoration can be included upon request. It
                involves cleaning and polishing the headlights to restore
                clarity and improve visibility.
              </p>
            </li>
          </ul>

          <a
            className="w-3/4 md:w-1/2 lg:w-2/5 mx-auto p-3 bg-gray-800 text-white text-center no-underline rounded h-[50px] font-bold"
            href="/"
          >
            GET QUOTES
          </a>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default function FaqModalRender({ modalShow, setModalShow }) {
  return (
    <>
      <FaqsModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
