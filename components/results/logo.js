import classes from './logo.module.css'
export default function Logo({year}) {
  return <div className={classes.logo}>
    Tax Calculator {year}
  </div>;
}