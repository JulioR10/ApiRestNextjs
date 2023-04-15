import { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items") //http://localhost:5000/items
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Lista de Items</h1>
        <ItemList items={items} />
      </div>
      <div>
        <h1>Introduce Items</h1>
        <ItemForm />
      </div>
    </>
  );
}

// AxiosError: Request failed with status code 400
//     at settle (file:///C:/Users/rodri/workspaceTypescript/apirest/front/node_modules/axios/lib/core/settle.js:19:12)
//     at IncomingMessage.handleStreamEnd (file:///C:/Users/rodri/workspaceTypescript/apirest/front/node_modules/axios/lib/adapters/http.js:556:11)
//     at IncomingMessage.emit (node:events:524:35)
//     at endReadableNT (node:internal/streams/readable:1359:12)
//     at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
//   code: 'ERR_BAD_REQUEST',
//   config: {
//     transitional: {
//       silentJSONParsing: true,
//       forcedJSONParsing: true,
//       clarifyTimeoutError: false
//     },
//     adapter: [ 'xhr', 'http' ],
//     transformRequest: [ [Function: transformRequest] ],
//     transformResponse: [ [Function: transformResponse] ],
//     timeout: 0,
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//     maxContentLength: -1,
//     maxBodyLength: -1,
//     env: { FormData: [Function], Blob: [class Blob] },
//     validateStatus: [Function: validateStatus],
//     headers: AxiosHeaders {
//       Accept: 'application/json, text/plain, */*',
//       'Content-Type': 'application/json',
//       'User-Agent': 'axios/1.3.5',
//       'Content-Length': '48',
//       'Accept-Encoding': 'gzip, compress, deflate, br'
//     },
//     method: 'post',
//     url: 'http://localhost:5000/items',
//     data: '{"name":"Julio","description":"otro tipo mas\\n"}'
//   },
//   request: <ref *1> ClientRequest {
//     _events: [Object: null prototype] {
//       abort: [Function (anonymous)],
//       aborted: [Function (anonymous)],
//       connect: [Function (anonymous)],
//       error: [Function (anonymous)],
//       socket: [Function (anonymous)],
//       timeout: [Function (anonymous)],
//       finish: [Function: requestOnFinish]
//     },
//     _eventsCount: 7,
//     _maxListeners: undefined,
//     outputData: [],
//     outputSize: 0,
//     writable: true,
//     destroyed: true,
//     _last: false,
//     chunkedEncoding: false,
//     shouldKeepAlive: true,
//     maxRequestsOnConnectionReached: false,
//     _defaultKeepAlive: true,
//     useChunkedEncodingByDefault: true,
//     sendDate: false,
//     _removedConnection: false,
//     _removedContLen: false,
//     _removedTE: false,
//     strictContentLength: false,
//     _contentLength: '48',
//     _hasBody: true,
//     _trailer: '',
//     finished: true,
//     _headerSent: true,
//     _closed: true,
//     socket: Socket {
//       connecting: false,
//       _hadError: false,
//       _parent: null,
//       _host: 'localhost',
//       _closeAfterHandlingError: false,
//       _readableState: [ReadableState],
//       _events: [Object: null prototype],
//       _eventsCount: 6,
//       _maxListeners: undefined,
//       _writableState: [WritableState],
//       allowHalfOpen: false,
//       _sockname: null,
//       _pendingData: null,
//       _pendingEncoding: '',
//       server: null,
//       _server: null,
//       timeout: 5000,
//       parser: null,
//       _httpMessage: null,
//       [Symbol(async_id_symbol)]: -1,
//       [Symbol(kHandle)]: [TCP],
//       [Symbol(lastWriteQueueSize)]: 0,
//       [Symbol(timeout)]: Timeout {
//         _idleTimeout: 5000,
//         _idlePrev: [TimersList],
//         _idleNext: [Timeout],
//         _idleStart: 667145,
//         _onTimeout: [Function: bound ],
//         _timerArgs: undefined,
//         _repeat: null,
//         _destroyed: false,
//         [Symbol(refed)]: false,
//         [Symbol(kHasPrimitive)]: false,
//         [Symbol(asyncId)]: 1372,
//         [Symbol(triggerId)]: 1370
//       },
//       [Symbol(kBuffer)]: null,
//       [Symbol(kBufferCb)]: null,
//       [Symbol(kBufferGen)]: null,
//       [Symbol(kCapture)]: false,
//       [Symbol(kSetNoDelay)]: true,
//       [Symbol(kSetKeepAlive)]: true,
//       [Symbol(kSetKeepAliveInitialDelay)]: 1,
//       [Symbol(kBytesRead)]: 0,
//       [Symbol(kBytesWritten)]: 0
//     },
//     _header: 'POST /items HTTP/1.1\r\n' +
//       'Accept: application/json, text/plain, */*\r\n' +
//       'Content-Type: application/json\r\n' +
//       'User-Agent: axios/1.3.5\r\n' +
//       'Content-Length: 48\r\n' +
//       'Accept-Encoding: gzip, compress, deflate, br\r\n' +
//       'Host: localhost:5000\r\n' +
//       'Connection: keep-alive\r\n' +
//       '\r\n',
//     _keepAliveTimeout: 0,
//     _onPendingData: [Function: nop],
//     agent: Agent {
//       _events: [Object: null prototype],
//       _eventsCount: 2,
//       _maxListeners: undefined,
//       defaultPort: 80,
//       protocol: 'http:',
//       options: [Object: null prototype],
//       requests: [Object: null prototype] {},
//       sockets: [Object: null prototype] {},
//       freeSockets: [Object: null prototype],
//       keepAliveMsecs: 1000,
//       keepAlive: true,
//       maxSockets: Infinity,
//       maxFreeSockets: 256,
//       scheduling: 'lifo',
//       maxTotalSockets: Infinity,
//       totalSocketCount: 2,
//       [Symbol(kCapture)]: false
//     },
//     socketPath: undefined,
//     method: 'POST',
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     joinDuplicateHeaders: undefined,
//     path: '/items',
//     _ended: true,
//     res: IncomingMessage {
//       _readableState: [ReadableState],
//       _events: [Object: null prototype],
//       _eventsCount: 4,
//       _maxListeners: undefined,
//       socket: null,
//       httpVersionMajor: 1,
//       httpVersionMinor: 1,
//       httpVersion: '1.1',
//       complete: true,
//       rawHeaders: [Array],
//       rawTrailers: [],
//       joinDuplicateHeaders: undefined,
//       aborted: false,
//       upgrade: false,
//       url: '',
//       method: null,
//       statusCode: 400,
//       statusMessage: 'Bad Request',
//       client: [Socket],
//       _consuming: false,
//       _dumped: false,
//       req: [Circular *1],
//       responseUrl: 'http://localhost:5000/items',
//       redirects: [],
//       [Symbol(kCapture)]: false,
//       [Symbol(kHeaders)]: [Object],
//       [Symbol(kHeadersCount)]: 14,
//       [Symbol(kTrailers)]: null,
//       [Symbol(kTrailersCount)]: 0
//     },
//     aborted: false,
//     timeoutCb: null,
//     upgradeOrConnect: false,
//     parser: null,
//     maxHeadersCount: null,
//     reusedSocket: false,
//     host: 'localhost',
//     protocol: 'http:',
//     _redirectable: Writable {
//       _writableState: [WritableState],
//       _events: [Object: null prototype],
//       _eventsCount: 3,
//       _maxListeners: undefined,
//       _options: [Object],
//       _ended: true,
//       _ending: true,
//       _redirectCount: 0,
//       _redirects: [],
//       _requestBodyLength: 48,
//       _requestBodyBuffers: [],
//       _onNativeResponse: [Function (anonymous)],
//       _currentRequest: [Circular *1],
//       _currentUrl: 'http://localhost:5000/items',
//       [Symbol(kCapture)]: false
//     },
//     [Symbol(kCapture)]: false,
//     [Symbol(kBytesWritten)]: 0,
//     [Symbol(kEndCalled)]: true,
//     [Symbol(kNeedDrain)]: false,
//     [Symbol(corked)]: 0,
//     [Symbol(kOutHeaders)]: [Object: null prototype] {
//       accept: [Array],
//       'content-type': [Array],
//       'user-agent': [Array],
//       'content-length': [Array],
//       'accept-encoding': [Array],
//       host: [Array]
//     },
//     [Symbol(errored)]: null,
//     [Symbol(kUniqueHeaders)]: null
//   },
//   response: {
//     status: 400,
//     statusText: 'Bad Request',
//     headers: AxiosHeaders {
//       'x-powered-by': 'Express',
//       'content-type': 'application/json; charset=utf-8',
//       'content-length': '37',
//       etag: 'W/"25-UhN9T+orkrXRmv+9IfZAa+WwPoo"',
//       date: 'Sat, 15 Apr 2023 22:41:34 GMT',
//       connection: 'keep-alive',
//       'keep-alive': 'timeout=5'
//     },
//     config: {
//       transitional: [Object],
//       adapter: [Array],
//       transformRequest: [Array],
//       transformResponse: [Array],
//       timeout: 0,
//       xsrfCookieName: 'XSRF-TOKEN',
//       xsrfHeaderName: 'X-XSRF-TOKEN',
//       maxContentLength: -1,
//       maxBodyLength: -1,
//       env: [Object],
//       validateStatus: [Function: validateStatus],
//       headers: [AxiosHeaders],
//       method: 'post',
//       url: 'http://localhost:5000/items',
//       data: '{"name":"Julio","description":"otro tipo mas\\n"}'
//     },
//     request: <ref *1> ClientRequest {
//       _events: [Object: null prototype],
//       _eventsCount: 7,
//       _maxListeners: undefined,
//       outputData: [],
//       outputSize: 0,
//       writable: true,
//       destroyed: true,
//       _last: false,
//       chunkedEncoding: false,
//       shouldKeepAlive: true,
//       maxRequestsOnConnectionReached: false,
//       _defaultKeepAlive: true,
//       useChunkedEncodingByDefault: true,
//       sendDate: false,
//       _removedConnection: false,
//       _removedContLen: false,
//       _removedTE: false,
//       strictContentLength: false,
//       _contentLength: '48',
//       _hasBody: true,
//       _trailer: '',
//       finished: true,
//       _headerSent: true,
//       _closed: true,
//       socket: [Socket],
//       _header: 'POST /items HTTP/1.1\r\n' +
//         'Accept: application/json, text/plain, */*\r\n' +
//         'Content-Type: application/json\r\n' +
//         'User-Agent: axios/1.3.5\r\n' +
//         'Content-Length: 48\r\n' +
//         'Accept-Encoding: gzip, compress, deflate, br\r\n' +
//         'Host: localhost:5000\r\n' +
//         'Connection: keep-alive\r\n' +
//         '\r\n',
//       _keepAliveTimeout: 0,
//       _onPendingData: [Function: nop],
//       agent: [Agent],
//       socketPath: undefined,
//       method: 'POST',
//       maxHeaderSize: undefined,
//       insecureHTTPParser: undefined,
//       joinDuplicateHeaders: undefined,
//       path: '/items',
//       _ended: true,
//       res: [IncomingMessage],
//       aborted: false,
//       timeoutCb: null,
//       upgradeOrConnect: false,
//       parser: null,
//       maxHeadersCount: null,
//       reusedSocket: false,
//       host: 'localhost',
//       protocol: 'http:',
//       _redirectable: [Writable],
//       [Symbol(kCapture)]: false,
//       [Symbol(kBytesWritten)]: 0,
//       [Symbol(kEndCalled)]: true,
//       [Symbol(kNeedDrain)]: false,
//       [Symbol(corked)]: 0,
//       [Symbol(kOutHeaders)]: [Object: null prototype],
//       [Symbol(errored)]: null,
//       [Symbol(kUniqueHeaders)]: null
//     },
//     data: { message: 'Error creating new item' }
//   }
// }
// AxiosError: Request failed with status code 400
//     at settle (file:///C:/Users/rodri/workspaceTypescript/apirest/front/node_modules/axios/lib/core/settle.js:19:12)
//     at IncomingMessage.handleStreamEnd (file:///C:/Users/rodri/workspaceTypescript/apirest/front/node_modules/axios/lib/adapters/http.js:556:11)
//     at IncomingMessage.emit (node:events:524:35)
//     at endReadableNT (node:internal/streams/readable:1359:12)
//     at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
//   code: 'ERR_BAD_REQUEST',
//   config: {
//     transitional: {
//       silentJSONParsing: true,
//       forcedJSONParsing: true,
//       clarifyTimeoutError: false
//     },
//     adapter: [ 'xhr', 'http' ],
//     transformRequest: [ [Function: transformRequest] ],
//     transformResponse: [ [Function: transformResponse] ],
//     timeout: 0,
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
//     maxContentLength: -1,
//     maxBodyLength: -1,
//     env: { FormData: [Function], Blob: [class Blob] },
//     validateStatus: [Function: validateStatus],
//     headers: AxiosHeaders {
//       Accept: 'application/json, text/plain, */*',
//       'Content-Type': 'application/json',
//       'User-Agent': 'axios/1.3.5',
//       'Content-Length': '52',
//       'Accept-Encoding': 'gzip, compress, deflate, br'
//     },
//     method: 'post',
//     url: 'http://localhost:5000/items',
//     data: '{"name":"Carlos","description":"una persona normal"}'
//   },
//   request: <ref *1> ClientRequest {
//     _events: [Object: null prototype] {
//       abort: [Function (anonymous)],
//       aborted: [Function (anonymous)],
//       connect: [Function (anonymous)],
//       error: [Function (anonymous)],
//       socket: [Function (anonymous)],
//       timeout: [Function (anonymous)],
//       finish: [Function: requestOnFinish]
//     },
//     _eventsCount: 7,
//     _maxListeners: undefined,
//     outputData: [],
//     outputSize: 0,
//     writable: true,
//     destroyed: true,
//     _last: false,
//     chunkedEncoding: false,
//     shouldKeepAlive: true,
//     maxRequestsOnConnectionReached: false,
//     _defaultKeepAlive: true,
//     useChunkedEncodingByDefault: true,
//     sendDate: false,
//     _removedConnection: false,
//     _removedContLen: false,
//     _removedTE: false,
//     strictContentLength: false,
//     _contentLength: '52',
//     _hasBody: true,
//     _trailer: '',
//     finished: true,
//     _headerSent: true,
//     _closed: true,
//     socket: Socket {
//       connecting: false,
//       _hadError: false,
//       _parent: null,
//       _host: 'localhost',
//       _closeAfterHandlingError: false,
//       _readableState: [ReadableState],
//       _events: [Object: null prototype],
//       _eventsCount: 6,
//       _maxListeners: undefined,
//       _writableState: [WritableState],
//       allowHalfOpen: false,
//       _sockname: null,
//       _pendingData: null,
//       _pendingEncoding: '',
//       server: null,
//       _server: null,
//       timeout: 5000,
//       parser: null,
//       _httpMessage: null,
//       [Symbol(async_id_symbol)]: -1,
//       [Symbol(kHandle)]: [TCP],
//       [Symbol(lastWriteQueueSize)]: 0,
//       [Symbol(timeout)]: Timeout {
//         _idleTimeout: 5000,
//         _idlePrev: [TimersList],
//         _idleNext: [Timeout],
//         _idleStart: 690199,
//         _onTimeout: [Function: bound ],
//         _timerArgs: undefined,
//         _repeat: null,
//         _destroyed: false,
//         [Symbol(refed)]: false,
//         [Symbol(kHasPrimitive)]: false,
//         [Symbol(asyncId)]: 1589,
//         [Symbol(triggerId)]: 1587
//       },
//       [Symbol(kBuffer)]: null,
//       [Symbol(kBufferCb)]: null,
//       [Symbol(kBufferGen)]: null,
//       [Symbol(kCapture)]: false,
//       [Symbol(kSetNoDelay)]: true,
//       [Symbol(kSetKeepAlive)]: true,
//       [Symbol(kSetKeepAliveInitialDelay)]: 1,
//       [Symbol(kBytesRead)]: 0,
//       [Symbol(kBytesWritten)]: 0
//     },
//     _header: 'POST /items HTTP/1.1\r\n' +
//       'Accept: application/json, text/plain, */*\r\n' +
//       'Content-Type: application/json\r\n' +
//       'User-Agent: axios/1.3.5\r\n' +
//       'Content-Length: 52\r\n' +
//       'Accept-Encoding: gzip, compress, deflate, br\r\n' +
//       'Host: localhost:5000\r\n' +
//       'Connection: keep-alive\r\n' +
//       '\r\n',
//     _keepAliveTimeout: 0,
//     _onPendingData: [Function: nop],
//     agent: Agent {
//       _events: [Object: null prototype],
//       _eventsCount: 2,
//       _maxListeners: undefined,
//       defaultPort: 80,
//       protocol: 'http:',
//       options: [Object: null prototype],
//       requests: [Object: null prototype] {},
//       sockets: [Object: null prototype] {},
//       freeSockets: [Object: null prototype],
//       keepAliveMsecs: 1000,
//       keepAlive: true,
//       maxSockets: Infinity,
//       maxFreeSockets: 256,
//       scheduling: 'lifo',
//       maxTotalSockets: Infinity,
//       totalSocketCount: 2,
//       [Symbol(kCapture)]: false
//     },
//     socketPath: undefined,
//     method: 'POST',
//     maxHeaderSize: undefined,
//     insecureHTTPParser: undefined,
//     joinDuplicateHeaders: undefined,
//     path: '/items',
//     _ended: true,
//     res: IncomingMessage {
//       _readableState: [ReadableState],
//       _events: [Object: null prototype],
//       _eventsCount: 4,
//       _maxListeners: undefined,
//       socket: null,
//       httpVersionMajor: 1,
//       httpVersionMinor: 1,
//       httpVersion: '1.1',
//       complete: true,
//       rawHeaders: [Array],
//       rawTrailers: [],
//       joinDuplicateHeaders: undefined,
//       aborted: false,
//       upgrade: false,
//       url: '',
//       method: null,
//       statusCode: 400,
//       statusMessage: 'Bad Request',
//       client: [Socket],
//       _consuming: false,
//       _dumped: false,
//       req: [Circular *1],
//       responseUrl: 'http://localhost:5000/items',
//       redirects: [],
//       [Symbol(kCapture)]: false,
//       [Symbol(kHeaders)]: [Object],
//       [Symbol(kHeadersCount)]: 14,
//       [Symbol(kTrailers)]: null,
//       [Symbol(kTrailersCount)]: 0
//     },
//     aborted: false,
//     timeoutCb: null,
//     upgradeOrConnect: false,
//     parser: null,
//     maxHeadersCount: null,
//     reusedSocket: false,
//     host: 'localhost',
//     protocol: 'http:',
//     _redirectable: Writable {
//       _writableState: [WritableState],
//       _events: [Object: null prototype],
//       _eventsCount: 3,
//       _maxListeners: undefined,
//       _options: [Object],
//       _ended: true,
//       _ending: true,
//       _redirectCount: 0,
//       _redirects: [],
//       _requestBodyLength: 52,
//       _requestBodyBuffers: [],
//       _onNativeResponse: [Function (anonymous)],
//       _currentRequest: [Circular *1],
//       _currentUrl: 'http://localhost:5000/items',
//       [Symbol(kCapture)]: false
//     },
//     [Symbol(kCapture)]: false,
//     [Symbol(kBytesWritten)]: 0,
//     [Symbol(kEndCalled)]: true,
//     [Symbol(kNeedDrain)]: false,
//     [Symbol(corked)]: 0,
//     [Symbol(kOutHeaders)]: [Object: null prototype] {
//       accept: [Array],
//       'content-type': [Array],
//       'user-agent': [Array],
//       'content-length': [Array],
//       'accept-encoding': [Array],
//       host: [Array]
//     },
//     [Symbol(errored)]: null,
//     [Symbol(kUniqueHeaders)]: null
//   },
//   response: {
//     status: 400,
//     statusText: 'Bad Request',
//     headers: AxiosHeaders {
//       'x-powered-by': 'Express',
//       'content-type': 'application/json; charset=utf-8',
//       'content-length': '37',
//       etag: 'W/"25-UhN9T+orkrXRmv+9IfZAa+WwPoo"',
//       date: 'Sat, 15 Apr 2023 22:41:57 GMT',
//       connection: 'keep-alive',
//       'keep-alive': 'timeout=5'
//     },
//     config: {
//       transitional: [Object],
//       adapter: [Array],
//       transformRequest: [Array],
//       transformResponse: [Array],
//       timeout: 0,
//       xsrfCookieName: 'XSRF-TOKEN',
//       xsrfHeaderName: 'X-XSRF-TOKEN',
//       maxContentLength: -1,
//       maxBodyLength: -1,
//       env: [Object],
//       validateStatus: [Function: validateStatus],
//       headers: [AxiosHeaders],
//       method: 'post',
//       url: 'http://localhost:5000/items',
//       data: '{"name":"Carlos","description":"una persona normal"}'
//     },
//     request: <ref *1> ClientRequest {
//       _events: [Object: null prototype],
//       _eventsCount: 7,
//       _maxListeners: undefined,
//       outputData: [],
//       outputSize: 0,
//       writable: true,
//       destroyed: true,
//       _last: false,
//       chunkedEncoding: false,
//       shouldKeepAlive: true,
//       maxRequestsOnConnectionReached: false,
//       _defaultKeepAlive: true,
//       useChunkedEncodingByDefault: true,
//       sendDate: false,
//       _removedConnection: false,
//       _removedContLen: false,
//       _removedTE: false,
//       strictContentLength: false,
//       _contentLength: '52',
//       _hasBody: true,
//       _trailer: '',
//       finished: true,
//       _headerSent: true,
//       _closed: true,
//       socket: [Socket],
//       _header: 'POST /items HTTP/1.1\r\n' +
//         'Accept: application/json, text/plain, */*\r\n' +
//         'Content-Type: application/json\r\n' +
//         'User-Agent: axios/1.3.5\r\n' +
//         'Content-Length: 52\r\n' +
//         'Accept-Encoding: gzip, compress, deflate, br\r\n' +
//         'Host: localhost:5000\r\n' +
//         'Connection: keep-alive\r\n' +
//         '\r\n',
//       _keepAliveTimeout: 0,
//       _onPendingData: [Function: nop],
//       agent: [Agent],
//       socketPath: undefined,
//       method: 'POST',
//       maxHeaderSize: undefined,
//       insecureHTTPParser: undefined,
//       joinDuplicateHeaders: undefined,
//       path: '/items',
//       _ended: true,
//       res: [IncomingMessage],
//       aborted: false,
//       timeoutCb: null,
//       upgradeOrConnect: false,
//       parser: null,
//       maxHeadersCount: null,
//       reusedSocket: false,
//       host: 'localhost',
//       protocol: 'http:',
//       _redirectable: [Writable],
//       [Symbol(kCapture)]: false,
//       [Symbol(kBytesWritten)]: 0,
//       [Symbol(kEndCalled)]: true,
//       [Symbol(kNeedDrain)]: false,
//       [Symbol(corked)]: 0,
//       [Symbol(kOutHeaders)]: [Object: null prototype],
//       [Symbol(errored)]: null,
//       [Symbol(kUniqueHeaders)]: null
//     },
//     data: { message: 'Error creating new item' }
//   }
// }
