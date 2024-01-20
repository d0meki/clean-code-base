import express, { Router } from 'express';
import path from 'path';

interface ServerConfig{
    port:number;
    public_path?:string;
    routes:Router;
}
export class Server{
    private app = express();
    private readonly port:number;
    private readonly publicPath?:string;
    private readonly routes: Router
    constructor(config:ServerConfig){
        const { port, public_path = 'public',routes } = config;
        this.port = port;
        this.publicPath = public_path;
        this.routes = routes
    }
    async start(){
//* Middlewares
this.app.use(express.json());
this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded


//* Public Folder
this.app.use(express.static( this.publicPath! ));


//* Routes
this.app.use(this.routes);

/* this.app.get('/api/todos',(req,res)=>{
    res.json([
        {message:'Hello World',createdAt: new Date()},
        {message:'Hello World 1',createdAt: null},
        {message:'Hello World 2',createdAt: new Date()},
    ])
}) */




//*SPA
this.app.get('*',(req,res)=>{
    const indexPath = path.join(__dirname + `../../../${this.publicPath}/index.html`);
    res.sendFile(indexPath);
})



        this.app.listen(this.port,()=>{
            console.log(`Listening on port ${this.port}`);
            
        })

    }
}