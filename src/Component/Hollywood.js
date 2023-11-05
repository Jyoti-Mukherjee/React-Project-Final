import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from 'react-router-dom'
function Hollywood() {
    const [data] = useContext(Store)
    console.log(data)
    return (
        <div className="bollyWoodContainer">
            <div>
                <h1 className="line">Hollywood</h1>


                {data.filter((data) => data.cat === "Hollywood").map((item, index) => {
                    console.log(item)

                    return (
                        <>

                            <div key={index} className="bollySet">
                                <Link to={`/details/${item.id}`}>

                                    <img src={item.img} alt="not found" className="BollyImage" />
                                </Link>
                                <div className="content">
                                <Link to={`/details/${item.id}`}>
                                    <h2>{item.title}</h2>
                                    <p>{item.cont.slice(0, 70)}</p>
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
                {data.filter((data) => data.cat === "Hollywood" && data.id % 2 == 0).map((item, index) => {
                    if (item.id == 30) {
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
                    } else if (item.id >= 31 && item.id <= 39) {
                        return (
                            <div key={index} className="topPostContent">
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.img} alt="not found" className="topPostImg" />
                                </Link>
                                <div className="topPostContent2">
                                    <div>
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
                <h1 className="addCenter">Advertisement</h1>
                <div className="add">
                    {/* <img className="addImg" src="https://i.pinimg.com/originals/9e/56/90/9e56908a2e00d4f23d9547f730878b90.jpg" /> */}
                </div>
                {/* <h1>Advertisement</h1>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2IZ1Yku50b-BiARKwl-stItuYHtPXy8haGMIlgGbhdGl1PLbTHR0N51y3JOP0vkQANI&usqp=CAU" width={"450"} height={"695"}/>  */}
            </div>
        </div>
    )

}
export default Hollywood