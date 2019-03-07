const mysql = require("mysql");
const inquirer = require(`inquirer`);
const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "123",
  database: "nbay"
});


module.exports = () => {
con.connect(error => {
  if (error) throw error;
  start();
});


// Makes the connction and selects the products
start = () => {
  con.query(`SELECT * FROM products`, (error, response) => {
    if (error) throw error;
    console.log(response);
    con.end();
  });
};

// Starts the whole system
start = () => {
  con.query(`SELECT * FROM products`, (error, response) => {
    if (error) throw error;
    for (let i = 0; i < response.length; i++) {

        // This is how we structure aour message 
        display = (str, value) => console.log(str + value) 

        // Our mssagee
        display("🕵️‍ Unique ID => ", response[i].item_id);
        display("🗳️ Product Name => ", response[i].item_name);
        display("💰 Value $", response[i].price.toFixed(1));
        display(`\n`, ``);
    }
    inquirer
      .prompt([
        {
          type: `input`,
          message: `🚀  Select a product buddy! `,
          name: `product`
        },
        {
          type: `input`,
          message: `Quantity? We have limited stock 😜`,
          name: `quantity`
        }
      ])
      .then((db) => {

        // We select the product from our products list with the item
        con.query(`SELECT * FROM products WHERE ?`, { item_id: db.product }, (error, response) => {
            if (error) throw error;

            // Guard function a
            if (parseInt(db.quantity) <= parseInt(response[0].item_stock)) {
              let new_Quantity = parseInt(response[0].item_stock) - parseInt(db.quantity);

              // Make a newe connectio update the stock quantity
              con.query(`UPDATE products SET ? WHERE ?`, [{ item_stock: new_Quantity }, { item_id: db.product }],
                function(error, response) {
                  if (error) throw error;
                }
              );

              // We send back the user the amount left in our sock and what the user paid for thte item
              con.query(`SELECT * FROM products WHERE ?`, { item_id: db.product }, (error, response) => {
                  if (error) throw error;

                  console.log(`\n ${response[0].item_stock} ${response[0].item_name} left.. grab another one \n`);
                  
                  console.log( `😶 Ohhh boy, you just paid =>  $${(parseInt(db.quantity) * parseFloat(response[0].price)
                    ).toFixed(1)} | for  =>  ${parseInt(db.quantity)} ${response[0].item_name}`
                  );

                  // Lets end this connection
                  con.end();
                }
                
              );
              return;
            } else {
              console.log(`Out of sock in this item... I am so sorry`);

                // Lets end this connection              
              con.end();
            }
          }
        );
      });
  });
}
}
