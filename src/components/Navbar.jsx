function Navbar({currentScore, bestScore}){
    return (
        <div className="navbar">
            <div className="col">
                <h1>Amphibia Memory Game</h1>
                <p>Get points by clicking on an image but don&apos;t click on any more than once!</p>
            </div>
            <div className="col">
                <span>Best Score: {bestScore}</span>
                <span>Current Score: {currentScore}</span>
            </div>
        </div>
    )
}

export default Navbar