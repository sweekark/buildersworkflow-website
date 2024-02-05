import { homeText } from '../../constants'
import './Home.css'
const Home = () => {
    return (
        <div className='home section_padding'>
            <div className='home-sec1'>
                <h1 className='home-header'>
                Get 160% ROI from staff productivity gains
just by reducing paperwork  <br />
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
