import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from 'components/home';
import Header from 'components/Header';
import useInput from 'components/useInput';
import useAxios from 'components/useAxios';
import useTitle from 'components/useTitle';
import Footer from 'components/Footer';
import styled from 'styled-components';


const App = () => {
    const hookList = ["useInput", "useTitle", "useAxios"];
    return (
        <Router>
            <Header hookList={hookList} />
            <Content>
                <Switch>
                    <Route exact path='/' component={home} />
                    <Route path='/useInput' component={useInput} />
                    <Route path='/useTitle' component={useTitle} />
                    <Route exact path='/useAxios' component={useAxios} />
                </Switch>
            </Content>
            <Footer />
        </Router>
    );
}
const Content = styled.div`
    min-height: 50%;
    padding-bottom: 100px;
`


export default App;
