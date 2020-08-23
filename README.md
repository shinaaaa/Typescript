### Typescript

----

개요

- 자바스트립트의 기본 문법을 따르면서 타입스크립트의 타입 시스템을 추가함

설치하기

- yarn add typescript
- npm install typescript

시작하기

tsconfig.json 파일 생성

```json
{
  "compilerOptions": {
    "outDir": "./built",
    "allowJs": true,
    "target": "es5"
  },
  "include": ["./src/**/*"]
}
```

package.json 추가

```json
  "scripts": {
    "start": "node index.js"
    "prestart": "tsc"
  },
  "dependencies": {
    "typescript": "^4.0.2"
  }
```

tsc-watch 사용시

- yarn add tsc-watch
- npm install tsc-watch

```json
  "scripts": {
    "start": "tsc-watch --onSuccess \" node dist/index.js\""
  },
  "dependencies": {
    "tsc-watch": "^4.2.9",
    "typescript": "^4.0.2"
  }
```