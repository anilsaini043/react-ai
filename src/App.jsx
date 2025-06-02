import { useState } from "react";
import { GEMINI_API_URL, GEMINI_API_KEY } from "./utils/constants";
import Answer from "./components/Answer";

function App() {

  const [question, setQuestion] = useState("");
  const [result, setResult] = useState([]);

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
    const res = await response.json();
    let data = res?.candidates[0]?.content?.parts[0]?.text;
    data = data.split("* ");
    data = data.map((el) => el.trim())
    setResult([...result, { type: "q", text: question }, { type: "a", text: data }])
    setQuestion("")

  }

  return (
    <div className='grid grid-cols-5 h-screen text-center'>
      <div className='col-span-1 bg-zinc-800'>

      </div>
      <div className='col-span-4'>
        <div className='conatainer h-170 m-10 text-white overflow-scroll'>
          <ul>
            {
              result.map((item, index) => (
                <div key={index+Math.random()} className={item.type == "q" ? "flex justify-end" : ""}>
                  {
                    item.type == "q" ? <li key={index + Math.random()} className="w-fit text-right p-1 mb-3 bg-zinc-700 border-5 border-zinc-700 rounded-tl-3xl rounded-br-3xl rounded-bl-3xl"><Answer index={index} ans={item.text} totalResult={1} type={item.type} /></li>
                      : item.text.map((ansItem, ansIndex) => (
                        <li key={ansIndex} className="text-left p-1"><Answer index={ansIndex} ans={ansItem} totalResult={item.length} type={item.type} /></li>
                      ))
                  }
                </div>
              ))
            }
          </ul>
        </div>

        <div className='bg-zinc-800 w-1/2 p-1 m-auto text-white rounded-3xl flex border border-zinc-400'>
          <input type='text' value={question} className='w-full h-full p-3 outline-none' placeholder='Ask me anything...' onChange={(e) => setQuestion(e.target.value)} />
          <button type="submit" className='p-2 rounded-4xl cursor-pointer hover:bg-zinc-600' onClick={handleButtonClick}>Ask</button>
        </div>

      </div>
    </div>
  )
}

export default App
