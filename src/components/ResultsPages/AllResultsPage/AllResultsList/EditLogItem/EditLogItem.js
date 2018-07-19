import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import EditLogForm from './EditLogForm/EditLogForm';

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

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
      padding: theme.spacing.unit * 4,
    },
  });

  const mapStoreToProps = reduxStore => ({
    reduxStore,
});


class EditLogItem extends Component {

    state = {
        open: false
    };
    
    // handlePut = (id) => {
    //     this.props.dispatch({type: 'PUT_LOG', payload: id});
    // }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    

    render() {
        const { classes } = this.props;
        return (
            <div>
                {/* <Typography gutterBottom>Click to get the full Modal experience!</Typography> */}
                <p onClick={this.handleOpen}>edit</p>
                {/* <td onClick={() => {this.handlePut(this.props.reduxState.log.id)}}>edit</td>  */}
                {/* <td onClick={this.handleOpen}>edit</td> */}
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="title" id="modal-title">
                        edit your log
                    </Typography>
                        <EditLogForm />
                    <Typography variant="subheading" id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                        <EditLogItemWrapped />
                    </div>
                </Modal>
            </div>
        );
    }
}

EditLogItem.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const EditLogItemWrapped = withStyles(styles)(EditLogItem);

export default connect(mapStoreToProps)(EditLogItemWrapped);
