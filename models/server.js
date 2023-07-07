const express = require('express')
const cors = require('cors')
const { socketController } = require('../sockets/controller.sockets')



class Server{

    constructor(){

        this.app    = express()
        this.port   = process.env.PORT
        this.server = require('http').createServer(this.app)
        this.io     = require('socket.io')(this.server)

        this.paths={}
        
        

        //Conectar a base de datos
        



        //middelwares
        this.middelwares()


        //rutas de mi app
        this.routes()

        //Sockets
        this.sockets()
    }

    
    middelwares(){
        //cors
        this.app.use( cors() )

        
        
        //directorio publico
        this.app.use( express.static('public'))
        //carga de archivos
        
    }
    routes() {

        // this.app.use(this.paths.auth,require('../routes/auth.route'))       
    }
    sockets(){
        this.io.on('connection',socketController)
    }
    listen(){
        this.server.listen(this.port,()=>{
            console.log(`Servidor corriendo en puerto ${this.port}`)
        })
    }

}

module.exports = Server