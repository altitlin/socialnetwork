import { connect } from 'react-redux';
import Dialogs from './Dislogs';
import {
  sendMessage,
  updateNewMessageBody
} from '../../redux/dialogs-reducer';

const mapStateToProps = state => ({ ...state.dialogsPage });

const mapDispathToProps = {
  sendMessage,
  updateNewMessageBody
};

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;
