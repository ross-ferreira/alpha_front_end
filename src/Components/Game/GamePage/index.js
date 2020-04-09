import { connect } from 'react-redux';
import GamePage from './GamePage';
import { increment, incrementScore } from '../../../data/actions/actions';
const mapStateToProps = (state) => {
    
    return {
        srcImage: state.images[(state.counter -1)].url,
        style: {
            top: `${state.images[(state.counter -1)].top}%`,
            bottom: `${state.images[(state.counter -1)].bottom}%`,
            left: `${state.images[(state.counter -1)].left}%`,
            right: `${state.images[(state.counter -1)].right}%`,
            position: 'absolute',
            //  backgroundColor: 'red',
        },
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        handleIncrement: () => { 
            dispatch (increment())
            dispatch (incrementScore())
            
            
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GamePage);

