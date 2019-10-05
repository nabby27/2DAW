import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Wellcome to my node API' });
});

export default router;
