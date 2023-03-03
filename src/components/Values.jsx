import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import Card from '../UI/Card'
import { values } from '../data'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <img src={Image} alt="" />
                </div>
            </div>
            <div className="values_right">
                <SectionHead icon={<GiCutDiamond/>} title='Values' />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolores dicta aut, dolorum nesciunt ipsa?
                </p>
                <div className="values_wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return <Card key={id} className='value'>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values