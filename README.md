# Taekyu Lee - 개인 연구 홈페이지

ZARA 스타일의 미니멀한 학술 웹사이트입니다.

## 📁 파일 구조

```
/
├── index.html      # 메인 HTML 파일
├── styles.css      # 스타일시트
├── script.js       # JavaScript (블로그 관리)
└── README.md       # 이 파일
```

## 🎨 주요 기능

1. **소개 (About)**: 개인 소개 섹션
2. **연구실적 (Research)**: 논문 및 출판물 목록
3. **프로젝트 (Projects)**: 진행한 프로젝트 소개
4. **진행 중인 연구 (Blog)**: 동적으로 관리 가능한 블로그
5. **연락처 (Contact)**: 이메일, GitHub, LinkedIn 등

## ✏️ 콘텐츠 수정 방법

### 1. 기본 정보 수정 (index.html)

**이름/타이틀 변경:**
```html
<div class="nav-brand">TAEKYU LEE</div>
<h1 class="hero-title">이태규</h1>
```

**소개 섹션 수정:**
`<section id="about">` 부분의 텍스트를 수정하세요.

**연락처 수정:**
`<section id="contact">` 부분의 이메일, GitHub, LinkedIn 링크를 수정하세요.

### 2. 연구실적 추가/수정

`<section id="research">` 내부의 `.research-item`을 추가하거나 수정하세요:

```html
<div class="research-item">
    <h3>논문 제목</h3>
    <p class="meta">2024 | 학술지명 | 공저자</p>
    <p class="description">연구 내용 설명</p>
</div>
```

### 3. 프로젝트 추가/수정

`<section id="projects">` 내부의 `.project-card`를 추가하거나 수정하세요:

```html
<div class="project-card">
    <h3>프로젝트 제목</h3>
    <p class="meta">2024</p>
    <p>프로젝트 설명</p>
</div>
```

### 4. 블로그 글 관리 (script.js) ⭐

**가장 중요!** `script.js` 파일의 `blogPosts` 배열을 수정하여 블로그 글을 관리합니다.

**새 글 추가:**
```javascript
const blogPosts = [
    {
        id: 4,  // 고유 번호 (숫자 증가)
        title: "새 연구 글 제목",
        date: "2024-11-02",  // YYYY-MM-DD 형식
        excerpt: "짧은 요약 (목록에 표시됨)",
        content: `
            <p>본문 내용입니다.</p>
            
            <h3>소제목</h3>
            <p>더 많은 내용...</p>
        `
    },
    // 기존 글들...
];
```

**글 수정:**
해당 id의 객체를 찾아서 title, date, excerpt, content를 수정하세요.

**글 삭제:**
해당 객체를 배열에서 제거하세요.

**HTML 태그 사용 가능:**
- `<p>`: 문단
- `<h3>`: 소제목
- `<strong>`: 굵게
- `<em>`: 기울임
- `<a href="링크">`: 링크

## 🌐 웹사이트 배포 방법

### 방법 1: GitHub Pages (무료, 추천)

1. GitHub에 새 repository 생성
2. 모든 파일을 업로드
3. Settings → Pages → Source를 "main branch"로 설정
4. 몇 분 후 `https://username.github.io/repository-name/`에서 확인

### 방법 2: Netlify (무료)

1. [Netlify](https://www.netlify.com/) 가입
2. "New site from Git" 또는 폴더 드래그 앤 드롭
3. 자동으로 배포됨
4. 커스텀 도메인 설정 가능

### 방법 3: Vercel (무료)

1. [Vercel](https://vercel.com/) 가입
2. GitHub repository 연결 또는 폴더 업로드
3. 자동 배포
4. 커스텀 도메인 설정 가능

## 🎨 디자인 커스터마이징

`styles.css` 파일의 `:root` 섹션에서 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #000;        /* 메인 텍스트 색상 */
    --secondary-color: #666;      /* 보조 텍스트 색상 */
    --background: #fff;           /* 배경색 */
    --gray-bg: #f8f8f8;          /* 회색 섹션 배경 */
    --border-color: #e5e5e5;     /* 테두리 색상 */
}
```

## 📱 반응형 디자인

모바일, 태블릿, 데스크톱 모두 지원됩니다.

## 💡 팁

1. 블로그 글은 `script.js` 파일만 수정하면 됩니다
2. 글 작성 시 날짜를 최신순으로 유지하면 자동으로 정렬됩니다
3. 이미지를 추가하려면 `<img src="이미지경로" alt="설명">` 태그를 사용하세요
4. 정기적으로 GitHub에 백업하는 것을 추천합니다

## 🚀 로컬에서 테스트

파일을 더블클릭하거나, 간단한 서버를 실행:

```bash
# Python이 설치되어 있다면:
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

## 📧 문의

웹사이트 사용 중 문제가 있으면 언제든 연락주세요!
