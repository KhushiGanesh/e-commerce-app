import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import myContext from '../../context/data/myContext'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const context = useContext(myContext)
  const { toggleMode, mode } = context

  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
    localStorage.clear('user')
    window.location.href = "/login"
  }

  const cartItems = useSelector((state) => state.cart)


  return (
    <div className="bg-white sticky top-0 z-50  "  >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  
                  {user ? <div className="flow-root">
                    <a onClick={'/order'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>
                      Order
                    </a>
                  </div> : ""}

                  {user?.user?.email === 'khushiganesh2004@gmail.com' ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                  {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : ""}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBNqQiUOfbPw3m_t5RLhw5M87r_1J9EIYqg&s"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center px-4 ext-gray-900 font-bold  ml-2 sm:px-6 lg:px-8" style={{ fontFamily:"'Yellowtail',cursive",backgroundColor: mode === 'dark' ? '#A8E4A0' : '#A8E4A0', color: mode === 'dark' ? 'white' : '', }}>
          Your BuyBuddy is here to help you shop with ease!
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? '#A8E4A0' : '#A8E4A0', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                   <h1
                    className="text-3xl font-bold px-2 py-1 rounded"
                     style={{
                          fontFamily: "'Pacifico', cursive",
                             color: mode === 'dark' ? 'white' : '#111827',
                              }}
                              >
                              BuyBuddy
                     </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link>

                  {user?.user?.email === 'khushiganesh2004@gmail.com'?
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""
                }
                 

                  {user ? <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : <Link to={'/signup'} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>
                    Signup
                  </Link>}

                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ fontFamily:"'Dancing Script',cursive",color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBNqQiUOfbPw3m_t5RLhw5M87r_1J9EIYqg&s"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ? (
                      <FiSun className='' size={30} />
                    ) : mode === 'dark' ? (
                      <BsFillCloudSunFill size={30} />
                    ) : null}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}