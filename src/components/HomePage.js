import "./style.css"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState, useEffect } from "react";

function HomePage() {

    const [outputLink, setOutputLink] = useState("Amarjeet Kumar")
    const [copied, setCopied] = useState(false)

    useEffect(() => {
   
        const timer = setTimeout( () => {
            setCopied(false)
        }, 1000  )

        return () => clearTimeout(timer)
    }, [copied])
    

    return (
        <div className="main">
            <div className="box">
                <h1 className='heading'> URL  <span className='heading2' >Shortner</span> </h1>
                <div className="containt">
                    <input placeholder="paste a link to short........" />
                    <button> Click here </button>
                </div>
                {/* <div className="containt">
                    <input placeholder="paste a link to sort........" />
                    <button>Copy Link!</button>
                </div> */}
                <div className="containt">
                    <input value={outputLink} />
                    <CopyToClipboard text={outputLink}
                        onCopy={() => setCopied(true)}
                    >
                        <button className={copied ? "donebtn" : ""} >Copy Link!</button>
                    </CopyToClipboard>
                </div>
            </div>
        </div>
    )
}

export default HomePage