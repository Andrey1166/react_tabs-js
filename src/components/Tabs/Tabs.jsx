export const Tabs = ({ tabs, activeTabId, setActiveTab }) => {
  function onTabSelected(el) {
    if (activeTabId !== el.id) {
      setActiveTab(el);
    }
  }

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={activeTabId === tab.id ? 'is-active' : undefined}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={event => {
              event.preventDefault();
              onTabSelected(tab);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
