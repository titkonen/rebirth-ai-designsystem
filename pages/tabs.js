document.querySelectorAll('[role="tablist"]').forEach(tablist => {
  const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));
  if (!tabs.length) return;

  const activate = tab => {
    tabs.forEach(currentTab => {
      const selected = currentTab === tab;
      currentTab.setAttribute('aria-selected', String(selected));
      currentTab.tabIndex = selected ? 0 : -1;
    });
    tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', event => {
      let nextIndex;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex === undefined) return;
      event.preventDefault();
      activate(tabs[nextIndex]);
    });
  });
});
