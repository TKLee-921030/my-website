# GitHub Pages 배포 완전 가이드 🚀

GitHub Pages를 통해 무료로 웹사이트를 배포하는 방법을 단계별로 설명합니다.

---

## 📋 목차
1. [GitHub 계정 만들기](#1-github-계정-만들기)
2. [Repository 생성하기](#2-repository-생성하기)
3. [파일 업로드하기](#3-파일-업로드하기)
4. [GitHub Pages 활성화하기](#4-github-pages-활성화하기)
5. [웹사이트 확인하기](#5-웹사이트-확인하기)
6. [내용 수정하는 방법](#6-내용-수정하는-방법)
7. [커스텀 도메인 연결 (선택사항)](#7-커스텀-도메인-연결-선택사항)
8. [문제 해결](#8-문제-해결)

---

## 1. GitHub 계정 만들기

### 단계 1-1: GitHub 가입
1. 브라우저에서 [https://github.com](https://github.com) 접속
2. 우측 상단 **"Sign up"** 클릭
3. 이메일 주소 입력
4. 비밀번호 설정 (최소 15자 또는 8자+숫자+특수문자)
5. 사용자 이름(username) 설정
   - 예: `taekyulee` 또는 `taekyu-research`
   - ⚠️ **중요:** 이 이름이 URL에 사용됩니다!
   - URL 예: `https://taekyulee.github.io`
6. 이메일 인증 완료

### 단계 1-2: 이메일 인증
1. 가입한 이메일로 GitHub에서 보낸 메일 확인
2. "Verify email address" 클릭
3. GitHub 로그인

✅ **완료!** 이제 GitHub 계정이 생겼습니다.

---

## 2. Repository 생성하기

Repository(저장소)는 프로젝트 파일들을 저장하는 공간입니다.

### 단계 2-1: New Repository 만들기
1. GitHub 로그인 후 우측 상단 **"+"** 버튼 클릭
2. **"New repository"** 선택
3. Repository 정보 입력:
   ```
   Repository name: my-website
   (원하는 이름으로 변경 가능, 예: research-website, portfolio 등)
   
   Description: 개인 연구 홈페이지
   (선택사항)
   
   Public 선택 (무료)
   ✅ Add a README file 체크 X (안 해도 됨)
   ```
4. **"Create repository"** 클릭

✅ **완료!** Repository가 생성되었습니다.

### 📌 Repository 이름 참고
- URL은 `https://yourusername.github.io/repository-name/` 형태가 됩니다
- 예: username이 `taekyulee`이고 repository가 `my-website`라면
  → `https://taekyulee.github.io/my-website/`

---

## 3. 파일 업로드하기

웹사이트 파일들을 GitHub에 올립니다.

### 방법 A: 웹 브라우저로 업로드 (가장 쉬움) ⭐

#### 단계 3-1: 파일 준비
- 다운받은 4개 파일 준비:
  - `index.html`
  - `styles.css`
  - `script.js`
  - `README.md`

#### 단계 3-2: 파일 업로드
1. Repository 페이지에서 **"Add file"** 클릭
2. **"Upload files"** 선택
3. 4개 파일을 드래그 앤 드롭 (또는 "choose your files" 클릭)
4. 하단에 커밋 메시지 입력:
   ```
   Initial commit - 웹사이트 파일 업로드
   ```
5. **"Commit changes"** 클릭

✅ **완료!** 파일이 업로드되었습니다.

### 방법 B: GitHub Desktop 사용 (추천)

더 편리하게 파일을 관리하고 싶다면:

1. [GitHub Desktop](https://desktop.github.com/) 다운로드 및 설치
2. GitHub 계정으로 로그인
3. "Clone a repository" → 방금 만든 repository 선택
4. 로컬 폴더에 파일 복사
5. "Commit to main" → "Push origin" 클릭

### 방법 C: Git 명령어 사용 (고급)

터미널에서:
```bash
git clone https://github.com/yourusername/my-website.git
cd my-website
# 파일들을 이 폴더에 복사
git add .
git commit -m "Initial commit"
git push origin main
```

---

## 4. GitHub Pages 활성화하기

이제 웹사이트를 인터넷에 공개합니다!

### 단계 4-1: Settings 접속
1. Repository 페이지에서 상단 **"Settings"** 탭 클릭
2. 왼쪽 메뉴에서 **"Pages"** 클릭

### 단계 4-2: Source 설정
```
Source: Deploy from a branch 선택
Branch: main 선택
Folder: / (root) 선택
```

### 단계 4-3: Save
1. **"Save"** 버튼 클릭
2. 페이지 상단에 파란색 알림 표시:
   ```
   Your site is ready to be published at 
   https://yourusername.github.io/my-website/
   ```

### 단계 4-4: 배포 대기
- 보통 **1-5분** 정도 소요됩니다
- 페이지를 새로고침하면 녹색으로 변경:
  ```
  Your site is live at https://yourusername.github.io/my-website/
  ```

✅ **완료!** 웹사이트가 배포되었습니다! 🎉

---

## 5. 웹사이트 확인하기

### 단계 5-1: 접속
1. 브라우저 새 탭 열기
2. URL 입력: `https://yourusername.github.io/my-website/`
   - `yourusername`을 본인의 GitHub username으로 변경
   - `my-website`를 본인의 repository 이름으로 변경

### 단계 5-2: 테스트
- 각 탭(HOME, 소개, 연구실적 등) 클릭해보기
- 모바일 화면으로도 확인 (F12 → 모바일 아이콘)
- 블로그 글 클릭해서 모달 팝업 확인

### 📱 친구들에게 공유하기
이제 이 URL을 누구에게나 공유할 수 있습니다!

---

## 6. 내용 수정하는 방법

웹사이트 내용을 수정하고 싶을 때:

### 방법 A: GitHub 웹에서 직접 수정

#### 블로그 글 추가/수정 (가장 자주 사용)

1. Repository 페이지에서 `script.js` 클릭
2. 우측 상단 **연필 아이콘 (Edit)** 클릭
3. `blogPosts` 배열에서 내용 수정:

```javascript
const blogPosts = [
    {
        id: 4,  // 새 글은 숫자를 증가시킵니다
        title: "새로운 연구 제목",
        date: "2024-11-03",
        excerpt: "짧은 요약입니다.",
        content: `
            <p>본문 내용입니다.</p>
            
            <h3>소제목</h3>
            <p>더 많은 내용...</p>
        `
    },
    // 기존 글들...
];
```

4. 하단 "Commit changes" 클릭
5. 커밋 메시지 입력: `블로그 글 추가` 또는 `내용 수정`
6. "Commit changes" 클릭
7. **1-2분 후** 웹사이트에 자동 반영!

#### 다른 내용 수정

**소개 수정:** `index.html` → About 섹션 찾기
**연구실적 추가:** `index.html` → Research 섹션 찾기
**프로젝트 추가:** `index.html` → Projects 섹션 찾기
**연락처 수정:** `index.html` → Contact 섹션 찾기

### 방법 B: 로컬에서 수정 후 업로드

1. GitHub Desktop 또는 Git 사용
2. 파일 수정
3. Commit → Push
4. 자동 배포

---

## 7. 커스텀 도메인 연결 (선택사항)

`www.이태규.com` 같은 본인만의 도메인을 원한다면:

### 단계 7-1: 도메인 구매
추천 도메인 등록 사이트:
- **가비아** (한국) - [gabia.com](https://gabia.com)
- **Namecheap** (해외) - [namecheap.com](https://namecheap.com)
- **Google Domains** (해외)

가격: 연간 약 **1-2만원**

### 단계 7-2: DNS 설정
도메인 구매 후:

1. 도메인 관리 페이지에서 DNS 설정
2. A Record 추가:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
3. CNAME Record 추가:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

### 단계 7-3: GitHub Pages에 도메인 설정
1. Repository → Settings → Pages
2. "Custom domain"에 도메인 입력 (예: `www.이태규.com`)
3. "Save" 클릭
4. ✅ "Enforce HTTPS" 체크 (권장)

### 단계 7-4: 대기
- DNS 전파: **최대 24-48시간** 소요
- 보통 1-2시간 내에 작동

✅ **완료!** 이제 본인의 도메인으로 접속 가능합니다!

---

## 8. 문제 해결

### 문제 1: 웹사이트가 안 보여요 (404 Error)

**해결 방법:**
1. Settings → Pages에서 Source가 제대로 설정되었는지 확인
2. `index.html` 파일이 repository의 **루트(/)** 에 있는지 확인
3. 5분 정도 기다린 후 다시 시도
4. URL이 정확한지 확인 (대소문자 구분!)

### 문제 2: 수정한 내용이 반영 안 돼요

**해결 방법:**
1. 1-2분 기다리기 (자동 배포 시간)
2. 브라우저 캐시 삭제: `Ctrl + Shift + R` (강력 새로고침)
3. 시크릿 모드로 접속해보기
4. Actions 탭에서 배포 상태 확인

### 문제 3: CSS/JS가 안 먹혀요

**해결 방법:**
1. `index.html`에서 파일 경로 확인:
   ```html
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>
   ```
2. 파일 이름이 정확한지 확인 (대소문자 구분!)
3. 모든 파일이 같은 폴더에 있는지 확인

### 문제 4: 이미지가 안 보여요

**해결 방법:**
1. 이미지 파일도 같이 업로드했는지 확인
2. 이미지 경로 확인:
   ```html
   <!-- 잘못된 예 -->
   <img src="C:/Users/Desktop/photo.jpg">
   
   <!-- 올바른 예 -->
   <img src="photo.jpg">
   또는
   <img src="./images/photo.jpg">
   ```

### 문제 5: GitHub Pages 메뉴가 안 보여요

**해결 방법:**
1. Repository가 **Public**인지 확인 (Private는 유료)
2. Settings → Pages가 활성화되어 있는지 확인
3. Free 플랜에서는 Public repository만 GitHub Pages 사용 가능

---

## 📚 추가 팁

### 💡 팁 1: 수정 전 백업
중요한 수정 전에는 파일을 다운로드해서 백업하세요.

### 💡 팁 2: Commit 메시지 잘 쓰기
```
좋은 예:
- "블로그 글 추가: 연구 방법론"
- "연락처 이메일 주소 수정"
- "프로젝트 섹션 업데이트"

나쁜 예:
- "수정"
- "aaa"
- "ㅇㅇ"
```

### 💡 팁 3: README.md 활용
Repository에 방문자를 위한 설명을 추가하세요:
```markdown
# 이태규 개인 홈페이지

연구 실적과 프로젝트를 공유하는 개인 웹사이트입니다.

🌐 **웹사이트**: https://taekyulee.github.io/my-website/

## 기술 스택
- HTML/CSS/JavaScript
- GitHub Pages
```

### 💡 팁 4: 정기적 업데이트
- 연구 결과가 나올 때마다 업데이트
- 월 1회 이상 블로그 글 작성 추천
- 프로필 사진 주기적 업데이트

---

## 🎓 다음 단계

웹사이트가 잘 작동한다면:

1. ✅ **Google Analytics** 추가 - 방문자 통계 확인
2. ✅ **SEO 최적화** - 검색 엔진에 잘 노출되도록
3. ✅ **커스텀 도메인** 연결
4. ✅ **이미지 최적화** - 로딩 속도 향상
5. ✅ **소셜 미디어 메타 태그** 추가

---

## ❓ 자주 묻는 질문 (FAQ)

**Q: 완전 무료인가요?**
A: 네! GitHub Pages는 완전 무료입니다. 대역폭 제한도 넉넉합니다.

**Q: 광고가 뜨나요?**
A: 아니요. 광고 없이 깔끔하게 사용 가능합니다.

**Q: 나중에 삭제할 수 있나요?**
A: 네. Repository를 삭제하면 웹사이트도 삭제됩니다.

**Q: 여러 개 만들 수 있나요?**
A: 네! Repository를 여러 개 만들어 각각 다른 웹사이트 운영 가능합니다.

**Q: 로그인 기능을 추가할 수 있나요?**
A: GitHub Pages는 정적 사이트만 지원합니다. 로그인/데이터베이스가 필요하면 다른 호스팅이 필요합니다.

**Q: HTTPS가 적용되나요?**
A: 네! GitHub Pages는 자동으로 HTTPS를 제공합니다.

---

## 📞 도움이 필요하면

- GitHub 공식 문서: [docs.github.com/pages](https://docs.github.com/pages)
- GitHub 커뮤니티: [github.community](https://github.community)
- 이 파일의 문제 해결 섹션 참고

---

## ✨ 성공 체크리스트

배포 완료 후 확인:
- [ ] 웹사이트가 정상적으로 열린다
- [ ] 모든 탭이 작동한다
- [ ] 블로그 글 모달이 열린다
- [ ] 모바일에서도 잘 보인다
- [ ] URL을 친구에게 공유해봤다
- [ ] 블로그 글을 하나 추가해봤다

---

**축하합니다! 🎉**
이제 여러분의 연구 홈페이지가 인터넷에 공개되었습니다!

궁금한 점이 있으면 언제든 질문하세요!
