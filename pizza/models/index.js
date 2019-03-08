const orm = require('../config/ORM');

module.exports = pizza = {
	all: (cb) => {
		orm.selectAll("pizzas", cb)
	},
	create: (pizza_name , cb) => {
		orm.insertOne("pizzas", ["pizza_name", "devoured"], [pizza_name, true], cb);
	},
	update: (id, vals, cb) => {
	    condition = "id = " + id;
		orm.updateOne("pizzas", vals, condition, cb);
	}
}