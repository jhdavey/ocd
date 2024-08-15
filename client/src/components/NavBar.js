export default function NavBar() {

  const handleClick = () => {
    alert('We are not currently accepting new detailers.');
  };

  return (
    <div className="p-3 md:flex md:items-center md:justify-between">
      <a href="/" className="text-red-600 font-bold text-2xl md:text-[36px]">Orlando Car Detailing</a>
      <div>
        <button className="bg-white border border-black rounded-2xl px-4 m-1 font-bold" onClick={handleClick}>Join our Pro Network</button>
        <a className="bg-white border border-black rounded-2xl px-4 m-1 font-bold" href='#/faqs'>FAQs</a>
      </div>
    </div>
  )
}
