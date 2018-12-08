const get500 = { message: "That data could not be retrieved" };
const post500 = { message: "That data could not be added" };
const projMissingInfo = { message: "Name or description missing" };
const actMissingInfo = { message: "Project ID, description, or notes missing" };

module.exports = {
  get500: get500,
  post500: post500,
  projMissingInfo: projMissingInfo,
  actMissingInfo: actMissingInfo
};
