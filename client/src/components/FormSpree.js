import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [car, setCar] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [notes, setNotes] = useState("");
  const serviceOptions = [
    "Exterior Detailing",
    "Interior Detailing",
    "Paint Correction",
    "Ceramic Coating",
    "Headlight Restoration",
    "PPF Installation",
    "Tint Installation",
  ];
  const [quoteStarted, setQuoteStarted] = useState(false);

  const handleStart = (event) => {
    event.preventDefault();
    setQuoteStarted(true);
  };

  const [state, handleSubmit] = useForm("xldrleov");

  if (state.succeeded) {
    return (
      <p className="w-full md:w-3/4 font-bold text-lg p-5 bg-white/90 rounded-lg shadow-xl border border-3">
        Thank you for your submission. Our Detailers will reach out to you ASAP!
      </p>
    );
  }

  return (
    <>
      {quoteStarted ? (
        <form
          id="form"
          className="w-full md:w-3/4 flex flex-col p-1 border-2 bg-white/90 shadow-xl rounded-lg"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="email" value={email} />
          <input type="hidden" name="phone" value={phone} />
          <input type="hidden" name="zip" value={zip} />

          <input
            className="font-normal p-1 my-3 w-5/6 mx-auto"
            type="text"
            name="car"
            value={car}
            placeholder="VEHICLE MAKE & MODEL"
            onChange={(e) => setCar(e.target.value)}
          />

          <ul className="w-5/6 mx-auto">
            {serviceOptions.map((serviceOption) => (
              <li key={serviceOption}>
                <label>
                  {serviceOption}
                  <input
                    className="m-2 border"
                    type="checkbox"
                    value={serviceOption}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedServices([
                          ...selectedServices,
                          serviceOption,
                        ]);
                      } else {
                        setSelectedServices(
                          selectedServices.filter((s) => s !== serviceOption)
                        );
                      }
                    }}
                  />
                </label>
              </li>
            ))}
          </ul>

          <input
            type="hidden"
            name="services"
            value={selectedServices.join(", ")}
          />

          <textarea
            className="font-normal my-2 mx-auto p-2 border w-5/6 h-[100px]"
            name="notes"
            value={notes}
            placeholder="NOTES (OPTIONAL)"
            onChange={(e) => setNotes(e.target.value)}
          />

          <input
            className="my-2 mx-auto w-5/6 p-1 bg-gray-800 text-white rounded h-[50px] font-bold"
            type="submit"
            value="SUBMIT QUOTE REQUEST"
          />
        </form>
      ) : (
        <form
          className="p-1 border-2 bg-white/90 shadow-xl rounded-l w-full md:w-3/4 flex flex-col"
          onSubmit={handleStart}
        >
          <h2 className="font-bold text-[30px] text-center" value="FREE QUOTE">
            GET QUOTES
          </h2>
          <p className="text-lg pb-3 text-center">
            Have local detailers provide custom quotes just for you
          </p>

          <input
            className="font-normal m-2 p-1 rounded w-5/6 mx-auto"
            type="text"
            value={name}
            placeholder="NAME"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="font-normal m-2 p-1 rounded w-5/6 mx-auto"
            type="email"
            value={email}
            placeholder="EMAIL"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="font-normal m-2 p-1 rounded w-5/6 mx-auto"
            type="phone"
            value={phone}
            placeholder="PHONE"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            className="font-normal m-2 p-1 rounded w-5/6 mx-auto"
            type="zipcode"
            value={zip}
            placeholder="ZIPCODE"
            onChange={(e) => setZip(e.target.value)}
          />

          <button
            className="mx-auto my-2 p-1 bg-gray-800 text-white rounded w-5/6 h-[50px] font-bold flex items-center justify-center"
            type="submit"
          >
            GET QUOTE <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
          </button>
        </form>
      )}
    </>
  );
}

export default ContactForm;
