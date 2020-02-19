import Banner from "./Banner"

function Event (props)  {
    const item = props.item 
    const summary = item.summary 

    return <>
        <div style={{margin: 20}} >
            <Banner>
                <span className="eventTitle">
                    {summary}
                </span>
            </Banner>
        </div>
        <style jsx>

            {`
            .eventTitle {
                text-size: 25
            }


            
            `}
        </style>
    </>
}

export default Event