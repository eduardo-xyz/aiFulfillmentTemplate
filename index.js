// Copyright 2017, GDG Pura Vida, Google Developers.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const ApiAiApp = require('actions-on-google').ApiAiApp;

exports.aiFulfillmentTemplate = (req, res) => {
  const app = new ApiAiApp({request: req, response: res});

  function tellHistory(app){
    console.log('tellHistory');
    let parameter = app.getArgument('super-hero');
    app.tell('A history about '+ parameter);
    return;
  }

  function tellIdentity(app){
    console.log('tellIdentity');
    let parameter = app.getArgument('super-hero');
    app.tell(parameter +'\'s identity is...');
    return;
  }

  let actionMap = new Map();
  actionMap.set('tell.history', tellHistory);
  actionMap.set('tell.identity', tellIdentity);

  app.handleRequest(actionMap);
}
