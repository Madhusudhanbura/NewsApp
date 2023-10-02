import React from 'react';
import loading from './loader.gif';

  const Spinner = () => {
  
    return (
      <div className='text-center my-3'>
        <img src={loading} alt="loader" />
      </div>
    )
  
}

export default Spinner