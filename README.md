# flickr-imgs
### This is a coding challenge solution which invlolves write a simple web application that reads data from Flickr's public feeds and displays the images on the page to the user. I was required to check the Flickr API documentation from the following URL:
<ul>
	<li><a href="https://www.flickr.com/services/feeds/" target="_new">Flickr</a></li>
	<li><a href="https://api.flickr.com/services/feeds/photos_public.gne" target="_new">Public feed</a></li>
</ul>

### This project uses a Test Driven Development approached, which means test will be written first, before and code for the solution.

### Initial Steps Taken:
<ul>
	<li>1) Logged into your GitHub Account and create a new repository called flickr-imgs which will house both the frontend and the backend of the solution. </li>
	<li>2) On your local drive, create a project folder for your local Git Repository. To do so, run the command "mkdir flickr-imgs". </li>
	<li>3) Next, run the command "git init flickr-imgs" to initiate your local Git Repository.</li>
	<li>4) Run the command "git remote add origin git@github.com:[your_github_username]/flickr-imgs.git"</li>
	<li>5) Pull the contents of the remote repository to retrieve the most recent version of the repo by running the command "git pull origin master"</li>
</ul>

### For the Front

### Steps For Creating the Frontend:
<ul>
	<li>1) While in the root folder of the local Git Repository, create vue project for the frontend using the following command "vue create flickr-imgs-frontend". Use the 'arrow down' and 'arrow up' keys to choose an option and press "Space" to select the options. Ensure you select options as follows:
		<ul>
			<li> Select the option "Manually select features". Press "Enter". </li>
			<li> Leave Babell selected </li>
			<li> Leave Babell selected </li>
			<li> Deselect Linter /Formater </li>
			<li> Select Unit Testing </li>
			<li> Select E2E Testing. Press Enter.</li>
			<li>In the next interface, Choose Vue version 3.x. Press Enter</li>
			<li>In the next interface, Choose Jest. Press Enter</li>
			<li>In the next interface, Choose Jest. Press Enter</li>
			<li>In the next interface, Choose Cypress. Press Enter</li>
			<li>In the next interface, Choose In package.json. Press Enter</li>
			<li>In the next interface, Type N. Press Enter</li>
		</ul>
		<p>The project will be created for you.</p>
	</li>
	<li>2) I navigated to the newly created vue project folder using the command "cd flickr-imgs-frontend"</li>
</ul>

### Steps Taken For the Backend:
<ul>
	<li>1) While in the root folder of my local Git Repository, create the Node.js project for the backend using the following command "npx express-generator --no-view flickr-imgs-frontend".</li>
	<li>2) Navigate to the newly created vue project folder using the command "cd flickr-imgs-backend"</li>
	<li>3) Install dependencies by running the following command: "npm install"</li>
	<li>4) Install dev dependencies, together with JEST and SuperTest (which shall be used for testing, considering, we are using a Test Driven Development approach) by running the following command: "npm install jest supertest"</li>
	<li>5) If you are using VS Code as your editor (which I recommend, by the way), open it by running the following command: "code .", and open the "package.json" file. If you are using another editor, navigate to the project folder and open the "package.json" file.</li>
	<li>6) Look for the line which reads <i>"start": "node ./bin/www"</i>, add a comma (,) at the end of the line, press "Enter" to start a new line where you should include the following code <i>"test": "jest --watchAll"</i>. Save the file."</li>
	<li>Type "npm test" in the terminal and press Enter.</li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
	<li></li>
</ul>