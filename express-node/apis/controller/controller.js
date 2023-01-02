const { Console } = require("console");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const id = uuidv4();
const getController = (req, res) => {
  const data = fs.readFileSync("data.json", "utf-8");

  res.send(data);
};
const postController = (req, res) => {
  try {
    const temp = req.body;
    const temp2 = { ...temp, id };

    const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    data.push(temp2);

    fs.writeFileSync("data.json", JSON.stringify(data));
    const savedData = fs.readFileSync("data.json", "utf-8");
    res.send(savedData);
    return true;
  } catch (e) {
    fs.writeFile("data.json", JSON.stringify([]), (err) => {
      if (!err) {
        console.log("done");
      } else {
        console.log("not done");
      }
    });
  }
};
const deleteController = (req, res) => {
  // console.log(req.params);
  const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  const idArray = data.map((demo) => demo.id);
  const Index = idArray.indexOf(req.params.id);
  // console.log("idIndex", Index);
  if (Index === -1) {
    console.log("id not found");
    return;
  }
  data.splice(Index, 1);
  console.log("dataaaaa", data);
  fs.writeFileSync("data.json", JSON.stringify(data));
  const oldData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  // console.log("oldData", oldData);
  res.send(oldData);
};
const putController = (req, res) => {
  const temp = req.body;
  const oldData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  console.log(oldData);
  const idArray = oldData.map((d) => d.id);
  const Index = idArray.indexOf(req.params.id);
  oldData[Index] = temp;
  fs.writeFileSync("data.json", JSON.stringify(oldData));
  res.send("hello");
};
module.exports = {
  getController,
  postController,
  deleteController,
  putController,
};
