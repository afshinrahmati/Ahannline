module.exports = new class Admin  {
    // ********* one **********
    async  One(req,res,next){
        try {
            
            return res.render('../view/Index.ejs')
        } catch (error) {
            console.log(error +"  "+ "<ROTER One>");
        }
    };

// ********* Two **********
async  Two(req,res,next){
    try {
        
        return res.render('../view/recursive.ejs')
    } catch (error) {
        console.log(error +"  "+ "<ROTER One>");
    }
};

}