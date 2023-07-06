module.exports = {
    async loginAdmin(req, res){
        res.render('../views/loginAdmin')
    },

    async confererAdmin(req, res){
        const loginAdmin = req.body;

        try {
            const email = '12341234';
            const password = '2000-01-01';

            console.log(loginAdmin)

            if (email != loginAdmin.email || password != loginAdmin.password) {
                throw new Error("401 - Unauntho");
            }

            res.redirect("/perfilAdmin");
        } catch (e) {
            console.log(e);
            res.redirect("/");
        }
    }
}