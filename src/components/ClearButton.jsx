import "../stylesheet/ClearButton.css"

const ClearButton = (props) => {
  return (
    <div className="clear-button" onClick={() => props.clearInput()}>
      {props.children}
    </div>
  )
}

export default ClearButton
