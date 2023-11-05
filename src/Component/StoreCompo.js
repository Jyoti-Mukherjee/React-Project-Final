import React, { createContext, useState } from "react";
export const Store = createContext();
function StoreCompo(props){
    const [data,setData] = useState([
        {
        id:"1",
        cat:"Home",
        title :"Technology",
        img :"https://tse2.mm.bing.net/th?id=OIP.JQP912OvEIck9rlJc9_FygHaFj&pid=Api&P=0&h=180",
        cont :"",
        },
        {
        id:"2",
        cat : "Home",
        title : "Bollywood",
        img :"https://www.cinejosh.com/newsimg/newsmainimg/pathaan-collections_b_2701230914.jpg",
        cont :"Pathaan is a 2023 Indian Hindi-language action thriller film directed by Siddharth Anand and written by Shridhar Raghavan."
       },
       {
        id:"3",
        cat : "Home",
        title : "Hollywood",
        img :"https://1.bp.blogspot.com/-3pk40BzChvY/Xr5GPNTRuDI/AAAAAAAAAy0/j7VQnZ453DkeQaMuxPD3i_7i219SAG_4gCLcBGAsYHQ/w1200-h630-p-k-no-nu/91STOoJjaoL._SL1500_.jpg",
        cont :"Jason Statham, Sylvester Stallone’s Expend4bles to release in Indian theatres on this date Hollywood powerhouse duo, Jason Statham and Sylvester Stallone, bring explosive action to India in Expend4bles."
       },
       {
        id:"4",
        cat : "Home",
        title :"Technology" ,
        img : "https://tse3.mm.bing.net/th?id=OIP.7KXbdcsH9BKcYhKmd8hymAHaEu&pid=Api&P=0&h=180",
        cont :"Technological advancements have led to significant changes in society. The earliest known technology is the stone tool."
       },
       {
        id:"5",
        cat :"Home",
        title:"Fitness",
        img:"https://tse1.mm.bing.net/th?id=OIP.9gHmoAOOYsS6utBc11nPmgHaE8&pid=Api&P=0&h=180",
        cont:"Fitness is defined as the quality or state of being fit and healthy.."
       },
       {
        id:"6",
        cat:"Home",
        title:"Food",
        img:"https://tse3.mm.bing.net/th?id=OIP.Bv_heeoUuZArrgeWz2kq5AHaGb&pid=Api&P=0&h=180",
        cont:"Food is any substance consumed to provide nutritional support and energy to an organism."
       },
       {
        id:"7",
        cat:"Home",
        title:"Darjeeling",
        img:"https://tse4.mm.bing.net/th?id=OIP.prsETpZ8OPmty3Hx7cqr8gHaEo&pid=Api&P=0&h=180",
        cont :"Darjeeling, Bengali Nepali is a town and municipality in the northernmost region of the Indian state of West Bengal."
       },
       {
        id:"8",
        cat:"Home",
        title:"Eco park",
        img:"https://tse2.mm.bing.net/th?id=OIP.wtr-k5Qdo-GUATaSSCT_9gHaE8&pid=Api&P=0&h=180",
        cont:"The park has been divided into three broad parts, ecological zones like wetlands, grasslands, and urban forest."
       },
       {
        id:"9",
        cat:"Home",
        title:"Dakshineswar",
        img:"https://tse4.mm.bing.net/th?id=OIP.T9tgQdQtMjK7I2gn-FoBAAHaEz&pid=Api&P=0&h=180",
        cont:"The three villages that predated Calcutta were ruled by the Nawab of Bengal under Mughal suzerainty.."
       },
       {
        id:"10",
        cat:"Home",
        title:"Hazar duari",
        img:"https://tse3.mm.bing.net/th?id=OIP.fz7qAQ6GAv055BLYSEv4XQHaE8&pid=Api&P=0&h=180",
        cont:"Hazarduari Palace, earlier known as the Bara Kothi,[1] is located in the campus of Kila Nizamat in Murshidabad."
       },
       {
        id:"11",
        cat:"Bollywood",
        title:"Khufiya",
        img:"https://karnatakastateopenuniversity.in/wp-content/uploads/2022/08/Khufiya-Movie-2022.jpg",
        cont:"Khufiya is a 2023 Hindi-language spy thriller film written, produced and directed by Vishal Bhardwaj.."
       },
       {
        id:"12",
        cat:"Bollywood",
        title:"OM Shanti OM",
        img:"https://tse1.mm.bing.net/th?id=OIP.sAy5C9443UgdXeKgrBuzoQHaFj&pid=Api&P=0&h=180",
        cont:"Om Shanti Om is a 2007 Indian Hindi-language masala film written and directed by Farah Khan."
       },
       {
        id:"13",
        cat:"Bollywood",
        title:"Gadar 2",
        img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghvmc5fDZ7euAfbsDxF_2N1aa6T6F5i9_1TAUHf18HtKDuZpCh5dI7VOjnTdf2kMJ1IpSfIpbMmGcxNi49n_6jiKvjYlhtzMbtLPFfcXScqZHXE9tbGZ_G4d_Aa-UK47y-P5QGHGZEA_dakJrDFXuN7hfHHZF2gzQ4wqFcjIYGmxpjMDiIcIe0A82u/s1600/gadar-2-sunny-deol-movie.jpg",
        cont:"Gadar 2 (transl. Rebellion 2; subtitled onscreen with The Katha Continues) is a 2023 Indian Hindi-language."
       },
       {
        id:"14",
        cat:"Bollywood",
        title:"Aspirants",
        img:"https://i1.wp.com/katmoviehd.us/wp-content/uploads/2019/09/the-Family-man-full-movie-katmoviehd.us_.jpg?fit=960%2C1440&ssl=1.",
        cont:"The Family Man is an Indian Hindi-language spy thriller streaming television series created by"
       },
       {
        id:"15",
        cat:"Bollywood",
        title:"Family Man",
        img:"https://s3images.zee5.com/wp-content/uploads/sites/7/2020/08/Iconic-Bollywood-Films.jpg",
        cont:"Bollywood films, a significant part of Indian cinema, are known for their vibrant storytelling, catchy music, and elaborate dance sequences. They often encompass various genres, from romance and drama to action and comedy, offering a rich cultural experience. Bollywood movies have a dedicated global fan base, making them a vital component of world cinema."
       },
       {
        id:"16",
        cat:"Bollywood",
        title:"Asur 2",
        img:"https://www.91-cdn.com/hub/wp-content/uploads/2023/06/asur-season-2.jpg",
        cont:"Asur is an Indian Hindi-language psychological crime thriller streaming television series.."
       },
       {
        id:"17",
        cat:"Bollywood",
        title:"Sacred Games",
        img:"https://tse3.mm.bing.net/th?id=OIP.gsk3DFIzbjiLHYZP2pzgyQHaHa&pid=Api&P=0&h=180",
        cont:"Sacred Games began development after Netflix vice-president Erik Barmack asked Motwane in 2014.."
       },
       {
        id:"18",
        cat:"Bollywood",
        title:"Kota Factory",
        img:"https://tse2.mm.bing.net/th?id=OIP.-9pOkO1jOSoS26Sw2T7kAgHaD4&pid=Api&P=0&h=180",
        cont:"Kota Factory is an Indian Hindi-language streaming television series created by Saurabh Khanna.."
       },
       {
        id:"19",
        cat:"Bollywood",
        title:"Jawan",
        img:"https://i.pinimg.com/originals/66/50/8a/66508a1184926e54cf6d781f0a307f3d.jpg",
        cont:"Jawan is a 2023 Indian Hindi-language action thriller film co-written and directed by Atlee in his Hindi film debut."
        },
       {
        id:"20",
        cat:"Technology",
        title:"DTDC",
        img:"https://4.bp.blogspot.com/_JUw2aRvPUwc/S_ZPyroBYqI/AAAAAAAASfA/D1vQiyQiKHw/s1600/dtdc_inner.jpg",
        cont:"In 2012, DTDC acquired a 52 percent stake in Eurostar Express of Eurostar Group in the UAE."
       },
       {
        id:"21",
        cat:"Technology",
        title:"Smart watch Apple",
        img:"https://i5.walmartimages.com/asr/4951cfe5-b949-435c-a4aa-8aa918d0752b.5b459bbce6b3752b5875a697023e03c8.jpeg",
        cont:"A smartwatch is a wearable computer in the form of a watch; modern smartwatches provide a local touchscreen interface for daily use.."
       },
       {
        id:"22",
        cat:"Technology",
        title:"Android",
        img:"https://tse2.mm.bing.net/th?id=OIP.f_QGqXSL1K-MtHFQYs8GBwHaEc&pid=Api&P=0&h=180",
        cont:"Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software.."
       },
       {
        id:"23",
        cat:"Technology",
        title:"Wearable plant sensors",
        img:"https://assets.weforum.org/editor/JB4YvBHaIVuTTgSimBNFgJj0sL51AIG2gmYqpCkZwhQ.jpg",
        cont:"Global food production will need to increase by 70% by 2050 to feed a growing world population, according to the United Nations Food and Agriculture Organization."
       },
       {
        id:"24",
        cat:"Technology",
        title:"Puff of breath",
        img:"https://assets.weforum.org/editor/wqDjwFB_eSFMFsP6O8u_-9hdNkYFoo5TBp01UzU3bTQ.PNG",
        cont:"Soon, testing for disease could be as simple for patients as exhaling. New breath sensors can diagnose diseases."
       },
       {
        id:"25",
        cat:"Technology",
        title:"Energy from wireless signals",
        img:"https://assets.weforum.org/editor/NaEPlqq9u85yRMMyIHUu8CwLvZ342mK_A4_nIILhX4s.PNG",
        cont:"The Internet of Things (IoT) is comprised of billions of electronic devices leveraging Internet connectivity for some aspect of their functionality.."
       },
       {
        id:"26",
        cat:"Technology",
        title:"Space technology",
        img:"https://tse2.mm.bing.net/th?id=OIP.mcpXDbeuZQwvFcSNbZlPAgHaFj&pid=Api&P=0&h=180",
        cont:"The Sustainable Development Goals (SDGs, or Global Goals), unanimously adopted at the United Nations in 2015."
       },
       {
        id:"27",
        cat:"Technology",
        title:"Revolutionizing Communication",
        img:"https://47billion.com/wp-content/uploads/2020/08/5G-image.jpeg",
        cont:"In telecommunications, 5G is the fifth-generation technology standard for cellular networks."
       },
       {
        id:"28",
        cat:"Technology",
        title:"Shaping Tomorrow: The 3D Printing Revolution",
        img:"https://assets.weforum.org/topic/image/responsive_medium_webp_NsFNrB4YnvB-OKrhANJjqInsRahbpTIZurHxhAFlBhk.webp",
        cont:"3D printing, also known as additive manufacturing, is a technology that constructs three-dimensional objects layer by layer from digital designs. It's used in a wide range of applications, from prototyping and custom manufacturing to aerospace and healthcare. 3D printing has the potential to revolutionize production processes and shape the future of manufacturing."
       },
       {
        id:"29",
        cat:"Technology",
        title:"Google Pixel",
        img:"https://www.ephotozine.com/articles/google-pixel-5-smartphone-review-35063/images/highres-PA220065_1603364236.jpg",
        cont:"Google Pixel is a brand of portable consumer electronic devices developed by Google that run either ChromeOS or the Android operating system."
       },
       {
        id:"30",
        cat:"Hollywood",
        title:"Aliens",
        img:"https://www.cornettfiction.com/wp-content/uploads/2020/01/aliens-poster-1986.jpg",
        cont:"Alien is a science fiction horror and action media franchise centered on the original film series which depicts warrant officer Ellen Ripley."
       },
       {
        id:"31",
        cat:"Hollywood",
        title:"Extraction 2",
        img:"https://occ-0-2483-3647.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcWzBOWXFMhnbCu1y1k--N2HnY32X4XQVKAJIu4W7HRnEeh7FGCN_WmkMq2g39yzwNqSnaz0elw5CBDvoRKwUSdJnWd4Pw3ucNj0fVrpNgwEF-cG0HpAPVTOPvnWunZzMxiR.jpg?r=a98",
        cont:"Back from the brink of death, highly skilled commando Tyler Rake takes on another dangerous mission.."
      },
      {
        id:"32",
        cat:"Hollywood",
        title:"Bullet Train",
        img:"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUL4rwuABC0b4u-DmKC6UZkNhTZW8dwbRN_TZV1EziEn5RT49S6nhPo8t0lE5igZgnyI6fcT1YBh1Zd6l2SP3V9kVYupyYumPMbEq95zbmebRio0HuiWS6AEfEQ2MDcLc5EjRMNd-CZApYWBsQGxdH14SKFJMmojxr4CaJxDZzDdpuzAzwidt-UFzVTLh0iojZ3ttlVzkw8Kjn0Yd9wRqZO-4jkueuFaQGyiWyWnN3mrREJwGoyuLSk9kTiTjHMiCF0UZ0hAmntO958QOovYBzzddQ.jpg?r=397",
        cont:"Five assassins board a Japanese bullet train bound for Kyoto and come to discover that their seemingly separate missions are mysteriously linked.."
      },
      {
        id:"33",
        cat:"Hollywood",
        title:"Scary Movie",
        img:"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZbL7oJSB3s-X7g-bJVTB52xFs9dU-VE3-GY_Iw6EM4dIOIZIQeSBucdlaMBiXIqQGqRbEFG9ROLm4VBB74_lkbUtINQtgDAFTo.jpg?r=612",
        cont:"A group of hapless teens harboring a guilty secret are stalked by an equally bumbling serial killer in this parody of 1990s horror movies.."
      },
      {
        id:"34",
        cat:"Hollywood",
        title:"Raging Bull",
        img:"https://upload.wikimedia.org/wikipedia/en/5/5f/Raging_Bull_poster.jpg",
        cont:"Raging Bull is a 1980 biographical sports drama film directed by Martin Scorsese123.."
      },
      {
        id:"35",
        cat:"Hollywood",
        title:"Heart of stone",
        img:"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXl6zodS7Jvuc-mOjBB-xuOzDoaAtHqFxQKeQ9Mg-1eikrdhgoTJyoRf7CnyleEQmeAIcc8H2nUYcbxumUMC5EAo8iACzWirylqRmYi0mDSXQdPSnJMHD-8tuaiQDJ89YmBd.jpg?r=545",
        cont:"An intelligence operative for a shadowy global peacekeeping agency races to stop a hacker weapon.."
      },
      {
        id:"36",
        cat:"Hollywood",
        title:"The Amazing Spiderman",
        img:"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSpKnpVbtFfCx55J_L8MeRwcv4fAH6fNMx7jc8T4ULKxdj0ZbmPQOqDMvSCX_xoGzrTRM5RX_NuZvEImfqb4zWWdZRTM28ThkfU.jpg?r=e56",
        cont:"Andrew Garfield returns as Peter Parker, a teenager embracing his role as superhero.."
      },
      {
        id:"37",
        cat:"Hollywood",
        title:"Rebel Without a Cause",
        img:"https://m.media-amazon.com/images/M/MV5BYzk2ZDU3MmMtMDBmMi00YWIyLTkxM2YtZjg3MzgyOTAzZjg0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX140_CR0,0,140,209_AL_.jpg",
        cont:"Rebel Without a Cause is a 1955 American coming-of-age romantic drama film about emotionally confused suburban.."
      },
      {
        id:"38",
        cat:"Hollywood",
        title:"Wanted",
        img:"https://occ-0-2483-3646.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbnLVLbmZvfzbr5XjE9z4lniQA5Od9JF9AR6YTDfjRQI_gujq7yTPw89Z8SpHLTpOas-fo-_DMW5EmN_GXzdrXKD8IUpknf9Yuo.jpg?r=0de",
        cont:"After discovering his murdered father belonged to a secret guild of assassins, average guy Wesley hones his innate killer instincts and turns avenger.."
      },
      {
        id:"39",
        cat:"Hollywood",
        title:"Citizen Kane",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/330px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg",
        cont:"Citizen Kane is a 1941 American drama film directed by, produced by.."
      },

       {
        id:"40",
        cat:"Fitness",
        title:"Yoga in Modern Life",
        img:"https://tse2.explicit.bing.net/th?id=OIP.LDFRpma64PSWwFrSLdZ8aAHaE7&pid=Api&P=0&h=180",
        cont:"Derived from the Sankrit word",
       },
       {
        id:"41",
        cat:"Fitness",
        title:"Pull Reducer Training Bands",
        img:"https://m.media-amazon.com/images/I/41B40V8NoTL.jpg",
        cont:"This unique product can tone your back muscles, reduce belly fat.."
       },
       {
        id:"42",
        cat:"Fitness",
        title:"Cardio Gym Equipment",
        img:"https://www.health.com/thmb/KxeZT96kXigD11fjaV0iYPO2hMs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Health-GettyImages-1336700535-9ef0d2f2dc8d466aa7346d1bfd79aa98.jpg",
        cont:"The “fat-burning zone” recommendations on commercial cardio equipment."
       },
       {
        id:"43",
        cat:"Fitness",
        title:"Hand Gripper",
        img:"https://m.media-amazon.com/images/I/71wUPlxplFL._SX679_.jpg",
        cont:"ADJUSTABLE RESISTANCE: - You can easily and quickly adjust the resistance from 22lbs (10kg) to 88lbs (40kg) according to your need.."
       },
       {
        id:"44",
        cat:"Fitness",
        title:"Loop Hip Band",
        img:"https://m.media-amazon.com/images/I/61lwLaSu4fL._SX679_.jpg",
        cont:"RESISTANCE BAND THAT ARE EASY TO USE : Made from latex."
       },
       {
        id:"45",
        cat:"Fitness",
        title:"Gym Ball",
        img:"https://m.media-amazon.com/images/I/41hMH-9e7FL._SX300_SY300_QL70_FMwebp_.jpg",
        cont:"ANTI BURST & SLOW DEFLATION - Our exercise ball is made with the fine structure which makes it deflate slowly and burst resistant if punctured.."
       },
       {
        id:"46",
        cat:"Fitness",
        title:"Jump Rope",
        img:"https://plus.unsplash.com/premium_photo-1664299555455-3e0a5542d3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEp1bXAlMjBSb3BlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
        cont:"Jumping rope requires very simple equipment: a jump rope, good shoes, and an impact-reducing surface. Most jump ropes cost under US$10 and can be found in sporting goods and many general merchandise stores. Jumping rope is a relatively high-impact fitness activity.."
       },
       {
        id:"47",
        cat:"Fitness",
        title:"Workout Gloves",
        img:"https://tse3.explicit.bing.net/th?id=OIP.1vWJ40OIVYb2FC6a8ahRCwHaHa&pid=Api&P=0&h=180",
        cont:"The most common type of weightlifting gloves. They may provide more stability and support to the wrists and reduce calluses.."
       },
       {
        id:"48",
        cat:"Fitness",
        title:"Spiral Yoga",
        img:"https://blobs.ekhartyoga.com/mediauploads/api.ekhartyoga.com/uploads/media/video/0_6ngtzoer/thumb.jpg",
        cont:"Welcome to “Metamorphosis: The Spiral.” A yoga exercise plan or yoga class plan including a mix of ancient and modern yoga practice.."
       },
       {
        id:"49",
        cat:"Fitness",
        title:"ab roller wheel",
        img:"https://cdn.shopify.com/s/files/1/1214/8590/articles/side-view-portrait-beautiful-young-woman_1024x1024.jpg?v=1563794837",
        cont:"Although there are many different forms of exercises for the roller wheel, the resistance of the band as well as the number of repetitions are the main variables used to.."
       },
       {
        id:"50",
        cat:"Food",
        title:"English breakfast",
        img:"https://tse3.mm.bing.net/th?id=OIP.pCUqXq9I7CWoC0ZipWYrtAHaE7&pid=Api&P=0&h=180",
        cont:"A full breakfast is a substantial cooked breakfast meal, often served in Great Britain"
       },
       {
        id:"51",
        cat:"Food",
        title:"Yorkshire Patties",
        img:"https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09103300/Rectangle-1Yorkshire-Lamb-Patties-1.png?resize=515%2C291&ssl=1",
        cont:"It will make your mouth swim to eat Yorkshire Lamb Patties, a delectable delicacy. Your weekend celebrations will be enjoyable as a result.."
       },
       {
        id:"52",
        cat:"Food",
        title:"Prawn Pie",
        img:"https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09103534/Rectangle-1Prawn-Pie.png?resize=515%2C291&ssl=1",
        cont:"South Mediterranean cuisine is a celebration of sun-kissed flavors. It combines the richness of olive oil, the tang of citrus, and the aromatic embrace of herbs like oregano and thyme. From Greek moussaka to Turkish kebabs, it's a delightful journey through a region renowned for its fresh ingredients and vibrant culinary heritage"
       },
       {
        id:"53",
        cat:"Food",
        title:"Crispy Rings",
        img:"https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09104037/Rectangle-1Crispy-Calamari-Rings.png?resize=515%2C291&ssl=1",
        cont:"The most popular seafood in the entire globe is crispy calamari rings. Anyone can cook this tasty snack because it is simple to do so.."
       },
       {
        id:"54",
        cat:"Food",
        title:"Stuffed Potatoes",
        img:"https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09104347/Rectangle-1Stuffed-Jacket-Potatoes.png?resize=515%2C291&ssl=1",
        cont:"The cheesy, spicy, and deliciousness of stuffed jacket potatoes. It is consumed as a robust lunch or a light meal.."
       },
       {
        id:"55",
        cat:"Food",
        title:"Pizza",
        img:"https://tse4.mm.bing.net/th?id=OIP.aJNxkymaTLFYmiptBKkQyQHaFE&pid=Api&P=0&h=180",
        cont:"Pizza is a dish of Italian origin consisting of a usually round.."
       },
       {
        id:"56",
        cat:"Food",
        title:"Lamb Salad",
        img:"https://i0.wp.com/img.paisawapas.com/ovz3vew9pw/2023/01/09104735/Rectangle-1Roast-Lamb-Salad.png?resize=515%2C291&ssl=1",
        cont:"Wintertime is the perfect time to enjoy a warm, nutritious salad like roast lamb.."
       },
       {
        id:"57",
        cat:"Food",
        title:"Noodles",
        img:"https://kirbiecravings.com/wp-content/uploads/2018/02/garlic-noodles-61.jpg",
        cont:"Noodles are a type of food made from unleavened dough which is either rolled flat and cut.."
       },
       {
        id:"58",
        cat:"Food",
        title:"Butter Chicken",
        img:"https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg",
        cont:"A dish of tender chicken in a mildly spiced tomato sauce. It’s traditionally cooked in a tandoor (a cylindrical clay oven). The gravy is always made first by boiling down fresh tomato, garlic, and cardamom into a bright red pulp..."
       },
       {
        id:"59",
        cat:"Food",
        title:"Masala Dosa",
        img:"https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347374/india-food-sambar/india-food-sambar-1120x732.jpg",
        cont:"The traditional southern Indian dish known as masala dosa is popular throughout the country, made from a batter of soaked rice and black lentils, which are ground into a paste and blended to"
       },

    ]
       )
    return(
        <>
        <Store.Provider value = {[data,setData]}>
            {props.children}
        </Store.Provider>
        </>
    )
}
export default StoreCompo