
const pizza = require("../models");
module.exports = (app) => {
  app.get("/", (res) => {
    pizza.all((result) => res.render("index", { pizzas: result.reverse() }));
  });

  app.get("/api/eat/:id", (req, res) =>  {
    const { id } = req.params;
    pizza.update(id, { devoured: true }, (result) => {
      pizza.all(() => res.redirect("/"))
    });
  });

  app.post("/api/add/", (req, res) =>  {
    const { name } = req.body;
    pizza.create(name, (result) => res.redirect("/"));
  });
};
