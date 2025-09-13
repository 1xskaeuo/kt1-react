import promoStyles from ".//promo.module.css"
export default function Promo() {
    return (
        <div className ={promoStyles.promo}>
            <p className={promoStyles.promoText}>Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями.</p>
            <p className={promoStyles.promoText}>А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.</p>
        </div>
    );
  }
  