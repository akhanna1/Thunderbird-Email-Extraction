@author Sakshi Gupta
@return Sends shopping emails (body, subject, sender and date) to the server
@since June 24, 2017

# Functions of the extension 

1. Classifies email as Shopping and Non-Shopping 
2. Prevents extension from selecting confidential banking emails 
3. Pushes Shopping emails to the server along with date, body, subject and sender details. 

# Modifying the code 

1. Features or key-words can be added easily in functions 
	1.1 initBank()
	1.2 initBody()
	1.3 initSubject()
2. More domain names can be added in 
	2.1 domainNames variable 
	Please note - domains should only have the main domain followed by .com etc. Sub-domains should be removed. 

# Instructions for using the extension to test: 

1. Restart Thunderbird 
2. Go to Tools -> Developer Tools -> Error Console -> Logging
3. Check the logs for the number of emails classified as shopping and non-shopping 
4. For further detail, add console.log statements in the code 

# Instructions for developing the extension:

1. Only the javascript files in the folder "thunderbird\content" should be edited or added. 
2. If es.js is used, nothing else needs to be done. 
3. If a new javascript is created, make sure it is included in "EcommerceEmail.xul" just the way es.js is included 
4. Create a zipped folder of the contents of thunderbird (and not thunderbird folder itself) 
5. Use a tool like 7-zip to rename the zipped folder to a ".xpi" extension 
6. Go to Thunderbird -> Tools -> Add Ons and remove the previous version. 
7. Go to Thunderbird -> Tools -> Add Ons and click on the setting icon.
8. Select the option " Install Add-On From File" and select the ".xpi" file which you had saved earlier. 
9. Restart thunderbird 
10. Go to Tools -> Developer Tools -> Error Console -> Logging
11. Check the logs for the emails which have been classified 
