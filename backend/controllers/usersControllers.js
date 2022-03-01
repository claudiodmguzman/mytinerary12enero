const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")

const usersControllers = {

    nuevoUsuario: async (req,res) => {

        const {firstName, lastName, email, password} = req.body.NuevoUsuario // destructuring

        try {

            const usuarioExiste = await User.findOne({email})

            if (usuarioExiste) {
                res.json({sucess:false,response:"el usuario ya existe, realice el SignIn"})
            }

            else {
                const passwordHash = bcryptjs.hashSync(password,10)
                const NewUser = new User ({
                    firstName,
                    lastName,
                    email,
                    password:passwordHash
                })
                
                await NewUser.save()
                res.json({sucess:true,reposnse:"usuario creado exitosamente"})

            }

        }

        catch (error) {res.json({sucess:false,response:null,error:error})}

    }

}

module.exports = usersControllers