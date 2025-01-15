//This function is used to catch and handle asynchronous errors in Express routes
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
