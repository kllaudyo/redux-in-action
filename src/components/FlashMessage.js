import React from 'react';

const FlashMessage = props => (
    <div className="flash-error">
        {props.message}
    </div>
);

FlashMessage.defaultProps = {
    message: 'Ah error occurred'
};

export default FlashMessage;