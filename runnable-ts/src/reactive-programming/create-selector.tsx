const state = {
  user: {
    name: 'John Doe',
  },
  company: {
    name: 'Acme Inc.',
  },
};

const resultSelector = createSelector(
  (state) => state.user,
  (state) => state.company,
  (user, company) => `${user.name} works at ${company.name}`
);

export function createSelector(...selectors) {
  const resultFunc = selectors.pop();
  return function(state) {
    const functionsResults = selectors.map(selector => selector(state))
    return resultFunc(...functionsResults)
  }
}