import { TrackAction, TrackActionTypes } from "../../types/track";
import { Dispatch } from "react";
import axios from "axios";

export const FetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const response = await axios.get('http://localhost:3001/tracks')
      dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
    } catch (error) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: "Произошла ошибка"
      });
    }
  };
};
