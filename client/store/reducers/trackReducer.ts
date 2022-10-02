import { TrackAction, TrackActionTypes, TracksState } from "../../types/track";

const initialState: TracksState = {
  tracks: [],
  error: ''
};

export const trackReducer = (state= initialState, action: TrackAction): TracksState => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS:
      return {error: '', tracks: action.payload}
    case TrackActionTypes.FETCH_TRACKS_ERROR:
      return {...state, error: action.payload}

    default:
      return state;
  }
};