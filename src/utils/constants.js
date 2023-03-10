
/*=============================================
=            React constants            =
=============================================*/

//urls
export const URL_BASE = process.env.REACT_APP_OMDB_API_BASE_URL;
export const KEY = process.env.REACT_APP_OMDB_API_KEY;

export const TYPES_LIST = ["movie", "series", "episode"];
export const yearsList = () => Array.from( Array(100),(e,i)=> 2022-i);

export const MOVIES_PER_PAGE = 10;

/*=====  End of React constants  ======*/


/*=============================================
=            Bash / Git             =
=============================================*/

export const FILE_TYPE_LIST = ['json', 'text', 'sh'];

export const FILE_NAMES = {
    json: "git_bash.json",
    ssh: "git_bash.sh",
    text: "git_bash.txt"
  };

export const REPO_URL = "https://github.com/tatjama/spartan";
export const LOCAL_FOLDER = "project"; 
export const BRANCH = "test";

export const  bash = ( repo, localFolder, branch ) => ` #!/bin/bash

# form repo_url to local
REPO_URL="${repo}"
LOCAL_FOLDER="${localFolder}"

# Clone the repository and go into
git clone $REPO_URL $LOCAL_FOLDER
cd $LOCAL_FOLDER

# Create a new branch from original branch 
# with '_test_' appended in name

CURRENT_BRANCH=$(git branch --show-current)
NEW_BRANCH="$CURRENT_BRANCH_${branch}_"
git checkout -b $NEW_BRANCH

echo "This is some content for the new file." > new_file.txt

# Add the new file to stage
git add new_file.txt

# Log the status
git status


cloneGit.sh
Displaying cloneGit.sh.
`
/*=====  End of Bash / Git   ======*/


/*=============================================
=            JavaScript algorithm            =
=============================================*/

//js
export const ARR = ["x:1", "y:2", "x:3", "a:15", "b:25", "b:3"];


/*=====  End of JavaScript algorithm  ======*/







