import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full">
      <nav className="container max-w-screen-2xl border-b flex items-center justify-between mx-auto p-5 border-gray-200 bg-gray-50 text-black ">
       
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex items-center gap-2 ml-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-pink-500"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            <span className="text-xl font-bold ">BreastCare AI</span>
          </div>
        </Link>

      
        <ul className="flex space-x-8 font-medium font-base mr-7">
          <li>
            <a href="#" className="text-black font-medium">Home</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-500 font-medium">Services</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-500 font-medium">Pricing</a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-500 font-medium">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
