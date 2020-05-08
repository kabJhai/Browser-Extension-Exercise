# Browser-Extension-Exercise

## The examples are going to contain:
<ol>
<li>Hello World</li>
<li>Browser Action</li>
<li>Page Action</li>
<li>Neither browser action or page action</li>
<li>Debug</li>
<li>Deploy</li>
</ol>

<h2>The file structure</h2>
<ol>
    <li>Manifest File<br/><p>It is a JSON formated file that gives a complete information about the extension.</p></li>
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
</ol>

<h2>Types of extension</h2>
<h3>Browser Action</h3>
<p>Is always available and is accessible on the tool bar of the browser.</p>
<li>Page Action</li>
<p>This also available on the tool bar. But the application of the extension is limitted to specific pages. Which are specified by the developer.</p>
<li>Neither browser action or page action</li>
<p>This run in the background to provide certain service to the user.</p>

<h2>How to load extensions</h2>
<p>To load the extensions go to chrome://extensions page and enable the developer mode.</p>
<p>Then, click on load unpacked extensions and select the folder you were working in.</p>
<h2>Chrome Storage</h2>
<p>Chrome storage is a memory in which we can store values to variables or objects.</p>

<h2>Background and Event Pages</h2>
<p>
Both of them run in the background. The main difference is that background pages run all the time and event pages run when they are trigered.
</p>
<p>In order to differentiate between background and event pages the persistent flags under the background property should be false for <em>event pages</em> and true for <em></em> for background pages</p>

<h2>Context Menu</h2>
<p>A menu that represents the functionality of the extension. What makes a popup menu is that it appears when a certain event occurs like a right click inside the browser after certain action happens.</p>

<h2> Badges</h2>
<p>
Badges are going to diplay an information on the extensions icon. This is good if the extension is listening to a service or executes an action based on some event.
</p>