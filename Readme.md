# Folder structure
1. Backend -> controller folder, DB folder, modeles Folder, middleware folder
2. Frontend  -> Components


# Flow of project
-> user will come signup, after signup user will redirect to task tracker page where user can CRUD tasks
-> After session or token expire user will logout automatic for that user will sigin using same email and pass
-> current using localhost database compass MONGO_URL='mongodb://localhost:27017/tracker' this is url and /tracker database name
-> in that tracker database we have two models one for user and one for tasks
-> all business logic were written inside the controllers folder 