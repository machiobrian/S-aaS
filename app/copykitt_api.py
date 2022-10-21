from fastapi import FastAPI, HTTPException
from copykitt import generate_branding_snippet, generate_keywords
# initialize an entry point for our app
from mangum import Mangum #wraps the entire fastAPI in a handler to be used with lambda
from fastapi.middleware.cors import CORSMiddleware

MAX_INPUT_LEN = 12

app = FastAPI() #object created
handler = Mangum(app) #handler function lambda can evoke -> re-routes input to the entries @app
#make the API generate the snippet

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/generate snippet")
async def generate_snippet_api(prompt: str):
    validate_input_length(prompt)
    snippet = generate_branding_snippet(prompt)
    return{"snippet" : snippet, "keywords" : []}


#make the snippet genrate the keyword
@app.get("/generate keyword")
async def generate_keywords_api(prompt: str):
    validate_input_length(prompt)
    keywords = generate_keywords(prompt)
    return {"snippet" : None, "keywords" : keywords}

@app.get("/generate_snippet_and_keywords")
async def generate_keywords_api(prompt: str):
    validate_input_length(prompt)
    snippet = generate_branding_snippet(prompt)
    keywords = generate_keywords(prompt)
    return {"snippet": snippet, "keywords": keywords}

#length validation using the FastAPI's error handlers
def validate_input_length(prompt: str):
    if len(prompt) >= MAX_INPUT_LEN >= 12:
        raise HTTPException(status_code=400, detail=f"Input Length is too long. Must be under {MAX_INPUT_LEN} characters")



# uvicorn copykitt_api:app --reload