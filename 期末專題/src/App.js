import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Grid, Container, } from 'semantic-ui-react';
import Header from './Header';
import Signin from './pages/Signin';
import Posts from './pages/Posts';
import NewPost from './pages/NewPost';
import Post from './pages/Post';
import MyPosts from './pages/MyPosts';
import MyCollectoins from './pages/MyCollectoins';
import MySettings from './pages/MySettings';
import Topics from './components/Topics';
import MyMenu from './components/MyMenu';

function App()
{
    return (
      <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/posts" >
            <Container>
        <Grid>
        <Grid.Row>
            <Grid.Column width={3}>
                <Topics/>
            </Grid.Column>
            <Grid.Column width={10}>
              <switch>
                <Route path="/posts" exact>
                  <Posts/>
                </Route>
                <Route path="/posts/:postId" exact>
                  <Post/>
                </Route>
              </switch>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
    </Grid>
    </Container>
    </Route>
      <Route path="/my">
      <Container>
        <Grid>
        <Grid.Row>
            <Grid.Column width={3}>
              <MyMenu />
            </Grid.Column>
            <Grid.Column width={10}>
              <switch>
                <Route path="/my/posts" exact>
                  <MyPosts />
                </Route>
                <Route path="/my/collections" exact>
                  <MyCollectoins />
                </Route>
                <Route path="/my/settings" exact>
                  <MySettings/>
                </Route>
              </switch>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
        </Grid.Row>
    </Grid>
    </Container>
      </Route>

            <Route path="/signin" exact>
               <Signin/> 
            </Route>
            <Route path="/new-post" exact>
                <NewPost />
            </Route>
        </Switch>
      </BrowserRouter>  
    );
}

export default App;