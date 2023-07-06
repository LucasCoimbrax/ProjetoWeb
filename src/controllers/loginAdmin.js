module.exports = {
    async loginAdmin(req, res){
        res.render('../views/loginAdmin')
    },

    async confererAdmin(req, res){
        const loginAdmin = req.body;

        try {
            const name = '12341234';
            const password = '2000-01-01';

            if (name != loginAdmin.name || password != loginAdmin.password) {
                throw new Error("401 - Unauthorized");
            }

            res.redirect("/perfilAdmin");
        } catch (e) {
            console.log(e);
            res.redirect("/");
        }
    }
}