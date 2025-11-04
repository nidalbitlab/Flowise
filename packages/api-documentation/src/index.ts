import express, { Request, Response, type RequestHandler } from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerDocs, swaggerExplorerOptions } from './configs/swagger.config'

const app = express()
const port = 6655

app.get('/', (req: Request, res: Response) => {
    res.redirect('/api-docs')
})

// Ensure types align with Express typings in TS: spread serve array and cast setup to RequestHandler
const swaggerServe = swaggerUi.serve as unknown as RequestHandler[]
const swaggerSetup = swaggerUi.setup(swaggerDocs, swaggerExplorerOptions) as unknown as RequestHandler
app.use('/api-docs', ...swaggerServe, swaggerSetup)

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Flowise API documentation server listening on port ${port}`)
})
