import headerStyles from ".//header.module.css"
export default function Header() {
    return (
         <header className ={headerStyles.header}>
            <img src = '/logocopy1.svg' className ={headerStyles.logo}/>
            <a>О нас</a>
            <a>Услуги</a>
            <a>Аренда</a>
            <img src = "/Group7.png" className= {headerStyles.but}/>
         </header>
    );
  }
  