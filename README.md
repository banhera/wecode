# git init
## 디렉토리와 깃 연동 시 디렉토리 초기화 커맨드
깃과 연동하기 전에 터미널 창을 열어 git init 을 입력한다.

# git remote add orgin https://github.com/깃헙아이디/레포지토리이름.git
## git init을 통해 로컬 레포지토리인 디렉토리와 깃을 연동하였다면,
본인 github 계정의 레포지토리인 원격 레포지토리의 주소를 디렉토리와 연동한다.

# git add “file name” or “.”
## 코딩을 마친 파일을 업로드하기 위한 명령어
main.js 파일만 추가한다면 git add main.js 또는 파일 전체를 추가하는 git add .

# git commit -m "messages”
## 추가된 작업 파일에 기록을 남김.
”first commit” 이라는 커밋 내용과 함께 커밋을 하려면 git commit -m “first commit” 