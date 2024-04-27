import "./WindowFrame.css"

const WindowFrame = ({children}) => {
  return (
    <div className="main_window_container">
      <div className="window_frame">
            <div className="close_btn"></div>
            <div className="minimize_btn"></div>
            <div className="maximize_btn"></div>
      </div>
      <div className="window_children">{children}</div>
    </div>
  )
}

export default WindowFrame