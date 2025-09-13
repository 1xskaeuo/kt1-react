import rentalStyles from ".//rental.module.css"
export default  function Rental() {
  return (
    <div className={rentalStyles.rental}>
       <div className={rentalStyles.leftImageSection}>
            <img src="/sales.png" className={rentalStyles.salesImage}/>
       </div>
       <div className={rentalStyles.rightTextSection}>
            <p className ={rentalStyles.rentalText}>Прокат велосипедов</p>
            <p className ={rentalStyles.rentalText}>У нас вы можете взять на прокат хорошо обслуженные и настроенные велосипеды. Как раз мы находимся в прекрасном парке!</p>
       </div>
    </div>
  );
}