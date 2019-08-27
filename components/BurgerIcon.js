function BurgerIcon() {


    return <>

        <div className="burger-container">
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
        </div>

        <style jsx>
            {`
                .burger-container {
                    width: auto;
                    height:24px;
                    position: absolute; 
                    top: 0px; right: 0px;
                    margin-top: 28px;
                    margin-right: 10px;
                }

                .burger-line {
                    width: 35px;
                    height: 2px;
                    background-color: white;
                    margin: 4px 0;
                  
                }
                `}
        </style>
    </>

}


export default BurgerIcon;