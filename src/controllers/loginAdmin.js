module.exports = {
    async loginAdmin(req, res){
        res.render('../views/loginAdmin')
    },

    async confererAdmin(req, res){
        const loginAdmin = req.body;

        try {
            const name = 'medico';
            const password = '12345';

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