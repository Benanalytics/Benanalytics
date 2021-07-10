import Naija from 'naija-locations';
import  {Component} from 'react'



export default class StateMap extends Component {
    constructor(props) {
        super(props);
        this.state = { states: '', local_gov: '' };
    }

    onSelect = e => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const state = Naija.states();
        const places = this.state.states && Naija.locals(this.state.states);

        return (
            <div>
                <select name="state" onChange={e => this.onSelect(e)}>
                    <option>Select State </option>
                    {state.map(state => {
                        return <option key={state.name}>{state.name}</option>;
                    })}
                </select>
                <select name="local_gov" onChange={e => this.onSelect(e)}>
                    <option>Select LG </option>
                    {places ? (
                        places.map(loc => {
                            return <option key={loc.name}>{loc.name}</option>;
                        })
                    ) : (
                        <option>Select LG </option>
                    )}
                </select>
            </div>
        );
    }
}