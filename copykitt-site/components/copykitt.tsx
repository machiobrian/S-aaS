import React from "react";
import Form from "./form";
import Results from "./result";
import Image from "next/image";
import logo from "../public/vercel.svg";

//make a new function extending from react
const CopyKitt: React.FC = () => {

    const CHAR_LIMIT : number = 32
    //extract the name of link to a single piece of text
    const ENDPOINT: string = 
    'https://0niph1c4ji.execute-api.us-east-1.amazonaws.com/prod/generate_snippet_and_keywords'
    //react hooks to store variables
    const [prompt, setPrompt] = React.useState("") //string
    const [snippet, setSnippet] = React.useState("")
    const [keywords, setKeywords] = React.useState([]) //list or array
    const [hasResult, setHasResult] = React.useState(false)
    // disable the button if word is still loading
    const [isLoading, setIsLoading] = React.useState(false)
    //console.log(prompt)

    
   //function for the execute button
    //when button is clicked this function is run
    //defined later on the button
    const onSubmit =() => {
        console.log("Submitting: "+prompt)
        //make is Loading = True
        setIsLoading(true)
        //calling an external API from JS/TS/React
        fetch(
            `${ENDPOINT}?prompt=${prompt}`
            ).then((res) => res.json())
            .then(onResult)
    }
    //takes in json data
    const onResult = (data: any) => {
        setSnippet(data.snippet)
        setKeywords(data.keywords)
        setHasResult(true)

        setIsLoading(false)
        
    }

    //function of Back button -> action: Reset
    const onReset = () => {
        setPrompt("")
        setHasResult(false)
        setIsLoading(false)
    }

    // console.log(snippet)
    // console.log(keywords)

    //have a result element that does not show up unless we have a result
    let displayedElemets = null
    // {snippet} -> this is a variable holder
    if(hasResult) {
        displayedElemets = (
            <Results 
            snippet={snippet} 
            keywords={keywords} 
            onBack={onReset} 
            prompt={prompt}
            />
    )}
    else {    
    // const formElement = (
    displayedElemets = (<Form 
        prompt={prompt} 
        setPrompt={setPrompt} 
        onSubmit={onSubmit} 
        isLoading={isLoading} 
        charLimit={CHAR_LIMIT}
        />
    //)
    )}

    const gradientTextStyle = 
        "textwhite text-transparent bg-clip-text bg-gradient-to-r from-sky-800 to-black w-fit mx-auto"

    return (

    <div className="h-screen flex">
        <div className="max-w-md m-auto p-2">
            <div className="bg-orange-700 p-6 rounded-xl text-white">
                <div className="text-center my-8">
                    <Image src={logo} width={800} height={600} alt=""/>
                    <h1 className={gradientTextStyle + " text-4xl font-medium "}>AI.Gen_TxT</h1>
                    <div className={gradientTextStyle + " font-light"}>Let's Generate Your Marketing Text </div>
                </div>
                       
                {displayedElemets}
            </div>
        </div>

       
    </div>
    )
};

export default CopyKitt