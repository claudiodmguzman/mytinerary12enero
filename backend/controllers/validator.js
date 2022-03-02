const joi = require ("joi")

const validator = (req,res,next) => {

    console.log.apply(req.body.NuevoUsuario)
    const Schema = joi.object({
        firstName:joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"Nombre: el nombre debe contener al menos 3 (tres) caracteres",
            "string.empty":"Nombre: el campo no puede estar vacío"
        }),

        lastName:joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"Apellido: el apellido debe contener al menos 3 (tres) caracteres",
            "string.empty":"Apellido: el campo no puede estar vacío",
        }),

        email:joi.string().email({minDomainSegments:2}).required().messages({
            "string.email":"Correo: formato de correo no valido",
            "string.empty":"Correo: el campo no puede estar vacío",
        }),

        password:joi.string().max(30).min(6).trim().pattern(new RegExp("[a-zA-Z]&&[0-9]")).required().messages({
            "string.min":"Contraseña: la contraseña debe contener al menos 6 (seis) caracteres",
            "string.pattern":"Contraseña: la contraseña debe ser alfanumérica",
        }),

    })

    const validation = Schema.validate(req.body.NuevoUsuario,{abortEarly:false})

    if (validation.error) {
        return res.json({success:"falseVAL",response:validation})
    }

    next()

}

module.exports = validator