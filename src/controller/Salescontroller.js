let SaleModel = require('../models/SalesModel');

exports.addSale = async (req, res) => {
    try{
        let sale = new SaleModel(req.body);
        let result = await sale.save();
        res.status(200).json({message : "Sale added successfully" , result});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.getSale = async (req, res) => {
    try {
        let result = await SaleModel.find();
        res.status(200).json({message : "Sale fetched successfully" , result});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.TotalSaleRevenue = async (req, res) => {
    try{
        let result = await SaleModel.aggregate([
            {
                $group : {
                    _id : null,
                    total : {$sum : "$price"}
                }
            }
        ]);
        res.status(200).json({message : "Total Sale Revenue fetched successfully" , result});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}




exports.QuantityByProduct = async (req, res) => {
    try{

        let result = await SaleModel.aggregate([
            {
                $group : {
                    _id : "$Product",
                    total : {$sum : "$quantity"}
                }
            }
        ]);
        res.status(200).json({message : "Quantity By Product fetched successfully" , result});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.TopProducts = async (req, res) => {
    try{
        let result = await SaleModel.aggregate([
            {
                $group : {
                    _id : "$Product",
                    total : {$sum : "$quantity"}
                }
            },
            {
                $sort : {total : -1}
            },
            {
                $limit : 5
            }
        ]);
        res.status(200).json({message : "Top Products fetched successfully" , result});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }

}


exports.AverageSalePrice = async (req, res) => {
    try{

        let result = await SaleModel.aggregate([
            {
                $group : {
                    _id : null,
                    total : {$avg : "$price"}
                }
            }
        ]);
        res.status(200).json({message : "Average Sale Price fetched successfully" , result});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.RevenueByMonth = async (req, res) => {
    try{

        let result = await SaleModel.aggregate([
            {
                $group : {
                    _id : {$month : "$createdAt"},
                    total : {$sum : "$price"}
                }
            }
        ]);
        res.status(200).json({message : "Revenue By Month fetched successfully" , result});
    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

exports.HighestQuantitySoldOneDay = async (req, res) => {
    try{

            let result = await SaleModel.aggregate([
                {
                    $group : {
                        _id : "$product",
                        maxQuantity : {$max : "$quantity"}
                    }
                },
                {
                    $sort: { maxQuantity: -1 },
                },
                {
                    $limit: 1,
                },
            ]);
            res.status(200).json({message : "Highest Quantity Sold One Day fetched successfully" , result});

    }
    catch(err){
        res.status(500).json({message : err.message});
    }
}

