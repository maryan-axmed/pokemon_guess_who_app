import { useState } from "react";

const input = document.getElementsByName("house");

const HouseForm = ({props, handleFormValidation, startGame, housePicked, setHousePicked}) => {

    // get house and pass information to game.js so that message can be personalised
    const handleHouseSelection = () => {
        setHousePicked(true);
    }

    return ( 
        <>

            <select id="house-dropdown" required onChange={handleHouseSelection}>
                <option value ="" disabled selected>Select your house</option>
                <option>Gryffindor</option>
                <option>Slytherin</option>
                <option>Ravenclaw</option>
                <option>Hufflepuff</option>
            </select>

            <a href="https://www.wizardingworld.com/news/discover-your-hogwarts-house-on-wizarding-world" target="_blank">&#8505;</a>

            {housePicked ? 
                <button gamestarted= "false" onClick={startGame} id="start_game_button">Start Game!</button> 
                :
                <button disabled gamestarted= "false" onClick={startGame} id="start_game_button">Start Game!</button> }
        </>
     );
}
 
export default HouseForm;