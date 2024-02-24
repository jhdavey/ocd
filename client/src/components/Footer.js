export default function Footer() {

  const handleClick = () => {
    alert('We are not currently accepting new detailers.');
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <button className="bg-white border border-black rounded-2xl px-4 m-3 font-bold" onClick={handleClick}>Join our Pro Network</button>
      <div className="text-center"><span>&copy;</span> 2024 orlandocardetailing.com</div>
    </div>
  )
}
