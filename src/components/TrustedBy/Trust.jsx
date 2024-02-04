import { imageLinks } from '../../constants'
import './Trust.css'
const Trust = () => {
    return (
        <div className="trust section_padding">
            <div className="trust-sec">
                <h1 className='trust-header'>Trusted By</h1>
                <div className='trust-sec-2'>
                    {imageLinks.map((item, index) => {
                        return (
                            <div key={index} >
                                <img src={item} alt="trust" className="trust-item" />
                            </div>
                        )
                    })}

                </div>
            </div>


        </div>
    )
}

export default Trust
