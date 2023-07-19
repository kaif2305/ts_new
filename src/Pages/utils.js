// because node-fetch v3 onwards supports only esm imports
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const verifyEmailTemplate = (id, verificationSecret) =>
  `Please click on the following link to verify your email: ${process.env.DEPLOYED_URL}/users/${id}/verify/${verificationSecret}`;

const contactUsQueryTemplate = (fullName, email) =>
  `Dear ${fullName},
Thank you for contacting us with your query. We will get back to you soon.
If you did not make this request, please ignore this email.
Regards,
Team Technoscape`;

const contactUsAdminEmailTemplate = (fullName, email, query) =>
  `Dear Admin,
${fullName} with email ${email} has sent a query.
Query: ${query}
Regards,
Team Technoscape`;

const sendEmail = (email, subject, message) => {
  return fetch(`${process.env.EMAIL_SERVICE_URL}/send-email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: email,
      subject: subject,
      message: message,
    }),
  });
};

const randomFourDigitNumber = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const sendAdminNotificationTemplate = (user) =>
  `<html>
<body>
<p>
Dear Admin,<br />
A new user has registered.<br />
Name: ${user.firstName} ${user.lastName}<br />
Email: ${user.email}<br />
Their Abstract Code is: ${user.selectedTheme}-${user.code}<br />
<a href='${process.env.DEPLOYED_URL}/users/files/${user.id}'>File</a>: ${process.env.DEPLOYED_URL}/users/files/${user.id}<br />
Regards,<br />
Team Technoscape<br />
</p>
</body>
</html>
`;

module.exports = {
  sendEmail,
  verifyEmailTemplate,
  randomFourDigitNumber,
  contactUsQueryTemplate,
  contactUsAdminEmailTemplate,
  sendAdminNotificationTemplate,
};