import classes from './unavailable-panel.module.css';
import Link from "next/link";
export default function UnavailablePanel() {

  return <div className={classes.alert}>
    <h1>503</h1>
    <p>
      Our Rates server is temprarily unreachable.  Please verify and refresh your browser.
    </p>
    <Link href='/'>another time?</Link>
  </div>;
}