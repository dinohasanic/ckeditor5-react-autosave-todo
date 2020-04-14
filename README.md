# CKEditor 5 custom build with features like Autosave and Todolist based on the BalloonBlockEditor with the React example

This is a custom CKEditor 5 balloon block build with features like autosave and todolist. Mostly used for a personal project, but feel free to use for your own React app.

Don't forget to import CKEditor from '@ckeditor/ckeditor5-react' if you are working with React.

To install into your project simply do:

```
npm install --save ckeditor5-autosave-todo
```

Here is an example with the included autosave config:

```
import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-autosave-todo';

const saveData = (data) => {
  // Implement your API calls here, save the data wherever you want it
  
  return new Promise(function(resolve, reject) {
    // do a thing, possibly async, then…

    /* if everything turned out fine */
    let itWorkedOut = true;

    if (itWorkedOut) {
      resolve("Stuff worked!");
    }
    else {
      reject(Error("It broke"));
    }
  });
}

const customConfiguration = {
  autosave: {
    save( editor ) {
      // The saveData() function must return a promise
      // which should be resolved when the data is successfully saved.
      return saveData( editor.getData() ).then(res => console.log(res)).catch(err => console.log(err));
  }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style={{ padding: 100 }}>
        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
          editor={Editor}
          data="<p>Tell your story...</p>"
          config={customConfiguration}
        />
      </div>
    );
  }
}

export default App;
```

Package includes following plugins:

```
Editor.builtinPlugins = [
	Autoformat,
	Bold,
	Italic,
	Heading,
	Link,
	List,
	Table,
	TableToolbar,
	Alignment,
	Autosave,
	TodoList,
	Underline,
	Essentials,
	Paragraph,
	BlockToolbar
];
```
