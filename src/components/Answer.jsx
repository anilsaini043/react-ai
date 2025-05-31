import React, { useEffect, useState } from 'react';
import { checkHeading, replaceHeadingStars } from '../utils/helper';

const Answer = ({ ans, index }) => {
    const [heading, setHeading] = useState(false);
    const [answer, setAnswer] = useState(ans)

    useEffect(() => {
        if (checkHeading(ans)) {
            setHeading(true);
            setAnswer(replaceHeadingStars(ans))
        }
    }, [])

    return (
        <div>
            {
                index === 0 ? <span className="text-3xl">{answer}</span> : heading ? <span className='pt-2 text-lg block'>{answer}</span> : <span className='pl-5'>{answer}</span>
            }
        </div>
    )
}

export default Answer