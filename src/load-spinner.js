import { Spinner } from 'spin.js';

var opts = {
  top: '25%', // Top position relative to parent
  left: '180px', // Left position relative to parent

  lines: 14, // The number of lines to draw
  length: 26, // The length of each line
  width: 10, // The line thickness
  radius: 33, // The radius of the inner circle
  scale: 0.35, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1.5, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#61668f', // CSS color or array of colors
  fadeColor: '', // CSS color or array of colors

  shadow: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spinner = new Spinner(opts);
function loadingStart(insertRef) {
  spinner.spin(insertRef);
}
function loadingStop() {
  spinner.stop();
}
export default {
  loadingStart,
  loadingStop,
};
