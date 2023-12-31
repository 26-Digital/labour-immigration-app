import Image from 'next/image'

export default function Home() {
  return (
    <>
    <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Labour and Immigration</span>
        </a>
        <button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
      <h1 className='px-4 pt-4 font-bold'>Ministry of Employment, Labour Productivity and Skills Development</h1>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
                <li>
                    <a href="/labour/longtermpermit" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Apply for long-term work permits</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Application fee is P2500.00 for a 3 year period.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Apply for emergency work permits</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Application fee is BWP900.00</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Apply for recruiters license</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Type A/B recruiters license.</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Apply for work exemption permits</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Application fee is BWP1500.00 non-refundable.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">View, Download and Print your permits</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Requirements: Permit number/Passport number.</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-dropdown" className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600">
      <h1 className='px-4 pt-4 font-bold'>Ministry of Nationality, Immigration And Gender Affairs</h1>
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
            <ul>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Apply for residence permit</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Application fee is P2500.00 for a 3 year period.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Apply for permanent residence permits</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Application fee is BWP900.00</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Apply for citizenship</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Type A/B recruiters license.</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Visa on arrival</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Application fee is BWP1500.00 non-refundable.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">Residence exemption</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Application fee is BWP1500.00 non-refundable.</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                        <div className="font-semibold">View, Download and Print your permits</div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Requirements: Permit number/Passport number.</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}
