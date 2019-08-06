class BurgerIcon extends React.Component  {
    

    render() {
        return <>

            <div className="burger-container">
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </div>

            <style jsx>
                {`
                .burger-container {
                    width: 41px;
                    height:30px;
                }

                .burger-line {
                    width: 35px;
                    height: 2px;
                    background-color: white;
                    margin: 6px 0;
                  
                }
                `}
            </style>
        </>
    }
}


export default BurgerIcon;