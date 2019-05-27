import  React from 'react'

const DDOption = (props) => {

  const getflag = `${props.flag.toLowerCase()} flag`
  console.log(props);
  return(
    <div className="item" data-value={props.flag.toLowerCase()} onClick={props.handleSubmit}>
      <i className={getflag}></i>
      {props.info}
    </div>
  )
}

export default DDOption
