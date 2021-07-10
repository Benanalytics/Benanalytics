import React, { Component } from 'react';
import Gantt from './DhxGantt'
import Toolbar from './Toolbar';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';

const data = {
    data: [
        { id: 1, text: 'Task #1', start_date: '15-04-2019', duration: 3, progress: 0.6 },
        { id: 2, text: 'Task #2', start_date: '17-04-2020', duration: 5, progress: 0.8 },
        { id: 3, text: 'Task #2', start_date: '12-04-2019', duration: 2, progress: 0.1 },
        { id: 4, text: 'Task #2', start_date: '17-04-2015', duration: 5, progress: 0.3 },
        { id: 5, text: 'Task #2', start_date: '13-04-2021', duration: 7, progress: 0.6 },
        { id: 6, text: 'Task #2', start_date: '18-04-2021', duration: 7, progress: 0.4 },
        { id: 7, text: 'Task #2', start_date: '12-04-2017', duration: 1, progress: 0.2 },
        { id: 8, text: 'Task #2', start_date: '10-04-2016', duration: 6, progress: 0.8 }
    ],
    links: [
        { id: 1, source: 1, target: 2, type: '0' }
    ]
};
class GanttIndex extends Component {
    state = {
        currentZoom: 'Days'
    };

    handleZoomChange = (zoom) => {
        this.setState({
            currentZoom: zoom
        });
    }
    render() {
        const { currentZoom } = this.state;
        return (
            <div>
                DHX Gantt
                <div className="zoom-bar">
                    <Toolbar
                        zoom={currentZoom}
                        onZoomChange={this.handleZoomChange}
                    />
                </div>
                <div className="gantt-container">
                    <Gantt
                        tasks={data}
                        zoom={currentZoom}
                    />
                </div>
            </div>
        );
    }
}
export default GanttIndex;