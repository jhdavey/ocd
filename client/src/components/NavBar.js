export default function NavBar() {

  const handleClick = () => {
    alert('We are not currently accepting new detailers.');
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="p-5 md:flex md:items-center md:justify-between">
      <h1 className="text-red-600 font-bold text-2xl md:text-[36px]" onClick={reload}>OrlandoCarDetailing.com</h1>
      <button className="bg-white border border-black rounded-2xl px-4 m-1 font-bold" onClick={handleClick}>Join our Pro Network</button>
    </div>
  )
}
