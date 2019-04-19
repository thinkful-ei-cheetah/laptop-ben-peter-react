import React from 'react';

export default function Options(props){


    return <li className="feature__item">
                <div className={props.featureClass}
                onClick={ () => props.handleUpdate(props.part, props.item)}>
                    { props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(props.item.cost) })
                </div>
        </li>
} 

