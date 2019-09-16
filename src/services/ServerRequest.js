const BaseURL = 'http://192.168.100.15:88/Dev/dev/slim/public/api/';
//const BaseURL = 'http://192.168.100.5:88/api/';

/*const getRequest = (actionName, userData) => {
  return new Promise((resolve, reject) =>{
    
    fetch(BaseURL+actionName, {
        method: 'GET',
        body: JSON.stringify(userData)
      })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });

  });
}*/

const getRequest = (actionName) => {
  return new Promise((resolve, reject) =>{
    
    fetch(BaseURL+actionName, {
        method: 'GET',
        headers: new Headers({'authorization': 'Bearer '+sessionStorage.getItem('accessToken')}), 
      })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });

  });
}

const postLoginRequest = (actionName, userData) => {
  return new Promise((resolve, reject) =>{
  
      fetch(BaseURL+actionName, {
          method: 'POST',
          headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'}), 
          body: 'username='+userData.username+'&password='+userData.password+'&grant_type=client_credentials&client_id=flymcc&client_secret=qwerasdfzxcvpoi'
        })
        .then((response) => response.json())
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
}

const postRequest = (actionName, userData) => {
    return new Promise((resolve, reject) =>{
    
        fetch(BaseURL+actionName, {
            method: 'POST',
            headers: new Headers({'authorization': 'Bearer '+sessionStorage.getItem('accessToken')}), 
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

      });
}

const deleteRequest = (actionName, userData) => {
  return new Promise((resolve, reject) =>{
    
    fetch(BaseURL+actionName, {
        method: 'DELETE',
        body: JSON.stringify(userData)
      })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });

  });
}

export {getRequest,postLoginRequest,postRequest,deleteRequest};

