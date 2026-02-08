import { useEffect } from "react"
import axios from "axios"
import { useState } from "react";

export default function FetchJoke(){
    const [joke,setJoke] = useState({});
    const [setup,setSetup]=useState('')
    const [punchline,setPunchline]=useState('');
    const [open,setOpen]=useState(false);

    useEffect(()=>{
        const fetchJoke= async ()=>{
            const joke = await axios.get('https://official-joke-api.appspot.com/jokes/random')
            setJoke(joke);
            const setup = joke.data.setup;
            const punchline=joke.data.punchline;
            setSetup(setup);
            setPunchline(punchline);
        }
        fetchJoke();

    },[])

    return(
        <>
        <div>
            <h1>Joke of the Day</h1>
            <p>{setup}</p>
            {open ? (<p><strong>{punchline}</strong></p> ): (
                <button onClick={() => setOpen(true)}>
                Reveal Punchline
                </button>
            )}
        </div>
        </>

    )
}