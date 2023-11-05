import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom"
function Technology(){
    const [data] = useContext(Store)
    console.log(data)
    return(
        <div className="bollyWoodContainer">
    
        <div>
        
        <h1 className="line">Technology</h1>
        
        
        {data.filter((data) => data.cat==="Technology").map((item,index) =>{
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
                {data.filter((data) => data.cat === "Technology").map((item, index) => {
                    if (item.id == 20) {
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
                    } else if (item.id > 21 && item.id <= 29) {
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
         <img src="https://tse2.mm.bing.net/th?id=OIP.yI-9PSqHrO57M_T2iFF6SwHaE7&pid=Api&P=0&h=180" width={"450"} height={"775"}/>
        </div>
        </div>
    )
}
export default Technology