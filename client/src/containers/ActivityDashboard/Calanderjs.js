import { Eventcalendar, getJson, setOptions } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

function Calanderjs() {

    const monthCal = React.useRef();
    const dayCal = React.useRef();
    const [myEvents, setEvents] = React.useState([]);

    React.useEffect(() => {
        getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
            setEvents(events);
        }, 'jsonp');
    }, []);
    
    const onPageChange = React.useCallback((event, inst) => {
        navigate(monthCal.current.instance, event.firstDay);
    }, []);
    
    const dateChange = React.useCallback((event, inst) => {
        navigate(dayCal.current.instance, event.date);
    }, []);
    
    const navigate = (inst, val) => {
        if (inst) {
            inst.navigate(val);
        }
    }
    
    const monthView = React.useMemo(() => {
        return {
            calendar: { popover: false, labels: false }
        };
    }, []);

    const dayView = React.useMemo(() => {
        return {
            agenda: { type: 'day' }
        };
    }, []);

    return (
        <div className="mbsc-grid md-demo-synchronized-views">
            <div className="mbsc-row mbsc-no-padding">
                <div className="mbsc-col-md-8 mbsc-col-12">
                    <Eventcalendar
                        ref={monthCal}
                        view={monthView}
                        data={myEvents}
                        onSelectedDateChange={dateChange}
                    />
                </div>
                <div className="mbsc-col-md-4 mbsc-col-12 md-col-right">
                    <Eventcalendar
                        ref={dayCal}
                        view={dayView}
                        data={myEvents}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
        </div>
    ); 
}

export default Calanderjs