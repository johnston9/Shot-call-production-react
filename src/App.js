import { useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import ChatPage from "./pages/chat/ChatPage";
import ChatsPage from "./pages/chat/ChatsPage";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "./contexts/CurrentUserContext";
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
import NeedToSignIn from "./pages/chat/NeedToSignIn";
import ProjectEdit from "./pages/accounts/ProjectEdit";
import SubscriptionPlansPage from "./pages/subscription-plans/SubscriptionPlansPage";
import TransactionsPage from "./pages/transactions/TransactionsPage";
import PaymentPage from "./pages/payment/PaymentPage";
import BudgetPaymentPage from "./pages/payment/budget/PaymentPage";
import BudgetPage from "./pages/accounts/budgets/BudgetPage";
import BudgetCreate from "./pages/accounts/budgets/BudgetCreate";
import BudgetEdit from "./pages/accounts/budgets/BudgetEdit";
import BPage from "./pages/budget/budgets/BudgetPage";
import BCreate from "./pages/budget/budgets/BudgetCreate";
import BEdit from "./pages/budget/budgets/BudgetEdit";
import ContactUs from "./pages/contact-us/ContactUs";
import HowItWorks from "./pages/how-it-works/HowItWorks";
import TermsAndConditions from "./pages/TermsAndConditions";
import AuthCheckPage from "./pages/AuthCheckPage";
import ForgotPasswordForm from "./pages/auth/ForgotPasswordForm";
import ResetPasswordForm from "./pages/auth/ResetPasswordForm";

import styles from "./App.module.css";
import MyBudget from "./pages/budget/budgets/MyBudget";

// import BudgetPage from "./pages/accounts/BudgetPage";
// import BudgetCreate from "./pages/accounts/BudgetCreate";
// import BudgetEdit from "./pages/accounts/BudgetEdit";

function App() {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      setCurrentUser(user);
    }
  }, [setCurrentUser]);

  return (
    <div className={styles.App}>
      <NavBar />
      <div className={styles.Main}>
        <Switch>
          {/* home */}
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/landing" render={() => <Landing />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route
            exact
            path="/forgot-password"
            render={() => <ForgotPasswordForm />}
          />
          <Route
            exact
            path="/reset-password/:token/:token_id"
            render={() => <ResetPasswordForm />}
          />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          {/* features */}
          <Route exact path="/moodboards" render={() => <Moodboards />} />
          <Route exact path="/charslocates" render={() => <CharsLocates />} />
          <Route exact path="/workspaces" render={() => <Workspaces />} />
          <Route exact path="/shotstory" render={() => <ShotStory />} />
          <Route exact path="/castcrew" render={() => <CastCrew />} />
          <Route exact path="/schedule" render={() => <Schedules />} />
          <Route exact path="/callsheets" render={() => <Callsheets />} />
          <Route exact path="/mobile" render={() => <Mobile />} />
          {/* chat  */}
          <Route exact path="/needtosignin" render={() => <NeedToSignIn />} />
          <Route exact path="/chat/edit/:id" render={() => <ChatEditForm />} />
          <Route
            exact
            path="/subscription-plans"
            render={() => <SubscriptionPlansPage />}
          />
          <Route
            exact
            path="/transactions"
            render={() => <TransactionsPage />}
          />
          <Route
            exact
            path="/terms-and-conditions"
            render={() => <TermsAndConditions />}
          />
          <Route
            exact
            path="/payment/:planName/:planId/:categoryId"
            render={() => <PaymentPage />}
          />
          <Route
            exact
            path="/payment/budget/:planId"
            render={() => <BudgetPaymentPage />}
          />
          {/* budget page */}
          <Route exact path="/:id/budgets" render={() => <BudgetPage type={0}/>} />

          <Route exact path="/:id/my-budgets" render={() => <BudgetPage type={1}/>} />
          <Route
            exact
            path="/:id/budgets/create"
            render={() => <BudgetCreate />}
          />
          <Route exact path="/:id/budgets/edit" render={() => <BudgetEdit type={0}/>} />
          <Route
            exact
            path="/chat"
            render={() => <ChatsPage message="No results found." />}
          />
          {/* for budget only */}
          <Route exact path="/budgets" render={() => <BPage />} />
          <Route exact path="/budgets/create" render={() => <BCreate type={0} />} />
          <Route
            exact
            path="/budgets/edit/:budget1Id/:budget2Id/:budget3Id"
            render={() => <BEdit type={1} />}
          />
          {/* CREATE THEIR OWN BUDGET */}
          <Route
            exact
            path="/my-budgets"
            render={() => <MyBudget />}
          />
          <Route exact path="/my-budgets/step-one" render={() => <BCreate type={1} />} />
          <Route exact path="/:id/my-budgets/edit" render={() => <BudgetEdit type={1}/>} />
          <Route
            exact
            path="/my-budgets/step-two"
            render={() => <BEdit type={0} />}
          />
          <Route
            exact
            path="/my-budgets/edit/:id"
            render={() => <BEdit type={1} />}
          />
          <Route
            exact
            path="/chat"
            render={() => <ChatsPage message="No results found." />}
          />
          <Route
            exact
            path="/contact-us"
            render={() => <ContactUs message="No results found." />}
          />
          <Route
            exact
            path="/how-it-works/:video_id/:title"
            render={() => <HowItWorks message="No results found." />}
          />
          {/* Feed chat*/}
          <Route
            exact
            path="/feed"
            render={() => (
              <ChatsPage
                filter={`owner__followed__owner__profile=${profile_id}&`}
                message="No results found. Adjust the search keyword or follow a user."
              />
            )}
          />
          {/* Liked chat*/}
          <Route
            exact
            path="/liked"
            render={() => (
              <ChatsPage
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                message="No results found. Adjust the search keyword or like a chat."
              />
            )}
          />
          <Route exact path="/chat/:id" render={() => <ChatPage />} />
          {/* accounts */}
          <Route exact path="/accounts/:id" render={() => <AccountPage />} />
          {/* projects */}
          <Route
            exact
            path="/projects/edit/:id"
            render={() => <ProjectEdit />}
          />
          {/* budgets */}
          {/* <Route exact path="/budgets/:id" render={() => <BudgetPage />} /> */}
          {/* <Route
            exact
            path="/budgets/create/:id"
            render={() => <BudgetCreate />}
          /> */}
          {/* <Route exact path="/budgets/edit/:id" render={() => <BudgetEdit />} /> */}
          {/* profiles */}
          <Route exact path="/profiles" render={() => <ProfilesPage />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route exact path="/authcheck" render={() => <AuthCheckPage />} />
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
