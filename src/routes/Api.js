let express = require('express');
let router = express.Router();

let {addSale,getSale,TotalSaleRevenue,QuantityByProduct,TopProducts,AverageSalePrice,HighestQuantitySoldOneDay,RevenueByMonth} = require('../controller/Salescontroller');
let {addSalary,departmentSalaryExpense} = require('../controller/SalaryController');

router.post('/add', addSale);
router.get('/get', getSale);
router.get('/total-revenue', TotalSaleRevenue);
router.get('/quantity-by-product', QuantityByProduct);
router.get('/top-products', TopProducts);
router.get('/average-price', AverageSalePrice);
router.get('/revenue-by-month', RevenueByMonth);
router.get('/highest-quantity-sold', HighestQuantitySoldOneDay);



router.post('/add-salary', addSalary);
router.get('/department-salary-expense', departmentSalaryExpense);


module.exports = router;