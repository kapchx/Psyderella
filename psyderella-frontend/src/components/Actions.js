import React from 'react';
import Rewind from './actions/Rewind';
import Dislike from './actions/Dislike';
import Like from './actions/Like';
import Superlike from './actions/Superlike';

const Actions = ({person, modifyChoices}) => {
    return <div id="actions">
        <Rewind/>
        <Dislike
            userId={person.id}
            modifyChoices={modifyChoices}
        />
        <Like
            userId={person.id}
            modifyChoices={modifyChoices}
        />
        <Superlike
            userId={person.id}
            modifyChoices={modifyChoices}
        />
    </div>
}
export default Actions;