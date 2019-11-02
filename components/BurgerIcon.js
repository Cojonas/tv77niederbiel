function BurgerIcon() {


    return <>

        <div className="burger-container ripple">
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
        </div>

        <style jsx>
            {`
                .burger-container {
                    width: auto;
                    height:30px;
                    position: absolute; 
                    top: 0px; right: 0px;
                    margin-top: 25px;
                    margin-right: 10px;
                    padding: 5px;
                    border-radius: 10px;
                }
                .ripple {
                    background-position: center;
                    transition: background 0.8s;
                }
                .ripple:hover {
                    background: #111 radial-gradient(circle, transparent 1%, #111 1%) center/15000%;
                }
                .ripple:active {
                    background-color: #111;
                    background-size: 100%;
                    transition: background 0s;
                }
                .burger-line {
                    width: 25px;
                    height: 2px;
                    background-color: white;
                    margin: 2px 0px 5px 0px;
                    
                }
                `}
        </style>
    </>

}


export default BurgerIcon;