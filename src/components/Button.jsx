import "../stylesheet/Button.css"

const Button = (props) => {

  const isOperator = value => {
    return isNaN(value) && (value !== ".") && (value !== " =")
  }

  return (
    <div 
      className={`button-container ${ isOperator(props.children) ? 'operator-background' : 'not-operator-background'}`}
      onClick={() => props.agregarInput(props.children)}
      >
      {props.children}
    </div>
  )
}

export default Button
//3517885110