import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { classNames } from '../utils/class-names';

export const AppHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow">
      <header className="relative flex flex-col sm:flex-row px-4 max-w-5xl mx-auto">
        <div className="flex items-center gap-x-4 h-14">
          <h1 className="order-2 sm:order-1 text-xl font-semibold">
            <a href="/#/">Routing</a>
          </h1>
          <div className="order-1 sm:hidden flex items-center">
            <button
              onClick={() => setOpen((state) => !state)}
              className="bg-stone-200 hover:bg-stone-300 p-2 rounded focus:ring-2 focus:ring-offset-2 focus:ring-stone-400"
            >
              <HamburgerMenuIcon />
            </button>
          </div>
        </div>
        <div
          className={classNames(
            !open && 'hidden',
            'absolute top-14 left-0 px-4 py-2 sm:py-0 sm:flex sm:items-center sm:justify-between sm:static sm:order-2 z-10 bg-white sm:bg-transparent w-full'
          )}
        >
          <nav className="flex flex-col sm:flex-row gap-y-2 py-2 sm:p-0 border-b sm:border-0 border-b-stone-300">
            <a
              onClick={() => setOpen(false)}
              className="hover:bg-stone-200 p-2 rounded"
              href="/#/home"
            >
              Home
            </a>
            <a
              onClick={() => setOpen(false)}
              className="hover:bg-stone-200 p-2 rounded"
              href="/#/contacts"
            >
              Contacts
            </a>
            <a
              onClick={() => setOpen(false)}
              className="hover:bg-stone-200 p-2 rounded"
              href="/#/about"
            >
              About
            </a>
          </nav>
          <nav className="flex flex-col gap-y-2 my-2 sm:my-0">
            <a
              onClick={() => setOpen(false)}
              className="hover:bg-stone-200 p-2 rounded"
              href="/#/login"
            >
              Log In
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};
