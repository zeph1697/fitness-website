import { Link } from "react-router-dom"
import Image from '../images/main_header.png'

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores tempora culpa blanditiis unde nesciunt, distinctio sapiente? Quas, perspiciatis mollitia.
          </p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="header-right">
          <div className="header-circle"></div>
          <div className="header-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header