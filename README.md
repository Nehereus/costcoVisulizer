# CostcoVisualizer
Pretty much as the name suggests, this is a tiny hobby project to have a view on my spent at Costco. 

## how to use 
### receiptDownloader.js
The script is copied from this [Github gist](https://gist.github.com/dlh3/7e18fec42cc7c43d51e93a6d2bcac6fb) (big thanks to the original author @dlh3 for sharing this). \
~~To use it, copy everything from the js script to the browser's developer console and press enter. If everything works correctly, all receipts for the past two years should be stored at the variable ```receiptsJson```. To export it, I use ```JSON.stringify(receiptsJson)``` and copy the output of the console and paste it to a json file. In my case, the stringified JSON copied from Safari can be directly parsed by Python's ```json.loads``` function as there are some unnecessary slashes added to the json to escape the quotes. You'll need to get rid of them before inputting it to the Python notebook.~~ \
**The script may  now automatically automatically download the receipts**
1. make sure you have ```node.js``` and ```dotenv``` package installed, and set the ```NODE_PATH``` variable at the ipynb file to ```node.js```'s path. 
2. Create an empty ```.env``` file in the same directory as the js file and add the following line to it:
```
ID_TOKEN=<copy the id_token from the browser's developer console => localStorage of a logined costco website => idToken>
CLIENT_ID=<copy the client_id from the browser's developer console => localStorage of a logined costco website => clientID>
```
3. continue to the next step.


### visualizer.ipynb
This is the notebook used for all the data analysis works. Assuming you have everything mentioned in the previous section setup, after running the first two cells, the receipts directory should now contain a file named after today's data which contains all the receipts from the past two years. Continue to run the rest of the cells will parse the receipts into a few CSV files you need.

## what you'll get
Presumably, you will three CSV files, cost_per_month.csv which lists how much money you spent at costco for a given month; items_bought.csv, listing your accumulative spending on a specific items and the number of the items you bought (lbs/units); price_history.csv shows the unit price for a given item over all the input receipts after discounting. 

## known limitation
The notebook does not handle duplicating receipts properly. i.e. if you export your receipts for multiple times containing duplicating items, The output will duplicate the cost and purchase history. 