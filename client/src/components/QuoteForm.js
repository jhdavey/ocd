import { useState } from "react";
import axios from "axios";

export default function QuoteStart() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [zip, setZip] = useState("");
    const [car, setCar] = useState("");
    const [services, setServices] = useState([]);
    const [notes, setNotes] = useState('');
    const serviceOptions = ['Exterior Detailing', 'Interior Detailing', 'Paint Correction', 'Ceramic Coating', 'Headlight Restoration', 'PPF Installation', 'Tint Installation'];
    const [quoteStarted, setQuoteStarted] = useState(Boolean);
    const [submitted, setSubmitted] = useState(Boolean);
    
    const handleStart = (event) => {
        event.preventDefault();
        setQuoteStarted(true);
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();  

        // Send email
        const data = {
            name, email, phone, zip, car , services, notes
        };
        const response = await axios.post(`/api/sendemail`, data);

        console.log(response.data, `QUOTE SUBMITTED... The info you entered was for: ${name} at ${email} / ${phone}, in the zipcode ${zip}. ${car}. Services to include: ${services}. Notes: ${notes}`); 

        // hide form = replace with thank you for submitting message.
        setSubmitted(true);
      };

  return (
    <>
        { quoteStarted ? 

            <form id="form" className={submitted ? "hidden" : "w-full md:w-3/4 flex flex-col p-1 border-2 bg-white/90 shadow-xl rounded-l"} onSubmit={handleSubmit}>

                <input
                    className="font-normal p-1 my-3 w-5/6 mx-auto"
                    type="text" 
                    value={car}
                    placeholder="VEHICLE MAKE & MODEL"
                    onChange={(e) => setCar(e.target.value)}
                />

                <ul className="w-5/6 mx-auto">
                    {serviceOptions.map(serviceOption => (
                        <li key={serviceOption}>
                            <label>
                                {serviceOption}
                                <input
                                className="m-2 border"
                                type="checkbox" 
                                value={serviceOption}
                                onChange={(e) => { 
                                    var index = services.indexOf(serviceOption);
                                    if (services.length === 0) {
                                        services.push(serviceOption);
                                        console.log(services);
                                    } else if (index === -1) {
                                        services.push(serviceOption);
                                        console.log(services);
                                    } else {
                                        services.splice(index, 1);
                                        console.log(services);
                                    }
                                    }
                                }
                                />
                            </label>
                        </li>
                    ))}
                </ul>

                <textarea
                        className="font-normal my-2 mx-auto p-2 border w-5/6 h-[100px]"
                        type="text" 
                        value={notes}
                        placeholder="NOTES (OPTIONAL)"
                        onChange={(e) => setNotes(e.target.value)}
                    />

                <input className="my-2 mx-auto w-5/6 p-1 bg-gray-800 text-white rounded h-[50px] font-bold" type="submit" value="SUBMIT QUOTE REQUEST" />
                
            </form>
    
        : 
        
            <form className="p-1 border-2 bg-white/90 shadow-xl rounded-l w-full md:w-3/4 flex flex-col" onSubmit={handleStart}>

                <h2 className="font-bold text-[30px] text-center" value="FREE QUOTE">GET QUOTES</h2>
                <p className="text-sm pb-3 text-center">Have local detailers provide custom quotes just for you</p>

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

                <input className="mx-auto my-2 p-1 bg-gray-800 text-white rounded w-5/6 h-[50px] font-bold" type="submit" value="GET QUOTE" />

            </form>
        }

        { submitted ? 
            <div className="w-full bg-white/60 border border-2 border-yellow-200">
                <p className="text-red-600 font-bold text-[32px] text-center">Submitted!</p> 
                <p className="w-3/4 mx-auto text-center">Your request has been sent to our Pro Detailers. Someone will reach out to you soon!</p>
            </div>
        :
        
            null 
        
        }

    </>
  )
};