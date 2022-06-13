import { Button } from "@mui/material"
import { useState, useEffect } from "react"

interface LandingProps{
    BackgroundImage:string
    InfoText: string 
    Quote: string 
}
interface HotInterface{
    pic?:any
    description?:string
}

interface Reviews{
    name:string 
    date:string
    review:string
}

export const Landing = (props:LandingProps)=>{
    const [hottest, setHottest] = useState<HotInterface[]>()
    const [reviews, setReviews] = useState<Reviews[]>()
    useEffect (()=>{
        fetchHot().catch(e=>{setHottest([])})
        fetchReviews().catch(e=>{setReviews([])})
    })
    const fetchHot = async()=>{
        const res = await fetch("https://backend.retme.tech/hottest/landing")
        const data:HotInterface[] = await res.json()
        setHottest(data)
        return data
    }
    const fetchReviews = async()=>{
        const res = await fetch("https://backend.retme.tech/reviews/main")
        const data:Reviews[] = await res.json()
        setReviews(data)
        return data
    }
    return(
        <>
            <div className="mainHead">
                <header className="Main App Header">RetMe</header>
                <p>
                    View, buy and sell properties conveniently. Here at RetMe, we 
                    aspire to make your real estate experience smooth and exciting.
                    Ready to start your journey with us?
                </p>
                <div className="landingLogin">
                    <Button>Sign Up</Button>|<Button>Login</Button>
                </div>
            </div>
            <div className="about">
                <p>
                    RetMe is the best and latest real estate platform for all
                    your real estate needs. Find and sell land, houses, 
                    apartments, and even rent out the same at your desired rates.
                </p>
            </div>
            <div className="hottest">
                {
                    hottest?.map(
                        h=>(
                        <div className="hotProperty">
                            <div className="hotPic">
                                <img src={h.pic} alt="trending or new property"/>
                            </div>
                            <div className="hotDescription">
                                <p className="description">
                                    {h.description}
                                </p>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
            <div className="reviews">
                {
                    reviews?.map(
                        r=>(
                        <div className="review">
                            <div className="reviewHeader">
                                {r.name} {r.date}
                            </div>
                            <div className="reviewBody">
                                <p>{r.review}</p>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </>
    )
}