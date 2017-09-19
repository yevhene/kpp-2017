# 3. API - Application Programming Interface

## HTTP - HyperText Transfer Protocol
1. prerequsites
    - DNS
    - TCP/IP
    - URL

2. request
    - method
      - explicit
        - GET
        - POST
        - PUT/PATCH
        - DELETE
      - implicit
        - HEAD
        - OPTIONS
        - TRACE
        - CONNECT
    - path
    - protocol
    - headers
      - Host
      - User-Agent
      - Accept
      - Referer
        - spoof
      - Accept-Encoding
      - Accept-Language
      - Cookie
      - Content-Type
        - `application/json`
        - `application/x-www-form-urlencoded`
        - `multipart/form-data`
    - body
    - example
    ```
    GET /yevhene/kpp HTTP/1.1
    Host: github.com
    User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/60.0.3112.113 Chrome/60.0.3112.113 Safari/537.36
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    Referer: https://github.com
    Accept-Encoding: gzip, deflate, br
    Accept-Language: en-US,en;q=0.8
    Cookie: key=value; key1=value1
    
    ```

3. response
    - status line
    - code
      - 1xx: Informational - Request received, continuing process
      - 2xx: Success - The action was successfully received,
      understood, and accepted
      - 3xx: Further action must be taken in order to
      complete the request
      - 4xx: Client Error - The request contains bad syntax or cannot
      be fulfilled
      - 5xx: Server Error - The server failed to fulfill an apparently
      valid request
    - headers
      - Server
      - Date
      - Content-Type
      - Set-Cookie
      - Content-Encoding
    - body
    - example
    ```
    HTTP/1.1 200 OK
    Server: GitHub.com
    Date: Sun, 03 Sep 2017 19:44:42 GMT
    Content-Type: text/html; charset=utf-8
    Set-Cookie: key=value; key1=value1
    Content-Encoding: gzip
    ```

## Формати даних
### CSV
### XML
### JSON

## Cross-origin request
### Image
### JSONP
### CORS

## Стратегії автентификації та авторизації (token, OAuth2)
1. apiKey
    - process
      - simple
      - two-step using auth token
    - transfer
      - header
      - url
2. oauth2
    - predecestors
      - OpenID
      - oauth
    - actors
      - client (website)
      - user (you)
      - provider (public well-known website)
    - scope
    - process
      - request
        - redirect_uri
        - state (check)
      - redirect on redirect_uri
        - state (check)
        - code (transaction id)
      - request token
        - client_id
        - client_secret
        - code (transaction id)
        - redirect_uri (from first step)
      - refresh_token

## Приклади
- https://github.com/toddmotto/public-apis

## Література
[Список кодів стану HTTP](https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D1%96%D0%B2_%D1%81%D1%82%D0%B0%D0%BD%D1%83_HTTP)
