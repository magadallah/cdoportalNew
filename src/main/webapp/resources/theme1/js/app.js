if (window.PaymentRequest){


	const supportedPaymentMethods = 
		[
			{
				supportedMethods: ['basic-card']
			}

		];


	const paymentDetails = {

		total:{
			label:'Total Cost',
			amount:{
				currency:'GBP',
				value:30
			}
		}
	}

	//const options={}

/*	const paymentRequest = new PaymentRequest(
		supportedPaymentMethods,paymentDetails,options

		);
*/
	paymentRequest.show();





}
else{


}