const Admin = require("../models/Admin");
const Babbies = require("../models/Babbies");
const Sitter = require("../models/Sitter");

exports.registerAdmin = async (req,res,next) =>{
    console.log("registering admin in progress")
    console.log(req.body)
    Admin.register(
        new Admin({
         name:req.body.FullName,
         gender:req.body.gender,
         educationBg:req.body.EBG,
         workingExp:req.body.WorkingExprience,
         placeOfResidence:req.body.PlaceofResidence,
         email:req.body.Email,   
        }),req.body.Password,(err,admin) =>{
            if(err){
                res.json({message:err});
            }else {
                console.log("new admin registered")
                res.json({message:"new admin sucessfully registered"})
                next()
            }
        }
    )
};

exports.registerBabbies = async (req,res,next) =>{
    Admin.register(
        new Babbies({
         name:req.body.name,
         gender:req.body.gender,
         age:req.body.age,
         nextOfKin:req.body.nextOfKin,
         babbyNo:req.body.babbyNo,
         parentsName:req.body.parentsName, 
         parentsContact:req.body.parentsContact,
         healthStatus:req.body.healthStatus,

        })
    )
};