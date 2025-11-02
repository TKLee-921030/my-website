// Blog posts data - 여기에 글을 추가/수정/삭제하세요
const blogPosts = [
    {
        id: 1,
        title: "첫 번째 연구 노트",
        date: "2024-11-01",
        excerpt: "진행 중인 연구에 대한 간단한 소개입니다. 여기서는 연구의 배경과 목적에 대해 다룹니다.",
        content: `
            <p>이 연구는 특정 분야에서의 새로운 접근 방법을 탐구합니다.</p>
            
            <h3>연구 배경</h3>
            <p>기존 연구들의 한계점을 극복하기 위해 새로운 방법론을 제시하고자 합니다.</p>
            
            <h3>진행 상황</h3>
            <p>현재 데이터 수집 단계를 마치고 분석을 시작하는 중입니다.</p>
            
            <h3>향후 계획</h3>
            <p>다음 달까지 예비 결과를 도출하고, 이를 바탕으로 본격적인 연구를 진행할 예정입니다.</p>
        `
    },
    {
        id: 2,
        title: "최근 학회 참석 후기",
        date: "2024-10-28",
        excerpt: "최근 참석한 학회에서의 인사이트와 새로운 연구 아이디어를 공유합니다.",
        content: `
            <p>이번 학회에서는 다양한 연구자들과 교류하며 많은 영감을 받았습니다.</p>
            
            <h3>주요 세션</h3>
            <p>특히 인상 깊었던 세션은 최신 연구 동향에 관한 것이었습니다.</p>
            
            <h3>네트워킹</h3>
            <p>여러 연구자들과의 대화를 통해 향후 협업 가능성을 발견했습니다.</p>
            
            <h3>적용 가능성</h3>
            <p>학회에서 얻은 아이디어를 현재 진행 중인 연구에 적용해볼 계획입니다.</p>
        `
    },
    {
        id: 3,
        title: "연구 방법론에 대한 고찰",
        date: "2024-10-15",
        excerpt: "효과적인 연구 방법론 선택과 적용에 대한 개인적인 생각을 정리했습니다.",
        content: `
            <p>연구를 진행하면서 방법론의 중요성을 다시 한번 느끼게 되었습니다.</p>
            
            <h3>방법론 선택의 기준</h3>
            <p>연구 질문에 가장 적합한 방법론을 선택하는 것이 핵심입니다.</p>
            
            <h3>실제 적용 경험</h3>
            <p>이론과 실제 사이의 간극을 메우는 과정에서 많은 것을 배웠습니다.</p>
            
            <h3>개선점</h3>
            <p>앞으로는 더 체계적인 접근을 통해 연구의 질을 높이고자 합니다.</p>
        `
    }
];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setupTabNavigation();
    loadBlogPosts();
    
    // Show home tab by default
    const urlHash = window.location.hash.replace('#', '') || 'home';
    switchTab(urlHash);
});

// Setup tab navigation
function setupTabNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
            
            // Update URL hash
            window.location.hash = tabName;
        });
    });
}

// Switch between tabs
function switchTab(tabName) {
    // Hide all tab contents
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all nav links
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to selected nav link
    const selectedNavLink = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedNavLink) {
        selectedNavLink.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Load blog posts from data
function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    
    if (!blogContainer) return;
    
    // Sort posts by date (newest first)
    const sortedPosts = blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Clear container
    blogContainer.innerHTML = '';
    
    // Create post elements
    sortedPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-card';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p class="date">${formatDate(post.date)}</p>
            <p class="excerpt">${post.excerpt}</p>
        `;
        
        // Add click event to open modal
        postElement.addEventListener('click', () => openBlogPost(post));
        
        blogContainer.appendChild(postElement);
    });
}

// Format date to Korean format
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
}

// Open blog post in modal
function openBlogPost(post) {
    const modal = document.getElementById('blog-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (!modal || !modalBody) return;
    
    // Set modal content
    modalBody.innerHTML = `
        <h2>${post.title}</h2>
        <p class="date">${formatDate(post.date)}</p>
        <div class="content">
            ${post.content}
        </div>
    `;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close blog post modal
function closeBlogPost() {
    const modal = document.getElementById('blog-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Setup modal close events
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('blog-modal');
    const closeBtn = document.querySelector('.modal-close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeBlogPost);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeBlogPost();
            }
        });
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeBlogPost();
    }
});

// Make switchTab globally accessible for onclick handlers
window.switchTab = switchTab;
