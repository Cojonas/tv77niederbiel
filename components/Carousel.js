import { Carousel } from 'react-responsive-carousel';


function Galery  (){
    return  <div style={{padding: 15}}>
        <Carousel >
            <div>
            <img src="static/teamfoto_herren.jpeg" />
            <p className="legend">Legend 3</p>
            </div>
                    
            <div>
            <img src="static/clubheim_drinnen.jpg" />
            <p className="legend">Legend 3</p>
            </div>
            <div>
            <img src="static/clubheim_drinnen2.jpg" />
            <p className="legend">Legend 3</p>
            </div>

        </Carousel>

    </div>

}

export default Galery

