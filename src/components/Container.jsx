import { useState } from "react"
import { useEffect } from "react"
import loadCards from "../add_func"
import Card from "./Card"
import Navbar from "./Navbar"


function Container(){
    const [cards, setCards] = useState([])
    const [clicked, setClicked] = useState([])
    const [currentScore, setCurrentScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const randomize = () => {
        setCards([...cards.sort(() => Math.random() - 0.5)]);
    }

    const handleClick = (id) => {
        if (clicked.some(click => click == id)){
            if (currentScore > bestScore){
                setBestScore(currentScore)
            }
            setCurrentScore(0)
            setClicked([])
        } else {
            if (clicked.length == 11){
                setClicked([])
            } else {
                setClicked([...clicked, id])
            }
            setCurrentScore(currentScore + 1)
            
        }
        randomize()
    }

    useEffect(() => {
        clicked
    },[clicked])

    useEffect(() => {
        console.log('LOADING DATA')
        loadCards(setCards)
    },[])

    return (
        <>
            <Navbar currentScore={currentScore} bestScore={bestScore}/>
            <div className="container">
                {cards.map(card => (
                    <Card handleClick={handleClick} key={card.id} card={card} />
                ))}
            </div>
        </>
    )
}

export default Container