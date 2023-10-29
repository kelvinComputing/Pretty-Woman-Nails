const getTokenOnSesionStorage = window.sessionStorage.getItem('firebase:authUser:AIzaSyAP5e99vWNerZWWNpy57n02sEpTthe8GOU:[DEFAULT]')

const getToken = JSON.parse(getTokenOnSesionStorage);

const token = getToken.stsTokenManager.accessToken; 

export const getOnlyUser = async (uid) => {
    const dataList = await fetch(`http://localhost:3200/api/users/${uid}`,
{    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    }
});
    const dataResult = dataList.json();
    return dataResult;
}