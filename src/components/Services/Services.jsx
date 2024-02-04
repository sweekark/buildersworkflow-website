import { cardData, solCardData } from '../../constants'
import './Service.css'
import ServiceCard, { SolutionCard } from './ServiceCard'
const Services = () => {
    return (
        <div className="services section_padding">
            <div className='service-sec'>
                <h1 className='service-header'>
                    How Steer helps with
                    growing construction business
                </h1>
                <div className='service-icons'>
                    {cardData.map((item, index) => {
                        return (
                            <ServiceCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
                        )
                    })}

                </div>

            </div>

        </div>
    )
}

export const Solution = () => {
    return (
        <div className='solution section_padding'>
            <h1 className='solution-header'>Flagship Solutions to Boost Visibility Across All Your Construction Projects</h1>
            <p>Different teams managing construction projects can use Steer in many ways and on any device - whether smart phone, tablet, or laptop</p>
            <div className='solution-cards'>
                {solCardData.map((item, index) => (
                    <SolutionCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
                ))}
            </div>

        </div>
    )
}


export default Services
