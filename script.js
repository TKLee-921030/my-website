// Blog posts data - Add/edit/delete posts here
const blogPosts = [
    {
        id: 1,
        title: "The Future of Building Energy Management with Digital Twin Technology",
        date: "2024-11-02",
        excerpt: "Exploring how digital twin technology is revolutionizing building energy management and future development directions.",
        content: `
            <p>Digital twin technology creates virtual replicas of physical assets to monitor and predict real-time status. In building energy management, this technology is becoming a game changer.</p>
            
            <h3>Why Digital Twin?</h3>
            <p>Traditional BEMS focused on monitoring and visualization, but struggled to operate according to actual energy management objectives. Digital twins combine simulation models with real-time data to enable highly reliable prediction and control.</p>
            
            <h3>Key Implementation Components</h3>
            <p>The digital energy twin model proposed in my doctoral dissertation features:</p>
            <ul>
                <li>Cost-effective simulation model construction (40% reduction in computational load)</li>
                <li>High-precision demand forecasting based on hybrid models (R² > 0.87)</li>
                <li>Integrated management framework for building portfolios</li>
            </ul>
            
            <h3>Demonstration Results</h3>
            <p>Field demonstration across 10 office buildings achieved 14.6% heating and 5.9% cooling energy savings. This proves that practical energy management beyond simple monitoring is possible.</p>
            
            <h3>Future Directions</h3>
            <p>Planning to develop multi-agent-based integrated management systems and operational support chatbots utilizing local LLMs.</p>
        `
    },
    {
        id: 2,
        title: "BEMS Market Trends: SaaS Models and Lightweight Technologies",
        date: "2024-10-28",
        excerpt: "Analyzing why the global BEMS market is transitioning to SaaS models and the importance of lightweight technologies.",
        content: `
            <p>The Building Energy Management System (BEMS) market is experiencing rapid growth. The global market is projected to grow from $1.94 billion in 2021 to approximately $3 billion by 2025.</p>
            
            <h3>Key Market Drivers</h3>
            <p>Three major trends are driving the market:</p>
            
            <h3>1. Cloud Platform Modularization</h3>
            <p>Shifting from large integrated systems to modular subscription services. This is a key strategy to reduce initial investment and ensure scalability.</p>
            
            <h3>2. Smart BEMS (IoT + AI)</h3>
            <p>Evolving beyond simple monitoring to advanced systems capable of predictive maintenance and predictive control. Our AI-based demand forecasting model reflects exactly this trend.</p>
            
            <h3>3. Lightweight Technology</h3>
            <p>Cost-effective solutions are essential for application to small and medium-sized buildings. We developed a methodology combining BES model calibration with AI model stacking, reducing computational costs by 40% while maintaining high accuracy.</p>
            
            <h3>Domestic Market Outlook</h3>
            <p>The domestic BEMS market is also projected to grow from 324 billion won in 2021 to 482 billion won by 2025, with an average annual growth rate of 10.4%. Demand is particularly surging in public and commercial buildings.</p>
        `
    },
    {
        id: 3,
        title: "Innovation in Energy Data Collection with Virtual Sensors",
        date: "2024-10-15",
        excerpt: "Introducing virtual sensor technology that overcomes the limitations of physical sensors and its applications.",
        content: `
            <p>Data collection is the foundation of building energy management. However, it is difficult to secure building-wide data with physical sensors alone.</p>
            
            <h3>Limitations of Physical Sensors</h3>
            <p>Traditional sensor networks have the following issues:</p>
            <ul>
                <li>High installation costs</li>
                <li>Spatial blind spots</li>
                <li>Maintenance burden</li>
                <li>Data loss during sensor failures</li>
            </ul>
            
            <h3>Virtual Sensor Principles</h3>
            <p>Virtual sensors combine physical sensor data with simulation models to estimate data at unmeasured locations. High accuracy can be achieved using machine learning-based data fusion techniques.</p>
            
            <h3>Practical Application Case</h3>
            <p>In a Korea-China collaboration project, we built a building energy monitoring system combining ubiquitous sensor networks with virtual sensors. We achieved over 95% accuracy in estimating temperature and energy consumption in areas without physical sensors.</p>
            
            <h3>Patent Application</h3>
            <p>Based on this technology, we filed a patent for "Virtual Sensor-Based Automatic Control System" (Application No. 10-2024-0195107). We plan to develop it into an autonomous control system utilizing data collected by virtual sensors.</p>
            
            <h3>Future Direction</h3>
            <p>Virtual sensor technology will become a core component of digital twins. The combination of real-time data and simulation will enable more sophisticated energy management.</p>
        `
    },
    {
        id: 4,
        title: "AI-Based Demand Forecasting: Excellence of Hybrid Models",
        date: "2024-09-20",
        excerpt: "Explaining why hybrid approaches combining pure data-driven models with physics-based models are superior.",
        content: `
            <p>There are two main approaches to building energy demand forecasting: Data-Driven Models (DDM) and Physics-based Engineering Models (PEM). Understanding and combining their respective advantages and disadvantages is key.</p>
            
            <h3>Data-Driven Models (DDM)</h3>
            <p>Machine learning/deep learning-based approaches.</p>
            <p><strong>Advantages:</strong> Fast learning, complex pattern recognition</p>
            <p><strong>Disadvantages:</strong> Black box, difficult physical interpretation, training data dependency</p>
            
            <h3>Physics-Based Models (PEM)</h3>
            <p>Utilizing simulation tools like TRNSYS and EnergyPlus.</p>
            <p><strong>Advantages:</strong> Physically interpretable, easy to test new scenarios</p>
            <p><strong>Disadvantages:</strong> Requires accurate input data, high computational costs</p>
            
            <h3>Innovation of Hybrid Models</h3>
            <p>The Two-Process hybrid model proposed in our Energy journal paper:</p>
            <ol>
                <li>Reflects building physical characteristics with PEM</li>
                <li>Learns real-time operational patterns with DDM</li>
                <li>Ensemble of both models for final prediction</li>
            </ol>
            
            <h3>Performance Validation</h3>
            <p>Achieved high accuracy with CV-RMSE of 14.6% for heating and 5.9% for cooling. This meets ASHRAE guidelines (15%).</p>
            
            <h3>Practical Value</h3>
            <p>Can automatically generate set-point temperature control guidelines based on predicted loads, enabling integration with autonomous control systems.</p>
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
