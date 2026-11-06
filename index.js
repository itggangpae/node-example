const http = require('http');
const fs = require('fs');
const path = require('path');

// HTTP 서버 생성
const server = http.createServer((req, res) => {

    // index.html 경로 설정
    const filePath = path.join(__dirname, 'index.html');

    // 파일 읽기
    fs.readFile(filePath, 'utf8', (err, data) => {

        if (err) {
            res.writeHead(500, {
                'Content-Type': 'text/plain; charset=utf-8'
            });

            res.end('파일 읽기 실패');
            return;
        }

        // HTTP 응답 설정
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        // HTML 파일 내용 출력
        res.end(data);
    });

});

// 3000번 포트로 서버 실행
server.listen(3000, () => {
    console.log('서버 실행: http://localhost:3000');
});