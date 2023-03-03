import Sub_Header from '../../components/Sub_Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Sub_Header title='About Us' image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti facilis sed quidem earum necessitatibus totam tempora dicta, eaque repudiandae possimus doloribus excepturi cupiditate. Ea veritatis omnis tempora natus! Doloremque, accusamus.
    </Sub_Header>

    <section className="about_story">
      <div className="container about_story-container">
        <div className="about_section-image">
          <img src={StoryImage} alt="Our Story Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, adipisci. Modi iste incidunt vel vitae consectetur consequatur. Alias nemo id iusto enim facilis excepturi vel quos. Quisquam, quos tempora, ea quod eos id, quo dolores amet modi assumenda corporis excepturi earum suscipit hic adipisci et quibusdam odio praesentium? Similique, reprehenderit!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, impedit rem nemo consequuntur beatae doloremque praesentium cumque. Cumque, animi enim.
          </p>
        </div>
      </div>
    </section>

    <section className="about_vision">
      <div className="container about_vision-container">
        <div className="about_section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, adipisci. Modi iste incidunt vel vitae consectetur consequatur. Alias nemo id iusto enim facilis excepturi vel quos. Quisquam, quos tempora, ea quod eos id, quo dolores amet modi assumenda corporis excepturi earum suscipit hic adipisci et quibusdam odio praesentium? Similique, reprehenderit!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, impedit rem nemo consequuntur beatae doloremque praesentium cumque. Cumque, animi enim.
          </p>
        </div>
        <div className="about_section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className="about_mission">
      <div className="container about_mission-container">
        <div className="about_section-image">
          <img src={MissionImage} alt="Our Mission Image" />
        </div>
        <div className="about_section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, adipisci. Modi iste incidunt vel vitae consectetur consequatur. Alias nemo id iusto enim facilis excepturi vel quos. Quisquam, quos tempora, ea quod eos id, quo dolores amet modi assumenda corporis excepturi earum suscipit hic adipisci et quibusdam odio praesentium? Similique, reprehenderit!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, impedit rem nemo consequuntur beatae doloremque praesentium cumque. Cumque, animi enim.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About