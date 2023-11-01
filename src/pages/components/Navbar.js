import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3CenterLeftIcon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/About", current: true },
  { name: "Services", href: "/Services", current: false },
  { name: "Pricing", href: "/Pricing", current: false },
  { name: "Contact", href: "/ContactUs", current: false },
  // { name: "Contact", href: "/contact/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const router = useRouter();

  const isLinkActive = (href) => {
    return router.pathname === href ? "text-yellow font-bold" : "font-normal"; // Customize the active and inactive link styles
  };

  return (
    <Disclosure as="nav" className="lg:bg-white h-24">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-4 md:pt-2">
            <div className="navbarShadow relative flex h-16 items-center justify-between border rounded-2xl px-4 bg-blue border-blue mt-2">
              <div className="flex flex-shrink-0 items-center lg:hidden">
                <a href="/">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width="110"
                    height="55"
                    // className="logo_img cursor-pointer w-32"
                  />
                </a>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden order-2">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className="relative inline-flex items-center justify-end p-2 mr-3 text-white border border-yellow rounded-full bg-yellow hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3CenterLeftIcon
                    className="block h-6 w-6" aria-hidden="true" />
                    
                  )}
                </Disclosure.Button>
              </div>
              {/* <nav className="py-4 lg:flex lg:justify-between mx-auto hidden lg:w-full order-1">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width="150"
                      height="55"
                      // className="logo_img cursor-pointer w-32"
                    />
                  </a>
                </div>

                <div className="hidden lg:ml-6 sm:block">
                  <ul className="flex justify-end py-4">
                    {navigation.map((item) => {
                      console.log(item.href);

                      if (item.href !== "/contact/contact")
                        return (
                          <Link
                            href={item.href}
                            className={`mx-5 text-white cursor-pointer pt-2 ${isLinkActive(
                              item.href
                            )}`}
                          >
                            {item.name}
                          </Link>
                        );
                      else {
                        return (
                          <Link
                            href="/contact/contact"
                            className={`text-white py-2 px-6 rounded-md border border-yellow bg-yellow  ${isLinkActive(
                              "/contact/contact"
                            )}`}
                          >
                            Let's Talk
                          </Link>
                        );
                      }
                    })}
                  </ul>
                </div>
              </nav> */}
              <nav className="py-4 lg:flex lg:justify-between mx-auto hidden lg:w-full order-1">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <Image src="/logo.png" alt="Logo" width="150" height="55" />
                  </a>

                  <div className="hidden lg:ml-6 sm:block">
                    <ul className="flex justify-between py-4">
                      {navigation
                        .filter((item) => item.href !== "/contact/contact") // Exclude the "Let's Talk" link
                        .map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              className={`text-white cursor-pointer pt-2 ${isLinkActive(
                                item.href
                              )} mx-5`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                <div className="justify-end py-4">
                  <Link
                    href="/contact/contact"
                    className={`text-white py-2 px-6 rounded-md border border-yellow bg-yellow ${isLinkActive(
                      "/contact/contact"
                    )}`}
                  >
                    Let's Talk
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === router.pathname
                      ? "bg-yellow text-white"
                      : "text-gray-400 hover:bg-yellow hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
