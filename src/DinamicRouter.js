import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DinamicRouter = () => {
    const params = useParams();
    const [message, setMessage] = useState(null);
    const [color1, setColor1] = useState(null);
    const [color2, setColor2] = useState(null);
    useEffect(() => {
        params.message && setMessage(params.message);
        params.color1 && setColor1(params.color1);
        params.color2 && setColor2(params.color2);
    }, [])
    
    return (
        <div>
            {!message && !color1 && !color2 && <h2>Welcome</h2>}
            { message && (isNaN(message) 
                ? <h4 style={{ color: color1 && color1, backgroundColor: color2 && color2}}>The word is: {message}</h4> 
                : <h4 style={{ color: color1 && color1, backgroundColor: color2 && color2}}>The number is: {message}</h4>
            )}
        </div>
    )
}

export default DinamicRouter