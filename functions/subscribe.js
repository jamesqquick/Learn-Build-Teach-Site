const axios = require("axios");
require("dotenv").config();

exports.handler = function(event, context, callback) {
  const password = process.env.MAILCHIMP_API_KEY;
  console.log(password);
  if (!password) {
    console.error("No MailChimp API Key include in environment variables");
    process.exit(1);
  }

  const parsedBody = JSON.parse(event.body);
  const email = parsedBody.email;

  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({ msg: "Invalid Email" })
    });
  }

  const body = {
    email_address: email,
    status: "subscribed"
  };

  const username = "james";

  axios({
    method: "post",
    url: "https://us15.api.mailchimp.com/3.0/lists/f236f68fc1/members/",
    data: body,
    auth: {
      username,
      password
    }
  })
    .then(response => {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({ msg: "Thanks for subscribing!" })
      });
    })
    .catch(({ response }) => {
      let title = "";
      if (response && response.data && response.data.title) {
        title = response.data.title;
      }
      callback(null, {
        statusCode: 500,
        body: JSON.stringify({
          msg: `Failed to subscribe. ${title}`
        })
      });
    });
};
