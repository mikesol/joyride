function arrayNeedsUint32(array) {
  for (let i = array.length - 1; i >= 0; --i) {
    if (array[i] > 65535)
      return true;
  }
  return false;
}
function createElementNS(name) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", name);
}
export {
  arrayNeedsUint32 as a,
  createElementNS as c
};
