interface FormProps {
    prompt: string
    setPrompt: any
    onSubmit: any
    isLoading: boolean
    charLimit: number
}

const Form: React.FC<FormProps> = (props) => {
    const charLimit = 32
    const isPrompValid = props.prompt.length <= charLimit
    const updatePromptValue = (text: string) => {
        if (text.length <= props.charLimit){
            props.setPrompt(text)
        }
    }
    
    let statusColor = "text-indigo-100"
    let statusText = null
    if (!isPrompValid)
    {
        statusColor="text-black"
        statusText = `Your input exceeds ${props.charLimit} characters.`
    }
        

    return <>
        <div className="mb-14 mt-10 text-white">
            <p>
            Your Brand-Manager once asked ...
                
                "What is the ONE word, you, can use to describe your Business ?"
                
            
            </p>
        </div>
    <input
        className="p-2 rounded-lg mb-2 w-full text-black focus:outline-black focus:outline"
        type="text" 
        placeholder="busy"
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
    ></input>
    
    <div className={statusColor + " flex justify-between my-2 mb-3 font-light"}>
        <div>{statusText}</div>
        <div>
            {props.prompt.length}/{props.charLimit}
        </div>  
    </div>
    <button
        className="bg-gradient-to-r
         from-sky-800 to-black disabled:opacity-50 w-auto p-2 rounded-lg text-lg"
        onClick={props.onSubmit} 
        disabled={props.isLoading || !isPrompValid}
    >
        Generate
    </button>
</>
}

export default Form