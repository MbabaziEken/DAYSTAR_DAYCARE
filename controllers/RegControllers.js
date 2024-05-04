//Import models
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
    if(req.body != null){
        console.log(req.body)
    try {
        console.log(typeof req.body.Babyname);
        const baby = await Babbies.findOne({name:req.body.Babyname});
        console.log(baby);
        if(!baby){
            const newbaby = new Babbies({
             name: req.body.Babyname,
             gender: req.body.gender,
             age: req.body.Age,
             Favorites: req.body.Favorites,
             HealthStatus: req.body.HealthStatus,
             ParentsContact: req.body.ParentsContact,
             ParentsName: req.body.ParentsName,
             NextOfKin: req.body.NextOfKin,
             IdNo: req.body.IdNo,
             Allergies: req.body.Allergies,

            });
            await newbaby.save();
            next();
        }else{
            res.json({message:"baby already exists"});
        }
    } catch (error) {
        res.json({message:"failed to register baby",error:error});

    }
    }else{
        res.status(400).json({message:"request body is empty"});
    }
};

