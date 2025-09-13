import heroStyles from ".//hero.module.css"
export default function Hero() {
    return (
        <div className = {heroStyles.hero}>
            <div className={heroStyles.leftSection}>
                <img src="/Velomaster.png"/>
                <p>Мы, мастера веломастерской «Велозар», как раз те самые счастливые люди, 
                    которые смогли превратить свое увлечение и хобби в профессию. 
                    Мы сами любим кататься и хотим чтобы Ваш двухколесный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <div className = {heroStyles.dinoSection}>
                <img src="/din1.png"/>
            </div>
        </div>
    );
  }