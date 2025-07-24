export default function Dice({dice,handleClick}){ 
    const styles={backgroundColor:dice.isFilled?"skyblue":null}
    return(
        <div className="die-face" style={styles}
         onClick={()=>handleClick(dice.id)}>
           <div className="die-num">{dice.digit}</div>   
        </div>
    )
}