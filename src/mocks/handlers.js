import { rest } from 'msw';
import projects from './data/projects.json';

export const handlers = [
    rest.get('/dataprojects', (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(projects));
    })
]
