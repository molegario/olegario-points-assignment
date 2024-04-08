import classes from './404panel.module.css';
import Link from "next/link";

export default function NotFoundPanel() {
  return <div className={classes.alert}>
    <h1>404</h1>
    <p>
      “All that is gold does not glitter,
      Not all those who wander are lost;
      The old that is strong does not wither,
      Deep roots are not reached by the frost.”
    </p>
    <Link href='/'>another time?</Link>
  </div>
}