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
Patch File (adding a patch file)
git diff > bugfix.patch
git apply bugfix.patch
