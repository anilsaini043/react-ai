import { useState } from "react";
import { GEMINI_API_URL, GEMINI_API_KEY } from "./utils/constants";
import Answer from "./components/Answer";

function App() {

  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonClick = async () => {
    const payload = {
      "contents": [{
          "parts": [{
              "text": question
            }
          ]
        }
      ]
    }

    const response = await fetch(GEMINI_API_URL + GEMINI_API_KEY, {
      method: "POST",
      body: JSON.stringify(payload)
    })
    const result = await response.json();
    let data = result?.candidates[0]?.content?.parts[0]?.text;
    data = data.split("* ");
    data = data.map((el)=> el.trim())
    setResult(data)
  }

  return (
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-800'>

      </div>
      <div className='col-span-4'>
        <div className='conatainer h-170 m-10 text-white overflow-scroll'>
          <ul>
            {
            result && result.map((item, index)=>(
              <li key={index} className="text-left p-1  ">
                <Answer index={index} ans={item} />
              </li>
            ))
          }
          </ul>
        </div>

        <div className='bg-zinc-800 w-1/2 p-1 m-auto text-white rounded-3xl flex border border-zinc-400'>
          <input type='text' value={question} className='w-full h-full p-3 outline-none' placeholder='Ask me anything...' onChange={(e) => setQuestion(e.target.value)} />
          <button className='p-2 rounded-4xl cursor-pointer hover:bg-zinc-600' onClick={handleButtonClick}>Ask</button>
        </div>

      </div>
    </div>
  )
}

export default App
