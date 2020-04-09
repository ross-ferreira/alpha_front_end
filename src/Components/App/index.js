import { connect } from 'react-redux';
import App from './App';
import {getData} from '../../data/actions/api'

const mapStateToProps = (state) => {
    
    return {
        loaded:state.loaded,
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        getData: () => { 
            dispatch (getData())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);