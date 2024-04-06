import Image from 'next/image';
import classes from './hero.module.css';

export default function Hero() {
  return <section className={classes.hero}>
    <div className={classes.image}>
      <Image src='/images/taxes-hero-image.jpg' alt='Tax Calculator hero image' width={300} height={300} /> 
    </div>
    <h1>Tax Calculator</h1>
    <p>Please choose a fiscal year to start</p>
  </section>
}