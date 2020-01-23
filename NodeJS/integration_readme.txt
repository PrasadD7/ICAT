Updated by Mihir on 23-1-2019, 05:30 am
1. All changes are in NodeJS folder. pull it from github
2. In NodeJS/ICAT_Mongo/mongo_server.bat, change the root from D:/ to where your repository is located, to set the db path.
3. start mongo server
4. npm install in NodeJS directory- to install dependancies
5. node index.js will initialize all modules and insert 2 records in a newly created questionsDB's questions collection.
6. Verify this by running NodeJS/ICAT_Mongo/mongo_client.bat and putting the commands
show dbs
use questionsDB
db.questions.find().pretty()
7. use the urls localhost:3000/questions/easy to verify get reqests.
8. Do similar for POST, referring to routes in ICAT\NodeJS\controllers\questionsController.js
9. Integrate with rest API
10. refer to ICAT\NodeJS\project_roadblocks_and_solutions and comments in code for further documetation.