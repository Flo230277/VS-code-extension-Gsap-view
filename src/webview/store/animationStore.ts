import React, { createContext, useContext, useReducer } from "react";

/** Types génériques pour les layers, keyframes et propriétés **/
export type Keyframe = {
  time: number;
  props: Record<string, any>;
};
export type Layer = {
  id: string;
  name: string;
  type: "div" | "img" | "text";
  keyframes: Keyframe[];
};

type AnimationState = {
  layers: Layer[];
  selectedLayerId?: string;
  selectedKeyframe?: {layerId: string; time: number};
  playing: boolean;
};

const initialState: AnimationState = {
  layers: [],
  playing: false,
};

type AnimationAction =
  | { type: "ADD_LAYER"; layer: Layer }
  | { type: "SELECT_LAYER"; id: string }
  | { type: "ADD_KEYFRAME"; layerId: string; keyframe: Keyframe }
  | { type: "UPDATE_KEYFRAME"; layerId: string; time: number; props: Record<string, any> }
  | { type: "DELETE_KEYFRAME"; layerId: string; time: number }
  | { type: "PLAY" }
  | { type: "PAUSE" };

function reducer(state: AnimationState, action: AnimationAction): AnimationState {
  switch (action.type) {
    case "ADD_LAYER":
      return { ...state, layers: [...state.layers, action.layer] };
    case "SELECT_LAYER":
      return { ...state, selectedLayerId: action.id };
    case "ADD_KEYFRAME":
      return {
        ...state,
        layers: state.layers.map(l =>
          l.id === action.layerId
            ? { ...l, keyframes: [...l.keyframes, action.keyframe].sort((a, b) => a.time - b.time) }
            : l
        ),
      };
    case "UPDATE_KEYFRAME":
      return {
        ...state,
        layers: state.layers.map(l =>
          l.id === action.layerId
            ? {
                ...l,
                keyframes: l.keyframes.map(kf =>
                  kf.time === action.time ? { ...kf, props: { ...kf.props, ...action.props } } : kf
                ),
              }
            : l
        ),
      };
    case "DELETE_KEYFRAME":
      return {
        ...state,
        layers: state.layers.map(l =>
          l.id === action.layerId
            ? { ...l, keyframes: l.keyframes.filter(kf => kf.time !== action.time) }
            : l
        ),
      };
    case "PLAY":
      return { ...state, playing: true };
    case "PAUSE":
      return { ...state, playing: false };
    default:
      return state;
  }
}

const AnimationStoreContext = createContext<[AnimationState, React.Dispatch<AnimationAction>]>([initialState, () => null]);
export const AnimationStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const reducerValue = useReducer(reducer, initialState);
  return (
    <AnimationStoreContext.Provider value={reducerValue}>
      {children}
    </AnimationStoreContext.Provider>
  );
};

export const useAnimationStore = () => useContext(AnimationStoreContext);
