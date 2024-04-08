import classes from './unavailable-panel.module.css';
import Link from "next/link";
export default function UnavailablePanel() {

  return <div className={classes.alert}>
    <h1>503</h1>
    <p>
      Our Rates server is temporarily unreachable.  Please verify and follow the link below.
    </p>
    <Link href='/'>another time?</Link>
  </div>;
}