import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
function GoogleLogin(){
    let navigate = useNavigate();
    return(
        <div>
            <LoginSocialGoogle
                client_id={"788648728192-35pubns5v8n7lbc40lkv2rdqadicbdch.apps.googleusercontent.com"}
                scope="openid profile email"
                discoveryDocs="claims_supported"
                access_type="offline"
                onResolve={({ provider, data }) => {
                    setIsAuthenticated(true);
                    navigate('/AllStudents',{state:{userMail: data.email,userName:data.family_name +" "+ data.given_name}})
                }}
                onReject={(err) => {
                console.log(err);
                }}
            >
                <GoogleLoginButton />
            </LoginSocialGoogle>
        </div>
    );
}
export default GoogleLogin