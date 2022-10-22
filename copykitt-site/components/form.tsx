interface FormProps {
    prompt: string
    setPrompt: any
    onSubmit: any
    isLoading: boolean
    charLimit: number
}

const Form: React.FC<FormProps> = (props) => {
        const updatePromptValue = (text: string) => {
            if (text.length <= props.charLimit){
                props.setPrompt(text)
            }
        }
        const charLimit = 32
        const isPrompValid = props.prompt.length <= charLimit

    return <>
    <p>
    Your Brand-Manager
    </p>
    <input 
        type="text" 
        placeholder="intelligence"
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
    ></input>
    <div>{props.prompt.length}/{props.charLimit}</div>
    <button 
    onClick={props.onSubmit} 
    disabled={props.isLoading || !isPrompValid}
    >
        Execute
    </button>
</>
}

export default Form