# API - Application Programming Interface

## HTTP - HyperText Transfer Protocol
1. prerequsites
    - TCP/IP
    - host (DNS)
    - port

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

## Інтеграція з API

## Стратегії автентификації (token, OAuth2)


