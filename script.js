// ===================== MOCK DATA =====================
let currentUser = { name: 'Atman', phone: '+1 (555) 123-4567', email: 'atman@travelmate.com', location: 'New York, USA', bio: 'Adventure seeker & food lover. Always ready for the next hike!', avatar: 'https://i.pravatar.cc/150?img=11' };

const trips = [
    { id:1, title:'Bali Beach Escape', destination:'Bali, Indonesia', dates:'Jul 10 - Jul 20, 2026', budget:'$1,200', spotsLeft:3, image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', creator:{name:'Priya S.',avatar:'https://i.pravatar.cc/150?img=5',verified:true,rating:'4.8'}, hasJoined:false },
    { id:2, title:'Paris Romantic Getaway', destination:'Paris, France', dates:'Aug 01 - Aug 10, 2026', budget:'$2,500', spotsLeft:2, image:'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80', creator:{name:'Leon D.',avatar:'https://i.pravatar.cc/150?img=12',verified:true,rating:'4.9'}, hasJoined:false },
    { id:3, title:'New York City Explorer', destination:'New York, USA', dates:'Sep 05 - Sep 12, 2026', budget:'$1,800', spotsLeft:4, image:'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=800&q=80', creator:{name:'Mike J.',avatar:'https://i.pravatar.cc/150?img=15',verified:false,rating:'4.5'}, hasJoined:false },
    { id:4, title:'Northern Lights Journey', destination:'Iceland', dates:'Nov 15 - Nov 25, 2026', budget:'$3,500', spotsLeft:2, image:'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80', creator:{name:'Sara K.',avatar:'https://i.pravatar.cc/150?img=9',verified:true,rating:'5.0'}, hasJoined:false },
    { id:5, title:'Japan Cherry Blossom', destination:'Kyoto & Tokyo', dates:'Apr 01 - Apr 14, 2027', budget:'$2,800', spotsLeft:1, image:'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80', creator:{name:'Yuki T.',avatar:'https://i.pravatar.cc/150?img=25',verified:true,rating:'4.7'}, hasJoined:false },
    { id:6, title:'Safari Adventure', destination:'Nairobi, Kenya', dates:'Oct 10 - Oct 22, 2026', budget:'$4,000', spotsLeft:5, image:'https://images.unsplash.com/photo-1547970810-dc1eac37d174?auto=format&fit=crop&w=800&q=80', creator:{name:'Amara O.',avatar:'https://i.pravatar.cc/150?img=32',verified:true,rating:'4.6'}, hasJoined:false },
    { id:7, title:'Swiss Alps Adventure', destination:'Zurich & Interlaken', dates:'Jan 10 - Jan 20, 2027', budget:'$3,000', spotsLeft:3, image:'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80', creator:{name:'David H.',avatar:'https://i.pravatar.cc/150?img=11',verified:true,rating:'5.0'}, hasJoined:false },
    { id:8, title:'Rome Historical Tour', destination:'Rome, Italy', dates:'Jun 10 - Jun 20, 2027', budget:'$2,200', spotsLeft:5, image:'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80', creator:{name:'Isabella G.',avatar:'https://i.pravatar.cc/150?img=20',verified:true,rating:'4.8'}, hasJoined:false },
    { id:9, title:'Sydney Coastline Drive', destination:'Sydney, Australia', dates:'Nov 01 - Nov 14, 2026', budget:'$3,100', spotsLeft:2, image:'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80', creator:{name:'Liam O.',avatar:'https://i.pravatar.cc/150?img=18',verified:false,rating:'4.4'}, hasJoined:false },
    { id:10, title:'Canadian Rockies Adventure', destination:'Banff, Canada', dates:'Jul 15 - Jul 25, 2027', budget:'$1,600', spotsLeft:3, image:'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80', creator:{name:'Emma W.',avatar:'https://i.pravatar.cc/150?img=43',verified:true,rating:'4.9'}, hasJoined:false }
];

let myTrips = [
    { id:101, title:'Northern Lights Chase', destination:'Tromsø, Norway', dates:'Dec 05 - Dec 12, 2026', status:'Upcoming', views:342, joined:3, capacity:5 },
    { id:102, title:'Alps Skiing Adventure', destination:'Chamonix, France', dates:'Jan 15 - Jan 22, 2027', status:'Planning', views:128, joined:1, capacity:4 }
];

let joinedTrips = [
    { id:999, title:'Amazon Rainforest Trek', destination:'Manaus, Brazil', dates:'Sep 01 - Sep 15, 2026', requestStatus:'Accepted', requestStatusColor:'#10B981' },
    { id:998, title:'Seoul City Exploration', destination:'Seoul, South Korea', dates:'Oct 10 - Oct 20, 2026', requestStatus:'Seen', requestStatusColor:'#3B82F6' },
    { id:997, title:'Sahara Desert Safari', destination:'Morocco', dates:'Nov 05 - Nov 12, 2026', requestStatus:'Declined', requestStatusColor:'#EF4444' }
];

const pendingRequests = [
    { id:201, user:'Riya Patel', avatar:'https://i.pravatar.cc/150?img=47', trip:'Northern Lights Chase', message:'I love the Arctic! Please let me join.', status:'pending' },
    { id:202, user:'Carlos Mendez', avatar:'https://i.pravatar.cc/150?img=60', trip:'Alps Skiing Adventure', message:'Experienced skier, would love to join!', status:'pending' }
];

// ===================== RENDER FUNCTIONS =====================
function renderTrips(data) {
    const grid = document.getElementById('tripsGrid');
    if(!grid) return;
    const list = data || trips;
    if(list.length === 0) { grid.innerHTML = '<p style="color:var(--text-secondary); grid-column:1/-1; text-align:center; padding:3rem;">No trips found. Try a different search.</p>'; return; }
    grid.innerHTML = list.map(trip => {
        const isOwn = trip.creator.name === currentUser.name;
        return `
        <div class="trip-card fade-in-up animate-scroll">
            <img src="${trip.image}" alt="${trip.title}" class="trip-image">
            <div class="trip-content">
                <div class="trip-header">
                    <h3 class="trip-title">${trip.title}</h3>
                    <span class="trip-price">${trip.budget}</span>
                </div>
                <div class="trip-details">
                    <span><i class="fa-solid fa-location-dot"></i> ${trip.destination}</span>
                    <span><i class="fa-regular fa-calendar"></i> ${trip.dates}</span>
                    <span><i class="fa-solid fa-user-group"></i> ${trip.spotsLeft} spots left</span>
                </div>
                <div class="trip-creator">
                    <img src="${trip.creator.avatar}" alt="${trip.creator.name}" class="creator-avatar">
                    <div class="creator-info">
                        <h4>${trip.creator.name} ${trip.creator.verified ? '<i class="fa-solid fa-circle-check verified-badge"></i>' : ''}</h4>
                        <p><i class="fa-solid fa-star" style="color:#F59E0B"></i> ${trip.creator.rating}</p>
                    </div>
                </div>
                ${!isOwn ? `<button class="btn-primary join-btn join-trip-btn ${trip.hasJoined ? 'joined-btn' : ''}" data-id="${trip.id}" ${trip.hasJoined ? 'disabled' : ''}>
                    ${trip.hasJoined ? '<i class="fa-solid fa-check"></i> Requested' : '<i class="fa-solid fa-paper-plane"></i> Join Trip'}
                </button>` : `<button class="btn-primary join-btn" disabled style="background:var(--surface-2);color:var(--text-secondary);cursor:default;"><i class="fa-solid fa-user"></i> Your Trip</button>`}
            </div>
        </div>`;
    }).join('');
    observeScrollElements();
}

function renderDashboard() {
    // My Trips
    const myTripsList = document.getElementById('myTripsList');
    if(myTripsList) {
        myTripsList.innerHTML = myTrips.length === 0 ? `<p class="empty-msg">No trips created yet. <a href="#" class="nav-btn" data-target="explore" style="color:var(--primary-color);">Create one!</a></p>` :
        myTrips.map(t => `
            <div class="list-item">
                <div class="item-info">
                    <h4>${t.title}</h4>
                    <p><i class="fa-solid fa-location-dot"></i> ${t.destination} &bull; ${t.dates}</p>
                    <p class="item-meta"><i class="fa-regular fa-eye"></i> ${t.views} views &nbsp;&bull;&nbsp; <i class="fa-solid fa-users"></i> ${t.joined}/${t.capacity} joined</p>
                </div>
                <span class="badge">${t.status}</span>
            </div>`).join('');
    }

    // Joined Trips
    const joinedList = document.getElementById('joinedTripsList');
    if(joinedList) {
        joinedList.innerHTML = joinedTrips.length === 0 ? `<p class="empty-msg">You haven't joined any trips yet.</p>` :
        joinedTrips.map(t => `
            <div class="list-item">
                <div class="item-info">
                    <h4>${t.title}</h4>
                    <p><i class="fa-solid fa-location-dot"></i> ${t.destination} &bull; ${t.dates}</p>
                </div>
                <span class="badge" style="background:${t.requestStatusColor || 'var(--verified-color)'};">${t.requestStatus}</span>
            </div>`).join('');
    }

    // Pending Requests
    const pendingList = document.getElementById('pendingRequestsList');
    if(pendingList) {
        pendingList.innerHTML = pendingRequests.length === 0 ? `<p class="empty-msg">No pending requests.</p>` :
        pendingRequests.map(r => `
            <div class="list-item" id="req-${r.id}">
                <div class="req-user">
                    <img src="${r.avatar}" alt="${r.user}">
                    <div class="item-info">
                        <h4>${r.user}</h4>
                        <p>${r.trip}</p>
                        <p class="item-meta">"${r.message}"</p>
                    </div>
                </div>
                <div class="request-actions">
                    <button class="btn-accept" data-reqid="${r.id}"><i class="fa-solid fa-check"></i></button>
                    <button class="btn-decline" data-reqid="${r.id}"><i class="fa-solid fa-xmark"></i></button>
                </div>
            </div>`).join('');
    }

    // Update stat
    const statUpcoming = document.getElementById('statUpcoming');
    if(statUpcoming) statUpcoming.textContent = myTrips.filter(t=>t.status==='Upcoming').length;

    // update pending badge
    const pc = document.getElementById('pendingCount');
    if(pc) pc.textContent = pendingRequests.filter(r=>r.status==='pending').length;
}

function syncProfileUI() {
    ['navUsername','dashName','profileDisplayName'].forEach(id => {
        const el = document.getElementById(id);
        if(!el) return;
        if(id === 'navUsername') el.innerHTML = `${currentUser.name} <i class="fa-solid fa-circle-check verified-badge"></i>`;
        else if(id === 'dashName') el.innerHTML = `${currentUser.name} <i class="fa-solid fa-circle-check verified-badge"></i>`;
        else el.textContent = currentUser.name;
    });
    const dashBio = document.getElementById('dashBio');
    if(dashBio) dashBio.textContent = currentUser.bio;
    const pEmail = document.getElementById('profileDisplayEmail');
    if(pEmail) pEmail.textContent = currentUser.email;
}

// ===================== NAVIGATION =====================
const pages = ['home','explore','dashboard','profile','auth'];
function switchTab(target) {
    pages.forEach(p => {
        const el = document.getElementById(p);
        if(el) { el.style.display = 'none'; }
    });
    const show = document.getElementById(target);
    if(show) { show.style.display = 'block'; void show.offsetWidth; show.classList.add('page'); }
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.style.color = btn.getAttribute('data-target') === target ? 'var(--primary-color)' : '';
    });
    window.scrollTo(0,0);
}

// ===================== SCROLL ANIMATION =====================
function observeScrollElements() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.animate-scroll').forEach(el => observer.observe(el));
}

// ===================== MAIN INIT =====================
document.addEventListener('DOMContentLoaded', () => {
    renderTrips();
    renderDashboard();
    syncProfileUI();

    // Observe step cards on home
    document.querySelectorAll('.step-card').forEach(el => el.classList.add('animate-scroll'));
    observeScrollElements();

    // ---- AUTH ----
    document.getElementById('showSignup').addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('signupForm').style.display = 'block';
    });
    document.getElementById('showLogin').addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    });

    // Login submit
    document.getElementById('loginFormEl').addEventListener('submit', e => {
        e.preventDefault();
        document.getElementById('authPage').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        switchTab('home');
    });

    // Sign up submit
    document.getElementById('signupFormEl').addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('signupName').value.trim() || 'Traveler';
        const phone = document.getElementById('signupPhone').value.trim() || '';
        const email = document.getElementById('signupEmail').value.trim();
        currentUser.name = name;
        currentUser.phone = phone;
        currentUser.email = email;
        // prefill profile form
        document.getElementById('profileName').value = name;
        document.getElementById('profilePhone').value = phone;
        document.getElementById('profileEmail').value = email;
        syncProfileUI();
        document.getElementById('authPage').style.display = 'none';
        document.getElementById('mainApp').style.display = 'block';
        switchTab('dashboard');
    });

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', e => {
        e.preventDefault();
        document.getElementById('mainApp').style.display = 'none';
        document.getElementById('authPage').style.display = 'flex';
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('signupForm').style.display = 'none';
        document.getElementById('dropdownMenu').classList.remove('active');
    });

    // Password toggle
    document.querySelectorAll('.toggle-pass').forEach(btn => {
        btn.addEventListener('click', () => {
            const inp = document.getElementById(btn.getAttribute('data-target'));
            if(!inp) return;
            if(inp.type === 'password') { inp.type = 'text'; btn.classList.replace('fa-eye','fa-eye-slash'); }
            else { inp.type = 'password'; btn.classList.replace('fa-eye-slash','fa-eye'); }
        });
    });

    // ---- SPA NAV ----
    document.body.addEventListener('click', e => {
        const btn = e.target.closest('.nav-btn');
        if(btn && btn.getAttribute('data-target')) {
            e.preventDefault();
            switchTab(btn.getAttribute('data-target'));
            document.getElementById('dropdownMenu')?.classList.remove('active');
        }
    });

    // User profile dropdown toggle
    document.getElementById('userProfileToggle')?.addEventListener('click', e => {
        e.stopPropagation();
        document.getElementById('dropdownMenu')?.classList.toggle('active');
    });
    document.addEventListener('click', () => document.getElementById('dropdownMenu')?.classList.remove('active'));

    // ---- SEARCH ----
    document.getElementById('searchBtn')?.addEventListener('click', () => {
        const loc = document.getElementById('searchInputLocation').value.toLowerCase().trim();
        const date = document.getElementById('searchInputDate').value.toLowerCase().trim();
        const filtered = trips.filter(t => {
            const mLoc = !loc || t.destination.toLowerCase().includes(loc) || t.title.toLowerCase().includes(loc);
            const mDate = !date || t.dates.toLowerCase().includes(date);
            return mLoc && mDate;
        });
        renderTrips(filtered);
        switchTab('explore');
        const sr = document.getElementById('searchResults');
        const srt = document.getElementById('searchResultsText');
        if(sr && srt) { sr.style.display = 'flex'; srt.textContent = `Found ${filtered.length} trip(s) for "${loc || date}"`; }
    });

    document.getElementById('clearSearch')?.addEventListener('click', e => {
        e.preventDefault();
        renderTrips();
        document.getElementById('searchResults').style.display = 'none';
        document.getElementById('searchInputLocation').value = '';
        document.getElementById('searchInputDate').value = '';
    });

    // ---- NEW TRIP MODAL ----
    const modal = document.getElementById('newTripModal');
    ['newTripBtn','newTripBtnDash'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', () => modal.classList.add('active'));
    });
    document.getElementById('closeModal')?.addEventListener('click', () => modal.classList.remove('active'));
    modal?.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('active'); });

    document.getElementById('createTripForm')?.addEventListener('submit', e => {
        e.preventDefault();
        const title = document.getElementById('tripTitle').value;
        const dest = document.getElementById('tripDestination').value;
        const budget = document.getElementById('tripBudget').value;
        const start = document.getElementById('tripStart').value;
        const end = document.getElementById('tripEnd').value;
        const cap = parseInt(document.getElementById('tripCapacity').value);
        const dates = `${new Date(start).toLocaleDateString('en-US',{month:'short',day:'numeric'})} - ${new Date(end).toLocaleDateString('en-US',{month:'short',day:'numeric', year:'numeric'})}`;

        // Add to myTrips dashboard
        myTrips.unshift({ id: Date.now(), title, destination: dest, dates, status:'Planning', views:0, joined:0, capacity: cap });

        // Add to global feed
        trips.unshift({ id: Date.now()+1, title, destination: dest, dates, budget, spotsLeft: cap, image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', creator:{ name: currentUser.name, avatar: currentUser.avatar, verified:true, rating:'4.9' }, hasJoined:false });

        renderDashboard();
        renderTrips();
        modal.classList.remove('active');
        e.target.reset();
    });

    // ---- JOIN TRIP ----
    document.body.addEventListener('click', e => {
        const btn = e.target.closest('.join-trip-btn');
        if(!btn || btn.disabled) return;
        const id = parseInt(btn.getAttribute('data-id'));
        const trip = trips.find(t => t.id === id);
        if(trip && !trip.hasJoined) {
            trip.hasJoined = true;
            joinedTrips.unshift({ ...trip, requestStatus:'Pending', requestStatusColor:'#F59E0B' });
            renderTrips();
            renderDashboard();
        }
    });

    // ---- ACCEPT / DECLINE REQUESTS ----
    document.body.addEventListener('click', e => {
        if(e.target.closest('.btn-accept')) {
            const reqId = parseInt(e.target.closest('.btn-accept').getAttribute('data-reqid'));
            const item = document.getElementById(`req-${reqId}`);
            if(item) { item.querySelector('.request-actions').innerHTML = '<span style="color:var(--verified-color);font-weight:600;font-size:0.85rem;">Accepted</span>'; }
            const req = pendingRequests.find(r=>r.id===reqId);
            if(req) req.status = 'accepted';
            document.getElementById('pendingCount').textContent = pendingRequests.filter(r=>r.status==='pending').length;
        }
        if(e.target.closest('.btn-decline')) {
            const reqId = parseInt(e.target.closest('.btn-decline').getAttribute('data-reqid'));
            const item = document.getElementById(`req-${reqId}`);
            if(item) item.style.display = 'none';
            const req = pendingRequests.find(r=>r.id===reqId);
            if(req) req.status = 'declined';
            document.getElementById('pendingCount').textContent = pendingRequests.filter(r=>r.status==='pending').length;
        }
    });

    // ---- PROFILE EDIT ----
    const profileInputs = ['profileName','profilePhone','profileEmail','profileLocation','profileBio'];
    document.getElementById('enableEditBtn')?.addEventListener('click', () => {
        profileInputs.forEach(id => {
            const el = document.getElementById(id);
            if(el) { el.disabled = false; el.style.opacity = '1'; }
        });
        document.getElementById('saveRow').style.display = 'grid';
        document.getElementById('enableEditBtn').style.display = 'none';
    });

    document.getElementById('cancelEditBtn')?.addEventListener('click', () => {
        profileInputs.forEach(id => {
            const el = document.getElementById(id);
            if(el) el.disabled = true;
        });
        document.getElementById('saveRow').style.display = 'none';
        document.getElementById('enableEditBtn').style.display = 'flex';
    });

    document.getElementById('profileForm')?.addEventListener('submit', e => {
        e.preventDefault();
        currentUser.name = document.getElementById('profileName').value.trim();
        currentUser.phone = document.getElementById('profilePhone').value.trim();
        currentUser.email = document.getElementById('profileEmail').value.trim();
        currentUser.bio = document.getElementById('profileBio').value.trim();
        profileInputs.forEach(id => { const el = document.getElementById(id); if(el) el.disabled = true; });
        document.getElementById('saveRow').style.display = 'none';
        document.getElementById('enableEditBtn').style.display = 'flex';
        syncProfileUI();
    });

    // Travel preference tags toggle
    document.querySelectorAll('.pref-tag').forEach(tag => {
        tag.addEventListener('click', () => tag.classList.toggle('active'));
    });
});
