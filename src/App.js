import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple, red } from '@material-ui/core/colors'
import Layout from './components/Layout'



const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#e5e5e5'
    },
    secondary:purple,
  },
  typography:{
    fontFamily:'Poppins',
    fontWeightLight:400,
    fontWeightRegular:200,
    fontWeightMedium:300,
    fontWeightBold:400
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      {/*It means only one route will show ata a time */}
      <Layout>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Layout>
    </Router>     
    </ThemeProvider>
  );
}

export default App;
