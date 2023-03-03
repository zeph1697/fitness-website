import Sub_Header from '../../components/Sub_Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Sub_Header title='Get In Touch' image={HeaderImage}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nulla atque ab tempora. Unde, eligendi!
    </Sub_Header>

    <section className="contact">
      <div className="container contact_container">
        <div className="contact_wrapper">
          <a href="mailto:leodavincii97@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="https://m.me/leodavincii97" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://web.whatsapp.com" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact