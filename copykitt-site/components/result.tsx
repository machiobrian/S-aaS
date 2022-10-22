// contains all our outputs
interface ResultsProps {
    snippet: string
    prompt: string
    keywords: string[]
    onBack: any
}
// create components
const Results: React.FC<ResultsProps> = (props) => {
    const keywordElements = [];
    for (let i = 0; i < props.keywords.length; i++) {
      const element = (
        <div
          key={i}
          
        >
          #{props.keywords[i]}
        </div>
      );
      keywordElements.push(element);
    }
  

    return <>
    <div>
        1 of (Infinite) Outputs:

        <div>
            <div>
                <div>
                    <b>Prompt:</b>
                </div>
                <div>{props.prompt}</div>
            </div>
        </div>

        <div>
            <div>
                <div>
                    <b>Generated Text:</b>
                </div>
                <div>{props.snippet}</div>
            </div>
        </div>

        <div>
            <div>
                <div>
                    <b>Key Words:</b>
                </div>
                <div>{keywordElements}</div>
            </div>
        </div>  
    </div>
    <button onClick={props.onBack}>Home</button>
    </>

}

export default Results