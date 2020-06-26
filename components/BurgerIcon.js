import { useState } from "react";

function BurgerIcon(props) {

    return <>

        <div className="hamburger" onClick={() => props.toggleDrawer()}>
            <span className={props.isDrawerOpen ? "open" : ""}></span>
            <span className={props.isDrawerOpen ? "open" : ""}></span>
            <span className={props.isDrawerOpen ? "open" : ""}></span>
        </div>

        <style jsx>
            {`

                * {
                    margin: 13px;
                    padding: 1px; 
                  }
                  
                  
                  .hamburger {
                    width: 30px;
                    position: fixed; 
                    top: 5px; 
                    right: 5px;
                    color: black;
                    z-index: 5000;
                  }

                  .hamburger span {
                    width: 30px;
                    color: black;
                    background-color: #000;
                    border-radius: 3px;
                    content: '';
                    display: block;
                    height: 5px;
                    margin: 7px 0;
                    transition: all .2s ease-in-out;
                  }

                  .hamburger span.open:nth-child(1) {
                    transform: translateY(12px) rotate(135deg);
                  }

                  .hamburger span.open:nth-child(2) {
                    transform: scale(0);
                  }


                  .hamburger span.open:nth-child(3) {
                    transform: translateY(-12px) rotate(-135deg);
                  }
                  
                  .nav-icon:after, 
                  .nav-icon:before, 
                  .nav-icon div {
                    background-color: #000;
                    border-radius: 3px;
                    content: '';
                    display: block;
                    height: 5px;
                    margin: 7px 0;
                    transition: all .2s ease-in-out;
                  }
                  

                  .nav-icon:hover:before {
                    transform: translateY(12px) rotate(135deg);
                  }
                  
                  .nav-icon:hover:after {
                    transform: translateY(-12px) rotate(-135deg);
                  }
                  
                  .nav-icon:hover div {
                    transform: scale(0);
                  }
                  
                  
                `}
        </style>
    </>

}


export default BurgerIcon;