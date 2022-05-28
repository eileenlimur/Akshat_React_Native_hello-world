import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
    return (
        <div>
            {props.text}
        </div>
    )
}
Message.propTypes = {
    text: PropTypes.string.isRequired
}
export default Message;