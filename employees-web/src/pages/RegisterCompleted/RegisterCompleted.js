import React from 'react';
import {useHistory} from 'react-router-dom';

import './styles.css'
import checked from '../../assets/check.gif'

export default function RegisterCompleted() {

  const history = useHistory();

  setTimeout(() => {
    history.push(`/home`)
  }, 1800);
  return(
    <div className="background">
      <div className="center">
        <img src={checked} alt="Check"/>
        </div>
    </div>
  )
}