const joi = require ("joi")

const validator = (req,res,next) => {

    console.log.apply(req.body.NuevoUsuario)
    const Schema = joi.object({
        firstName:joi.string().max(10).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"el nombre debe contener al menos 3 (tres) caracteres",
            "string.empty":"el campo no puede estar vacío"
        }),

        lastName:joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({
            "string.min":"el apellido debe contener al menos 3 (tres) caracteres",
            "string.empty":"el campo no puede estar vacío",
        }),

        email:joi.string().email({minDomainSegments:2}).required().messages({
            "string.email":"formato de correo no valido",
        }),

        password:joi.string().max(30).min(6).trim().pattern(new RegExp("[a-zA-Z0-9]")).required().messages({
            "string.min":"la contraseña debe contener al menos 6 (seis) caracteres",
            "string.pattern":"la contraseña debe ser alfanumérica",
        }),

    })

    const validation = Schema.validate(req.body.NuevoUsuario,{abortEarly:false})

    if (validation.error) {
        return res.json({success:"falseVAL",response:validation})
    }

    next()

}

module.exports = validator