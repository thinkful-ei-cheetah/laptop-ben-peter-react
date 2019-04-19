import React from 'react';
import Options from './Options'

export default function Features(props){

    const options = props.choices.map((item) => {
        const selectedClass = item.name === props.selected.name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;

        return <Options handleUpdate={props.onUpdate} choices={props.choices} featureClass={featureClass} selected={props.selected} item={item} />
    })
    
    

    return <div className="feature">
              <div className="feature__name">{props.part}</div>
              <ul className="feature__list">
                { options }
              </ul>
            </div>
} 