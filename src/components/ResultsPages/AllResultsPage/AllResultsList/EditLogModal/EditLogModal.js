import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

//page to do: 
/// fill input field default values 
/// get multiplier through props on initial get and use that to multiply and get calc, don't allow them to change modes
  
function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
      };
    }

const styles = theme => ({
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 7,
    },
  });

  const mapStoreToProps = reduxStore => ({
    reduxStore,
});


class EditLogModal extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modifiedInput: {
                id: this.props.id,
                mode: this.props.mode,
                co2_emis: this.props.co2_emis,
                destination: this.props.destination,
                date: this.props.date,
                miles: this.props.miles,
                notes: this.props.notes,
                total_emis: this.props.total_emis,
                person_id: this.props.person_id,
            }, 
            open: false
        }  
    }

    componentDidMount () {
        this.passId(); 
    }

    passId = () => {
        const id = this.state.modifiedInput.id;
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      handleOnChange = (propName) => {
        return event => {
            this.setState({
                modifiedInput:{
                    ...this.state.modifiedInput,    
                    [propName]: event.target.value
                    }
                })
            };
        }

    updateInputs = () => {
        const body = this.state.modifiedInput;
        const action = {type: 'UPDATE_INPUTS', payload: body};
        this.props.dispatch(action);
        this.calcEmis();
        }

    calcEmis () {
        const multiplier = this.state.modifiedInput.co2_emis;
        const miles = this.state.modifiedInput.miles
        const newCalc = ( multiplier * miles); 
        this.state.modifiedInput.total_emis = newCalc;
        this.updateLog();
        this.handleClose();
        window.location.reload();
    };
        

    updateLog = () => {
        const body = this.state.modifiedInput;
        this.props.dispatch({type: 'UPDATE_LOG', payload: body});
        this.props.dispatch({type: 'GET_TOTAL'});
    }

    render() {
        const { classes } = this.props;
        return (
            
            <div>
                <p onClick = {() => this.handleOpen(this.props.id)}>edit</p>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <Typography variant="title" id="modal-title">
                            modify your log entry
                        </Typography>
                            <form onSubmit={() => this.updateInputs(this.props.id)}> 
                            <label>mode
                            <input 
                                    defaultValue= {this.props.mode}
                                    value={this.state.modifiedInput.mode}
                                    type='text' 
                                    onChange={this.handleOnChange('mode')} 
                                    />
                            </label>   
                            <br />
                            <label>emission multiplier
                            <input 
                                    defaultValue= {this.props.co2_emis}
                                    // value={this.state.modifiedInput.notes}
                                    type='text' 
                                    onChange={this.handleOnChange('co2_emis')} 
                                    />
                            </label>
                            <label>destination
                            <input 
                                    
                                    defaultValue= {this.props.destination}
                                    // value={this.state.modifiedInput.destination}
                                    type='text' 
                                    onChange={this.handleOnChange('destination')} 
                                    />
                            </label>
                            <br />
                            <label>date
                            <input 
                                    defaultValue= {this.props.date.split('T')[0]}
                                    // value={this.state.modifiedInput.date}
                                    type='text' 
                                    onChange={this.handleOnChange('date')} 
                                    />
                            </label>
                            <br />
                            <label>miles
                            <input 
                                    defaultValue= {this.props.miles}
                                    // value={this.state.modifiedInput.miles}
                                    type='number' 
                                    step="any" 
                                    onChange={this.handleOnChange('miles')} 
                                    />
                            </label>
                            <br />
                            <label>notes
                            <input 
                                    // value={this.state.modifiedInput.notes}
                                    defaultValue= {this.props.notes}
                                    type='text' 
                                    onChange={this.handleOnChange('notes')} 
                                    />
                            </label>
                            <label>
                            <br />
                            <input type='submit' value='SAVE'/>
                            <br />
                            </label>
                        </form>
                    </div>
                </Modal>
            </div>
        );
    }
}

EditLogModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const EditLogModalWrapped = withStyles(styles)(EditLogModal);

export default connect(mapStoreToProps)(EditLogModalWrapped);
