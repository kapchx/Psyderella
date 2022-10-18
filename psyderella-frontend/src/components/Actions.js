import React from 'react';
import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';

const Actions = () => {
    return <div id="actions">
        <Rewind />
        <Dislike />
        <Like />
        <Superlike />
    </div>
}
export default Actions;