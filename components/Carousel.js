import { Carousel } from 'react-responsive-carousel';


function Galery  (props){
    return  <div style={{padding: 15}}>
        <Carousel >

            {
                props.data.items.map((item) => (           
                <div>
                    <img src={ process.env.assetPrefix + item.picture} />
                    <p className="legend">{item.legend}</p>
                </div>
                ))
            }
                    

        </Carousel>

    </div>

}

export default Galery

