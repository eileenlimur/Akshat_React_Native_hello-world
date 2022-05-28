import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Welcome = (props) => {
    const [ text, setText ] = useState('');
    return (
        <div>
            <input
                id="text"
                onChange={e => setText(e.target.value)}
                value={text}
            />
            <br/>
            Welcome {text}
        </div>
    )
}

Welcome.propTypes = {
    text: PropTypes.string
}

export default Welcome;