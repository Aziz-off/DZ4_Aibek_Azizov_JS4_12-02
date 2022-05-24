import UsersData from "./pages/usersData/UsersData";
import Users from "./components/users/Users";


function App() {
  const users = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'];


  return (
    <div>
        <Users users={users}/>

        <UsersData />
    </div>
  );
}

export default App;
