import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom";
function Home() {
    const [data] = useContext(Store);
    // console.log(data)
    return (
        <>
            <div className="image-home">
            <img className="image3" src="https://tse1.mm.bing.net/th?id=OIP.JZY1iuTkIrVRVH8I-QEXugHaFC&pid=Api&P=0&h=180" />
                <img className="image1" src="https://clipground.com/images/women-empowerment-clipart-gif-4.png" />
                <img className="image2" src="https://assets.rappler.com/2AFB7D5E5C734656A2BF5933B04681AC/img/83611058FD43467D99AB4A81C271E237/shutterstock-business-technology.jpg" />
                
            </div>
            <h1 className="line">The Latest</h1>
            <div className="latest">

                {data.filter((data) => data.cat === "Home").map((item, index) => {
                    // console.log(item)
                    if (item.id >= 4 && item.id <= 6)

                        return (
                            <div className="latest">

                                <div key={index} className="homeSet">
                                    <Link to={`/details/${item.id}`}>
                                        <img src={item.img} alt="not found" className="homeImage" />
                                    </Link>
                                    
                                    <div className="homeContent">
                                    <Link classname="homeContent9" to={`/details/${item.id}`}>
                                        <h2>{item.title}</h2>
                                        <p>{item.cont.slice(0, 120)}</p>
                                        <p>{item.cat}</p>
                                        </Link>
                                        

                                    </div>
                                </div>

                            </div>
                        )
                })}

            </div>
            <h1 className="line">Latest Article</h1>
            <div className="latest-Article">
                <div className="latestArticle">

                    {data.filter((data) => data.cat === "Home").map((item, index) => {
                        // console.log(item)
                        if (item.id >= 4 && item.id <= 8)

                            return (
                                <div className="latest">

                                    <div key={index} className="homeSet2">
                                        <Link to={`/details/${item.id}`}>

                                            <img src={item.img} alt="not found" className="homeImage2" />
                                        </Link>
                                        <div className="homeContent2">
                                            <Link className ="homeset5" to={`/details/${item.id}`}>
                                            <h2>{item.title}</h2>
                                            <p>{item.cont.slice(0, 120)}</p> 
                                            <p>{item.cat}</p>
                                            </Link>

                                        </div>
                                        {/* <hr /> */}
                                    </div>

                                </div>
                            )
                    })}
                    <div>
                        {data.filter((data) => data.cat === "Home" && data.id==2).map((item, index) => {
                            return (
                                <div div key={index}>
                                    <Link to={`/details/${item.id}`}>

                                        <img src={item.img} alt="not found" className="singleImge" />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <div className="Homeadd">
                        <h1 className="addCenter">Advertisement</h1>
                        <img className="addImg" src="https://tse2.mm.bing.net/th?id=OIP.dy_GvY4BaH_ieVlrHUki0gHaJl&pid=Api&P=0&h=180"/>
                    </div>
                    <h1 className="line">Top Post</h1>
                    {data.filter((data) => data.cat === "Home").map((item, index) => {
                        if (item.id == 1) {
                            return (
                                <div key={index}>
                                    <Link to={`/details/${item.id}`}>
                                        <img src={item.img} alt="not found" className="topPostBig" />
                                    </Link>
                                    <div>
                                    
                                        <Link to={`/details/${item.id}`}>
                                        <h2>{item.title}</h2>
                                        <p>{item.cat}</p>
                                        </Link>
                                        {/* <h2 className="number">{++count}</h2> */}
                                    </div>
                                </div>
                            )
                        } else if (item.id >= 2 && item.id <= 10) {
                            return (
                                <div key={index} className="topPostContent">
                                    
                                    <Link to={`/details/${item.id}`}>
                                    <img src={item.img} alt="not found" className="HometopPostImg" />
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

                </div>
            </div>
            <h1 className="line">Latest Story</h1>
            <div className="storyContainer">
            {data.filter((data)=>data.cat==="Home" && data.id%2==0).map((item,index)=>{
                return(
                    <div div key={index} className="story">
                    <p>{item.cont}</p>
                    </div>
                )
            })}
            </div>
        </>
    )
}
export default Home