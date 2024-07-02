import React from "react";

const NavBar = () => {
  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-100 py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* <!-- Hamburger button for mobile view --> */}
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent12"
          aria-controls="navbarSupportedContent12"
          aria-expanded="false"
          aria-label="Toggle navigation"
          u
        >
          {/* <!-- Hamburger icon --> */}
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* <!-- Collapsible navigation container --> */}
        <div
          className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
          id="navbarSupportedContent12"
          data-twe-collapse-item
        >
          {/* <!-- Logo --> */}
          {/* <a
            className="mb-4 me-5 ms-2 mt-3 flex items-center lg:mb-0 lg:mt-0"
            href="#"
          >
            <img
              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              style={{ height: 15 }}
              alt="TE Logo"
              loading="lazy"
            />
          </a> */}
          {/* <!-- Left navigation links --> */}
          <ul
            className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
            data-twe-navbar-nav-ref
          >
            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              {/* <!-- Dashboard link --> */}
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none"
                href="#Weight"
                data-twe-nav-link-ref
              >
                Weight
              </a>
            </li>
            {/* <!-- Team link --> */}
            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none"
                href="#Citrate"
                data-twe-nav-link-ref
              >
                Citrate Dose
              </a>
            </li>
            {/* <!-- Projects link --> */}
            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
              <a
                className="text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none"
                href="#Calcium"
                data-twe-nav-link-ref
              >
                Calcium Dose
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
