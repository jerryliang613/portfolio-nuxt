export default {
  PROJECTS: ({ projects }, getters) => {
    const filters = getters.SELECTED_FILTERS
      ? getters.SELECTED_FILTERS.map(e => e.filter.filter)
      : null;
    return filters && filters.length > 0
      ? projects.filter(project => {
          let b = false;
          for (let i = 0; i < project.language.length; i++) {
            if (filters.includes(project.language[i])) {
              b = true;
              break;
            }
          }
          return b;
        })
      : projects;
  },
  FILTERS: ({ filters }) => filters,
  SELECTED_FILTERS: (state, getters) => {
    const filters = getters.FILTERS;
    return filters.reduce((acc, e, index) => {
      if (e.selected) acc.push({ filter: e, index });
      return acc;
    }, []);
  }
};
