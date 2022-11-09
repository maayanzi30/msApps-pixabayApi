msApps pixabay demo is a "Home task" built with Node.js, Express.js, React & Redux.

<b>Client side - main features:</b>

   <ul>
   <li>The user is presented with a multi-functional search bar. The user may search images using free text search box or he may switch to pre-defined categories selection.</li>
   <li>After the images are retrieved the user may browse with the "next" and "prev" buttons to see more images (up to 9 on every page)</li>
   <li>The user may also choose to sort by id, number of downloads or number of likes.</li>
   <li>The client side was developed using React, Redux, HTML and CSS</li>
   </ul>
   </br>
      
<b>Server side - main features:</b>

   <ul>
   <li>The server handles HTTPS requests to PixaBay API</li>
   <li>The client sends a search phrase that the server then sends to PixaBay API</li>
   <li>Once the results are back the server will return the first 9 images.</li>
   <li>"next"/"prev" clicks by the user will make the server return either the next 9 or previous 9 images (if applicable) - pagination</li>
   <li>Selecting a sort value will make the server sort the current images by the request property.</li>
   <li>If the user selects a category the client sends it as a regular search phrase</li>
   <li>The server was developed using Node.js and Express.js</li>
   </ul>

 </br>
 <b>Usage:</b>
 
Install Dependencies (frontend & backend)
<ul>
<li>cd server:

`npm install`

</li>
<li>cd frontend

`npm install`</li>

</ul>
</br>
<b>Running the project:</b>
<ul>
<li>Browse into the server and client folders (each should be opened in it's own terminal)
In the client folder the following command:

`npm run start`

</li>
<li>And in the server folder the following command:

`npm run dev`

</li>
</ul>
