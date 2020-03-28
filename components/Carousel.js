import { Carousel } from 'react-responsive-carousel';


function Galery  (props){
    return  <div  >
        <Carousel  >

            {
                props.data.items.map((item, index) => (           
                <div key={index}>
                    <img src={ process.env.assetPrefix + item.picture} />
                    <p className="legend">{item.legend}</p>
                </div>
                ))
            }
                
        </Carousel>
   
    </div>

}

export default Galery

