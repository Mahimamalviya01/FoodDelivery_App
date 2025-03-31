const getAll = async (req, resp) => {
    try {
      console.log(global.food_items, global.foodCategory);
      resp.send([global.food_items, global.foodCategory]);
    } catch (error) {
      console.log(error.message);
      resp.send("server error");
    }
  };
  module.exports = { getAll };
  