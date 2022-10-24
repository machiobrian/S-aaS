// contains all our outputs
interface ResultsProps {
    snippet: string
    prompt: string
    keywords: string[]
    onBack: any
}
// create components



const Results: React.FC<ResultsProps> = (props) => {
    const keywordElements = []
    for (let i = 0; i < (props.keywords).length; i++) {
      const element = <div key={i}> 
      {props.keywords[i]}</div>
      keywordElements.push(element)
    }
    const keywordElementsholder = <div className="flex-wrap">{keywordElements}</div>
    
    const resultSection = (label:string, body:any) => {
    return (
        <div className="p-4 my-2 rounded-xl bg-sky-900">
            <div className="mb-6 font-light text-red-50 text-sm">
                {label}
            </div>
            <div className="font-bold text-emerald-50">{body}</div>
        </div>
    )

    }

    return (
    <>     

        <div className="mb-9">
            {resultSection('Prompt', <div>{props.prompt}</div>)}
        
            {resultSection('Generated Text',props.snippet)}
        
            {resultSection('Key Words:',keywordElementsholder)}
       
        </div>

    <button onClick={props.onBack}
    className="bg-gradient-to-r from-sky-800
     to-black disabled:opacity-50 w-auto p-2 rounded-lg text-lg"
    >Home</button>
    </>
    )
}

export default Results