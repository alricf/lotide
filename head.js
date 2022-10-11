// FUNCTION IMPLEMENTATION
const head = function(arg) {
  if (arg.length === 0) {
    return undefined;
  } else {
    return arg[0];
  }
};

module.exports = head;