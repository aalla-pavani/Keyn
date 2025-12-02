1. Git Version & Configuration
git --version                                   # check Git version
git config --global user.name "Your Name"       # set global username
git config --global user.email "youremail@example.com"  # set global email
git config --list                               # list Git configuration

2. Repository Initialization
cd /path/to/your/project                        # navigate to project folder
git init                                        # initialize Git repository
git clone https://github.com/username/repo.git # clone existing remote repository

3. Remote Repository Management
git remote -v                                   # view connected remotes
git remote add origin https://github.com/username/repo.git  # add new remote
git remote remove origin                        # remove remote
git remote rename origin upstream              # rename remote
git remote set-url origin https://github.com/username/new-repo.git # change remote URL
git remote show origin                          # detailed info about remote

4. Staging & Committing
git status                                      # show status of working directory
git add filename.txt                             # stage a specific file
git add .                                       # stage all files
git commit -m "Commit message"                  # commit staged changes
git commit --amend -m "Corrected commit message" # amend previous commit message
git log --author="Your Name"    #This will show only the commits made by that author in the current branch

5. Branching & Switching
git branch                                      # list all local branches
git branch -a                                   # list all local + remote branches
git branch branch-name                           # create a new branch
git checkout branch-name                         # switch to an existing branch
git checkout -b new-branch                       # create & switch to a new branch
git branch -d branch-name                        # delete a merged branch
git branch -D branch-name                        # force-delete unmerged branch
git branch --merged                              # list branches merged into current
git branch -r                                    # list remote branches

6. Merging & Rebasing
git merge branch-name                            # merge branch into current
git fetch origin                                 # fetch updates from remote without merging
git fetch origin branch-name                     # fetch a specific remote branch
git pull origin main                             # pull remote changes & merge into local
git push origin main                             # push commits to remote
git push --set-upstream origin branch-name      # push first time and set upstream
git rebase origin/main                            # rebase local branch onto remote branch
git remote prune origin                          # remove deleted remote branches locally

7. Undoing Changes
git restore filename                             # undo changes in file before staging
git reset filename                               # remove file from staging
git reset --hard                                 # reset staging area & working directory to last commit
git revert <commit>                              # undo a commit by creating a new commit

8. Viewing History & Differences
git log                                         # view full commit history
git log --oneline                               # concise commit history
git diff                                        # view unstaged changes
git show <commit>                               # show details of a specific commit
git blame script.py                             # see who last changed each line in a file

9. .gitignore
touch .gitignore                                # create gitignore file
# Example rules inside .gitignore:
*.log                                           # ignore all .log files
node_modules/                                   # ignore node_modules folder
secret_file.txt                                 # ignore a specific file
temp/                                           # ignore temp folder
folder/*                                        # ignore all files in a folder
!folder/important_file.txt                      # except important_file.txt
*.bak                                           # ignore backup files

10. Stashing
git stash                                       # save uncommitted changes temporarily
git stash apply                                 # apply stashed changes

11. Recovering Deleted Branches
git reflog                                      # view all recent commits
git checkout -b feature-ui <commit_hash>       # recover deleted branch

12. Handling Sensitive Files
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch secrets.txt" --prune-empty --tag-name-filter cat -- --all

13. Merge Conflict Resolution
# After conflict in file (e.g., app.js)
# 1. Manually edit file to resolve conflicts
git add app.js                                  # stage resolved file
git commit                                      # commit merge

14. Deleting Multiple Branches
git branch -d branch1 branch2 branch3          # delete multiple merged branches
git branch -D branch1 branch2 branch3          # force-delete multiple unmerged branches
--------------------------------------------------------------------------------------------
git remote -v                # List all remotes and their URLs
git remote set-url origin https://github.com/aalla-pavani/prcject.git   # Update remote URL
git remote remove origin     # Remove the current "origin" remote
git remote add origin https://github.com/aalla-pavani/prcject.git       # Add new origin
--------------------------
git config http.postBuffer 524288000
--------------------------
git fetch origin
git diff main origin/main   #Check the differences between your local branch and remote main branch.
--------------------------
Patch File (adding a patch file)
git diff > bugfix.patch
git apply bugfix.patch
-----------------------------
Q IV. Docker Containerization [20 Marks]

Check Docker Version & Images (2M)
docker --version
docker images

Run Hello-World (2M)
docker run hello-world

Run Python Image Interactive (2M)
docker run -it python:3.11 bash (if not working use docker pull python:3.11 and then run docker run -it python:3.11 bash)

**in target floder->create dockerfile**
Dockerfile (3M)
FROM tomcat:9.0
COPY target/OnlineBanking.war /usr/local/tomcat/webapps/
EXPOSE 8080

Build & Run Image (2M)
docker build -t smarthub-image .
docker run -d -p 8080:8080 smarthub-image

List Containers (2M)
docker ps -a

Start & Stop (2M)
docker stop <id>
docker start <id>

Push Image to Docker Hub (3M)
docker tag smarthub-image your-dockerhub/smarthub-image
docker push your-dockerhub/smarthub-image

Logs of Container (2M)
docker logs <container_id>
-----------------------------
**in target->dockercompose.yml**
**#Docker Compose**

version: "3.8"
services:
  tomcat:
    image: your-dockerhub/smarthub-image
    ports:
      - "8080:8080"
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: sah_db
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:

docker-compose up -d #to run 
docker exec -it <db_container> mysql -uroot -p  #Enter MySQL container & add table 
CREATE TABLE students(id INT PRIMARY KEY, name VARCHAR(100));
------------------------------
**cli commands with redis**
docker build -t my-redis .
docker pull redis 
docker run --name my-redis -d redis 
docker ps # Shows a list of containers that are running right now.
docker exec -it my-redis redis-cli  #to access it 
 SET name "Alice"
 GET name 
 docker stop my-redis 
 docker start my-redis
 docker rm my-redis 
------------------
creating a docker file
->Create a folder like C:\DockerProjects\Redis. 
-> Open Git Bash and navigate to the folder
->cd /c/DockerProjects/Redis
->Inside the folder, create a file named Dockerfile (nano Dockerfile) and add the below one
FROM redis:latest 
CMD ["redis-server"] 
->docker build -t redisnew  . 
-> docker run --name myredisnew -d redisnew
->docker ps
->docker stop myredisnew 
->docker login 
-> docker ps -a
-> docker commit 856ae4657fa9 snehal1729/redis1 
-> docker images 
-> docker push snehal1729/redis1 
-> docker rm 856ae4657fa9
->docker rmi budarajumadhurika/redis1 #deletes 
-> docker ps -a
-> docker logout 
->docker pull snehal1729/redis1 
-> docker run --name myredis -d snehal1729/redis1 
->docker exec -it myredis redis-cli 
-> SET name "Abcdef"
-> GET name
->exit 
-> docker ps -a 
->docker stop myredis 
->docker rm 50a6e4a9c326
-> docker images
-> docker rmi snehal1729/redis1 (your repo name)

----------------------------------
FOR YML FILE
create a dompose file in pc and open in cmd
  ->docker-compose up -d
  ->docker compose down
  ->docker-compose up --scale wordpress=2 -d
  ->docker-compose up -d
  ->docker compose ps
  
  version: "3.9"
services:
  db:
    image: postgres:latest
    container_name: postgres-db
    environment:
      POSTGRES_USER: demo
      POSTGRES_PASSWORD: demo
      POSTGRES_DB: demo_db
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - app-net
    ports:
      - "9090:4060"

  redis:
    image: redis:alpine
    container_name: redis-server
    networks:
      - app-net

networks:
  app-net:

volumes:
  db-data:
->docker compose up -d
