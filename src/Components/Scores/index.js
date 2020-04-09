import { connect } from 'react-redux';
import Scores from './Scores';


const mapStateToProps = (state) => {
    return {
        score: state.score
    }
}



export default connect(mapStateToProps)(Scores);