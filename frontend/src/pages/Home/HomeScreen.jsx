import { useAuthStore } from "../../store/authUser";

const HomeScreen = () => {
  const { logout } = useAuthStore();
  return (
    <div>
      <p>HomeScreen</p>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default HomeScreen;
