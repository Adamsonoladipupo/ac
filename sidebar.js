// Create Sidebar
function create_sidebar () {
    // create the sidebar menu container
    const sidebarContainer = document.createElement('div');
    sidebarContainer.id = 'sidebar-container';
    sidebarContainer.classList.add('sidebar');
    
    // create the sidebar header div
    const sidebarHeader = document.createElement('div');
    sidebarHeader.id = 'sidebar-header';


    //add an header title to the sidebar header
    const headerTitle = document.createElement('h3');
    headerTitle.textContent = ('Airtime Cabal');
    // Append header title to the sidebar header
    sidebarHeader.appendChild(headerTitle);

    // add span to contain the cancel SVG icon
    const cancelIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 5.636l-1.414-1.414L12 10.586L6.05 4.636L4.636 6.05L10.586 12L4.636 17.95l1.414 1.414L12 13.414l5.95 5.95l1.414-1.414L13.414 12L18.364 6.05z"/></svg>`;
    const cancel = document.createElement('span');
    cancel.innerHTML = cancelIcon;
    cancel.id = 'close-btn';
    // append cancel icon to the sidebar header
    sidebarHeader.appendChild(cancel);

    // cretae the sidebar items div
    const sidebarItems = document.createElement('div');
    sidebarItems.id = 'sidebar-items';

    // Define all SVGs icons
    const overviewIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 9V4H20v5zM4 12V4h6.5v8zm9.5 8v-8H20v8zM4 20v-5h6.5v5zm1-9h4.5V5H5zm9.5 8H19v-6h-4.5zm0-11H19V5h-4.5zM5 19h4.5v-3H5zm4.5-3"/></svg>`;
    const fundWalletIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 7H18V6a3.003 3.003 0 0 0-3-3H4.5A2.5 2.5 0 0 0 2 5.5V18a3.003 3.003 0 0 0 3 3h14.5a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 19.5 7m-15-3H15a2.003 2.003 0 0 1 2 2v1H4.5a1.5 1.5 0 1 1 0-3M21 16h-2a2 2 0 0 1 0-4h2zm0-5h-2a3 3 0 1 0 0 6h2v1.5a1.5 1.5 0 0 1-1.5 1.5H5a2.003 2.003 0 0 1-2-2V7.499c.432.326.959.502 1.5.501h15A1.5 1.5 0 0 1 21 9.5z"/></svg>`;
    const dataPlanIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 2048 2048"><path fill="currentColor" d="M896 640h128v1408H896zM372 244q-58 58-103 126t-77 144t-47 155t-17 163q0 82 16 162t48 156t76 143t104 127l-91 91q-136-137-208-311T0 832q0-193 72-367t209-312zm1267-91q136 137 208 311t73 368q0 193-72 367t-209 312l-91-91q58-58 103-126t77-144t47-155t17-163q0-82-16-162t-48-156t-76-143t-104-127zm-272 272q81 81 125 186t44 221q0 115-44 220t-125 187l-90-90q63-63 96-145t34-172q0-89-33-171t-97-146zm-724 90q-63 63-97 145t-34 172q0 89 34 171t97 146l-90 90q-81-81-125-186t-44-221q0-115 44-220t125-187z"/></svg>`;
    const airtimeCashIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 7.027a6.044 6.044 0 0 1 12 1.016A6.044 6.044 0 0 1 16.973 14M8 22a6 6 0 1 0 0-12a6 6 0 0 0 0 12M2 9c0-3.317 2.683-6 6-6l-.857 1.714M22 15c0 3.317-2.683 6-6 6l.857-1.714" color="currentColor"/></svg>`;
    const buyAirtimeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><circle cx="16" cy="25" r="2" fill="currentColor"/><path fill="currentColor" d="m10.47 19.233l1.414 1.413a5.97 5.97 0 0 1 8.223-.009l1.413-1.413a7.963 7.963 0 0 0-11.05.01Z"/><path fill="currentColor" d="m6.229 14.993l1.414 1.413a11.955 11.955 0 0 1 16.704-.01l1.413-1.413a13.95 13.95 0 0 0-19.531.01"/><path fill="currentColor" d="M30 10.741a19.94 19.94 0 0 0-28 0v.023l1.404 1.404a17.934 17.934 0 0 1 25.181-.01L30 10.743Z"/></svg>`;
    const electrityIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" color="currentColor"><path d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14"/><path d="M14 10c-.613.643-1.289 1-2 1s-1.387-.357-2-1m-2.617 7.098c-.092-.276-.138-.415-.133-.527a.6.6 0 0 1 .382-.53c.104-.041.25-.041.54-.041h7.656c.291 0 .436 0 .54.04a.6.6 0 0 1 .382.531c.005.112-.041.25-.133.527c-.17.511-.255.767-.386.974a2 2 0 0 1-1.2.869c-.238.059-.506.059-1.043.059h-3.976c-.537 0-.806 0-1.043-.06a2 2 0 0 1-1.2-.868c-.131-.207-.216-.463-.386-.974M15 19l-.13.647c-.14.707-.211 1.06-.37 1.34a2 2 0 0 1-1.113.912C13.082 22 12.72 22 12 22s-1.082 0-1.387-.1a2 2 0 0 1-1.113-.913c-.159-.28-.23-.633-.37-1.34L9 19m3-3.5V11"/></g></svg>`;
    const cableTvIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28"><path fill="currentColor" d="M5.254 4a3.25 3.25 0 0 0-3.25 3.25v10.5A3.25 3.25 0 0 0 5.254 21h17.497a3.25 3.25 0 0 0 3.25-3.25V7.25A3.25 3.25 0 0 0 22.751 4zm-1.75 3.25c0-.966.784-1.75 1.75-1.75h17.497c.966 0 1.75.784 1.75 1.75v10.5a1.75 1.75 0 0 1-1.75 1.75H5.254a1.75 1.75 0 0 1-1.75-1.75zM6.75 23a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"/></svg>`;
    const sportBettingIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"/><path d="M5 5c3.99 3.52 4.01 10.462 0 14m14 0c-4.01-3.538-3.99-10.48 0-14"/></g></svg>`;
    const internetIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4" stroke-width="3"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.164 32.946V15.148M38 22.964l-5.835-7.91l-5.836 7.91m-10.493-7.91v17.798m5.835-7.816l-5.835 7.91L10 25.036" stroke-width="3"/></svg>`;
    const historyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M11.962 20q-3.046 0-5.311-1.99q-2.264-1.989-2.62-5.01h1.011q.408 2.58 2.351 4.29T11.962 19q2.925 0 4.962-2.037T18.962 12t-2.038-4.963T11.962 5q-1.553 0-2.918.656q-1.365.655-2.41 1.805h2.481v1H4.962V4.309h1v2.388q1.16-1.273 2.718-1.984T11.962 4q1.663 0 3.118.626t2.542 1.714t1.714 2.542t.626 3.118t-.626 3.118t-1.714 2.542t-2.542 1.714t-3.118.626m3.204-4.146l-3.647-3.646V7h1v4.792l3.354 3.354z" /></svg>`;
    const priceListIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32"/><path fill="currentColor" d="M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m230 480l262-262a13.8 13.8 0 0 0 4-10V80"/></svg>`;
    const buyFundsIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1"><path stroke-linecap="round" d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M6 4.5A2.5 2.5 0 0 1 8.5 2A3.5 3.5 0 0 1 12 5.5V7H8.5A2.5 2.5 0 0 1 6 4.5Zm12 0A2.5 2.5 0 0 0 15.5 2A3.5 3.5 0 0 0 12 5.5V7h3.5A2.5 2.5 0 0 0 18 4.5Z"/><path stroke-linecap="round" d="M3 7h18v4H3zm9 4v10"/></g></svg>`;
    const pricingIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32"/><path fill="currentColor" d="M352 144a32 32 0 1 1 32-32a32 32 0 0 1-32 32"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m230 480l262-262a13.8 13.8 0 0 0 4-10V80"/></svg>`;
    const setupIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M17.03 13.348c.541-.249.812-.373.891-.497c.079-.123.079-.32.079-.712v-.278c0-.393 0-.589-.079-.712c-.079-.124-.35-.248-.891-.497c-.803-.37-1.319-1.177-1.291-2.023c.021-.646.032-.969-.039-1.091c-.07-.123-.24-.216-.578-.402l-.323-.177c-.33-.18-.494-.27-.634-.263c-.14.006-.38.168-.857.492a2.36 2.36 0 0 1-2.615 0c-.478-.324-.716-.486-.857-.493c-.14-.006-.305.084-.634.264l-.323.177c-.339.186-.508.279-.578.401c-.07.123-.06.446-.04 1.092c.028.846-.488 1.654-1.29 2.023c-.542.249-.813.373-.892.497c-.079.123-.079.32-.079.712v.278c0 .393 0 .59.079.712c.079.124.35.248.891.497c.803.37 1.319 1.177 1.291 2.023c-.021.646-.032.969.039 1.091c.07.123.24.216.579.402l.322.177c.33.18.494.27.634.264s.38-.169.857-.493a2.36 2.36 0 0 1 2.617 0c.477.324.716.486.857.492c.14.007.305-.083.634-.263l.322-.177c.34-.186.51-.279.58-.402c.07-.122.059-.445.038-1.091c-.028-.846.487-1.654 1.29-2.023"/><circle cx="12" cy="12" r="1.75"/><path d="M19 2v2.859A9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 .832 4M5 22v-2.859A9.97 9.97 0 0 0 12 22c5.523 0 10-4.477 10-10a10 10 0 0 0-.832-4"/></g></svg>`;
    const documentationIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><rect width="15" height="18.5" x="4.5" y="2.75" rx="3.5"/><path d="M8.5 6.755h7m-7 4h7m-7 4H12"/></g></svg>`;
    const profileIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="7" r="3"/></g></svg>`;
    const settingsIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.59 15.5l-1.82-1.3c.3-1.08.32-2.25 0-3.42l1.82-1.28L18.14 7l-2.03.92c-.79-.8-1.79-1.42-2.96-1.71L12.95 4h-2.9l-.2 2.21c-1.17.29-2.17.91-2.96 1.71L4.86 7L3.41 9.5l1.82 1.28c-.32 1.17-.3 2.34 0 3.42l-1.82 1.3L4.86 18l2.03-.93c.79.79 1.79 1.39 2.96 1.7l.2 2.23h2.9l.2-2.23c1.17-.31 2.17-.91 2.96-1.7l2.03.93zM13.5 3c.27 0 .5.2.5.46l.18 2.04c.76.28 1.44.69 2.05 1.18l1.85-.87c.23-.12.52-.04.66.19l2 3.5c.14.21.06.5-.16.65l-1.67 1.17c.13.8.12 1.59 0 2.36l1.67 1.17c.22.15.3.44.16.65l-2 3.5c-.14.21-.43.29-.66.17l-1.85-.86c-.61.49-1.29.89-2.05 1.19l-.18 2c0 .29-.23.5-.5.5h-4a.5.5 0 0 1-.5-.5l-.18-2c-.76-.3-1.44-.7-2.05-1.19l-1.85.86c-.23.12-.52.04-.66-.17l-2-3.5c-.14-.21-.06-.5.16-.65l1.67-1.17c-.12-.77-.13-1.56 0-2.36l-1.67-1.17c-.22-.15-.3-.44-.16-.65l2-3.5c.14-.23.43-.31.66-.19l1.85.87c.61-.49 1.29-.9 2.05-1.18L9 3.46c0-.26.23-.46.5-.46zm-2 6a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 12.5A3.5 3.5 0 0 1 11.5 9m0 1A2.5 2.5 0 0 0 9 12.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/></svg>`;
    settingsIcon.id = 'setting';

    // add title name, icon and link to the sidebar items
    const items_menu = [
        {name: 'Overview', icon:overviewIcon, link:'dashboard.html', id:'overview'},
        {name: 'Fund Wallet', icon:fundWalletIcon, link:'fund-wallet.html', id:'fund-wallet'},
    ];

    // add href to each items menu
    items_menu.forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;
        link.id = item.id; // Assign the ID here
        // add SVGs icons
        link.innerHTML = `
            ${item.icon}
            ${item.name}
        `;
        // append links into sidebar items
        sidebarItems.appendChild(link);
    });
// ############################# SERVICES SECTION ##########################################
    // create services sub section
    const sercices_sub_section = document.createElement('div');
    sercices_sub_section.id = 'services_sub_section';

    // add title to the services sub section
    const services_title = document.createElement('h5');
    services_title.textContent = ('Services');

    // append title to the services sub section
    sercices_sub_section.appendChild(services_title);

    // append services sub section to the sidebar items
    sidebarItems.appendChild(sercices_sub_section);

    // add title name, icon and link to the sidebar items
    const services_menu = [
        {name: 'Data Plan', icon:dataPlanIcon, link:'data-plan.html', id:'data-plan'},
        {name: 'Airtime Cash', icon:airtimeCashIcon, link:'#', id:'airtime-cash'},
        {name: 'Buy Airtime', icon:buyAirtimeIcon, link:'buy-airtime.html', id:'buy-airtime'},
        {name: 'Electricity', icon:electrityIcon, link:'electricity-bill.html', id:'electricity'},
        {name: 'Cable TV', icon:cableTvIcon, link:'#', id:'cable-tv'},
        {name: 'Sport Betting', icon:sportBettingIcon, link:'#', id:'sport-betting'},
        {name: 'Internet', icon:internetIcon, link:'#', id:'internet'},
        {name: 'History', icon:historyIcon, link:'transaction-history.html', id:'history'},
        {name: 'Price List', icon:priceListIcon, link:'price-list.html', id:'price-list'},
    ];

    // add href to each items menu
    services_menu.forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;
        link.id = item.id; // Assign the ID here
        // add SVGs icons
        link.innerHTML = `
            ${item.icon}
            ${item.name}
        `;
        // append links into sidebar items
        sercices_sub_section.appendChild(link);
    }); 

// ############################# GIFTING SECTION ##########################################

    // create Gifting sub section
    const gifting_sub_section = document.createElement('div');
    gifting_sub_section.id = 'gifting_sub_section';

    // add title to the gifting sub section
    const gifting_title = document.createElement('h5');
    gifting_title.textContent = ('Gifting Portal');

    // append title to the gifting sub section
    gifting_sub_section.appendChild(gifting_title);

    // append gifting sub section to the sidebar items
    sidebarItems.appendChild(gifting_sub_section);

    // add title name, icon and link to the sidebar items
    const gifting_menu = [
        {name: 'Buy Funds', icon:buyFundsIcon, link:'#', id:'buy-funds'},
    ];

    // add href to each items menu
    gifting_menu.forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;
        link.id = item.id; // Assign the ID here
        // add SVGs icons
        link.innerHTML = `
            ${item.icon}
            ${item.name}
        `;
        // append links into sidebar items
        gifting_sub_section.appendChild(link);
    });

// ############################# API SECTION ##########################################

    // create API sub section
    const API_sub_section = document.createElement('div');
    gifting_sub_section.id = 'gifting_sub_section';

    // add title to the API sub section
    const API_title = document.createElement('h5');
    API_title.textContent = ('API');

    // append title to the API sub section
    API_sub_section.appendChild(API_title);

    // append API sub section to the sidebar items
    sidebarItems.appendChild(API_sub_section);

    // add title name, icon and link to the sidebar items
    const API_menu = [
        {name: 'Pricing', icon:pricingIcon, link:'#', id:'pricing'},
        {name: 'Setup', icon:setupIcon, link:'api.html', id:'api'},
        {name: 'Documentation', icon:documentationIcon, link:'#', id:'documentation'},
    ];

    // add href to each items menu
    API_menu.forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;
        link.id = item.id; // Assign the ID here
        // add SVGs icons
        link.innerHTML = `
            ${item.icon}
            ${item.name}
        `;
        // append links into sidebar items
        API_sub_section.appendChild(link);
    });

    // ############################# TOOLS SECTION ##########################################

    // create tools sub section
    const tools_sub_section = document.createElement('div');
    tools_sub_section.id = 'tools_sub_section';

    // add title to the tools sub section
    const tools_title = document.createElement('h5');
    tools_title.textContent = ('Tools');

    // append title to the tools sub section
    tools_sub_section.appendChild(tools_title);

    // append tools sub section to the sidebar items
    sidebarItems.appendChild(tools_sub_section);

    // add title name, icon and link to the sidebar items
    const tools_menu = [
        {name: 'Profile', icon:profileIcon, link:'profile.html', id:'profile'},
        {name: 'Setting', icon:settingsIcon, link:'settings.html', id:'setting'},
    ];

    // add href to each items menu
    tools_menu.forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;
        link.id = item.id; // Assign the ID here
        // add SVGs icons
        link.innerHTML = `
            ${item.icon}
            ${item.name}
        `;
        // append links into sidebar items
        tools_sub_section.appendChild(link);
    });

// ------------------------- END OF SUB SECTIONS ------------------------------------
    //2c create the sidebar footer link div
    const sidebarFooter = document.createElement('div');
    sidebarFooter.id = 'sidebar-footer';

    //2c. add Logout links to the sidebar footer section
    //2c.. Define Logout SVGs
    const logout_icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 3h6a3 3 0 0 1 3 3v4h-1V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m3 9h11.25L16 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L19.25 13H8z"/></svg>`;

    // 2b... add link and name to the items
    const logoutLink = [
        {name: 'Logout', icon:logout_icon, link:'sign-in.html'},
    ];
    // 2b... add href to each items menu
    logoutLink.forEach(item => {
        const link = document.createElement('a');
        link.href = item.link;


        //2b.... add SVGs icons
        link.innerHTML = `
            ${item.icon}
            ${item.name}
        `;
        //2b.... append links into sidebar items section
        sidebarFooter.appendChild(link);
    });

    //3 append sidebar sections into the sidebar container
    sidebarContainer.appendChild(sidebarHeader);
    sidebarContainer.appendChild(sidebarItems);
    sidebarContainer.appendChild(sidebarFooter);

    //3a append sidebar to the body of the page
    document.body.appendChild(sidebarContainer);
}
//4 call function to create the sidebar
create_sidebar();