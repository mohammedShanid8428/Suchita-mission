export default function Header() {
  return (
    <header className="flex justify-between items-center px-16 py-4 bg-green-50 shadow-sm">
      <div className="flex">
        <img src="/logo.png" alt="" className="h-10 w-[200px]" />
      </div>
      
      <nav className="flex space-x-6 items-center text-green-800 font-medium">
        <a href="#">About SGLR</a>
        <a href="#">Initiatives</a>
        <a href="#">How it Works?</a>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Register / Login
        </button>
        <img src="/logo2.png" alt="Logo" className="h-10" />
      </nav>
    </header>
  );
}
