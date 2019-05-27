import React from 'react'
import ListItem from './ListItem'
import './bucketlist.css'

const Bucketlist = (props) => {


  const flags = (evt) => {
    return props.bucketlist.map((element, index) => {
      return <ListItem visit={props.visit} info={element} key={index} />;

    });
  }

  return(
    <div className='flag-grid'>
      {flags()}
    </div>
  )
}

export default Bucketlist
