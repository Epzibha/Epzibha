describe('Login', () => { it("Login Request", () => {
  cy.request({
    method:'POST', 
    url:'http://api.stable.thechefz.co/v9/user/login',
    body: {
      "login": "0512345674",
      "password": "123456",
      "userType" : '1', 
      "deviceToken": "fjEk2Q01Ur4:APA91bEyAeDcC8J_wlkQGVy7FYhM9uG-spdFnwknoXzGOdXUblJcpm8KEVMpA4jWmb0dpD2brGlGUXhIFjOAh9H5gJnlsm32eXiZtv-FTHLcfEFyl2wtsFq4_v9x_84upsDMzayRJIS5"
    }
  })
    .then(function(response){
      this.accesstoken = response.body.data;
      console.log("Bearer" +this.accesstoken);
      expect(response.body.success).to.eq(true);
      expect(response.body.userID).to.eq(10886);
      expect(response.body.userType).to.eq("customer");
      expect(response.body.isMainChef).to.eq(true);
      expect(response.body.isBlocked).to.eq(false);
      expect(response.body.data).to.eq(this.accesstoken);
      Cypress.env('token', response.body.data);

    });
});
  
  });