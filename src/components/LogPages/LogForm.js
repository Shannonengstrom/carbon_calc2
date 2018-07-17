import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxStore => ({
    reduxStore,
});

class LogForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            newInput: {
                destination: '',
                date: '',
                miles: 0,
                notes: '',
                total_emis: 0,
                total_saved: 0, 
            }  
        }  
    }
            

    handleOnChange = (propName) => {
        return event => {
            console.log('event happened')
            this.setState({
                newInput:{
                    ...this.state.newInput,    
                    [propName]: event.target.value
                    }
                })
                console.log('state:', this.state);
            };
        }
        
      
        ///now addNewLog
    // sendInputsToRedux = () => {
    //     const co2 = this.props.reduxStore.logs.logListReducer.co2_emis_id;
    //     console.log(co2);
    //     const body = {...this.state, co2 };
    //     console.log(body);
    //     const action = {type: 'ADD_INPUTS', payload: body};
    //     this.props.dispatch(action);
    //     console.log(body);
    //     this.sendNewLogToServer();
    // }


    // componentDidMount() {
    //     const co2_emis_id = this.props.reduxStore.logs.logListReducer.co2_emis_id;
    //     console.log(co2_emis_id);
    //     this.state.newLog = {...this.state.newLog, co2_emis_id };
    // }
    

    calcEmis = () => {
        console.log();
        const multiplier = this.props.reduxStore.logs.logListReducer.co2_emis;
        console.log(multiplier);
        const miles = this.state.newInput.miles
        console.log(miles);
        const calcEmis = ( multiplier * miles); 
        const body = calcEmis;
        console.log(calcEmis);
        const action = {type: 'ADD_EMIS', payload: body};
        this.props.dispatch(action);
        console.log(action);
    };

    
    addNewInput = (event) => {
        event.preventDefault();
        // const co2 = this.props.reduxStore.logs.logListReducer.co2_emis_id;
        // console.log(co2);
        const body = this.state.newInput;
        console.log(body);
        const action = {type: 'ADD_INPUTS', payload: body};
        this.props.dispatch(action);
        console.log(action);
        this.postLog(); 
        this.calcEmis();
     }
        

  postLog = () => {
    const body = this.state;
    const store = this.props.reduxStore.logs.logListReducer
    console.log('in postLog', body, store);
    this.props.dispatch({type: 'POST_LOG', payload: 
            {body: body, co2_emis_id: store.co2_emis_id}
    })
    // this.setState({
    //     newInput: {
    //         destination: '',
    //         date: '',
    //         miles: '',
    //         notes: '',
    //     }
    // });
}




    render() {
        return (
            <div>
            <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewInput}>    
                    <label>destination
                    <input 
                            type='text' 
                            onChange={this.handleOnChange('destination')} />
                    </label>
                    <br />
                    <label>date
                    <input 
                            type='date' 
                            onChange={this.handleOnChange('date')} />
                    </label>
                    <br />
                    <label>miles
                    <input 
                            type='number' 
                            min="0" 
                            step="any" 
                            onChange={this.handleOnChange('miles')} />
                    </label>
                    <br />
                    <label>notes
                    <input 
                            type='text' 
                            onChange={this.handleOnChange('notes')} />
                    </label>
                    <br />
                    <input type='submit' value='ADD'/>
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(LogForm);
