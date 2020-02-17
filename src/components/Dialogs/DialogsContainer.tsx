import {addMessageCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: any) => {
    return {
        messagesPage: state.messagesPage
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (newMessageText: string) => {dispatch(addMessageCreator(newMessageText))}
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs);