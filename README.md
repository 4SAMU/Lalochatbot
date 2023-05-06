# Lalochatbot

```shell
npm install lalochatbot_js
```

```shell
yarn add lalochatbot_js
```

## usage

in the the page u want to show the chatplugin

# example

```js
// chatplugin inside App.js

import { useState } from "react";
import "./App.css";
import { SiLivechat } from "react-icons/si";
import ChatApp from "lalochatbot_js";

function App() {
  const [showEntry, setShowEntry] = useState(false);

  const toggleChatApp = () => {
    setShowEntry(!showEntry);
  };

  return (
    <div className="App">
      <SiLivechat className="home-icon" onClick={toggleChatApp} />
      {showEntry && <ChatApp closeApp={toggleChatApp} />}
    </div>
  );
}

export default App;
```

### CSS for the SiLivechat `home-icon`

```css
.home-icon {
  background-color: #199589;
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1%;
  margin: 0 1.5% 0.8% 0;
  height: 20px;
  width: 20px;
  border-radius: 5px;
  cursor: pointer;
}
```

### Issues & Fixing

if You experience an issue like this:

```js
Could not find a declaration file for module 'lalochatbot_js'. '...../node_modules/lalochatbot_js/lib/index.js' implicitly has an 'any' type.
Try `npm i --save-dev @types/lalochatbot_js` if it exists or add a new declaration (.d.ts) file containing `declare module 'lalochatbot_js';`
```

simply create a declaration file for the module in the root of your project named **`lalochatbot_js.d.ts`** and add this line:

```js
declare module 'lalochatbot_js';
```

hurray! is solved 🥳🥳🥳
# NOTE: _this is for Js apps_

## Installation

```shell
npm install lalochatbot_js
```

```shell
yarn add lalochatbot_js
```

## usage

in the the page u want to show the chatplugin

# example

```js
// chatplugin inside App.js

import { useState } from "react";
import "./App.css";
import { SiLivechat } from "react-icons/si";
import ChatApp from "lalochatbot_js";

function App() {
  const [showEntry, setShowEntry] = useState(false);

  const toggleChatApp = () => {
    setShowEntry(!showEntry);
  };

  return (
    <div className="App">
      <SiLivechat className="home-icon" onClick={toggleChatApp} />
      {showEntry && <ChatApp closeApp={toggleChatApp} />}
    </div>
  );
}

export default App;
```

### CSS for the SiLivechat `home-icon`

```css
.home-icon {
  background-color: #199589;
  color: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1%;
  margin: 0 1.5% 0.8% 0;
  height: 20px;
  width: 20px;
  border-radius: 5px;
  cursor: pointer;
}
```
