# ugoing_rn
A quick tutorial on how to get this running:

This project uses Expo and all its dependencies, so make sure you have Expo downloaded on your machine (follow a tutorial on expo.com to get expo-cli, the command line tool)

Once you git clone the repo and cd into it, run 'expo install' -- this will download all the project dependencies listed in the package.json file. Further, using 'expo install' over yarn or npm install will
make sure that you are using versions of the packages that are known to be compatible with everything else on the list!

Once you run expo install, then you'll want to run expo --start-web. With this, you'll be able to see the project in your browser. 

From there, right click and hit "inspect", and on the top toolbar on the right side you'll see a little tablet & mobile phone icon -- hit that, and on the left side select the dropdown for
what device viewport size you want to see. I choose iPhone X, so if anything looks styled weird it might be because you're using different dimensions.
