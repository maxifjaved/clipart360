import {
  EDITOR_EDIT_SCRIPT,
  EDITOR_START_PLAYER,
  EDITOR_STOP_PLAYER,

  EDITOR_ENTER_VR,
  EDITOR_ENTERED_VR,
  EDITOR_EXITED_VR,

  EDITOR_SHOW_MODAL,

  EDITOR_CLEARED,

  EDITOR_SAVING_STARTED,
  EDITOR_SAVING_FINISHED,

  EDITOR_THEME_CHANGED,

  EDITOR_TRANSFORM_MODE_CHANGED,
  EDITOR_TRANSFORM_SNAP_CHANGED,
  EDITOR_TRANSFORM_SPACE_CHANGED,
  EDITOR_RENDERER_CHANGED,

  EDITOR_SCENE_BACKGROUND_CHANGED,
  EDITOR_SCENE_FOG_CHANGED,
  EDITOR_SCENE_GRAPH_CHANGED,

  EDITOR_CAMERA_CHANGED,

  EDITOR_GEOMETRY_CHANGED,

  EDITOR_OBJECT_SELECTED,
  EDITOR_OBJECT_FOCUSED,

  EDITOR_OBJECT_ADDED,
  EDITOR_OBJECT_CHANGED,
  EDITOR_OBJECT_REMOVED,

  EDITOR_HELPER_ADDED,
  EDITOR_HELPER_REMOVED,

  EDITOR_MATERIAL_CHANGED,

  EDITOR_SCRIPT_ADDED,
  EDITOR_SCRIPT_CHANGED,
  EDITOR_SCRIPT_REMOVED,

  EDITOR_WINDOW_RESIZE,

  EDITOR_SHOW_GRID_CHANGED,
  EDITOR_REFRESH_SIDEBAR_OBJECT_3D,
  EDITOR_HISTORY_CHANGED,
  EDITOR_REFRESH_SCRIPT_EDITOR
} from '../constants'

const signals = (state, action) => {
  switch(action.type) {
    case EDITOR_EDIT_SCRIPT:
      return Object.assign({}, state, {scriptData: action.scriptData});
    case EDITOR_START_PLAYER:
      return Object.assign({}, state, {
        startPlayer: true,
        stopPlayer: false
      });
    case EDITOR_STOP_PLAYER:
      return Object.assign({}, state, {
        startPlayer: false,
        stopPlayer: true
      });
    case EDITOR_ENTER_VR:
      return Object.assign({}, state, {
        enterVR: true,
        enteredVR: false,
        exitedVR: false
      });
    case EDITOR_ENTERED_VR:
      return Object.assign({}, state, {
        enterVR: false,
        enteredVR: true,
        exitedVR: false
      });
    case EDITOR_EXITED_VR:
      return Object.assign({}, state, {
        enterVR: false,
        enteredVR: false,
        exitedVR: true
      });
    case EDITOR_SHOW_MODAL:
      return Object.assign({}, state, {
        modalContent: action.modalContent
      });
    case EDITOR_CLEARED:
      return Object.assign({}, state, {
        modalContent: action.modalContent
      });
    default:
      return state
  }
};

export default signals