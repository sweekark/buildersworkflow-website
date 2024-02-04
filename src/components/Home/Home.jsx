import { homeText } from '../../constants'
import './Home.css'
const Home = () => {
    return (
        <div className='home section_padding'>
            <div className='home-sec1'>
                <h1 className='home-header'>
                    Steer is your partner<br /> for Unstoppable Growth
                </h1>
                <p className='home-text'>
                    {homeText}
                </p>

            </div>
            <div className='home-sec2'>
                <img className='home-img' src='https://assets-global.website-files.com/63ef1dedb6792e58267b1f52/652e526a11732b501cc9321a_Unstoppable-Growth-p-800.png' alt='photo' />

            </div>

        </div>
    )
}

export default Home
