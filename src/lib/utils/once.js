const once = (fn, context) => {
  let result;
  let executed = false;

  return function(...args) {
    if (!executed) {
      result = fn.apply(context || this, args);
      executed = true;
    }

    return result;
  };
};

export default once;
