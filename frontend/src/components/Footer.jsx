/*
****************************************************************
Note: This is a modified footer component from flowbite.com
****************************************************************
*/
import { X, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto w-full px-10 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/">
              <img src="/netflix-logo.png" className="h-10 me-3" alt="logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                Resources
              </h2>
              <ul className="text-gray-100 font-medium">
                <li className="mb-4 text-gray-100">
                  <a href="" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline text-gray-100">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase ">
                Follow us
              </h2>
              <ul className="text-gray-100 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline ">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-100 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-100 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-lg text-gray-100 sm:text-center">
            Created By{" "}
            <a
              href="https://github.com/MuneerHashmat"
              className="underline"
              target="_blanks"
            >
              Muneer Hashmat
            </a>
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://github.com/MuneerHashmat"
              className="text-gray-100 hover:text-gray-400 ms-5"
              target="_blank"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/muneerhashmat/"
              className="text-gray-100 hover:text-gray-400 ms-5"
              target="_blank"
            >
              <LinkedIn />
            </a>
            <a
              href="https://x.com/muneer_hashmat"
              className="text-gray-100 hover:text-gray-400 ms-5"
              target="_blank"
            >
              <X />
            </a>
            <a
              href="https://www.instagram.com/muneer.hashmat/"
              className="text-gray-100 hover:text-gray-400 ms-5"
              target="_blank"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
