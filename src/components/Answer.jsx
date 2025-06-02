import React, { useEffect, useState } from 'react';
import { checkHeading, replaceHeadingStars } from '../utils/helper';

const Answer = ({ ans, index, totalResult, type }) => {
    const [heading, setHeading] = useState(false);
    const [answer, setAnswer] = useState(ans)

    useEffect(() => {
        if (checkHeading(ans)) {
            setHeading(true);
            setAnswer(replaceHeadingStars(ans))
        }
    }, [])

    return (
        <>
            {
                index === 0 && totalResult > 1 ? <span className="text-xl pt-2 block text-white">{answer}</span> : heading ? <span className='text-xl pt-2 block text-white'>{answer}</span> : <span className={type=="q" ? "pl-1" : "pl-5"}>{answer}</span>
            }
        </>
    )
}

export default Answer