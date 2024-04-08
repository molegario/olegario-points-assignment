import classes from './logo.module.css'
export default function Logo({year}) {
  return <div 
    className={classes.logo}
    data-testid='main-logo'
  >
    Tax Calculator {year}
  </div>;
}