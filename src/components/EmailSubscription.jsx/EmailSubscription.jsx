import React, { useState } from "react";
import "./email-subscription.css";
import MailchimpSubscribe from "react-mailchimp-subscribe"
const BASE_URL = "https://gisfest.us11.list-manage.com/subscribe/post?u=aa3820248ae5099a48118feb1&id=ae2c181efa"

const EmailSubscription = ( )=>{


    const [email,setEmailAddress] = useState('');
    const [message,setMessage] = useState(null);

    const handleEmailSubscription =(e,status,subscribe)=>{

        e.preventDefault();

        //validate email

        var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if (pattern.test(String(email).toLowerCase().trim())){

            subscribe({EMAIL:email});

        }else{

            setMessage("Please enter a valid email address.");
            setEmailAddress('');
        }

       
        
        if(status === "success"){
            
            setMessage("Subscribed! We'll be in touch.");
            setEmailAddress('');

        }else if(status === "error"){
            
            setMessage("Oops! An error occured, please try again.");
            setEmailAddress('');

        }else if(status==="sending"){
            setMessage("Sending...");
        }

        setTimeout(()=>{
            setMessage(null);
        },6000);
    }

    const handleEmailChange = (e) => setEmailAddress(e.target.value);

    return(
        <section id="email-subscription" >
            <div>
                <h3>Subscribe for event updates</h3>
                <p>Join our mailing list to receive news and updates for GISFest events</p>
                    <div>
                        <MailchimpSubscribe
                            url={BASE_URL}
                            render={({subscribe,status})=>(
                                <form onSubmit={(e)=>handleEmailSubscription(e,status,subscribe)}>
                                    <input required type={'email'} placeholder="Enter your email address..." value={email} onChange={handleEmailChange}></input>
                                    <button type="submit">Subscribe</button>
                                    {message && <><br></br><br></br><span>{message}</span></>}
                                </form>)
                            }
                        />
                    </div>
            </div>
        </section>
    )
}

export default EmailSubscription;