import Link from 'next/link';
import classes from './header-results.module.css';
import Logo from './logo';
import { FaChevronLeft, FaFastBackward } from 'react-icons/fa'

export default function HeaderResults({year}) {

  const headerCt = `${classes.sticky} ${classes.header}`


  return <header className={headerCt}>
    <Link href='/'>
      <FaChevronLeft /><span>Year select</span>
    </Link>
    <Logo year={year} />
    {/* <h1>{year}</h1> */}
  </header>

}