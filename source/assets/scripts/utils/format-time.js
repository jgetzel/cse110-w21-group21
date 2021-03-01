/**
 * Takes a number of seconds and formats it into a MM:SS format
 * @param {number} seconds 
 * @returns {string}
 */
function formatTime(seconds) {
  let s = seconds % 60;
  let sstr = "";
  if (s < 10) {
    sstr = "0" + s;
  } else {
    sstr = s;
  }
  let m = Math.floor(seconds / 60);
  let mstr = "";
  if (m < 10) {
    mstr = "0" + m;
  } else {
    mstr = m;
  }
  return mstr + ":" + sstr;
}
module.exports = { formatTime };