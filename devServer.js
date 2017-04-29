import Webpack from 'webpack'
import WebpackConfig from './webpack.babel'
import WebpackDevServer from 'webpack-dev-server'
import Koa from 'koa'
import config from './config'
import send from 'koa-send'

const {
  hotLoader: {
    host: hotHost,
    port: hotPort
  },
  host,
  port
} = config

const app = new Koa

app.use(async ctx => {
  await send(ctx, './public/index.html')
})

app.use(ctx => {
  ctx.response.status = 404
  ctx.response.body = {
    status: false,
    code: 404,
    msg: 'Not found'
  }
})

app.listen(port)

const devServer = new WebpackDevServer(Webpack(WebpackConfig), {
  noInfo: true,
  hot: true,
  stats: { color: true },
  proxy: { '*': `http://${host}:${port}` },
  publicPath: WebpackConfig.output.publicPath
})

devServer.listen(hotPort, hotHost, err => {
  if (err) {
    console.error(err) // eslint-disable-line no-console
  } else {
    console.log(`Hot Loader serves on http://${hotHost}:${hotPort}`) // eslint-disable-line no-console
  }
})
