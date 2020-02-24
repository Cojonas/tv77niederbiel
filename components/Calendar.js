import LoadingSpinner from "./LoadingSpinner"
import fetch from 'isomorphic-fetch'
import Banner from "./Banner"
import React, {useState, useEffect} from "react"
import axios from "axios";


function Calendar() {
    const TV77_GOOGLE_LINK = "https://calendar.google.com/calendar/ical/qon9spr0t5bgpjhle96hplu2r0%40group.calendar.google.com/public/basic.ics"
    const cal_id = "qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com";
    const api_key = "AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk"

    const api_link = "https://www.googleapis.com/calendar/v3/calendars/qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com/events?key=AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk&singleEvents=true&orderBy=startTime&maxResults=5"



    const ics_data = async () => {
        const res = await fetch(api_link)
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
    }

    const [data, setData] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    const options = {
        url: api_link, 
        method: "GET"
         
    }
    useEffect(() => {
        axios(options)
        .then(response => {
            console.log("got a response: " + JSON.stringify(response))
            setData(response.data)
        })
        .catch(function(error){console.log(error.message)})



    })



    return <>
        <Banner>
            <h2>Termine</h2>
            <p>Unsere nächsten öffentlichen Events und Termine:</p>

            
                        {
                            
                            data.items ? data.items.map((item) => <div style={{ padding: 10 }}>
                                <span style={{ fontWeight: "bold" }}>{new Date(item.start.dateTime).toLocaleDateString("de-DE", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}: </span>
                                <br></br
                                ><span>{item.summary}</span>
                            </div>)  :  <LoadingSpinner />
                            
                        }
                    
                
            <a href={"https://calendar.google.com/calendar/embed?src=qon9spr0t5bgpjhle96hplu2r0%40group.calendar.google.com&ctz=Europe%2FBerlin"} className="offer-link">Zum Kalender</a>

        </Banner>

        <style jsx>
            {
                `
                .h-scrollmenu {
                    background-color: #333;
                    overflow: auto;
                    white-space: nowrap;
                    margin: 0 200px; 
                }
                .h-scrollmenu > div {
                    white-space: nowrap;
                    margin: 0 200px; 
                }
                .h-scrollmenu > div {
                    display: inline-block;
                }
                span {
                    text-size: 10px;
                }
                `

            }
        </style>


    </>
}

export default Calendar; 