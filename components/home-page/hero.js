import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/avatar.jpg'
          alt='An image showing astronaut in space art'
          width={200}
          height={200}
        />
      </div>
      <h1>Hi, I'm Ian</h1>
      <p>
        I took several Udemy courses for frontend development. (Typescript and NextJS)
      </p>
    </section>
  );
}

export default Hero;
