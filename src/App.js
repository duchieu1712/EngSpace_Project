import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout';
import Home from './Pages/Home/Home';
import AuthLayout from './Layouts/AuthLayout';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import Topic from './Pages/Topic/Topic';
import AboutUs from './Pages/AboutUs/AboutUs';
import FAQ from './Pages/FAQ/FAQ';
import CoursesOfUser from './Pages/CoursesOfUser/CoursesOfUser';
import Profile from './Pages/Profile/Profile';
import CourseDetail from './Pages/CourseDetail/CourseDetail';
import CreateCourse from './Pages/CreateCourse/CreateCourse';
import FoldersOfUser from './Pages/FoldersOfUser/FoldersOfUser';
import EditCourse from './Pages/EditCourse/EditCourse';
import Forum from './Pages/Forum/Forum';
import PostDetail from './Pages/PostDetail/PostDetail';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/topic', '/about', '/faq', '/mycourses','/myfolders', '/profile', '/coursedetail/:courseID', '/createcourse','/editcourse/:courseID', '/forum','/postdetail/:postID']}>
          <HomeLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/topic' component={Topic} />
              <Route exact path='/about' component={AboutUs} />
              <Route exact path='/faq' component={FAQ} />
              <Route exact path='/mycourses' component={CoursesOfUser} />
              <Route exact path='/myfolders' component={FoldersOfUser} />
              <Route exact path='/coursedetail/:courseID' component={CourseDetail} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/createcourse' component={CreateCourse} />
              <Route exact path='/editcourse/:courseID' component={EditCourse} />
              <Route exact path='/forum' component={Forum} />
              <Route exact path='/postdetail/:postID' component={PostDetail} />
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

        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
