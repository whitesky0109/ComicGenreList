# 과제

로맨스 장르 작품 랭킹 리스트 컴포넌트를 개발합니다.

## 시스템 요구사항

해당 프로젝트를 사용하기 위해서는 아래와 같은 프로그램이 필요합니다.

- nodejs v16.16.x 또는 그 이상
- (선택) yarn 1.22.x 또는 그 이상

### `npm run start`

개발 모드를 실행합니다.
브라우저에서 [http://localhost:3000](http://localhost:3000)로 접속

### `npm run build`

배포용 프론트엔드 파일을 생성합니다. `./build`디렉토리에 생성됩니다.

### `npm run serve`

생성된 배포용 프론트엔드 파일로 웹을 실행합니다.
브라우저에서 [http://localhost:3000](http://localhost:3000)로 접속


## 사용 개발 환경

### `react`

기존 개발 환경을 사용하여 빠른 개발이 되도록 React 환경으로 개발합니다.

### `react-redux`

기존 개발 환경대로 Redux로 상태 관리 라이브러리로 개발합니다.

기존 Reudx-saga대신 slice를 이용하여 간단한 코드 작성을 지향합니다.

### `axios`

API 요청을 위한 라이브러리를 사용합니다.

### `styled-components`

기존 개발 환경대로 styled-components로 스타일을 개발합니다.

### `eslint-plugin-airbnb`

공통 코드와 오타율을 줄이기 위해 lint를 적용하여 개발합니다.

기존에 사용한 lint(airbnb)를 적용합니다.

### `prop-types`

lint용 react props 정의를 사용합니다.

### `serve`

배포용 코드 실행 목적으로 사용합니다.