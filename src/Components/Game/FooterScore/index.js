import { connect } from 'react-redux';
import FooterScores from './FooterScores';
import { gameReset } from '../../../data/actions/actions'


const mapDispatchToProps = (dispatch) => {
    
    return {
        handleIncrement: () => { 
            dispatch (gameReset())
        }
    }
}

export default connect(null, mapDispatchToProps)(FooterScores);