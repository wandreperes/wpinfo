import WebSocket from 'ws'
import { Router, Request, Response } from 'express'

function onError(ws: WebSocket, err: Error) {
  console.error(`onError: ${err.message}`)
}

function onMessage(ws: WebSocket, data: WebSocket.Data) {
  console.log(`onMessage: ${data}`)
  ws.send(`recebido!`)
}

function onConnection(ws: WebSocket, req: Request) {
  ws.on('message', data => onMessage(ws, data))
  ws.on('error', error => onError(ws, error))
  console.log(`onConnection`)
}

export default (server: any) => {
  const wss = new WebSocket.Server({
    server,
  })

  wss.on('connection', onConnection)

  console.log(`App Web Socket Server is running!`)
  return wss
}
