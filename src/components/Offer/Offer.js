import offerStyles from ".//offer.module.css"
export default function Offer() {
    return (
        <div className ={offerStyles.offer}>
            <div className={offerStyles.leftSection}> 
                <h4>Что мы предлагаем</h4>
                <p className={offerStyles.offerText}>В нашей мастерской можно выполнить комплексное техническое обслуживание велосипеда, ремонт и настройку всех его узлов, шиномонтажные работы. Вовремя проведенное ТО велосипеда помогает избежать многих проблем и дорогого ремонта.  
                    Все работы выполняем качественно и с душой. </p>
            </div>
            <div className={offerStyles.rightSection}>
                <img src="/image1.png" className = {offerStyles.imageBycicle}/>
            </div>
        </div>
    );
  }
  