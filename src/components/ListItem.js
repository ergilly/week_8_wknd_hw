import  React from 'react'
import './bucketlist.css'

const ListItem = (props) => {

  const overlay = () => {
    if (props.info.visited === true) {
      return <img className='visited' src='./scratch.png' alt=''/>
    } else {
      return <div className='overlay'></div>
    }
  }


  return(

      <div onClick={() => {props.visit(props.info.name)}} className='flag-cont'>
        <img src={props.info.flag} alt={props.info.flag} className='flag'/>
        <div className='aspect'></div>
        {overlay()}
      </div>

  )
}

export default ListItem
