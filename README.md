# Min Project_AIBasedChatBot To answer FAQs
1st step is to  set up Env:

pip install tensorflow \
pip install keras \
pip install pickle\
pip install nltk\
pip install flask\

then extract zip file..\
1.data.json – The data file which has predefined patterns and responses.\
2.trainning.py – In this Python file, we wrote a script to build the model and train our chatbot.\
3.Texts.pkl – This is a pickle file in which we store the words Python object using Nltk that contains a list of our vocabulary.\
4.Labels.pkl – The classes pickle file contains the list of categories(Labels).\
5.model.h5 – This is the trained model that contains information about the model and has weights of the neurons.\
6.app.py – This is the flask Python script in which we implemented web-based GUI for our chatbot. Users can easily interact with the bot.\
        
        Tutorial
Here are the 5 steps to create a chatbot in Flask from scratch:\
<br/>
1.Import and load the data file\
2.Preprocess data\
3.split the data into training and test\
4.Build the ANN model using keras\
5.Predict the outcomes\
6.Deploy the model in the Flask app\

The dataset we will be using is ‘data.json’. \
This is a JSON file that contains the patterns we need to find and the responses we want to return to the user.\

Example:\
{"intents": [
        {"tag": "greeting",
         "patterns": ["Hi there", "How are you", "Is anyone there?","Hey","Hola", "Hello", "Good day"],
         "responses": ["Hello, thanks for asking", "Good to see you again", "Hi there, how can I help?"],
         "context": [""]
        },
      ]
    };
    
 \   
1.Import and load the data file:\
First, make a file name as trainning.py. We import the necessary packages for our chatbot and initialize the variables we will use in our Python project.
The data file is in JSON format so we used the json package to parse the JSON file into Python. This is how our data.json file looks like.

2. Preprocess data\
When working with text data, we need to perform various preprocessing on the data before design an ANN model. Tokenizing is the most basic and first thing you can do on text data. Tokenizing is the process of breaking the whole text into small parts like words.

3.Create training and testing data\
Now, we will create the training data in which we will provide the input and the output. Our input will be the pattern and output will be the class our input pattern belongs to. But the computer doesn’t understand text so we will convert text into numbers.

4.Build the model\

We have our training data ready, now we will build a deep neural network that has 3 layers. We use the Keras sequential API for this. After training the model for 200 epochs, we achieved 100% accuracy on our model. Let us save the model as ‘model.h5’.


5.Predict the response (Flask web-based GUI)\

Now to predict the sentences and get a response from the user to let us create a new file ‘app.py’using flask web-based framework.

Note:: for making flask app we need to make to folders name as static and templates and app.py files.

static folder contains a subfolder with name styles. The styles folder contain css file with the name style.css\
Templates folder HTML file with the name of index.html\
app.py file for run the flask app using IDE.
static/styles/style.css
now it done 
thank you :)\




