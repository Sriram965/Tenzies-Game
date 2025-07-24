import { useEffect, useState } from "react";
import Dice from "./Dice";
import Confetti from "react-confetti"

export default function Main(){
    const [dices,setDices]=useState([]);
    //const [gameWon,setGameWon]=useState(false);
    let gameWon=(dices.length>0 && dices.every(dice => dice.isFilled) && dices.every(dice => dice.digit===dices[0].digit));

    function generateNewNumber(){
        return Math.floor(Math.random()*6+1);
    }

    function handleRoll(){
      if(gameWon){
        CreateNewGame();
      }else{
        setDices(prev => prev.map(dice =>
        dice.isFilled?dice:{
          ...dice,
          digit:generateNewNumber()
        }
       ))
      }
      
    }

    function handleClick(id){
      setDices(prev => prev.map(dice =>
        dice.id!==id?dice:{
          ...dice,
          isFilled:!dice.isFilled
        }
      ))
    }


    function CreateNewGame(){
      let newgame=[];
       for(let i=0;i<10;i++){
         const newNumber=generateNewNumber();
         newgame.push({
          id:newgame.length+1,
          isFilled:false,
          digit:newNumber
         });
       };
       setDices(newgame);
    }

    useEffect(()=>{
        CreateNewGame();
    },[])

    return(
      <main>
       {gameWon && <Confetti />}
        {dices.length>0 && 
           <div>
              <div className="dice-container">
                  {dices.map(dice => <Dice 
                    key={dice.id} 
                    dice={dice}
                    handleClick={handleClick}
                  />)
                  }
              </div>
              <button className="roll-button"
              onClick={handleRoll}>{gameWon?"New Game":"Roll"}</button>
           </div>
            
        }
      </main>
    )
}