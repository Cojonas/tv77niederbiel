function NameBadge(props) {
    return <>
        <span>TV77 Niederbiel</span>
        <style jsx>{`
            span {
                position: fixed; 
                top: 22px ; 
                font-size: 22px; 
                
                width: 100vw; 
                text-align: center ;
                color: white; 
                z-index: 2000; 
                margin: 0 auto; 
            }


        `}</style>
    </>
}

export default NameBadge; 