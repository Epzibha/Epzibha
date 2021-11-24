describe ('wallet credit amount', function(){
    let accesstoken = '';
    it("Login Request", () => {
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
            accesstoken = response.body.data;

    
        cy.request({ 
            method: 'GET', 
            url: 'http://api.stable.thechefz.co/v9/wallet/credit',
            headers : {
                Authorization : 'Bearer ' + accesstoken

            }
         }).then(function(response){
            expect(response.body.success).to.eq(true);
            expect(response.body.data.credit).to.eq("0");
    })
})
});
});