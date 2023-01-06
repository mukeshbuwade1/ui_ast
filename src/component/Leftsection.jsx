import React from 'react';
let data = ["Paraphraser", "Grammar Checker", "Plagiarism Checker", "Co-writer", "Summarizer", "Citation Generator", "Help Center"];
const Leftsection = () => {
    return (
        <div className="leftConatiner">
            {data.map((element, index) => {
                return <p key={element + index} className="leftsectionItem">{element}</p>
            })}
        </div>
    )
}
export default Leftsection