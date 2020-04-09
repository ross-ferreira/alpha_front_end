import initialState from '../../data/initialState';


const counterReducer = state => ({...state, counter: state.counter + 1});

      // counter < names.length-1 ? counter + 1 : counter * 0
  
  const scoreReducer = state => {
    return {
      ...state,
      score: state.score + 1,
    }
  }

  const setImages = (state,action) => {
    return {
      ...state,
      images: action.images,
      loaded:true,

    }
  }

  export default (state, action) => {

        switch (action.type) {
            case "INCREMENT_COUNTER": return counterReducer(state);
            case "INCREMENT_SCORE": return scoreReducer(state);
            case "SET_IMAGES": return setImages(state,action);
            case "RESET": return {
              ...initialState,
              images: state.images,
              loaded: true
            };
  
        default: return state;
        }
  };

 
