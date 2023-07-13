import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ChatPage from "./pages/chat/ChatPage";
import ChatsPage from "./pages/chat/ChatsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import ChatEditForm from "./pages/chat/ChatEditForm";
import ProfilesPage from "./pages/profiles/ProfilesPage";
import ProfilePage from "./pages/profiles/ProfilePage";
import Home from "./pages/home/Home";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import PageNotFound from "./components/PageNotFound";
import Landing from "./pages/home/Landing";
import Moodboards from "./pages/home/Moodboards";
import CharsLocates from "./pages/home/CharsLocates";
import Workspaces from "./pages/home/Workspaces";
import ShotStory from "./pages/home/ShotStory";
import CastCrew from "./pages/home/CastCrew";
import Schedules from "./pages/home/Schedules";
import Callsheets from "./pages/home/Callsheets";
import Mobile from "./pages/home/Mobile";
import AccountPage from "./pages/accounts/AccountPage";
import BudgetPage from "./pages/accounts/BudgetPage";
import BudgetCreate from "./pages/accounts/BudgetCreate";
import BudgetEdit from "./pages/accounts/BudgetEdit";
import NeedToSignIn from "./pages/chat/NeedToSignIn";
import ProjectEdit from "./pages/accounts/ProjectEdit";

function App() {
  const currentUser = useCurrentUser()
  const profile_id = currentUser?.profile_id || '';

  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.Main}>
        <Switch>
          {/* home */}
          <Route exact path="/" render={() => <Home /> } />
          <Route exact path="/landing" render={() => <Landing /> } />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm /> } />
          {/* features */}
          <Route exact path="/moodboards" render={() => <Moodboards /> } />
          <Route exact path="/charslocates" render={() => <CharsLocates /> } />
          <Route exact path="/workspaces" render={() => <Workspaces /> } />
          <Route exact path="/shotstory" render={() => <ShotStory /> } />
          <Route exact path="/castcrew" render={() => <CastCrew /> } />
          <Route exact path="/schedule" render={() => <Schedules /> } />
          <Route exact path="/callsheets" render={() => <Callsheets /> } />
          <Route exact path="/mobile" render={() => <Mobile /> } />
          {/* chat  */}
          <Route exact path="/needtosignin" render={() => <NeedToSignIn />} />
          <Route exact path="/chat/edit/:id" render={() => <ChatEditForm />} />
          <Route 
            exact 
            path="/chat" 
            render={() => (
              <ChatsPage
              message="No results found."
              />
            ) } />
          {/* Feed chat*/}
          <Route 
            exact 
            path="/feed" 
            render={() => (
              <ChatsPage
              filter={`owner__followed__owner__profile=${profile_id}&`}
              message="No results found. Adjust the search keyword or follow a user."
              />
            ) } />
          {/* Liked chat*/}
          <Route 
            exact 
            path="/liked" 
            render={() => (
              <ChatsPage
              filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              message="No results found. Adjust the search keyword or like a chat."
              />
            ) } />
          <Route exact path="/chat/:id" render={() => <ChatPage />} />
          {/* accounts */}
          <Route exact path="/accounts/:id" render={() => <AccountPage />} />
          {/* projects */}
          <Route exact path="/projects/edit/:id" render={() => <ProjectEdit />} />
          {/* budgets */}
          <Route exact path="/budgets/:id" render={() => <BudgetPage />} />
          <Route exact path="/budgets/create/:id" render={() => <BudgetCreate />} />
          <Route exact path="/budgets/edit/:id" render={() => <BudgetEdit />} />
          {/* profiles */}
          <Route exact path="/profiles" render={() => <ProfilesPage /> } />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
              exact
              path="/profiles/:id/edit/username"
              render={() => <UsernameForm />}
            />
            <Route
              exact
              path="/profiles/:id/edit/password"
              render={() => <UserPasswordForm />}
            />
            <Route
              exact
              path="/profiles/:id/edit"
              render={() => <ProfileEditForm />}
            />
          <Route render={() => <PageNotFound />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;