import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">首頁</Link>
      </li>
      <li>
        <Link href="/about">關於</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
