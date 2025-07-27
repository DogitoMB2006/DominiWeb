export const navigateTo = (page: string) => {
  window.history.pushState({}, '', `/${page === 'home' ? '' : page}`)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export const getCurrentPath = () => {
  const path = window.location.pathname
  if (path === '/' || path === '') return 'home'
  return path.slice(1)
}