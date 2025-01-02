import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link href="/">Book a Table</Link>
          </li>
          <li>
            <Link href="/bookings">View Bookings</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
