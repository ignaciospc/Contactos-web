module.exports = {

    allContacts : (req, res) => {
        res.render("contacts/contacts");
    },
    createForm : (req,res) => {
        res.render("contacts/createContact")
    }

}