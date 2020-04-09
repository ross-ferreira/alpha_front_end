import { connect } from 'react-redux';
import FooterGame from './FooterGame';
import { increment } from '../../../../data/actions/actions';


const mapDispatchToProps = (dispatch) => {

    return {
        handleIncrement: () => {
            dispatch(increment())
        }
    }
}

export default connect(null, mapDispatchToProps)(FooterGame);