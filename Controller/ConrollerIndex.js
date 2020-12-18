module.exports = new class Admin  {
    
    async  One(req,res,next){
        try {
            
            return res.render('../view/Index.ejs')
        } catch (error) {
            console.log(error +"  "+ "<ROTER One>");
        }
    };




}