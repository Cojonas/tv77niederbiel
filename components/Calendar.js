import LoadingSpinner from "./LoadingSpinner"
import fetch from 'isomorphic-fetch'
import Banner from "./Banner"
import React, {useState, useEffect} from "react"


function Calendar() {

    const api_link = "https://www.googleapis.com/calendar/v3/calendars/qon9spr0t5bgpjhle96hplu2r0@group.calendar.google.com/events?key=AIzaSyAeFY2tXUCqkNuMp5wIN2hrotK4mnvZgqk&singleEvents=true&orderBy=startTime&maxResults=5"

    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(api_link);
            res
              .json()
              .then(res => {
                  setData(res);
                })
              .catch(err => console.log(err))
              }
        fetchData()
    }, [])

    var yesterday = new Date() - 1440000

    const timeline = data.items ? data.items.map((item, index) => {
        let upcoming = item.start.date ? new Date(item.start.date) > yesterday : new Date(item.start.dateTime) > yesterday
         return upcoming ? (
            <div key={"" + index} style={{ padding: "5px 0px" }}>
                <span style={{ fontWeight: "bold" }}>{item.start.date ? new Date(item.start.date).toLocaleDateString("de-DE", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : new Date(item.start.dateTime).toLocaleDateString("de-DE", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}: </span>
                <br></br
                ><span>{item.summary}</span>
            </div>

        ) : <></>
    }
     ) : ""
        





    return <>
        <Banner>
            <h2>Termine</h2>
            <p>Unsere nächsten Events und Termine:</p>

            
                        {
                            timeline
                            
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