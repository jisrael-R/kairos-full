import Logo from '../images/Logos/490-KairosLogo FINAL.png'
import '../index.css'
const Error = () =>{
    return <section className='error-page'>
        <div className="error-title error">
            <h2>Oops...Something went Wrong</h2>
            <h4>This Page Does Not Exist</h4>
            <h1>404</h1>
        </div>
        <div className="vertical vert-color"></div>
        <div className="logo error">
            <img src={Logo} alt="logo" width={'330px'} />
        </div>
    </section>
}

export default Error;