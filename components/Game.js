import {useState, useEffect} from "react";
import AnswerInput from './AnswerInput'

const randint = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Game = (props) => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [score, setScore] = useState(0);
    let [time, setTime] = useState(5);

    const [timeLeft, setTimeLeft] = useState(true);

    const new_question = () => {
        setA(randint(10**b, 10**(b+1)-1));
        setTime((time) => {
            return 5;
        });
        setTimeLeft(true);
        setB((b) => {
            return b + 1;
        })
    }

    useEffect(new_question,[]);

    const tick_time = () => {
        setTime((time) => {
            return time - 1;
        })
    }

    useEffect(() => {
        const tick_interval = setInterval(tick_time, 1000);
        return () => {
            clearInterval(tick_interval);
        };
    }, []);

    useEffect(() => {
        if (time <= 0) {
            setTimeLeft(false);
            setTime(0)
        }
    }, [time]);

    const guess = (response) => {
        const int_response = parseInt(response);
        if(int_response == a) {
            setScore(score+1);
            new_question();
        } else {
            props.onGameover(score);
        }
    };

    return(
        <>
            <div className="text-4xl mb-2">Question: {score + 1}</div>
            {timeLeft ? (
                <div>
                    <div>Time: {time} seconds</div>
                    <div className="text-7xl font-bold mb-10"> {a} </div>
                </div>
                
            ) : (
                <AnswerInput onGuess={guess} />
            )
            }
            
        </>
    )
}

export default Game;