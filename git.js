//! git  -> vcs
//! gitHub / gitlab / bitbucket

//* repository [ code + .git]
//? local repo ->
//? remote repo

//! config
//* git config --global --list
//* git config --global user.name  "<name>"
//* git config --global user.email  "<email>"
//* git config --global  init.defaultbranch main
//* git config --global pull.rebase false

//! initialize empty local repo
//* git init

//? working flow
//! working directory      ->  staging area         -> local repo [version]            -> remote repo
//    change                   ready state                commit/version
//todo:                         git add                   git commit                     git push

//
//!
//* git status  -> U , A , M
//* git add <file_path>
//* git add .  -> staged all changes
//* git commit -m "<commit_message>"

//* git log ->
//* git log --oneline
//* git log main..array

//! push to remote repo
//* git push origin <branch_name>

//! remote
//* git remote -v
//* git remote add origin https://github.com/saagar7200/team_18_git.git
//* git remote remove origin

//! branching
//* git branch  -> list local branch
//* git branch <branch_name>  : git branch test
//* git switch <branch_name>

//! merge
//* git merge <branch_name>

//! diff
//* git  diff array..main
//* git  diff --name-only array..main
