import { Outlet } from 'react-router-dom';

const MinimalLayout = () => {
  return (
    <div className="w-full h-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

export default MinimalLayout;
