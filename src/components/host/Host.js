import React from 'react';

function Host(props) {
    return (
      <>
        <span className="name-host">{props.name}</span>
        <img
          className="photo-host"
          src={props.picture}
          alt="Propriétaire"
        />
      </>
    );
}

export default Host;