import CircularProgress from '@mui/material/CircularProgress';
import { Redirect, Route } from "react-router-dom";
import useAuth from "../hooks/useAuth";


export default function PrivateRoute({children, ...rest}) {
    const {user , isLoading} = useAuth()
    if(isLoading){
        return <div  style={{display: 'flex', justifyContent: 'center', padding: '150px 0'}}>
                <CircularProgress color="success" />
            </div>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}
