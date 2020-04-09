import { connect } from 'react-redux';
import HeaderGame from './HeaderGame';
import { increment } from '../../../data/actions/actions';


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        handleIncrement: () => { 
            dispatch (increment())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderGame);