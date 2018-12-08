const get500 = { message: "That data could not be retrieved" };
const post500 = { message: "That data could not be added" };
const projMissingInfo = { message: "Name or description missing" };
const actMissingInfo = { message: "Project ID, description, or notes missing" };
const delete500 = { message: "That data could not be deleted" };
const put500 = { message: "That data could not be updated" };
const badID = { message: "That ID could not be found" };

module.exports = {
  get500: get500,
  post500: post500,
  projMissingInfo: projMissingInfo,
  actMissingInfo: actMissingInfo,
  delete500: delete500,
  put500: put500,
  badID: badID
};
