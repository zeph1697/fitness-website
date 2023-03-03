

const Sub_Header = ({title, image, children}) => {
  return (
    <header className="subheader">
      <div className="subheader_container">
        <div className="subheader_container-bg">
            <img src={image} alt="Header Background Image" />
        </div>
        <div className="subheader_content">
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
      </div>
    </header>
  )
}

export default Sub_Header