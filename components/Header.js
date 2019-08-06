import Link from "next/link";
import BurgerIcon from "../components/BurgerIcon"
const sites = [
    {
        id: "1",
        href: "/",
        display: "Start"
    },
    {
        id: "2",
        href: "/about",
        display: "Über uns"
    },
    {
        id: "3",
        href: "/anlage",
        display: "Die Anlage"
    },
    {
        id: "4",
        href: "/contact-us",
        display: "Kontakt"
    }
]


class Header extends React.Component {

    constructor(props) {
        super(props)
    }



    render() {
        const isMobile = (this.props.mobile == "true")

        return <>

            <div className="header">
                <div className="logo-container">
                    <img src="static/tv77_logo_cropped.png"></img>
                </div>
                <div className="links-container">
                {
                    isMobile ? (<BurgerIcon  />) : sites.map((item) => {
                     return<Link key={item.key} href={item.href}><a className="button1">{item.display}</a></Link>
                    })
                }
                </div>

               
            </div>



            <style jsx>

                {`
                .logo-container {
                    position: fixed;
                    left: 10vw; 
                    top: 10px;
                }
                .links-container {
                    position: fixed; 
                    right: 1vw;
                    top: 12px;
                }
                a {
                    color: black;
                }

            a.button1{
                 display:inline-block;
                 padding:0.35em 1.2em;
                 border:0em solid #fff;
                 margin:0.2em 0.3em 0.3em 0;
                 border-radius:0.12em;
                 box-sizing: border-box;
                 text-decoration:none;
                 font-family:'Roboto',sans-serif;
                 font-weight:300;
                 color:#fff;
                 text-align:center;
                 transition: all 0.2s;
                }
                a.button1:hover{
                 color:#000;
                 background-color:#f2f542;
                }
                a.button1:click{
                     color:#000;
                     background-color:#f2f542;
                }
    
                @media all and (max-width:30em){
                 a.button1{
                  display:block;
                  margin:0.4em auto;
                 }
                }

                .header{
                    height: 70Px;
                    color: #000;
                    background-color: #20232a;
                    position: fixed;
                    width: 100vw;
                    z-index: 1000;
                    border: 1px solid black;

                }
            
            `}
            </style>



        </>
    }
};

export default Header;