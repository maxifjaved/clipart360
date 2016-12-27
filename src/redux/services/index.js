const TIMEOUT = 1000;
const MAX_CHECKOUT = 10;

export const api = {
  enterVR( count ) {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        if (count > MAX_CHECKOUT) {
          resolve();
        } else {
          reject(`You can buy ${MAX_CHECKOUT} items at maximum in a checkout`);
        }
      }, TIMEOUT);
    });
  },

  enteredVR() {
    return new Promise( (resolve) =>
      setTimeout(() => resolve(), TIMEOUT)
    );
  },

  exitedVR() {
    return new Promise( (resolve) =>
      setTimeout(() => resolve(), TIMEOUT)
    );
  },

  loadUser(name) {
    return {
      promise: (client) => client.post('/login', {
        data: {
          name: name
        }
      })
    };
  },

  logout() {
    return {
      promise: (client) => client.get('/logout')
    };
  }
};
