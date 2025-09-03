const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const shopkeeperData = localStorage.getItem('shopkeeperData');

  if (!shopkeeperData) {
    window.location.href = '/shopkeeper-portal';
    return null;
  }

  return children;
};

export default RequireAuth; 