import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PropTypes from 'prop-types';
import entries from './Data/NewsEntries'
import './Style/News.css'

export default function News() {
    return (
        <div id='newspage'>
            {entries.map(entry => (
                <Timeline
                    date={entry.date}
                    title={entry.title}
                    description={entry.description}/>
            ))}
        </div>
    )
}

function Timeline(props) {
    return(
       <VerticalTimeline
            lineColor={'black'}
            layout={'1-column-right'}>
        <VerticalTimelineElement
            date={props.date}
            iconStyle={{ background: 'rgb(0, 0, 0)'}}
            contentStyle={{background: 'rgb(208, 210, 214)'}}
            dateClassName='date'>
            <h3 className='vertical-timeline-element-title'>{props.title}</h3>
            <p>{props.description}</p>
        </VerticalTimelineElement>
    </VerticalTimeline> 
    )
}
