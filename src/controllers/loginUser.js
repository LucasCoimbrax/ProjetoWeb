module.exports = {
    async loginUser(req, res){
        res.render('../views/loginUser')
    },
    
    async confererUser(req, res){

        const login = req.body;

        console.log(req.body)

        try{
            const edv = 12341234;
            const dateBirth = 01012000;

            if(edv !== login.edv || dateBirth !== login.dateBirth){
                throw new Error("401 - Unauthorized")
            }

            res.render('../views/perfilUser')
        }catch(err){
            res.send(err)
        }
    }
}