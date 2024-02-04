/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ icon, title, desc }) => {
    return (
        <div className="service-card">
            <div>
                <img className="service-card-img" src={icon} alt="icon" />
            </div>
            <h2 className="ser-card-header">{title}</h2>
            <p className="ser-card-para">{desc}</p>

        </div>
    )
}
export const SolutionCard =({icon, title, desc,link}) => {
    
    return (
        <div className="solution-card">
            <div>
                <img className="solution-card-img" src={icon} alt="icon" />
            </div>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className='solution-but' onClick={link}>Read More</div>

        </div>
    )
    }

export default ServiceCard
