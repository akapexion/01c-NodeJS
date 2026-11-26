const demoController = {
    homeLogic : (req, res) => {
        res.send("Home Screen");
    },

    apiRes : (req, res) => {
        res.send({
            id : 1,
            name : "Ali"
        });
    }
}

export default demoController;
// export { demoController, demoController1 }