const simpleController = {
    hello : (req, res) => {  // endpoint
    res.send("Hello World");
    },


    about : (req, res) => {  // endpoint
    res.send("About");
    },

    api : (req, res) => {  // endpoint
    res.send({
        id : 1,
        name : "Ali"
    });
    }
}

export default simpleController; 