// Blog posts data - 여기에 글을 추가/수정/삭제하세요
const blogPosts = [
    {
        id: 1,
        title: "디지털 트윈 기반 건물 에너지 관리의 미래",
        date: "2024-11-02",
        excerpt: "디지털 트윈 기술이 건물 에너지 관리 분야에 어떻게 혁신을 가져오고 있는지, 그리고 향후 발전 방향에 대해 논의합니다.",
        content: `
            <p>디지털 트윈은 물리적 자산의 가상 복제본을 생성하여 실시간으로 상태를 모니터링하고 예측하는 기술입니다. 건물 에너지 관리 분야에서 이 기술은 게임 체인저가 되고 있습니다.</p>
            
            <h3>왜 디지털 트윈인가?</h3>
            <p>전통적인 BEMS는 모니터링과 가시화에 중점을 두었지만, 실질적인 에너지 관리 목표에 맞게 운용하기 어려웠습니다. 디지털 트윈은 시뮬레이션 모델과 실시간 데이터를 결합하여 높은 신뢰성의 예측과 제어를 가능하게 합니다.</p>
            
            <h3>핵심 구현 요소</h3>
            <p>박사 논문에서 제안한 디지털 에너지 트윈 모델은 다음과 같은 특징을 가집니다:</p>
            <ul>
                <li>비용 효과적인 시뮬레이션 모델 구축 (계산량 40% 절감)</li>
                <li>하이브리드 모델 기반 고정밀 수요예측 (R² > 0.87)</li>
                <li>건물군 단위의 통합관리 프레임워크</li>
            </ul>
            
            <h3>실증 결과</h3>
            <p>10개소의 오피스 건물을 대상으로 한 실증에서 난방 14.6%, 냉방 5.9%의 에너지 절감을 달성했습니다. 이는 단순 모니터링을 넘어 실질적인 에너지 관리가 가능함을 보여줍니다.</p>
            
            <h3>향후 방향</h3>
            <p>멀티 에이전트 기반 통합관리 시스템과 로컬 LLM을 활용한 운영 지원 챗봇 개발을 계획하고 있습니다.</p>
        `
    },
    {
        id: 2,
        title: "BEMS 시장 트렌드: SaaS 모델과 경량화",
        date: "2024-10-28",
        excerpt: "글로벌 BEMS 시장이 SaaS 모델로 전환되는 이유와 경량화 기술의 중요성에 대해 분석합니다.",
        content: `
            <p>건물 에너지 관리 시스템(BEMS) 시장이 급격히 성장하고 있습니다. 2021년 글로벌 시장 규모 19.4억 달러에서 2025년 약 30억 달러로 성장할 것으로 전망됩니다.</p>
            
            <h3>시장 변화의 핵심 동인</h3>
            <p>세 가지 주요 트렌드가 시장을 주도하고 있습니다:</p>
            
            <h3>1. 클라우드 플랫폼 모듈화</h3>
            <p>기존의 대형 통합 시스템에서 모듈형 구독 서비스로 전환되고 있습니다. 이는 초기 투자 부담을 줄이고 확장성을 확보하는 핵심 전략입니다.</p>
            
            <h3>2. 스마트 BEMS (IoT + AI)</h3>
            <p>단순 모니터링을 넘어 예측 유지보수와 예측 제어가 가능한 고도화된 시스템으로 진화하고 있습니다. 저희 연구에서 개발한 AI 기반 수요예측 모델이 바로 이러한 트렌드를 반영합니다.</p>
            
            <h3>3. 경량화 기술</h3>
            <p>중소형 건물에 적용하기 위해서는 비용 효과적인 솔루션이 필수입니다. BES 모델 보정과 AI 모델 스택을 결합하여 계산 비용을 40% 절감하면서도 높은 정확도를 유지하는 방법론을 개발했습니다.</p>
            
            <h3>국내 시장 전망</h3>
            <p>국내 BEMS 시장도 2021년 3,240억 원에서 연평균 10.4% 성장하여 2025년 4,820억 원 규모로 성장할 전망입니다. 특히 공공건물과 상업용 건물에서의 수요가 급증하고 있습니다.</p>
        `
    },
    {
        id: 3,
        title: "가상센서 기반 에너지 데이터 수집의 혁신",
        date: "2024-10-15",
        excerpt: "물리적 센서의 한계를 극복하는 가상센서 기술과 그 활용 방안에 대해 소개합니다.",
        content: `
            <p>건물 에너지 관리에서 데이터 수집은 모든 것의 시작입니다. 하지만 물리적 센서만으로는 건물 전역의 데이터를 확보하기 어렵습니다.</p>
            
            <h3>물리 센서의 한계</h3>
            <p>전통적인 센서 네트워크는 다음과 같은 문제를 가지고 있습니다:</p>
            <ul>
                <li>설치 비용이 높음</li>
                <li>공간적 음영 영역 존재</li>
                <li>유지보수 부담</li>
                <li>센서 고장 시 데이터 손실</li>
            </ul>
            
            <h3>가상센서의 원리</h3>
            <p>가상센서는 물리적 센서 데이터와 시뮬레이션 모델을 결합하여 측정되지 않는 위치의 데이터를 추정합니다. 머신러닝 기반 데이터 융합 기법을 활용하여 높은 정확도를 달성할 수 있습니다.</p>
            
            <h3>실제 적용 사례</h3>
            <p>한중협력연구 프로젝트에서 유비쿼터스 센서 네트워크와 가상센서를 결합하여 건물 에너지 모니터링 시스템을 구축했습니다. 물리 센서가 설치되지 않은 구역의 온도와 에너지 소비를 95% 이상의 정확도로 추정할 수 있었습니다.</p>
            
            <h3>특허 출원</h3>
            <p>이 기술을 바탕으로 "가상센서 기반 자동제어 시스템" 특허를 출원했습니다 (출원번호: 10-2024-0195107). 가상센서로 수집된 데이터를 활용한 자율제어 시스템으로 발전시킬 계획입니다.</p>
            
            <h3>미래 방향</h3>
            <p>가상센서 기술은 디지털 트윈의 핵심 구성요소가 될 것입니다. 실시간 데이터와 시뮬레이션의 결합으로 더욱 정교한 에너지 관리가 가능해질 것입니다.</p>
        `
    },
    {
        id: 4,
        title: "AI 기반 수요예측: 하이브리드 모델의 우수성",
        date: "2024-09-20",
        excerpt: "순수 데이터 기반 모델과 물리 기반 모델을 결합한 하이브리드 접근법이 왜 더 우수한지 설명합니다.",
        content: `
            <p>건물 에너지 수요예측에는 크게 두 가지 접근법이 있습니다: 데이터 기반 모델(DDM)과 물리 기반 모델(PEM). 각각의 장단점을 이해하고 결합하는 것이 핵심입니다.</p>
            
            <h3>데이터 기반 모델 (DDM)</h3>
            <p>머신러닝/딥러닝을 활용한 접근법입니다.</p>
            <p><strong>장점:</strong> 빠른 학습, 복잡한 패턴 인식</p>
            <p><strong>단점:</strong> 블랙박스, 물리적 해석 어려움, 학습 데이터 의존성</p>
            
            <h3>물리 기반 모델 (PEM)</h3>
            <p>TRNSYS, EnergyPlus 등의 시뮬레이션 도구를 활용합니다.</p>
            <p><strong>장점:</strong> 물리적 해석 가능, 새로운 시나리오 테스트 용이</p>
            <p><strong>단점:</strong> 정확한 입력 데이터 필요, 계산 비용 높음</p>
            
            <h3>하이브리드 모델의 혁신</h3>
            <p>Energy 저널에 발표한 논문에서 제안한 Two-Process 하이브리드 모델은:</p>
            <ol>
                <li>PEM으로 건물의 물리적 특성 반영</li>
                <li>DDM으로 실시간 운영 패턴 학습</li>
                <li>두 모델의 앙상블로 최종 예측</li>
            </ol>
            
            <h3>성능 검증</h3>
            <p>CV-RMSE 기준으로 난방 14.6%, 냉방 5.9%의 높은 정확도를 달성했습니다. 이는 ASHRAE 가이드라인(15%)을 충족하는 수준입니다.</p>
            
            <h3>실용적 가치</h3>
            <p>예측된 부하를 기반으로 설정온도 제어 가이드를 자동 생성할 수 있어, 자율제어 시스템과의 연동이 가능합니다.</p>
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
