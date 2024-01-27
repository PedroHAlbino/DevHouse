import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import routes from './routes';


class App {
    constructor() {
        this.server = express();

        mongoose.connect('mongodb+srv://root:senha123@cluster0.tvi4qjz.mongodb.net/devbook?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
       
       
        this.middlewares();
        this.routes();
        
    }

    middlewares() {

        this.server.use(cors());

        this.server.use(
            '/files',
            express.static(path.resolve(__dirname,'..', 'uploads'))
        );

        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }

    
}

export default new App().server;