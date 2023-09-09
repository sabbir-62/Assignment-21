let SalaryModel = require('../models/SalaryExpenseModel');


exports.addSalary = async (req, res) => {
    try{
        let sale = new SalaryModel(req.body);
        let result = await sale.save();
        res.status(200).json({message : "Sale added successfully" , result});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}



exports.departmentSalaryExpense = async (req, res) => {
    try {
        let result = await SalaryModel.aggregate([
            {
                $group: {
                    _id: "$Department",
                    Name : {$first : "$Employee"},
                    total: { $sum: { $subtract: ["$Salary", "$Price"] } }
                }
            }
        ]);
        res.status(200).json({ message: "Department Salary Expense fetched successfully", result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

