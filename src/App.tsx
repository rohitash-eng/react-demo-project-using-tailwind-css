import './App.css'
import chicago from './assets/chicago.jpg';
import name from './assets/bandmember.jpg';
import reacts from './assets/paris.jpg';
import map from './assets/map.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faMobileRetro } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram, faSquareSnapchat, faPinterest } from '@fortawesome/free-brands-svg-icons';

function App() {

  return (
    <>
      <div className="main-container ">
        <div className="flex fixed top-0 z-1 w-full">
          <div className="header flex justify-between flex-1 bg-black text-white">
            <div className="flex">
              <ul className='flex items-center common-box-shadow'>
                <li className='nav-bar'>Home</li>
                <li className='nav-bar'>Band</li>
                <li className='nav-bar'>Contact</li>
                <li className='nav-bar'>More</li>
              </ul>
            </div>
            <div className="search-icon group items-center flex justify-center">
              <form className="flex items-center max-w-sm mx-auto">
                <div className="transition-all duration-5000 relative w-full sr-only group-hover:not-sr-only">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
                    </svg>
                  </div>
                  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search branch name..." required />
                </div>
                <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mid-content mt-12">
          <div className="banner flex relative">
            <img className='basis-full' src={chicago} alt="Home Page Banner" />
            <div className="absolute desc top-[90%] left-[45%] text-white">
              <h1 className='text-4xl'>New Yark</h1>
              <p>The city that never sleeps</p>
            </div>
          </div>
          <div className="the-band flex items-center justify-center">
            <div className="max-w-4xl py-16 flex flex-col gap-8">
              <h1 className='text-4xl text-center'>The Band</h1>
              <h6 className='text-center'>We love music</h6>
              <p className='break-all tracking-tight'>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className="the-band flex items-center justify-center pb-[32px]">
            <div className="max-w-4xl flex flex-col gap-8 items-center justify-center">
              <p className='text-center'>Name</p>
              <img className='w-[60%]' src={name} alt="Home Page Banner" />
            </div>
            <div className="max-w-4xl flex flex-col gap-8 items-center justify-center">
              <p className='text-center'>Name</p>
              <img className='w-[60%]' src={name} alt="Home Page Banner" />
            </div>
            <div className="max-w-4xl flex flex-col gap-8 items-center justify-center">
              <p className='text-center'>Name</p>
              <img className='w-[60%]' src={name} alt="Home Page Banner" />
            </div>
          </div>

          <div className="the-band basis-full flex items-center justify-center bg-black mt-[32px] mb-[32px]">
            <div className="card-main-container basis-full flex items-center justify-center flex-col">
              <div className="w-[100%] max-w-4xl py-16 flex flex-col gap-8 text-white">
                <h1 className='text-4xl text-center'>TOUR DATES</h1>
                <h6 className='text-center'>Remember to book your tickets!</h6>
                <ul className='bg-white text-black'>
                  <li className='p-[10px] border-b border-gray-200'>September <span className='bg-[#f44336] text-white p-[2px] rounded-ss-xs'>Sold out</span></li>
                  <li className='p-[10px] border-b border-gray-200'>October <span className='bg-[#f44336] text-white p-[2px] rounded-ss-xs'>Sold out</span></li>
                  <li className='p-[10px] border-b border-gray-200 flex justify-between'>November <span className='bg-[#000] text-white rounded-full flex  w-7 h-7 mr-10 items-center justify-center'>3</span></li>
                </ul>
              </div>
              <div className="pb-[32px] card gap-[10px] basis-full flex items-center justify-center">
                <div className="w-[22%] rounded-lg shadow-lg bg-white p-4">
                  <img
                    className="rounded-t-lg w-[100%]"
                    src={reacts}
                    alt="Card image"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Card Title</h2>
                    <p className="text-gray-600">This is a sample card using Tailwind CSS.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="w-[22%] rounded-lg shadow-lg bg-white p-4">
                  <img
                    className="rounded-t-lg w-[100%]"
                    src={reacts}
                    alt="Card image"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Card Title</h2>
                    <p className="text-gray-600">This is a sample card using Tailwind CSS.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Learn More
                    </button>
                  </div>
                </div>
                <div className="w-[22%] rounded-lg shadow-lg bg-white p-4">
                  <img
                    className="rounded-t-lg w-[100%]"
                    src={reacts}
                    alt="Card image"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">Card Title</h2>
                    <p className="text-gray-600">This is a sample card using Tailwind CSS.</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="the-contact pb-10 max-w-[880px] m-auto the-band flex items-center justify-center">
            <div className="contact-wrapper w-[100%]">
              <div className="title flex flex-col items-center">
                <h1 className='text-4xl'>Contact</h1>
                <p className='italic'>Fan? Drop a note!</p>
              </div>
              <div className="contact-form-address-main mt-10 flex justify-between ml-[50px] mr-[50px]">
                <div className="address">
                  <p className="address-p1 text-lg">
                    <FontAwesomeIcon icon={faGlobe} />Chicago, US
                  </p>
                  <p className="address-p1 text-lg">
                    <FontAwesomeIcon icon={faMobileRetro} />Phone: +00 151515
                  </p>
                  <p className="address-p1 text-lg">
                    <FontAwesomeIcon icon={faEnvelope} />Email: mail@mail.com
                  </p>
                </div>
                <div className="contact-form">
                  <form action="" className="contact-form-main flex flex-col gap-[20px]">
                    <div className="full-name flex gap-[10px]">
                      <input className='input-box' type="text" name="firstname" id="" />
                      <input className='input-box' type="text" name="lastname" id="" />
                    </div>
                    <div className="message">
                      <input className='input-box' type="text" name="message" id="" />
                    </div>
                    <div className="action-button">
                      <button className='text-white bg-black p-3 align-middle flex items-center cursor-pointer' type="submit">SEND</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="the-map flex items-center justify-center">
            <img src={map} className='w-full' alt="map" />
          </div>
        </div>
        <div className="footer py-30 flex flex-col items-center">
          <div className="mb-7 social-icons flex justify-center text-[#6b6464] text-3xl">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faSquareInstagram} />
            <FontAwesomeIcon icon={faSquareSnapchat} />
            <FontAwesomeIcon icon={faPinterest} />
          </div>
          <p className='text-center'>Powered by React. © 2024</p>
        </div>
      </div>
    </>
  )
}

export default App
