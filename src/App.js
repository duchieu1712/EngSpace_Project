import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout';
import Home from './Pages/Home/Home';
import AuthLayout from './Layouts/AuthLayout';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import AdminLayout from './Layouts/AdminLayout';
import UserManagement from './Pages/UserManagement/UserManagement';
import TopicManagement from './Pages/TopicManagement/TopicManagement';
import Topic from './Pages/Topic/Topic';
import AboutUs from './Pages/AboutUs/AboutUs';
import FAQ from './Pages/FAQ/FAQ';
import CoursesOfUser from './Pages/CoursesOfUser/CoursesOfUser';
import Profile from './Pages/Profile/Profile';
import CourseDetail from './Pages/CourseDetail/CourseDetail';
import Dashboard from './Pages/Dashboard/Dashboard';
import CreateCourse from './Pages/CreateCourse/CreateCourse';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/topic', '/about', '/faq', '/mycourses', '/profile', '/coursedetail/:courseID', '/createcourse']}>
          <HomeLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/topic' component={Topic} />
              <Route exact path='/about' component={AboutUs} />
              <Route exact path='/faq' component={FAQ} />
              <Route exact path='/mycourses' component={CoursesOfUser} />
              <Route exact path='/coursedetail/:courseID' component={CourseDetail} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/createcourse' component={CreateCourse} />
            </Switch>
          </HomeLayout>
        </Route>

        <Route exact path={['/signin', '/signup']}>
          <AuthLayout>
            <Switch>
              <Route exact path='/signin' component={Signin} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          </AuthLayout>
        </Route>

        <Route exact path={['/admin', '/admin/user', '/admin/topic']}>
          <AdminLayout>
            <Switch>
              <Route exact path='/admin' component={Dashboard} />
              <Route exact path='/admin/user' component={UserManagement} />
              <Route exact path='/admin/topic' component={TopicManagement} />
            </Switch>
          </AdminLayout>
        </Route>

        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
