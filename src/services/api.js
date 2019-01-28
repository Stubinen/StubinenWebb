import axios from 'axios';
import querystring from 'querystring';

const apiBaseUrl = 'https://api.stubinen.org/';

var ax = axios.create({
    baseUrl: apiBaseUrl,
    responseType: 'json',
});

function createUrl(path) {
  return apiBaseUrl + path;
}
export function post(path, params) {
  const url = createUrl(path);
  let returnVal =  ax.post(url, querystring.stringify(params)).catch( async(e) =>{
    return ax.post(url, querystring.stringify(params));
  });
  return returnVal
}
export function LoginAPI(email, password) {
  return post('Login.php', {
    email: email,
    password: password
  });
}
export function RegisterAPI(email, password, firstname, lastname, kar ) {
  return post('Register.php', {
    email: email,
    password: password,
    firstname: firstname,
    lastname: lastname,
    kar: kar
  });
}
export function PayedAPI(id){
    return post('Payed.php', {
        id: id
    })
}
export function ActivateMemberAPI(id){
    return post('ActivateMember.php', {
        id: id
    })
}
export function DeleteMemberAPI(id){
    return post('DeleteMember.php', {
        id: id
    })
}
export function MembersOnPendingAPI(){
    return post('MembersOnPending.php', {})
}
export function MemberCountAPI(){
    return post('MemberCount.php', {})
}
export function GetAllMembersAPI(){
    return post("GetAllMembers.php", {})
}
