import { connect } from 'react-redux';
import CountDown from './CountDown';
import { increment } from '../../../data/actions/actions';

const mapStateToProps = (state) =>{

    return {
        counter: state.counter
    }

}


const mapDispatchToProps = (dispatch) => {

    return {
        timerExpired: () => {
            dispatch(increment())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountDown);
