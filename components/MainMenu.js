
const MainMenu = (props) =>{
    return(
        <>
        <div className = "bg-blue-200 h-screen flex flex-col flex-center justify-center items-center">
            <div className="text-5xl mb-2 ">How many digits can you remember in <em>five</em> seconds??</div>
            <div>Highscore: {props.highscore}</div>
            <button
                className="w-48 bg-indigo-500 text-white font-bold rounded-lg text-xl p-r hover:bg-indigo-700"
                onClick={props.onStart}
                >
                    New Game

                </button>
        </div>
        </>
    )
}

export default MainMenu;