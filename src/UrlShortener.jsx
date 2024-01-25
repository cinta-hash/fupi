import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard"

export default function UrlShortener() {
  const [longUrl, setLongUrl]= useState("")
  const [customUrl, setCustomUrl]= useState("")
  const [shortLink, setShortLink]= useState({})

  function handleLongUrlChange(){
    setLongUrl(e.target.value);
  }

  function handleCustomUrlChange(){
    setCustomUrl(e.target.value);
  }

  async function handleSubmit(){
    console.log("hello world")
  }

  return (
    <div class="container">
      <div class="bg-black bg-opacity-10 backdrop-blur-md w-1/3">
        <form onSubmit={handleSubmit}>
          <input 
              type="text"
              name="long_url"
              value={longUrl}
              placeholder="paste your url"
              onChange={handleLongUrlChange}    
          />
          <input 
            type="text"
            name="cutom_url"
            value={customUrl}
            placeholder="custom URL(optional"
            onChange={handleCustomUrlChange}
          />
          <button type="submit">Fupisha</button>
        </form>
        {shortLink && (
          <div>
            <p>{shortLink}</p>
            <CopyToClipboard text={shortLink}>
              <button>COPY</button>
            </CopyToClipboard> 
          </div>
        )}
      </div>
    </div>
  );
}
