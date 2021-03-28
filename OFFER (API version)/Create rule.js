//execute API test
let resp = UI.httpPost("https://test-marketplace-app.pulseid.com/api/offer/ruleset", 
													{
														auth: {
															"username": "qa-automation1@pulseid.com",
															"password": "jXShj#$8ioS"
														},
														//request payload
														data:	{
																"discountType":"FIXED",
																"minimumTransactions":null,
																"minimumSpend":null,
																"percentageValue":0.5,
																"fixedValue":100,
																"maximumRewardValue":null,
																"name":"Get $100 Cashback",
																"segments":null
														},
														//response type
														responseType: "json"														
													}
												 )