import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom"

function Fitness(){
    const [data] = useContext(Store)
    console.log(data)
    return(
        <div className="bollyWoodContainer">
    
        <div>
        
        <h1 className="line">Fitness</h1>
        
        
        {data.filter((data) => data.cat==="Fitness").map((item,index) =>{
            console.log(item)
        
            return(
                <>
                
                <div key={index} className="bollySet">
                <Link to = {`/details/${item.id}`}>
                
                <img src={item.img} alt="not found" className="BollyImage" />
                </Link>
                <div className="content">
                <Link to = {`/details/${item.id}`}>
                <h2>{item.title}</h2>
                <p>{item.cont.slice(0,70)}</p>
                <p>{item.cat}</p>
                </Link>
                
                </div>
                
                </div>
                <hr />
                </>
                
                
                
            )
         })} 
        </div>
        <div>
        
        <h1 className="line">Top Post</h1>
                {data.filter((data) => data.cat === "Fitness").map((item, index) => {
                    if (item.id == 42) {
                        return (

                            <div key={index}>

                                <Link to={`/details/${item.id}`}>

                                    <img src={item.img} alt="not found" className="topPostBig" />
                                </Link>
                                <div>
                                <Link to={`/details/${item.id}`}>
                                    <h2>{item.title}</h2>
                                    <p>{item.cat}</p>
                                    {/* <h2 className="number">{++count}</h2> */}
                                    </Link>
                                </div>
                            </div>
                        )
                    } else if (item.id >=43 && item.id <= 49) {
                        return (
                            <div key={index} className="topPostContent">
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.img} alt="not found" className="topPostImg"/>
                                </Link>
                                <div className="topPostContent2">
                                    <div className="content2">
                                    <Link to={`/details/${item.id}`}>
                                    <h2>{item.title}</h2>
                                    <p>{item.cat}</p>
                                    </Link>
                                    </div>
                                    {/* <h2>{++count}</h2> */}
                                </div>
                            </div>
                        )
                    }
                })}
         <h1>Advertisement</h1>
         <img src="https://tse1.mm.bing.net/th?id=OIP.eg59cwtm7jTvNkS07_JJDgHaKe&pid=Api&P=0&h=180" width={"350"} height={"695"}/>
        </div>
        </div>
    )

}
export default Fitness