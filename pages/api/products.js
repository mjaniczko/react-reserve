import products from '../../static/products.json'

export default (req, res) => {
  // console.log(req.method);
  res.status(200).json(products)
}