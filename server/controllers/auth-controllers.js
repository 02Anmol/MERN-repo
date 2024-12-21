// In an Express.js application, a "controller" refers to a part of your cpde that is responsible for handling the application's logic. Controllers are typicallly used to process incomig request, intreact with models(data sources), and send responses back to clients. they help organise your application by seperating concerns and following the MVC (Model-View-Controller) desing pattern.


const home = async (requestAnimationFrame, res) => {
    try {
        res
            .status(200)
            .send("Hello World withh using router")
    }

    catch (error) {
        console.log(error)
    }
};

const register = async (req, res)=>{
    try{
        res.status(200).send("Welcome to registraion page using controllers");
    }
    catch(error){
        res.status(400).send("page not found")
    }
    
}

module.exports = {home, register}