const models = require('../models');
const Orders = models.Orders;
const OrderItem = models.OrderProducts;
const Products = models.Products;
const Users = models.Users;


const getOrders = (req, res) => Orders.findAll({include: [{model: OrderItem, include: [Products]}, Users]
  .then(orders => res.send(orders))
});

const getOrdersById = (req, resp) => Orders.findByPk(req.params.id, {include: [{model: OrderItem, include: [Products]}]})
  .then(order => order ? res.send(order) : res.sendStatus(404)
  );

const postOrders = (req, res) => Orders.create(req.body , {include: [OrderItem]})
  .then(order => {
    res.status(201).send(order);
  });

const putOrders = (req, res) => { Orders.update({...req.body}, {where: {id: req.params.id}})
  .then(() => {
    Orders
      .findByPk(req.params.id)
      .then(order => res.send(order))
  });
};

const deleteOrders = (req, res) => {
  OrderItem.destroy({where: { orderId: req.params.id}});
  Orders.destroy({where: { id: req.params.id}})
    .then(() => res.sendStatus(200));    
}

module.exports = {
    getOrders,
    getOrdersById,
    postOrders,
    putOrders,
    deleteOrders
}