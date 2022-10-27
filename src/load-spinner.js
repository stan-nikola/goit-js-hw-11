import { Spinner } from 'spin.js';

const opts = {
  top: '25%', // Top position relative to parent
  left: '180px', // Left position relative to parent

  lines: 16, // The number of lines to draw
  length: 27, // The length of each line
  width: 10, // The line thickness
  radius: 29, // The radius of the inner circle
  scale: 0.5, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1.2, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-shrink', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#5a69dd', // CSS color or array of colors
  fadeColor: '', // CSS color or array of colors

  shadow: 'box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spinner = new Spinner(opts);

function spinStart(insertRef) {
  spinner.spin(insertRef);
}
function spinStop() {
  spinner.stop();
}
export default {
  spinStart,
  spinStop,
};
