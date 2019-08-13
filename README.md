VueApp

Project Api configuration information.

This Project has dependency on https://github.com/JayantSingh97/MicrosoftUnityDependencyInjectionApi So Please download Api From 
https://github.com/JayantSingh97/MicrosoftUnityDependencyInjectionApi and just need to run the api in 
Microsoft visual studio latest version.

This project is already configured with https://github.com/JayantSingh97/MicrosoftUnityDependencyInjectionApi APi.

If you are facing any compilation issue in your API then simply delete the (VS) File in https://github.com/JayantSingh97/MicrosoftUnityDependencyInjectionApi Directory and reload your project in MSVS.




Vue.js Project Configuartion information.

1- If you are facing any compilation issue then simply run the following command in your command prompt under your Vueapp directory.

npm i

After executing the 'npm i' simply build the application and retry.

Because for performance resion Github ignores the node_modules folder because it contains large amount of storage.

npm i command creates new node_modules and restores all the project dependency.

Make sure the Vue.js application should be using the same (# PORT NUMBER ) like http://yourApisubdomain.yourApimaindomain(or)yourportnumber on which your web api is running if  there will be any kind of mismatch in api (URL || URI) configuration then application many not work appropriately.

Or it may throw unexpectedlly 404 Not Found error because your website is trying to access the Api which does not exist.


Thank you.
