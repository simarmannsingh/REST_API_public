# Dummy Rest API

## Introduction
This is a Dummy REST API created to display basic functionality. So a fictional Database entity is assumed (MongoDB micro-instance) which stores the details of different products that are sold by a fictinal store. Details like name, price, id etc form a group and hence are stored in one table.

This documentation assumes you've some sort of Linux distro e.g, Ubuntu, Kubuntu, Kali etc.
In case you use Windows, you can install Windows Subsystem for Linux (WSL) on Windows 10. And then, launch the WSL and you are ready to proceed to next section.

## Steps to test this API
You can download the project by opening the terminal and entering the following commands.

    mkdir restapi
    cd restapi
    git clone https://github.com/simarmannsingh/REST_API_public.git

This will download the code in the folder which we named 'restapi'. Next, go to that folder and open that folder in an IDE of your choice, e.g, Visual Studio Code. I personally prefer Visual Studio Code as it is open-source and free.

Before proceeding to next step, make sure you've some important packages/tools installed on your distro. For example, you would need Node to run the project and a REST API client like Postman or Guvercin to test the API.
To install the required packages, you can run the following commands in your terminal.
If you have snap installed (most probably yes), then skip the following two commands.

    sudo apt update
    sudo apt install snapd

Next you need to run the following command to install the packages using the snap we installed (if you didn't have it earlier).

    sudo snap install guvercin
    sudo snap install node --classic

You are all set to test the API.

Now, come back to the visual studio code and press CTRL+J to bring up the termial. You can also go to File-menu stuff, but using the mouse to first point to file-menus, then clicking... All this consumes so much human energy, I wouldn't recommend that.
Next, enter the following command to start the server

    Node server.js

The server should be running on port number 4300 if everything went fine, and you can test the API's using the REST API clients (either guvercin or postman, both are similar).

## Endpoints 
Using this dummy useless API, you can GET the details of products available by entering following GET requests

    localhost:4300/products/
    localhost:4300/products/<anyIDofYourChoice>
    localhost:4300/products/special   // This returns a special ID

    localhost:4300/orders
    localhost:4300/orders/<anyIDofYourChoice>

Similarly, you can use following POST requests

    localhost:4300/products/

But for the post request, you need to send some JSON object as well along with the request.
Following format of JSON data is supported.

    {
        "name": "<some name>",
        "price": <some integer>
    }

Please note the quotes, they are required for it to be considered JSON type object.

If anything is unclear, you can contact me anytime. I always respond within 24 hrs.
Also, Do visit my website https://simarmannsingh.de and if you like the stuff I write, feel free to subscribe as well.