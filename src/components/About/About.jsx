import './About.css'

const About = () => {
    return (
        <div className='about section_padding'>
            <div className='about-sec-1'>
                <p className='about-text'>CONSTRUCTION MANAGEMENT SOFTWARE</p>
                <div>
                    <h1 className='about-header'>Grow Your Business Fast</h1>
                    <h1 className='about-header' style={{ color: "rgb(97, 156, 244)" }}>Without Losing Control</h1>

                </div>

                <p className='about-text-2'>Stay in control of key areas in your construction projects so you can protect profits & reputation</p>
                <div className='about-book'>
                    <div className='about-book-1'>Book a Meeting</div>

                </div>
            </div>
            <div className='about-sec-2'>
                <iframe className='iframe-about' width="100%" height="315" src="https://www.youtube.com/embed/BONic4GXWjQ?si=pg9PMrSEpnW3E32H" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>

        </div>
    )
}

export default About
