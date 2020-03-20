import { connect } from 'react-redux';
import Dialogs from './Dislogs';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from '../../redux/dialogs-reducer';


const mapStateToProps = state => ({ ...state.dialogsPage });

const mapDispathToProps = dispatch => {
  return {
    sendMessage: () => dispatch(sendMessageCreator()),
    updateNewMessageBody: text => dispatch(updateNewMessageBodyCreator(text))
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;
