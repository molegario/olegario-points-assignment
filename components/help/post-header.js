import classes from './post-header.module.css';

export default function PostHeader({ 
  title, 
 }) {
  return <header className={classes.header}>
    <h1>{title}</h1>
  </header>;
}