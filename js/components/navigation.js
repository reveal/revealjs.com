export default () => {
  let sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    // Update the selected item in the navigation to
    // match the current URL & hash.
    let updateSelection = () => {
      let currentURL =
        window.location.pathname.replace(/\/$/, '') +
        '/' +
        window.location.hash;
      let newSelection = sidebar.querySelector(
        '.nav-link[href="' + currentURL + '"]'
      );

      if (newSelection) {
        let selectedItem = sidebar.querySelector('.nav-link.selected');
        if (selectedItem) selectedItem.classList.remove('selected');
        newSelection.classList.add('selected');
      }
    };

    updateSelection();

    window.addEventListener('hashchange', updateSelection);

    // Remember the sidebar scroll position between page loads
    let storedScrollTop = parseInt(
      sessionStorage.getItem('sidebar-scroll-top'),
      10
    );
    let sidebarScroller = document.querySelector('.sidebar-scroller');

    if (!isNaN(storedScrollTop)) {
      sidebarScroller.scrollTop = storedScrollTop;
    } else {
      let selectedItem = sidebar.querySelector('.nav-link.selected');
      if (selectedItem.offsetTop > sidebarScroller.offsetHeight * 0.8) {
        sidebarScroller.scrollTop =
          selectedItem.offsetTop - sidebarScroller.offsetHeight * 0.8;
      }
    }

    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('sidebar-scroll-top', sidebarScroller.scrollTop);
    });

    // Toggle the mobile nav.
    document.querySelector('.menu-toggle').addEventListener('click', () => {
      sidebar.classList.toggle('hidden');
      document.documentElement.classList.toggle(
        'menu-visible',
        !sidebar.classList.contains('hidden')
      );
    });
  }
};
