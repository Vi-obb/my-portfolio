import { useState } from 'react';

export default function MenuToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div class="md:hidden w-1/2 flex flex-row justify-end">
      <button
        onClick={toggleMenu}
        class="flex items-center px-3 py-2 rounded bg-green hover:bg-dark-green"
      >
        <svg
          class="fill-white h-3 w-4"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  );
}
