import express, { request, response } from 'express';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';
import ContatosController from './controllers/ContatosController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();
const contatosController = new ContatosController();

routes.get('/items', itemsController.index);

routes.get('/contatos/:id', contatosController.show);
routes.post('/contatos', contatosController.create);
routes.put('/contatos/:id', contatosController.update);
routes.delete('/contatos/:id', contatosController.delete);
routes.get('/contatos', contatosController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;