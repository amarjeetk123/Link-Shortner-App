import "./style.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);

    const [outputLink, setOutputLink] = useState("");

    const [inputValue, setInputValue] = useState("");

    const [ismove, setISMove] = useState(false);
    const [isfetching, setIsfetching] = useState(false)

    const [error, setError] = useState(false)

    const fetchShortUrl = async () => {
        try {
            setLoading(true);
            const res = await axios.get(
                `https://api.shrtco.de/v2/shorten?url=${inputValue}`
            );
            // console.log(res)
            setOutputLink(res.data.result.short_link);
            setIsfetching(true)

        } catch (error) {
            // console.log(error)
            setError(true)
        } finally {
            setLoading(false);
        }
    };

    const handleClick = () => {
        setISMove(true);
        if (inputValue.length > 0) {
            fetchShortUrl();
        }
        else if (inputValue.length == 0) {
            alert("Please Give us a URL")
        }

    };


    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [copied]);

    useEffect(() => {
        setISMove(false);
    }, []);

    if (error) {
        return (
            <div className="error-box">        
                <p className="error"> something went Wrong </p>         
            </div>
        )
    }
    if (loading) {
        return <p className="loading">Loading...............</p>
    }

    return (
        <div className="main">
            <div className="box">

                <h1 className="heading">

                    URL <span className="heading2">Shortner</span>
                </h1>

                {ismove == false ?
                    <div className="containt">
                        <input
                            placeholder="paste a link to short........"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={handleClick}> Click here </button>
                   
                    </div>
                    :

                    <div>
                        <div className="containt">
                            <input value={outputLink} readOnly />
                            <CopyToClipboard text={outputLink} onCopy={() => setCopied(true)}>
                                <button className={copied ? "donebtn" : ""}>Copy Link!</button>
                            </CopyToClipboard>

                        </div>
                        <i onClick={() => setISMove(false)} className="fa-regular fa-circle-left success-back"></i>
                    </div>
                }
            </div>
        </div>
    );
}

export default HomePage;
