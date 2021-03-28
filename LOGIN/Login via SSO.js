// Start by going to a web page first, like this:
I.goTo(DATA.url)
I.click("Sign in with VOL")
I.see(DATA.loginStringCheck)
I.fill("Username", DATA.user)
I.click("Continue")
I.fill("Password", DATA.pw)
I.click("Continue")
if(I.see$("Invalid username or password")){
  I.see(DATA.loginInvalidMsg)
}
else{
	I.see(DATA.homepageStringCheck)
}