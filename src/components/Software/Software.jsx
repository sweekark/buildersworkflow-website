import { awardImg, partImg, softwareData } from "../../constants"
import { SolutionCard } from "../Services/ServiceCard"
import "./Software.css"
const Software = () => {
    return (
        <div className="software section_padding">
            <h1 className="software-header">It’s the software your team would actually want to use</h1>
            <p className="software-text">Most digital transformation projects in construction companies fail because the software doesn’t match the needs of your team. With Steer, you won’t have that problem!</p>
            <div className="software-sec">
                {softwareData.map((item, index) => (
                    <SolutionCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
                ))}
            </div>

        </div>
    )
}

export const Partners = () => {
    return (
        <div className="partners section_padding">
            <h1 className="partners-header">Our Strategic Partners</h1>
            <div className="partners-sec">
                {partImg.map((item, index) => (
                    <img src={item} alt="partner" className="partner-item" key={index} />
                ))}
            </div>
        </div>
    )
}

export const Awards = () => {
    return (
        <div className="awards section_padding">
            <h1 className="awards-header">Awards and Recognitions</h1>
            <div className="awards-sec">
                {awardImg.map((item, index) => (
                    <img src={item} alt="award" className={index%2==0 ? "award-item" : "award-item2"} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Software
