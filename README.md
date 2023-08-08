# User Referral System

    • Referral
        ◦ A user should be able to send a referral email to any email address
        ◦ The referral email should contain a link that redirects to sign up page
        ◦ User’s home page should show all the email addresses that were referred

## Built With

The Project is Backed by Rails and React. Integrated the React part within Rails project using esbuild

### Sidekiq - handles the background job to retrieving articles from web

### Redis - Store article temp at Server Memory [ wont be stored in Database ] - This is required by project design

### React - Load articles at real-time. Instead of refreshing the whole page, particular components will be altered.



